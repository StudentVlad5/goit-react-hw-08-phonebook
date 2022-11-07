import React from 'react';
import {
  MDBBtn,
  MDBCol,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { FaUser, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import css from "./Register.module.css";



function Register() {
  return (
    <form className={css.signIn__Container}>

          <MDBCol className={css.form__container}>

              <p className={css.formTitle}>Sign up</p>
              <div>
                <label className={css.title__label}>
                    <div>Your Name
                         <div className={css.item__container}>
                            <FaUser size="30"/>
                            <input className={css.input_active} id='user' type='text' /> 
                        </div>
                    </div>
                </label>
              </div>

              <div>
                <label className={css.title__label}>
                    <div>Your Email
                        <div className={css.item__container}>
                            <FaEnvelope size="30"/>
                            <input className={css.input_active} id='envelope' type='email'/>
                        </div>
                    </div>
                </label>
              </div>

              <div>
                <label className={css.title__label}>
                    <div>Password
                        <div className={css.item__container}>
                            <FaLock size="30"/>
                            <input className={css.input_active} id='newpassword' type='password' />
                        </div>
                    </div>
                </label>
               </div>
              
              <div>
                <label className={css.title__label}>
                    <div>Repeat your password
                        <div className={css.item__container}>
                            <FaKey size="30"/>
                            <input className={css.input_active} id="key" type='password' />
                        </div>
                    </div>
                </label>
              </div>

              <div className={css.chackbox__container}>
                <label className={css.title__labelforCheck}>
                    <div>
                    <MDBCheckbox name='flexCheck' value='terms' id='flexCheckDefault' />
                    Submit terms of agreement
                    </div>
                  </label>
              </div>
              
              <MDBBtn>Register</MDBBtn>
 
          </MDBCol>


      </form>
  );
}

export default Register;