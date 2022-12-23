import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  MDBBtn,
  MDBCol,
} from 'mdb-react-ui-kit';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import css from "./LoginView.module.css";

function LoginView() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        
        dispatch(
            logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };


  return (
    <form className={css.signIn__Container} onSubmit={handleSubmit}>
        <MDBCol className={css.form__container}>
            <p className={css.formTitle}>Log in</p>
                <div>
                    <label className={css.title__label}>
                        <div>Your Email
                            <div className={css.item__container}>
                                <FaEnvelope size="30"/>
                                <input className={css.input_active} id='envelope_log' type='email' name='email'/>
                            </div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className={css.title__label}>
                        <div>Password
                            <div className={css.item__container}>
                                <FaLock size="30"/>
                                <input className={css.input_active} id='password_log' type='password' name='password'/>
                            </div>
                        </div>
                </label>
                </div>
            <MDBBtn type="submit">Log in</MDBBtn>
        </MDBCol>
    </form>
  );
}

export default LoginView;