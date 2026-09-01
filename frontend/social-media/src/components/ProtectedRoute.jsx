import  useAuth  from '../context/AuthContext'
import { Navigate, replace } from 'react-router-dom'


function ProtectedRoute({children}) {
  const {user , loading} = useAuth()

   if(loading){
    return <h1>Loading...</h1>
   }

   if(!user){
     <Navigate to = "login" replace />
   }


  return children
}

export default ProtectedRoute