export interface IUser{
  userName:string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  rights: number;
  roles: string[];
  status: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user: IUser;
  token?: string | null;
}
export interface IAuthState extends AuthProps {
  login: (userDto: IUser, tokenDto: string) => void;
  setToken: (tokenDto: string) => void;
  logout: () => void;
}