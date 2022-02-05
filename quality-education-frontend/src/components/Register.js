import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    return (
        <div><br/><br/> <br/><br/> 
        <div className="containers">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="forms">
                <label>Full Name:</label>
                <input
                    type="text"
                    value={fullname}
                    required
                    onChange = {(e) => setFullname(e.target.value)}
                   
                />
                
                <label>Email address:</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange = {(e) => setEmail(e.target.value)}
                />
                
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    required
                    minLength ={6} 
                    onChange = {(e) => setPassword(e.target.value)}
                />
                

                <label>Age:</label>
                <input
                    type="text"
                    value={age}
                    required
                    onChange = {(e) => setAge(e.target.value)}
                    
                />
                
                <label>Gender:</label>
                <select style={{border: "1px whitesmoke"}}
                        value={gender}
                        required
                        onChange = {(e) => setGender(e.target.value)}>
                    {<option value=''></option> }
                    <option value="female">female</option>
                    <option value= "male">male</option>
                    <option value= "other">other</option>
                </select>
            
                <button>Sign up</button>

                <p className="dont-have-r">Already have an account? <Link to="/login" style={{textDecoration: "none", color: "blueviolet"}}>Sign in...</Link> </p>
            </form>
        </div>
        <br />
        </div>  
    );
}
 
export default Register;