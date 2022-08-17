import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { userSignUp } from '../../services/auth';
export type SignUpUserType={
    username:string,
    password:string,
    name:string,
    email:string,
}
function SignUp() {
const navigate = useNavigate();
const [inputs, setInputs] = useState<SignUpUserType>({} as SignUpUserType);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    userSignUp(inputs).then(respond=>{
        console.log(respond)
        navigate('/login');
    })
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your User Name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your Email:
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your Password:
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default SignUp