import { useDispatch, useSelector } from 'react-redux';
import {Jumbotron, Button, Container, Col} from 'reactstrap';
import {useRouter} from 'next/router';
import { setUserData } from '../actions';

export default function UserHeader () {
    const userData = useSelector(state => state.userData);
    const router = useRouter();
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(setUserData({}));
        router.push('/');
    }


    return (
        <Jumbotron style={{background: '#E5E5E5'}}>
            <h1 className="display-3">Hello, {userData.full_name}!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <Container style={{margin: '0px', padding: '0px'}}>
                <Col xs={{size: 6}} md={{size: 4, offset: 0}} style={{padding: '0px'}}>
                    <div className="lead" style={{display:"flex", justifyContent: "space-between"}}>
                        <Button color="primary" onClick={() => router.push('/dashboard')}> Blog Posts</Button>
                        <Button color="primary" onClick={signOut}> Sign Out</Button>
                        <Button color="primary" onClick={() => router.push('/event-discovery')}> Events</Button>
                    </div>
                </Col>
            </Container>
        </Jumbotron>
    )
}