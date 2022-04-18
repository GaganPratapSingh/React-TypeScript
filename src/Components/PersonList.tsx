
type namesList={
    names:
    {
        fname:string
        lname:string
    }[]
}
export const PersonList=(props:namesList)=>{
    return(
        <>
        {
            props.names.map(name=>{
                return(
                    <h2 key={name.fname}>{name.fname} {name.lname}</h2>
                )
            })
        }
        </>
    )
}