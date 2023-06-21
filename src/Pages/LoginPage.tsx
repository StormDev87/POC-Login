import React, {useState} from 'react';
import InputField from "../Components/InputField.tsx";
import {ILogin} from "../types/auth.ts";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useStoreAuth} from "../store/useStoreAuth.ts";

interface ILoginPage {
  title?: string;
}

const LoginPage : React.FC<ILoginPage>  = (props) => {

  const [loginData, setLogiData] = useState<ILogin>({email:'', password:''});
  const [contSubmit, setCountSubmit] = useState<number>(0);

  const login = useStoreAuth(state => state.login);
  const logout = useStoreAuth(state => state.logout);
  const isLoggedIn = useStoreAuth(state => state.isLoggedIn);


  const onChange = (value: string | number, field: keyof typeof loginData) =>{
    setLogiData(prevState => {
        prevState[field] = value.toString();
      return {
        ...prevState,
      }
    })
  }

  const handleSubmit = () =>{
    setCountSubmit(prevState => prevState + 1);
    axios.post("https://localhost:5000/api/v1/Auth/login",
      loginData, { withCredentials: true })
      .then((response :AxiosResponse)=>{
        if(response.status === 202 || response.status === 200) {
          console.log(response);
          login(response.data.userRdDto, response.data.tokenRequest.token);
        }
      })
      .catch((error: AxiosError) => {
        alert(`Error: - ${error} - Axios message: ${error}`);
      });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {props.title}
      </h1>
      <InputField label={"Email"} type={"email"} onChange={(val ) => onChange(val, "email")}/>
      <InputField label={"Password"} type={"password"} onChange={(val ) => onChange(val, "password")}/>
      <button className={"border-2 w-96 m-2.5"} onClick={()=>{ isLoggedIn ? logout() : handleSubmit()}}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default LoginPage ;


