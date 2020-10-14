import * as typeformEmbed from '@typeform/embed';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// TypeForm Details: 
// Client Secret: 3wggJPjaNL9ij3W7CKmHAMZGEMYx6CM9Vp2MmUpmyxgj;
// Client ID: 3vCVR1uWFR6iNPRpJuaiqrUWVgZooB25GGWtouUozCxn;
export default function TypeForm (props) {
    const { event } = props;
    const { email, userData} = useSelector(state => state);
    let userDataString, nameHiddenField,  emailHiddenField;

    const submitForm = () => {
        console.log("Submitted type form")
    }

    useEffect(()=> {
        nameHiddenField = userData.full_name ? `name=${userData.full_name}` : null;
        emailHiddenField =   email ? `email=${email}` : null;
        userDataString = `${nameHiddenField}&${emailHiddenField}`;
        const typeFormElement = document.getElementById('type-form')
        // typeformEmbed.makeWidget(typeFormElement,`https://rahulshah265555.typeform.com/to/wttsOY8T?${userDataString}`, {
        typeformEmbed.makeWidget(typeFormElement,`https://ag991439.typeform.com/to/zy2ugSo3#${userDataString}&event=${event}&category=marketing`, {
            onSubmit: submitForm
        })
    })

    return (
        <div>
            <div id='type-form'style={{height: '500px', width: '500px', margin: '1rem auto', boxShadow: '5px 10px 10px #c5c5c5'}}></div>
        </div>
        
    )
}



// export default class TypeForm extends React.Component{
//     constructor(){
//         this.typeFormRef = React.createRef()
//         this.typeFormElement = React.findDOMNode(this.refs.typeFormElement)
//     }
//     // const typeFormElement = document.getElementById('typeForm')
//     // const typeFormRef = React.createRef()
    
//     submitTypeForm (){
//         console.log("Typeform successfully submitted")
//     }

//     // typeformEmbed.makeWidget(
//     //     typeFormElement, 
//     //     'https://rahulshah265555.typeform.com/to/wttsOY8T', 
//     //     {
//     //         onSubmit: submitTypeForm
//     //     }
//     // )

//     render () {
//         return (
//             <div ref={typeFormElement}>
//                 <h1>Sample Div</h1>
//             </div>
//         )
//     }
// }