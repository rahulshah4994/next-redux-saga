import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';
import {FormGroup, Form, Label, Input, Button, Container, Col, Card, Row} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogData, setField, setUserData } from '../actions';
import { attemptLogin } from '../actions';
import UserHeader from '../components/UserHeader';
import {LinkedIn } from 'react-linkedin-login-oauth2';
import { useEffect, useState } from 'react';
const request = require('superagent');


export default function Login () {
    const {email, password, userData} = useSelector(state => state);
    const dispatch = useDispatch();
    const router = useRouter();
    const [code, setCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    const setFieldInput = (e) => {
        const field = e.target.id;
        const value = e.target.value;
        dispatch(setField(field, value));
    }

    const responseGoogle = (response) => {
        const profile = response.profileObj;
        const {name, imageUrl } = profile;
        console.log(profile, name, imageUrl);
        dispatch(setUserData({
            auth_token: profile.googleId,
            full_name: name
        }));
        dispatch(fetchBlogData())
    }


    function Login (e) {
        e.preventDefault();

        dispatch(attemptLogin(email, password));
    }

    const handleSuccess = async (data) => {
        console.log(data);
        setCode(data.code);
        console.log("LinkedIn AccessToken sending")
        requestAccessToken(code,data.state)
        .then((response) => {
            requestProfile(response.body.access_token)
            .then(response => {
                console.log(response.body)
            // res.render('callback', { profile: response.body});
            })
        })
        .catch((error) => {
            console.error(error)
        })
        console.log("LinkedIn AccessToken request complete")
      }

      function requestAccessToken(code,state) {
        return request.post('https://www.linkedin.com/oauth/v2/accessToken')
          .send('grant_type=authorization_code')
          .send(`redirect_uri=http://localhost:3000/dashboard`)
          .send(`client_id=78jkfe35r5evxc`)
          .send(`client_secret=we67HuHoHLUDLzxG`)
          .send(`code=${code}`)
          .send(`state=${state}`)
      }

      function requestProfile(token) {
        return request.get('https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))')
        .set('Authorization', `Bearer ${token}`)
      }

    const handleFailure = (error) => {
        setErrorMessage(error.errorMessage)
      }


    console.log("userData: ", userData)
    return (
        <div>
        <Container>
            {(userData.auth_token) && <UserHeader />}
            <Row style={{height: '100px'}} />
            <Row>
                <Col md={{size: 6, offset: 3}}>
                    <Card style={{boxShadow: '5px 10px 10px #c5c5c5', padding: '20px', borderRadius: '10px'}}>
                        <Form onSubmit = {Login}>
                            <h1 style={{textAlign: 'center'}}>Login</h1>
                            <hr />
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" id="email" placeholder="example@company.com" onChange={setFieldInput} value={email}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" id="password" placeholder="Password" onChange={setFieldInput} value={password} />
                            </FormGroup>
                            <div className="g-signin2"></div>
                            <Button>Submit</Button>
                            <GoogleLogin
                                clientId="307908360556-7mtai6v0bnb7t0evhgv7opd6sru0ck4i.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={false}
                            />
                            <LinkedIn
                                clientId="78jkfe35r5evxc"
                                onFailure={handleFailure}
                                onSuccess={handleSuccess}
                                redirectUri="http://localhost:3000/dashboard"
                            >
                                    LinkedIn
                            </LinkedIn>
                        </Form>
                        {!code && <div>No code</div>}
                        {code && <div>Code: {code}</div>}
                        {errorMessage && <div>{errorMessage}</div>}
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>

    )
}




// function linkedInLogin () {
//     // window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78jkfe35r5evxc&scope=r_liteprofile%20r_emailaddress&redirect_uri=http://localhost:3000/dashboard';
//     http.get('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78jkfe35r5evxc&scope=r_liteprofile%20r_emailaddress&redirect_uri=http://localhost:3000/dashboard', (res)=> {
//         console.log(res)
//     })
//     // axios({
//     //     url: 'https://cors-anywhere.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78jkfe35r5evxc&scope=r_liteprofile%20r_emailaddress&redirect_uri=http://localhost:3000/dashboard',
//     //     method: 'GET',
//     //     config:{
//     //         headers: {
//     //             origin: 'http://localhost:3000'
//     //         }
//     //     }
//     // }).then(res => {
//     //     console.log(res)
//     // })
// }

    // async function Login (e) {
    //     e.preventDefault();

    //     try {
    //     const userData = await loginApi(email, password)
    //     console.log(userData)
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     dispatch(setUserData(userData));
    // }


    // useEffect(()=> {
    //     console.log('Loading')
    //     window.gapi.load('auth2', () => {
    //         window.gapi.auth2.init({
    //             client_id: clientID
    //         })
    //     })
    //     console.log('GApi Initiated')
    // },[])
    // async function verify() {
    //     const ticket = await client.verifyIdToken({
    //         idToken: token,
    //         audience: clientID,  // Specify the CLIENT_ID of the app that accesses the backend
    //         // Or, if multiple clients access the backend:
    //         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    //     });
    //     const payload = ticket.getPayload();
    //     const userid = payload['sub'];
    //     // If request specified a G Suite domain:
    //     // const domain = payload['hd'];
    //   }
    //   verify().catch(console.error);
