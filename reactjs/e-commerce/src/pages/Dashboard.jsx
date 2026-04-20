import React from 'react'

const Dashboard = ({loggedUser}) => {
    console.log("Dashboard",loggedUser)
  return (
    <>
    <div> Welcome ; {loggedUser.userName}  to my Dashboard</div>
    </>
  )
}

export default Dashboard