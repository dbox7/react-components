import { FC } from 'react';

interface IInputProps {
  type: string;
  placeholder?: string;
  info: string;
  value: string;
  label: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<IInputProps> = ({
  type,
  placeholder,
  info,
  value,
  label,
  changeValue,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
      <div>{info}</div>
    </div>
  );
};

export default Input;
