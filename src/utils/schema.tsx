import * as Yup from 'yup';
import { emailRegex, passwordRegex } from './pattern';
// import personDetailSchema from '../Components/pageComponents/auth/personalDetails/index';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Please enter your Full Name'),
  // userName: Yup.string().required('Please enter your  Username'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email')
    .matches(emailRegex, 'Invalid email'),
  password: Yup.string()
    .required('Please enter your password')
    .matches(
      passwordRegex,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email')
    .matches(emailRegex, 'Invalid email'),
  password: Yup.string().required('Please enter your password'),
});

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const createspectater = Yup.object().shape({
  roomId: Yup.number().required('Please enter your Room Id'),
  gameName: Yup.string().required('Please enter your  Game Name'),
  gameType: Yup.string().required('Please enter your Game Type'),
  mapType: Yup.string().required('Please enter your Map Type'),
  password: Yup.string().required('Please enter your password'),
  time: Yup.string().required('please select time'),
  date: Yup.string().required('please select match date'),
  secondWin: Yup.number().required('Please enter second winner prize '),
  lastServival: Yup.number().required('Please enter lastServival winner prize'),
  highestKill: Yup.number().required('Please enter highestKill winner prize'),
  thirdWin: Yup.number().required('Please enter Third winner prize '),
});

const personDetailSchema = Yup.object().shape({
  player: Yup.string()
    .required('player Id or username is Required')
    .min(8, 'playerId or username must be min 8 ')
    .max(12, 'playerId or username must be max 12'),
  upi: Yup.string().required('UPI is needed'),
  
});

const teamsDetailSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email address')
  .required('Email is required'),
});

export {
  SignupSchema,
  loginSchema,
  ResetPasswordSchema,
  createspectater,
  personDetailSchema,
  teamsDetailSchema,
};
