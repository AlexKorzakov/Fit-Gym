// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { registration } from '../http/userAPI';
// import { AuthForm } from '../components/AuthForm/AuthForm';
// import { Head } from '../components/Head/Head';
// import Layout from '../layouts/Layout';

// import './styles/Auth.css';
// import '../index.css';

// const Auth = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }
//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }

  // return (
  // 	<Container
  // 	className="d-flex justify-content-center align-items-center"
  // 	style={{height: window.innerHeight - 54}}
  // 	>
  // 		<Form>
  // 		<Form.Group className="mb-3" controlId="formBasicEmail">
  // 			<Form.Label>Email address</Form.Label>
  // 			<Form.Control value={email} onChange={handleEmail} type="email" placeholder="Введите Email" />
  // 		</Form.Group>

  // 		<Form.Group className="mb-3" controlId="formBasicPassword">
  // 			<Form.Label>Password</Form.Label>
  // 			<Form.Control value={password} onChange={handlePassword} type="password" placeholder="Введите пароль" />
  // 		</Form.Group>
  // 		<Button variant="primary" onClick={()=> registration(email, password)}>
  // 			Submit
  // 		</Button>
  // 		</Form>
  // 	</Container>
  // );

//   return (
//     <>
//       <Layout>
//         <Head title="Личный кабинет">
//           Часто стимулом к занятиям фитнесом являются рекомендации докторов. Эта
//           мотивация особенно сильна у людей, <br />
//           столкнувшихся с определенными проблемами из-за лишнего веса или
//           недостатка двигательной активности. <br />
//           Такая фитнес-мотивация для мужчин и женщин одинаково сильна.
//         </Head>
//         <div className="form_wrapper">
//           <AuthForm />
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Auth;
