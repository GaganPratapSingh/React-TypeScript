
type obj={
    status: 'loading' | 'successfull' | 'error'
}


export const Status=(props: obj)=>{

    let message;
    if(props.status === "loading"){
        message="Loading"
    }else if(props.status === "successfull"){
        message="successfull"
    }else{
        message="error"
    }
    return(
        <>
        <h3>status {message}</h3>
        </>
    )
}