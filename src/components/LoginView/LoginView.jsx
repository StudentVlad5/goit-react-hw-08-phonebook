import React from 'react';
import {
  MDBBtn,
  MDBCol,
} from 'mdb-react-ui-kit';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import css from "./LoginView.module.css";



function LoginView() {
  return (
    <form className={css.signIn__Container}>

          <MDBCol className={css.form__container}>

              <p className={css.formTitle}>Log in</p>
                <div>
                    <label className={css.title__label}>
                        <div>Your Email
                            <div className={css.item__container}>
                                <FaEnvelope size="30"/>
                                <input className={css.input_active} id='envelope_log' type='email' />
                            </div>
                        </div>
                    </label>
                </div>

                <div>
                    <label className={css.title__label}>
                        <div>Password
                            <div className={css.item__container}>
                                <FaLock size="30"/>
                                <input className={css.input_active} id='password_log' type='password' />
                            </div>
                        </div>
                </label>
                </div>

              <MDBBtn>Log in</MDBBtn>
 
          </MDBCol>


      </form>
  );
}

export default LoginView;