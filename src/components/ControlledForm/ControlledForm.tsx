import { useState } from 'react';
import Input from './Input/ControlledInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateCtrlForm } from '../../store/reducer';
import { IFormData } from '../../utils/types';
import { AppDispatch, RootState } from '../../store/store';
import getBase64 from '../../utils/toBase64';

const ControlledForm = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [checkPswd, setcheckPswd] = useState('');
  const [gender, setGender] = useState<IFormData['gender']>('');
  const [terms, setTerms] = useState(false);
  const [country, setCountry] = useState('');
  const [image, setImage] = useState('');

  const handleFileChange = async (e) => {
    const img = (await getBase64(e.target.files[0])) as string;
    console.log(img);
    setImage(img);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateCtrlForm({
        email,
        name,
        age: Number(age),
        password,
        checkPswd,
        gender,
        terms,
        image,
        country,
        isUpdated: true,
      })
    );
  };

  console.log(state, country);

  return (
    <form>
      <Input
        type={'text'}
        placeholder={'Enter your name'}
        info={''}
        value={name}
        label={'Name'}
        changeValue={setName}
      />
      <Input
        type={'text'}
        placeholder={'Enter your age'}
        info={''}
        value={age}
        label={'Age'}
        changeValue={setAge}
      />
      <Input
        type={'email'}
        placeholder={'Enter email'}
        info={''}
        value={email}
        label={'Email'}
        changeValue={setEmail}
      />
      <Input
        type={'password'}
        placeholder={'Enter password'}
        info={''}
        value={password}
        label={'Password'}
        changeValue={setPassword}
      />
      <Input
        type={'password'}
        placeholder={'Confirm password'}
        info={''}
        value={checkPswd}
        label={'Confirm password'}
        changeValue={setcheckPswd}
      />
      <input
        type="radio"
        value="male"
        checked={gender === 'male' ? true : false}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="radio"
        value="female"
        checked={gender === 'female' ? true : false}
        onChange={(e) => setGender(e.target.value)}
      />
      <input type="checkbox" onChange={(e) => setTerms(e.target.checked)} />
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {state.countries.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <input type="file" onChange={(e) => handleFileChange(e)} />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
};

export default ControlledForm;
