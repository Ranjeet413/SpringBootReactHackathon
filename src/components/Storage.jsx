import React from 'react'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'

const Storage = () => {

    const [userDetails, setuserDetails] = useState({})


  return (
    <div>
        <Dashboard  />
        <LoginPage />

    </div>
  )
}

export default Storage