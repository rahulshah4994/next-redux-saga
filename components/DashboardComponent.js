import { useSelector} from 'react-redux';
import BlogPostListing from './BlogPostListing';
import UserHeader from './UserHeader';

function DashboardComponent () {
    const {blogPosts}= useSelector(state => {
        console.log(state);
        return state;
    })

    return(
        <div style={{background: '#E5E5E5'}}>
            <UserHeader />
            <hr className="my-2" ></hr>
            {blogPosts.map( (blogPost, index) => {
                return <BlogPostListing key={blogPost.title} post={blogPost} index={index+1}/>
            })}
        </div>
    )
}

export default DashboardComponent;