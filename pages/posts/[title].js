import {Col, Container, Row, Card} from 'reactstrap';
import {useSelector} from 'react-redux';
// import {useRouter} from 'next/router';
// import { fetchBlogApi } from '../../apis/helperApi';
import UserHeader from '../../components/UserHeader';
// import { useState, useEffect } from 'react';

export default function BlogPost (props) {
    const blogPosts = useSelector(state => state.blogPosts);
    // const router = useRouter();
    const blogPost = blogPosts.find(blogPost => blogPost.title === props.blogPostTitle )
    

    return (
            <div style={{background: '#e5e5e5'}}>
                <UserHeader />
                <hr />
                <Container>
                    <Row>
                        <Col md={{size: 6, offset: 3}}>
                            <Card style={{boxShadow: '5px 10px 10px #c5c5c5', padding: '20px', margin:'20px', borderRadius: '10px'}}>
                                <h1>{blogPost.title}</h1>
                                <p>{blogPost.body}</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export async function getServerSideProps ({params}) {
    const blogPostTitle = params.title;
    return {
        props: {
            blogPostTitle
        }
    }
}
    
// export async function getServerSideProps ({ params }) {
//     const {data: blogPosts} = await fetchBlogApi();
//     const blogPost = blogPosts.find(blogPost => blogPost.title === params.title)
    
//     return {
//         props: {
//             blogPost
//         }
//     }
// }

// export const getStaticProps = wrapper.getStaticProps (async ({ store, params }) => {
//     const blogPosts = store.getState().blogPosts;
//     const blogPost = blogPosts.find(blogPost => blogPost.title === params.title)
//     return {
//         props: {
//             blogPost
//         }
//     }
// }) 

// export async function getStaticPaths () {
//     const {data: blogPosts} = await fetchBlogApi();
//     const paths = blogPosts.map(blogPost => blogPost.title);
//     console.log
//     return {
//         paths, 
//         fallback: false
//     }
// }

// export const getStaticPaths = wrapper.getStaticPaths (async ({ store }) => {
//     const blogPosts = store.getState().blogPosts;
//     const paths = blogPosts.map(blogPost => blogPost.title);    
//     return {
//         paths,
//         fallback: false
//     }
// }) 

// export async function getStaticPaths (){
//     const blogPosts = useSelector(state => state.blogPosts);
//     const paths = blogPosts.map(blogPost => blogPost.title);    
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps ( {params} ) {
//     const blogPosts  = useSelector(state => state.blogPosts);
//     const blogPost = blogPosts.find(blogPost => blogPost.title === params.title)
//     return {
//         props: {
//             blogPost
//         }
//     }
// }

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//     if(!store.getState().blogPosts){
//         store.dispatch(fetchBlogData());
//         store.dispatch(END);
//     }

//     await store.sagaTask.toPromise();
// })
