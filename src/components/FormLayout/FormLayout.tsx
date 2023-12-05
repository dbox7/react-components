import { BaseSyntheticEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import styles from './FormLayout.module.css';

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
  countryProps: IProps | UseFormRegisterReturn;
  countries?: string[];
  fileProps: IProps | UseFormRegisterReturn;
}) => {
  return (
    <form {...formProps} className={(styles.form, styles.form_absolute)}>
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
      <input type="checkbox" disabled={formProps.disabled} {...termsProps} />
      <input list="countries" {...countryProps} disabled={formProps.disabled} />
      <datalist id="countries">
        {countries?.map((country) => <option key={country} value={country} />)}
      </datalist>
      {'value' in fileProps ? (
        <img src={fileProps.value} alt="img" className={styles.image} />
      ) : (
        <input type="file" {...fileProps} disabled={formProps.disabled} />
      )}
      {!formProps.disabled && <button type="submit">Submit</button>}
    </form>
  );
};

export default FormLayout;
