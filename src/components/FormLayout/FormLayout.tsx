import { BaseSyntheticEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';

interface IProps {
  value?: string;
  name?: string;
}

const FormLayout = ({
  formProps,
  nameProps,
  ageProps,
  emailProps,
  passwordProps,
  checkPswdProps,
  genderProps,
  termsProps,
  countryProps,
  countries,
  fileProps,
}: {
  formProps: {
    onSubmit?: (e: BaseSyntheticEvent) => void;
    ref?: React.LegacyRef<HTMLFormElement>;
    disabled?: boolean;
  };
  nameProps: IProps | UseFormRegisterReturn;
  ageProps: IProps | UseFormRegisterReturn;
  emailProps: IProps | UseFormRegisterReturn;
  passwordProps: IProps | UseFormRegisterReturn;
  checkPswdProps: IProps | UseFormRegisterReturn;
  genderProps: IProps | UseFormRegisterReturn;
  termsProps: IProps | UseFormRegisterReturn;
  countryProps: { onChange?: () => void; value?: string; name?: string };
  countries: string[];
  fileProps: IProps | UseFormRegisterReturn;
}) => {
  return (
    <form {...formProps}>
      <input
        type={'text'}
        placeholder={'Enter your name'}
        {...nameProps}
        disabled={formProps.disabled}
      />
      <input
        type={'number'}
        placeholder={'Enter your age'}
        {...ageProps}
        disabled={formProps.disabled}
      />
      <input
        type={'email'}
        placeholder={'Enter email'}
        {...emailProps}
        disabled={formProps.disabled}
      />
      <input
        type={'password'}
        placeholder={'Enter password'}
        {...passwordProps}
        disabled={formProps.disabled}
      />
      <input
        type={'password'}
        placeholder={'Confirm password'}
        {...checkPswdProps}
        disabled={formProps.disabled}
      />
      {'value' in genderProps ? (
        <input type={'text'} {...genderProps} disabled={formProps.disabled} />
      ) : (
        <>
          <input type="radio" value="male" {...genderProps} />
          <input type="radio" value="female" {...genderProps} />
        </>
      )}
      <input type="checkbox" {...termsProps} disabled={formProps.disabled} />
      <select {...countryProps} disabled={formProps.disabled}>
        {countries?.map((item) => <option value={item}>{item}</option>)}
      </select>
      {'value' in fileProps ? (
        <img src={fileProps.value} alt="img" />
      ) : (
        <input type="file" {...fileProps} disabled={formProps.disabled} />
      )}
      {!formProps.disabled && <button type="submit">Submit</button>}
    </form>
  );
};

export default FormLayout;
