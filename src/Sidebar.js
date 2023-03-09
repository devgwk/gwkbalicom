//sidebar.js

import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
//import Hamburger from 'hamburger-react';

export default function Sidebar (props) {
  return (
    <Menu>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Home</Link>
    </Menu>
  )
}
