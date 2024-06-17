import React from 'react'
import {Nav, NavLink, NavItem } from 'reactstrap';

const Tabs = () => {
  return (
  <Nav className='mb-5'pills>
  <NavItem className='mt-3'>
    <h2>Our Product</h2>
    {/* <NavLink
      active
      href="#"
    >
      Our Product 
    </NavLink> */}
  </NavItem>
  {/* <NavItem>
    <NavLink href="#">
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem> */}
</Nav>
  )
}

export default Tabs;