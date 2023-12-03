import { useState } from 'react';
import Input from './Input/ControlledInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateCtrlForm } from '../../store/reducer';
import { IRawFormData } from '../../utils/types';
import { AppDispatch, RootState } from '../../store/store';
import getBase64 from '../../utils/toBase64';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ControlledForm = () => {
  const countries = useSelector((state: RootState) => state.countries);
  const cntrlForm = useSelector((state: RootState) => state.controlledForm);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [country, setCountry] = useState('');

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
        country,
        isUpdated: true,
      })
    );
    navigate('/');
  };

  const schema = yup.object().shape({
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
    <form
      onSubmit={handleSubmit((data: IRawFormData) => handleFormSubmit(data))}
    >
      <input
        type={'text'}
        placeholder={'Enter your name'}
        {...register('name')}
      />
      <input
        type={'number'}
        placeholder={'Enter your age'}
        {...register('age')}
      />
      <input
        type={'email'}
        placeholder={'Enter email'}
        {...register('email')}
      />
      <input
        type={'password'}
        placeholder={'Enter password'}
        {...register('password')}
      />
      <input
        type={'password'}
        placeholder={'Confirm password'}
        {...register('checkPswd')}
      />
      <input type="radio" value="male" {...register('gender')} />
      <input type="radio" value="female" {...register('gender')} />
      <input type="checkbox" {...register('terms')} />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <input type="file" {...register('image')} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
