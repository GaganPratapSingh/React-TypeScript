
type detail={
    name: {
        fname: String,
        lname: String
    }
}

export const Person=(props:detail)=>{
    return(
        <>
        <h3>name of the employee {props.name.fname} {props.name.lname}</h3>
        </>
    )
}