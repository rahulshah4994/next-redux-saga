import Link from 'next/link';
import {Card, CardBody, CardTitle, CardDeck} from 'reactstrap';
import titleCase from './titleCase';

export default function BlogPostListing ( props )  {
    const post = props.post

    return(
        <Card style={{width: '300px',  height:'200px', boxShadow: '5px 10px 10px #c5c5c5', margin: '10px', border:'none', display: 'inline-block', verticalAlign:'middle'}}>
            <CardBody style={{verticalAlign:'middle', textAlign: 'center' }}>
                <CardTitle>
                    <h1>{props.index}</h1>
                        <Link href={`/posts/${post.title}`}>
                            <a style={{color:'#010f26'}}>{titleCase(post.title)}</a>
                        </Link>
                </CardTitle>
            </CardBody>
        </Card>
    )
}