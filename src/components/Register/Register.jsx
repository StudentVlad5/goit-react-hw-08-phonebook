import React from 'react';
import {
  MDBBtn,
  MDBCol,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from "./Register.module.css";

function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.signIn__Container} onSubmit={handleSubmit}>
          <MDBCol className={css.form__container}>
              <p className={css.formTitle}>Sign up</p>
              <div>
                <label className={css.title__label}>
                    <div>Your Name
                         <div className={css.item__container}>
                            <FaUser size="30"/>
                            <input className={css.input_active} name='name' type='text' /> 
                        </div>
                    </div>
                </label>
              </div>
              <div>
                <label className={css.title__label}>
                    <div>Your Email
                        <div className={css.item__container}>
                            <FaEnvelope size="30"/>
                            <input className={css.input_active} name='email' type='email'/>
                        </div>
                    </div>
                </label>
              </div>
              <div>
                <label className={css.title__label}>
                    <div>Password
                        <div className={css.item__container}>
                            <FaLock size="30"/>
                            <input className={css.input_active} name='password' type='password' />
                        </div>
                    </div>
                </label>
               </div>
              <div className={css.chackbox__container}>
                <label className={css.title__labelforCheck}>
                    <div>
                    <MDBCheckbox name='flexCheck' value='terms' id='flexCheckDefault' />
                    confirm the possibility of using the personal data
                    </div>
                  </label>
              </div>
              <MDBBtn type="submit">Sign up</MDBBtn>
          </MDBCol>
      </form>
  );
}

export default Register;