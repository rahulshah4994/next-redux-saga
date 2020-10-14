import {END } from 'redux-saga';
import {wrapper } from '../store';
import {fetchBlogData} from '../actions';
import DashboardComponent from '../components/DashboardComponent';
import {LinkedInPopUp} from 'react-linkedin-login-oauth2';

function Dashboard () {
    return (
        <div>
            <LinkedInPopUp />
            <DashboardComponent />
        </div>
    )
}

export default Dashboard;

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
    if(!store.getState().blogPosts){
        store.dispatch(fetchBlogData());
        store.dispatch(END);
    }

    await store.sagaTask.toPromise();
})
