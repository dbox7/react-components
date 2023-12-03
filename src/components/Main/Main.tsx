import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const MainPage = () => {
  const cntrlForm = useSelector((state: RootState) => state.controlledForm);
  console.log(cntrlForm);
  return (
    <div>
      {cntrlForm.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default MainPage;
