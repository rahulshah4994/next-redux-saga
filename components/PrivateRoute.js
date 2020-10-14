import Router from 'next/router';
import { useSelector } from 'react-redux';

export default function PrivateRoute (props) {
  const userData = useSelector(state=> state.userData);
  const Component = props.Component;
  
  if(!userData.auth_token) {
    Router.push('/login');
  }
  
  return (
    <div>
      <Component />
    </div>
  )
}