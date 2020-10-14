import TypeForm from '../../components/TypeForm';
import {wrapper} from '../../store';

export default function EventLanding (props) {
    return (
        <div style={{padding: '2rem auto 0', textAlign: 'center'}}>
            <h2>{props.event}</h2>
            <TypeForm event={props.event}/>
        </div>
    )
}

export async function getServerSideProps ({params}) {
    const {event} = params;
    return {
        props: {
            event
        }
    }
}

// export const getStaticProps = wrapper.getStaticProps (async ({ params }) => {
//     const event = params.event;
//     return {
//         props: {
//             event
//         }
//     }
// })

// export async function getStaticPaths () {
//     const eventsList = ['GraphQL Summit 2020', '2020 OHDSI SYMPOSIUM', '2020 Computational Data Neuroscience Symposium', 'SHDA Mitral Valve Symposium']
//     const paths = eventsList;
//     return {
//         paths,
//         fallback: false
//     }
// }