import React from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Unauthorised = () => {

    const navigate = useNavigate()

  // Routing to Login page using button click
  const RouteToLoginPage = () => {
    navigate('/login')
  }



  return (
    <div>
        <Alert variant='danger'>
        You are not authorised Please <Alert.Link onClick={RouteToLoginPage}>Login</Alert.Link> to continue
        </Alert>
    </div>
  )
}

export default Unauthorised
