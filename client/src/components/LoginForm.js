
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card forms">
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <div>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                </div>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;




// import React, { useState } from 'react';
// import {Form, Button, Alert} from 'react-bootstrap';
// import {useMutation} from '@apollo/client';

// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
// const LoginForm = () => {
// //setting the state of the form to empty
//     const [userForm, setUserForm]= useState({email: '', password: ''});
// //setting the state for validation (false)
//     const [validated] = useState(false);
// //setting show alert state to false
//     const [showAlert, setShowAlert]= useState(false);
//     const [loginUser]= useMutation(LOGIN_USER);

// //update the date based on an input change in the form
//     const handleInputChange= (event) => {
//         const {name, value}= event.target;

//         setUserForm({
//             ...userForm, 
//             [name]:value
//         })
//     };

// //submit the form that the user input
// const handleFormSubmit = async (event) => {
//     event.preventDefault();
// //checking if the form has everyting as per react-bootstrap docs
// const form = event.currentTarget;
// if (form.checkValidity()=== false){
//     event.preventDefault();
//     event.stopPropogation();
// }
// try {
//     const {data} = await loginUser({variables:{...userForm}});

//     Auth.login(data.login.token);
// }catch (err){
//     console.error(err);
//     setShowAlert(true);
// }
// setUserForm({
//     username: '',
//     email: '',
//     password: '',
// });

// };

// return (
// <>
//     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <Alert dismissible onClose={()=> setShowAlert(false)} show={showAlert} variant='warning'>
//             OOPS! You may need to check your credentials and don't forget to Sign Up first!
//         </Alert>
//         <Form.Group>
//             <Form.Label htmlFor='email'>Email </Form.Label>
//             <Form.Control
//             type='text'
//             placeholder='Your email'
//             name='email'
//             onChange={handleInputChange}
//             value={userForm.email}
//             required/>
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>  
//         </Form.Group>
//         <Form.Group>
//           <Form.Label htmlFor='password'>Password </Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={userForm.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//         disabled={!(userForm.email && userForm.password)}
//         type='submit'
//           variant='primary'>
//           Submit
//         </Button>
//     </Form>
//     </>
// )
// };

// export default LoginForm;