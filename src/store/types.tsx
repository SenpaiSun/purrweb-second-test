export interface Auth extends Record<string, string> {
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string;
}