import React, { useContext } from "react"
import { useState, useEffect } from "react"
import axiosInstance from "/src/axiosCalls/axios"


const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    axiosInstance.get('users/me').then((response) => {
      setUser(response.data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  },[])

  return (
      <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
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

