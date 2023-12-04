import React from 'react'
import { Facebook, GitHub, Instagram, Linkedin, Mail, Twitter } from 'react-feather'

function Footer() {
  return (
    <>
        <div className='foot'>

       <footer className="ear text-center text-white" >
  {/* Grid container */}
  <div className="container pt-4">
    {/* Section: Social media */}
    <section className="secton mb-4">
      {/* Facebook */}
      <a className="btn-btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><Facebook/></a>
      {/* Twitter */}
      <a className="btn-btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><Twitter/></a>
      {/* Google */}
      <a className="btn-btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><Mail/></a>
      {/* Instagram */}
      <a className="btn-btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><Instagram/></a>
      {/* Linkedin */}
      <a className="btn-btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><Linkedin/></a>
      {/* Github */}
      <a className="btn-btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><GitHub/></a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="name  text-center text-dark p-3" >
    © 2023 Copyright:
    <a className="text-dark" style={{textDecoration:"none",color:"black"}} href="https://mdbootstrap.com/">brijingeorge07@gmail.com</a>
  </div>
  {/* Copyright */}
</footer>

            
        </div>
    </>
  )
}

export default Footer