export interface LoginResponse {
  _id: string;
  email: string;
  name: string;
  token: string;
}

export interface RegisterUser {
  name: string;
  description?: string;
  email: string;
  password: string;
}
