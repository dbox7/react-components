export interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  checkPswd: string;
  gender: 'male' | 'female' | '';
  terms: boolean;
  country: string;
  image?: string;
  isUpdated: boolean;
}
