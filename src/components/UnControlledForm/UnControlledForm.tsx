import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { schema } from '../../utils/validation';
import { updateUnCtrlForm } from '../../store/reducer';

const UncontrolledForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector((state: RootState) => state.countries);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);

    const state = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      age: Number(formData.get('age')),
      password: formData.get('password') as string,
      checkPswd: formData.get('checkPswd') as string,
      gender: formData.get('gender') as string,
      terms: formData.get('terms') === 'on',
      image: [formData.get('file')] as File[],
      country: formData.get('country') as string,
      isUpdated: true,
    };
    console.log(state);

    schema
      .validate(state, { abortEarly: true })
      .then(() => {
        dispatch(updateUnCtrlForm(state));
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
      <input type={'text'} name="name" placeholder={'Enter your name'} />
      <input type={'number'} name="age" placeholder={'Enter your age'} />
      <input type={'email'} name="email" placeholder={'Enter email'} />
      <input type={'password'} name="password" placeholder={'Enter password'} />
      <input
        type={'password'}
        name="checkPswd"
        placeholder={'Confirm password'}
      />
      <input type="radio" name="gender" value="male" />
      <input type="radio" name="gender" value="female" />
      <input type="checkbox" name="terms" />
      <select name="country">
        {countries.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <input type="file" name="file" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
