import { useState } from 'react';
import Input from './Input/ControlledInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateCtrlForm } from '../../store/reducer';
import { IRawFormData } from '../../utils/types';
import { AppDispatch, RootState } from '../../store/store';
import getBase64 from '../../utils/toBase64';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { schema } from '../../utils/validation';
import FormLayout from '../FormLayout/FormLayout';

const ControlledForm = () => {
  const countries = useSelector((state: RootState) => state.countries);
  const cntrlForm = useSelector((state: RootState) => state.controlledForm);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleFormSubmit = async (data: IRawFormData) => {
    const image = (await getBase64(data.image![0])) as string;
    console.log('data', data);
    dispatch(
      updateCtrlForm({
        email: data.email,
        name: data.name,
        age: data.age,
        password: data.password,
        checkPswd: data.checkPswd,
        gender: data.gender,
        terms: data.terms,
        image,
        country: data.country,
        isUpdated: true,
      })
    );
    navigate('/');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  console.log('redux', cntrlForm);

  return (
    <FormLayout
      formProps={{
        onSubmit: handleSubmit((data: IRawFormData) => handleFormSubmit(data)),
      }}
      nameProps={register('name')}
      ageProps={register('age')}
      emailProps={register('email')}
      passwordProps={register('password')}
      checkPswdProps={register('checkPswd')}
      genderProps={register('gender')}
      termsProps={register('terms')}
      countryProps={register('country')}
      countries={countries}
      fileProps={register('image')}
    />
  );
};

export default ControlledForm;
