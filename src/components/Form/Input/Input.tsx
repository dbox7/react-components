import { FC } from 'react';

interface inputProps {
  type: string;
  placeholder: string;
  info: string;
  value: string;
}

const CustomInput: FC<inputProps> = ({ type, placeholder, info, value }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} value={value} />
      <div>
        <div>{info}</div>
      </div>
    </div>
  );
};

export default CustomInput;
