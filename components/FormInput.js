export default function FormInput ({id, type, label, placeholder, onChange, value}) {
    return (<div>
        <label htmlFor={id}>{label}</label>
        <br />
        <input type={type} id={id} placeholder={placeholder} onChange={onChange} value={value}/>    
    </div>)
}