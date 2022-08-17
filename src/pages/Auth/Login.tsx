import React,{useState} from 'react'
import { loginUser } from '../../services/auth';
import { useNavigate } from "react-router-dom";

type User={
    username:string,
    password:string
}
function Login() {

const navigate = useNavigate();
const [inputs, setInputs] = useState<User>({} as User);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(inputs);
   loginUser(inputs).then(userResponse=>{
    console.log(userResponse);
    localStorage.setItem('user', JSON.stringify(userResponse));
    navigate("/movie");
   })
   
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your User Name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
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

export default Login