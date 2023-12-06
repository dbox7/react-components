import * as yup from 'yup';
import { COUNTRIES } from './constants';

export const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Enter email'),
  name: yup
    .string()
    .required('Enter your name')
    .matches(/^[A-Z,А-Я]/, 'First letter capitalized'),
  age: yup
    .number()
    .typeError('Enter integer number')
    .required('Enter your age')
    .positive('Age should be more than 0'),
  password: yup
    .string()
    .required('Enter password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'At least 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
    ),
  checkPswd: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords not equal'),
  gender: yup.string<'male' | 'female'>().required('Choose your gender'),
  country: yup
    .string()
    .required('Choose your country')
    .oneOf([...COUNTRIES], 'Choose country from list'),
  terms: yup.boolean().isTrue('Accept terms').required(),
  image: yup
    .mixed<FileList>()
    .required('Picture cannot be empty')
    .test('isLoaded', 'Load image', (list) => (list[0] ? true : false))
    .test(
      'Right extension',
      'Load png or jpeg file',
      (list) => !!list?.[0]?.name?.match(/(jpg|jpeg|png)$/i)
    )
    .test('Check size', 'Image should be less 5Mb', (list) =>
      list[0] ? list[0].size < 5242880 : false
    ),
});
