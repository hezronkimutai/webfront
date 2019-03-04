import React from 'react';
import { Link } from 'react-router-dom';
// import logo.jpg from '.../static';

function Header() {
  return (
    <header style={headerStyle}>
    <h1 style={headStyle}>Hezron Kimutai</h1>
    <Link className='link' style={linkStyle} to="/"> Home </Link>
    <Link className='link'  style={linkStyle} to="/about"> About </Link>
    <Link  className='link' style={linkStyle} to="/articles"> Articles </Link>
    <Link  className='link' style={linkStyle} to="/videos"> Videos </Link>
    <Link  className='link' style={linkStyle} to="/photos"> Photos </Link>
    <Link  className='link' style={linkStyle} to="/todos"> ARTICLES </Link>
    </header>
  )
}
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  backgroundImage: `url(${require('./logo.jpeg')})`,
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'screen'
}
const headStyle = {
  fontSize:'100px'
}

// const imageStyle = {
//   height:'250px',
//   width:'200px'
//
// }

const linkStyle = {
  textDecoration:'none',
  margin:'30px',
  background:'#fff',
  padding:'5px',
  fontSize:'30px',
  borderRadius:'5px'
}

export default Header;
