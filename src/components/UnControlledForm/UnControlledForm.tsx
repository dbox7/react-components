import { BaseSyntheticEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { schema } from '../../utils/validation';
import { updateUnCtrlForm } from '../../store/reducer';
import getBase64 from '../../utils/toBase64';
import { IFormData } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import FormLayout from '../FormLayout/FormLayout';
import * as yup from 'yup';

const UncontrolledForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector((state: RootState) => state.countries);
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: { message: string } }>(
    {}
  );

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);

    const state: IFormData = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      age: Number(formData.get('age')),
      password: formData.get('password') as string,
      checkPswd: formData.get('checkPswd') as string,
      gender: formData.get('gender') as 'male' | 'female',
      terms: formData.get('terms') === 'on',
      image: [formData.get('file')] as File[],
      country: formData.get('country') as string,
      isUpdated: true,
    };

    schema
      .validate(state, { abortEarly: false })
      .then(async () => {
        state.image = (await getBase64(state.image![0] as File)) as string;
        dispatch(updateUnCtrlForm(state));
        navigate('/');
      })
      .catch((err) => {
        console.log(err.errors);
        if (err instanceof yup.ValidationError) {
          const validationErrors = err.inner.reduce((errors, error) => {
            return {
              ...errors,
              [error.path as string]: { message: error.message },
            };
          }, {});
          console.log(validationErrors);
          setErrors(validationErrors);
          return;
        }
      });
  };

  return (
    <FormLayout
      errors={errors}
      formProps={{ onSubmit: handleSubmit, ref: formRef }}
      nameProps={{ name: 'name' }}
      ageProps={{ name: 'age' }}
      emailProps={{ name: 'email' }}
      passwordProps={{ name: 'password' }}
      checkPswdProps={{ name: 'checkPswd' }}
      genderProps={{ name: 'gender' }}
      termsProps={{ name: 'terms' }}
      countryProps={{ name: 'country' }}
      countries={countries}
      fileProps={{ name: 'file' }}
    />
  );
};

export default UncontrolledForm;
