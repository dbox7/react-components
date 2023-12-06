import { BaseSyntheticEvent, FC } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form/dist/types';
import styles from './FormLayout.module.css';

interface IProps {
  value?: string;
  name?: string;
}

interface IFormProps {
  errors: FieldErrors | { [key: string]: { message: string } };
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
}

const FormLayout: FC<IFormProps> = ({
  errors,
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
}) => {
  return (
    <>
      {!formProps.disabled && <h3>Fill all fields</h3>}
      <form
        {...formProps}
        className={`${styles.form} ${
          formProps.disabled ? styles.form : styles.max_width
        }`}
        noValidate
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type={'text'}
          placeholder={'Enter your name'}
          {...nameProps}
          disabled={formProps.disabled}
        />
        <div
          className="error"
          data-error={errors.name ? errors.name.message : ''}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type={'number'}
          placeholder={'Enter your age'}
          {...ageProps}
          disabled={formProps.disabled}
        />
        <div className="error" data-error={errors?.age?.message || ''} />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type={'email'}
          placeholder={'Enter email'}
          {...emailProps}
          disabled={formProps.disabled}
        />
        <div className="error" data-error={errors?.email?.message || ''} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={formProps.disabled ? 'text' : 'password'}
          placeholder={'Enter password'}
          {...passwordProps}
          disabled={formProps.disabled}
        />
        <div className="error" data-error={errors?.password?.message || ''} />
        <label htmlFor="checkPswd">Confirm password</label>
        <input
          id="checkPswd"
          type={formProps.disabled ? 'text' : 'password'}
          placeholder={'Confirm password'}
          {...checkPswdProps}
          disabled={formProps.disabled}
        />
        <div className="error" data-error={errors?.checkPswd?.message || ''} />
        <label htmlFor="gender">Gender</label>
        {'value' in genderProps ? (
          <input type={'text'} {...genderProps} disabled={formProps.disabled} />
        ) : (
          <>
            <div id="gender">
              <label htmlFor="male">Male</label>
              <input id="male" type="radio" value="male" {...genderProps} />
              <label htmlFor="male">Female</label>
              <input id="female" type="radio" value="female" {...genderProps} />
            </div>
            <div className="error" data-error={errors?.gender?.message || ''} />
          </>
        )}
        <label htmlFor="terms">Acception terms</label>
        {formProps.disabled ? (
          <div>Accepted ✔</div>
        ) : (
          <input
            id="terms"
            type="checkbox"
            disabled={formProps.disabled}
            {...termsProps}
          />
        )}
        <div className="error" data-error={errors?.terms?.message || ''} />
        <label htmlFor="country">Country</label>
        <input
          id="country"
          list="countries"
          {...countryProps}
          disabled={formProps.disabled}
        />
        <datalist id="countries">
          {countries?.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
        <div className="error" data-error={errors?.country?.message || ''} />
        <label htmlFor="image">Image</label>
        {'value' in fileProps ? (
          <img
            id="image"
            src={fileProps.value}
            alt="img"
            className={styles.image}
          />
        ) : (
          <input
            id="image"
            type="file"
            {...fileProps}
            disabled={formProps.disabled}
          />
        )}
        <div className="error" data-error={errors?.image?.message || ''} />
        {!formProps.disabled && <button type="submit">Submit</button>}
      </form>
    </>
  );
};

export default FormLayout;
