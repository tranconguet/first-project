import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility'; 
import axios from 'axios';


export const renderRegister = () =>{
    const markup =`
        <div class="signup__form" style="${Utility.signUpStyle}">
            <h1>REGISTER</h1><br>
            <select style="display: block-inline ;width: 130px;height: 40px; font-size: 20px" name="type" class="type_register" >
                <option value="employer" >Employer</option>
                <option value="candidate" >Candidate</option>
            </select>
            <input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="Continue">
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);

    document.querySelector('.type_register_submit').addEventListener('click', e => {
        const type = document.querySelector('.type_register').value;
        Utility.clearPage();
        if(type==='candidate'){
            renderCandidateRegister();
        }
        if(type==='employer'){
            renderEmployerRegister();
        }
            
    })
}

const renderCandidateRegister = () =>{
    const markup =`
        <div class="signup__form" style="${Utility.signUpStyle}">
            <h1>REGISTER FOR CANDIDATE</h1><br>
            <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="User name" required></div>
            <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
            <div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div>
            <input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="SIGN UP">
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.type_register_submit').addEventListener('click',() => getInfo('candidate'));
}
const passIncorrect = () =>{
    const notice = document.querySelector('.password_notice') ? '' :`<p class="password_notice">password incorrect !</p>`;
    document.querySelector('.signup__form').insertAdjacentHTML('beforeend',notice);
}
const getInfo = (type) =>{
    const password = document.querySelector('.password').value;
    const passwordAgain = document.querySelector('.password_again').value;
    if(password !== passwordAgain){
        passIncorrect();
        return;
    }
    const userName = document.querySelector('.user_name').value;
    if(!userName) return;
    let data;
    if(type === 'candidate'){
        data = {
            userName: userName,
            password: password,
            type: "candidate"
        }
    }
    
    if(type === 'employer'){
        const email = document.querySelector('.email').value;
        const address = document.querySelector('.address').value;
        const name = document.querySelector('.namee').value;
        if(!email || !name) return;
        data = {
            userName: userName,
            password: password,
            type: "employer",
            email: email,
            fullName: name,
            address: address
        }
    }
    
    axios.post('http://localhost:3000/auth/',data)
    .then(response=>{
        window.alert('Sign up success !');
        location.replace('http://localhost:8080/');
    }).catch(err=>{
        console.log(err);
    })
}

const renderEmployerRegister = () =>{
    const markup =`
        <div class="signup__form" style="${Utility.signUpStyle}">
            <h1>REGISTER FOR EMPLOYER</h1><br>
            <div class="register_employer">
                <div>
                    <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="User name" required></div>
                    <div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Email"></div>
                    <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
                    <div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div>
                </div>
                <div style="text-align: left">
                    <div><input style="${Utility.formStyle}" type="text" class="namee" placeholder="Your team or company name"></div>
                    <div><input style="${Utility.formStyle}" type="text" class="address" placeholder="Address"></div>
                </div>
                
            </div>
            
            <input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="SIGN UP">
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.type_register_submit').addEventListener('click',() => getInfo('employer'));
}


{/* <div><input style="${Utility.formStyle}" size="30" type="text" class="user_name" placeholder="User name"></div>
<div><input style="${Utility.formStyle}" size="30" type="text" class="email" placeholder="Email"></div>
<div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
<div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div> */}