import * as yup from 'yup';
import { COUNTRIES } from './constants';

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup
    .string()
    .matches(/^[A-Z,А-Я]/)
    .required(),
  age: yup.number().min(0).required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required(),
  checkPswd: yup
    .string()
    .oneOf([yup.ref('password')])
    .required(),
  gender: yup.string<'male' | 'female'>().required(),
  country: yup
    .string()
    .oneOf([...COUNTRIES])
    .required(),
  terms: yup.boolean().isTrue().required(),
  image: yup
    .mixed<FileList>()
    .test('isLoaded', 'Load image', (list) => !!list?.[0])
    .test(
      'Right extension',
      'Load png or jpeg file',
      (list) => !!list?.[0].name.match(/(jpg|jpeg|png)$/i)
    )
    .test(
      'Check size',
      'Image should be less 5Mb',
      (list) => list![0].size < 5242880
    )
    .required(),
});
