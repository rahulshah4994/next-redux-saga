import axios from 'axios'

const helperApi = ( type, url, data = null) => {
    return axios({
        method: type,
        url,
        data
    })
}

export default helperApi;

export const loginApi = (username, password) => {
    // console.log("Inside Api", username, password)
    const data = {
        username,
        password, 
        type: 'normal'
    }
    return helperApi('POST','https://api.taiga.io/api/v1/auth', data)
}

export const linkedInApi = () => {
    return helperApi('GET', 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78jkfe35r5evxc&scope=r_liteprofile%20r_emailaddress&redirect_uri=http://localhost:3000/dashboard');
}

export const fetchBlogApi = () => (
    helperApi('GET', 'https://jsonplaceholder.typicode.com/posts')
)