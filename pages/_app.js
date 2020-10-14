import { wrapper } from '../store';
import {useEffect, useState} from 'react';
import Router from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import {useSelector} from 'react-redux';

function App({ Component, pageProps}) {
  // const Loading = () => <h1>Loading...</h1>
  // const [ComponentToRender, setComponentToRender] = useState(<Loading></Loading>)

  // const {userData} = useSelector(state => state);
  // // console.log(state, new Date())
 
  // useEffect(() => {
  //   const path = Router.pathname;
  //   const restricted = (typeof userData.auth_token == 'undefined') && (path.startsWith("/dashboard"));
  //   console.log("Condition to not render: ", (typeof userData.auth_token == 'undefined') && (path.startsWith("/dashboard")));
    
  //   if(restricted){
  //     Router.push('/')
  //   } else {
  //     setComponentToRender(<Component {...pageProps} />);
  //   }
  // },[Component])
  
  // return null;
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App)

// import {React, useContext} from 'react'
// import Home from "index.js";
// import { useRouter } from "next/router";
// import { AppState } from "components/app-state"; 

// function MyApp({ Component, pageProps }) {
//     const appState = useContext(AppState);
//     const user = appState.user;
//     const role = user.role;
//     let allowed = true;
//     const router = useRouter();
//     if (router.pathname.startsWith("/employee") && role !== "employee") {
//       allowed = false;
//     }
//     if (router.pathname.startsWith("/customer") && role !== "customer") {
//       allowed = false;
//     }
//     const ComponentToRender = allowed ? Component : Home; 
//     return <ComponentToRender {...pageProps} />
// }

// export default MyApp