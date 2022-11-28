import React from 'react';
import img from '../image/logo.ico'
const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-gray-400 text-neutral-content">
  <div>
    <img className='w-52 rounded-2xl ' src={img} alt=''></img>
    <p>ABinmot.Com.<br/>Providing reliable tech since 2022</p>
  </div> 
  <div>
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;