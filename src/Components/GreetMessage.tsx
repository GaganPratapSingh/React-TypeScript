
type obj={
    name: String,
    msgCount: number,
    flag:boolean
}

const GreetMessage=(props:obj)=>{
    return(
        <>
        {
            props.flag ? `Welcome ${props.name} You have ${props.msgCount} Unread Message` : 'welcome Guest'
        }
       </>
    )
}
export default GreetMessage;