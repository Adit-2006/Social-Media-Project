import React, { useContext } from "react"
import { useState, useEffect } from "react"
import axiosInstance from "../src/axiosCalls/axios"


const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    axiosInstance.get('users/me').then((response) => {
      setUser(response.data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoader(false)
    })
  },[])

  return (
      <AuthContext.Provider value={{ user, setUser, loader, setLoader }}>
        {children}
      </AuthContext.Provider >  
  )
}

function useAuth() {
  return (
    useContext(AuthContext)
  )
} 


export default useAuth;

