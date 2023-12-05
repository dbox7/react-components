import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FormLayout from '../FormLayout/FormLayout';

const MainPage = () => {
  const cntrlForm = useSelector((state: RootState) => state.controlledForm);
  const unCntrlForm = useSelector((state: RootState) => state.uncontrolledForm);
  console.log(cntrlForm, unCntrlForm);
  return (
    <div>
      {cntrlForm.map((item) => (
        <FormLayout
          formProps={{ disabled: true }}
          nameProps={{ value: item.name }}
          ageProps={{ value: String(item.age) }}
          emailProps={{ value: item.email }}
          passwordProps={{ value: item.password }}
          checkPswdProps={{ value: item.checkPswd }}
          countryProps={{ value: item.country }}
          genderProps={{ value: item.gender }}
          fileProps={{ value: item.image }}
        />
      ))}
    </div>
  );
};

export default MainPage;
