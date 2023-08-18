import { useState } from "react";

import '../styles/Form.css';

const Form = () =>{

    const [inputEmail, setInputEmail] = useState('');
    const [inputValid, setInputValid] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        
        if(inputEmail === ''){
            setInputValid(false); 
            setInputEmail('')
        }else {
            setInputValid(true);
        }
    }

    return(
        <div className="flex-form">
            <div className="form">
                <h3>Get early access today</h3>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email@example.com" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)}/>
                    <input type="submit" value="Get Started For Free"/>
                </form>
                {inputValid === false ? <p className="span-email">Please enter a valid email address</p> : null}
            </div>
        </div>
    )
}

export default Form;