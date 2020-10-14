import {Card, CardBody, CardTitle} from 'reactstrap';
import Link from 'next/link';

export default function EventDiscovery () {
    const eventsList = ['GraphQL Summit 2020', '2020 OHDSI SYMPOSIUM', '2020 Computational Data Neuroscience Symposium', 'SHDA Mitral Valve Symposium'];
    return (
        <div>
            {eventsList.map((event, index) => (
                <Card key={index} style={{width: '700px',  height:'100px', boxShadow: '5px 10px 10px #c5c5c5', margin: '20px auto', border:'none', display: 'block', verticalAlign:'middle'}}>
                    <CardBody style={{verticalAlign:'middle', textAlign: 'center' }}>
                        <CardTitle>
                            <h3>{index+1}</h3>
                            <Link href={`/events/${event}`}>
                                <a style={{color:'#010f26'}}>{event}</a>
                            </Link>
                        </CardTitle>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}