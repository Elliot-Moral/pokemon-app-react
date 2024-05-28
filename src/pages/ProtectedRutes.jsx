import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRutes = () => {

    const trainer = useSelector( states => states.trainer )

    if(trainer.length >= 3){

      return <Outlet />
    
    }else{
  
      //redireccionar si el usario no ha dado algun monbre
      return <Navigate to='/'/>
    }
  
}

export default ProtectedRutes