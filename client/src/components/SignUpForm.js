
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <div>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                </div>
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

export default Signup;




// import React, { useState } from 'react';
// import { Form, Alert, Button } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';

// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

// const SignUpForm = () => {
//     //setting the state of the form to empty
//     const [userForm, setUserForm] = useState({ username: '', email: '', password: '' });
//     //setting the state for validation (false)
//     const [validated] = useState(false);
//     //setting show alert state to false
//     const [showAlert, setShowAlert] = useState(false);
//     //adding the mutation for addUser
//     const [addUser] = useMutation(ADD_USER);

//     //handling the state of the user input
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         setUserForm({
//             ...userForm,
//             [name]: value
//         })

//     };
//     //submit the form that the user input
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         //checking if the form has everyting as per react-bootstrap docs
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropogation();
//         }
//         try {
//             const { data } = await addUser({ variables: { ...userForm } });

//             Auth.login(data.addUser.token);
//         } catch (err) {
//             console.error(err);
//             setShowAlert(true);
//         }
//         setUserForm({
//             username: '',
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <>
//             {/*this is added to the form for the validation included above */}
//             <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//                 <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='warning'>
//                     OOPS! Something went wrong OR you may already have an account!
//                 </Alert>
//                 <Form.Group>
//                     <Form.Label htmlFor='username'>Username </Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='Your username'
//                         name='username'
//                         onChange={handleInputChange}
//                         value={userForm.username}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label htmlFor='email'>Email </Form.Label>
//                     <Form.Control
//                         type='email'
//                         placeholder='Your email address'
//                         name='email'
//                         onChange={handleInputChange}
//                         value={userForm.email}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label htmlFor='password'>Password </Form.Label>
//                     <Form.Control
//                         type='password'
//                         placeholder='Your password'
//                         name='password'
//                         onChange={handleInputChange}
//                         value={userForm.password}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Button
//                     disabled={!(userForm.username && userForm.email && userForm.password)}
//                     type='submit'
//                     variant='contained'>
//                     Submit
//                 </Button>
//             </Form>
//         </>
//     );
// };

// export default SignUpForm;