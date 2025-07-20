
import {useContext} from 'react'
import UserContext from './Context/UserContext'
function ComponentC(){
const data = useContext(UserContext)
    return(
        <>
        <h1>Component C {data?.name}</h1>
        
        </>
    )
}

export default ComponentC;