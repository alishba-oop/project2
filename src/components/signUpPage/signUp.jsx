import React from 'react';
import LoginImg from '../images/landing-bg.jpg'
import Logo from '../images/isologo (1).png'
import { Outlet, Link } from "react-router-dom";


function SignUpPage(){
    return(
        <div class="container text-center">
        <div class="login-page">
           
            <div class="row">
                <div class="col-md-6">
                    <div class="login-img">
                    <img src={LoginImg} alt="" />
                    </div>
                </div>
            <div class="col-md-6">
                <div class="login-info d-flex flex-column py-3"> 
                <div class="heading ">
                        <h1>SignUp</h1>
                </div>
               <div class="form-section">
                   <div class=" person person1">
                    {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                    <img src={Logo} alt=""  />
                   </div>
                <div class="inputs">
                    <input type="text" name="" id="" placeholder=" Full Name"  class="loginInp" />
                </div>
                <div class="inputs mt-3">
                    <input type="text" name="" id="" placeholder="You Email" class="loginInp" />
                </div>
                <div class="inputs mt-3 ">
                    <input type="text" name="" id="" placeholder="Your Password"  class="loginInp" />
                </div>
                <div class="inputs mt-3 ">
                    <input type="text" name="" id="" placeholder="Repeat Your Password "  class="loginInp" />
                </div>
               </div>
                <div class="info pt-5 d-flex justify-content-center signup-info">
                    <Link to='/'><p className='AncherTags'>Already have group.</p></Link><a className='AncherTags'><b> Forgot password</b></a>
                </div>
                <div class="form-btn pt-3 ">
                    <button class="form-button">SignUp</button>
                </div>
        </div>
                </div>
            </div>
           
        </div>
    </div>
    )
}

export default SignUpPage