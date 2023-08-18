const Characteristic = (props) =>{
    return(
        <div className={`characteristic ${props.characteristic.id}`} >
            <img src={props.characteristic.icon} alt="icon"/>
            <h4>{props.characteristic.name}</h4>
            <p>{props.characteristic.description}</p>
        </div>
    )
}

export default Characteristic;