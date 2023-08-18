const Opinion = (props) =>{
    return(
        <div className="opinion">
            <p>{props.opinion.opinion}</p>
            <div className="flex-opinion">
                <img className="photo" src={props.opinion.photo} alt="photoProfile"/>
                <div>
                    <p className="p-opinion-name">{props.opinion.name}</p>
                    <p className="p-opinion-position">{props.opinion.position}</p>
                </div>
            </div>
        </div>
    )
}

export default Opinion;