import { useState } from 'react';

import { createAuthUserWithEmailAndPassowrd, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.styles.scss';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("passwords do not match!")
      return;
    } 

    try {
      const {user} = await createAuthUserWithEmailAndPassowrd(email, password);
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
      
    } catch(error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Connot create user, email already in use');
      } else {

      }
      
    }

  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value })
    
  }

  return (
    <div>
      <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Display Name'
          type="email" 
          required 
          onChange={handleChange} 
          name='email'
          value={email}
        />

        <FormInput
          label='Email'
          type="email" 
          required 
          onChange={handleChange} 
          name='email'
          value={email}
        />

        <FormInput
          label='Password' 
          type="password" 
          required 
          onChange={handleChange} 
          name='password'
          value={password}
        />
        <FormInput 
          label='Confirm Password'
          type="password" 
          required 
          onChange={handleChange} 
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;
