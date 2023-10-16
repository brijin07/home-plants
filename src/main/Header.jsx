import React from 'react'
import { Search, ShoppingCart, User } from 'react-feather'

function Header() {
  return (

   <>

      <div className='navebar'>

        <div className="search">
          <Search className='navicon'/>
        </div>

        <div className="list">
          <a className='hover-underline-animation' href="">HOME</a>
          <a className='hover-underline-animation' href="">SHOP</a>
          <a className='hover-underline-animation' href="">LEARN</a>
          <a className='hover-underline-animation' href="">COMMUNITY</a>
          <a id='one' className='hover-underline-animation' href="">BUSINESS</a>
        </div>

        <div className="shop">
          <User className='navicon'/>
          <ShoppingCart className='ShoppingCart'/>
        </div>
  
      </div>

   </>

  )
}

export default Header