import React from 'react';
import LoginImg from '../images/landing-bg.jpg';
import Logo from '../images/isologo (1).png'
import { Outlet, Link } from "react-router-dom";
// import {Link } from 'react-router-dom';
// import {BsPersonCircle} from 'react-icons'


function loginPage(){
    return(
        <div class="container-fluid m-0 p-0 text-center">
        <div className="main">
        <div class="login-page page-1">
           
           <div class="row">
               <div class="col-md-6">
                   <div class="login-img">
                       <img src={LoginImg} alt="" />
                   </div>
               </div>
           <div class="col-md-6">
               <div class="login-info d-flex flex-column py-5"> 
               <div class="heading">
                       <h1>Login Page</h1>
               </div>
              <div class="form-section">
                  <div class="person person1 py-3">
                   {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                   {/* <BsPersonCircle/> */}
                   <img src={Logo} alt=""  />
                  </div>
               <div className="login-form">
               <div class="inputs py-3">
                   <input type="text" name="" id="" placeholder="You Email" class="loginInp" />
               </div>
               <div class="inputs mt-sm-3 ">
                   <input type="text" name="" id="" placeholder="Your Password"  class="loginInp" />
               </div>
               </div>
              </div>
               <div class="info pt-5 d-flex justify-content-center signin-info" >
                   <p>Already have group </p> <Link to='/signUp'><a className='AncherTags'><b> Sign Up</b></a></Link>
               </div>
               <div class="form-btn pt-3">
               <button class="form-button">Login</button>
                   
               
               </div>
       </div>
               </div>
           </div>
          
       </div>
        </div>
    </div>
    )
}

export default loginPage