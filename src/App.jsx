import { useState } from 'react'
import './App.css'
import Products from './Data'


function App() {

  const [cartcount,setCartCount] = useState(0)
  const [cartItems,setCartItems] = useState([])


  return (
    <>

      <div style={{position:"sticky",top:0,borderBottom:'1px soild black',zIndex:'1'}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">All Products</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit"><i className="fa-solid fa-cart-shopping">&nbsp;&nbsp;</i>Cart {cartItems.length} </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div style={{ textAlign: 'center', padding: 100, backgroundColor: '	rgb(32,32,32)' }}>
        <h1 style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>Shop in style</h1>
        <h3 style={{ fontSize: 20, color: 'white' }}>With this shop hompeage template</h3>
      </div>

      <Products setCartCount={setCartCount} cartcount={cartcount} setCartItems={setCartItems}  cartItems={cartItems}/>

      <div className="footer">
        <p style={{ fontSize: 20, textAlign: 'center', padding: 40, backgroundColor: 'rgb(32,32,32)', color: 'white' }}>Copyright © Your Website 2023</p>
      </div>
    </>
  )
}

export default App
