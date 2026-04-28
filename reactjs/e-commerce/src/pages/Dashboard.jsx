import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'

const Dashboard = ({loggedUser}) => {
    console.log("Dashboard",loggedUser)
  return (
    <>

    <Navbar loggedUser={loggedUser} />
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-secondary text-white" style={{height:"90vh"}}>
          <div className='fixed-bottom ' style={{height:"90vh"}}>
          <input type='search' className='form-control'/>
          <button className='btn btn-primary'>Search</button>
          <div>Filter</div>
          add drop down for filter
          </div>
        </div>
        <div className="col-10 ">
            <ProductList />
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Dashboard