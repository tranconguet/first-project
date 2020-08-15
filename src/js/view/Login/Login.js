import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility'; 
const axios = require('axios');

export const renderLogin = () =>{
    let userNameInput;
    let passwordInput;
    const markup =`
        <div class="login__form" style="height: 300px;padding: 100px; text-align: center;">
            <div><input style="${Utility.formStyle}" size="30" type="text" class="user_name" placeholder="User name"></div>
            <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
            <select style="display: block-inline ;width: 130px;height: 40px; font-size: 20px" name="type" id="type" >
                <option value=""employer">Employer</option>
                <option value=""candidate">Candidate</option>
            </select>
            <input style="display: block-inline;width: 80px;height: 40px; font-size: 20px" type="submit" id="sf_submit" value="Login">
            <a style="display: block;margin-top:40px;font-size:20px" href="#register"> Create new account </a>
        </div>
        
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.user_name').addEventListener('change', e=>{
        userNameInput = e.target.value;
    });
    document.querySelector('.password').addEventListener('change', e=>{
        passwordInput = e.target.value;
    });
    document.getElementById('sf_submit').addEventListener('click',e =>{
        axios.get(`http://localhost:3000/auth/users/${userNameInput}`)
        .then(response => {
            const user = response.data[0];
            if(user.password === passwordInput){
                redirectTo(user.userName);
            }else{
                passWordOrUserNameIncorrect();
            }
        }).catch(err =>{
            console.log(err);
        })
    });
}

const redirectTo = (name) =>{
    axios.post(`http://localhost:3000/state/${name}`)
    .then(response=>{
        location.replace('http://localhost:8080/');
    })
}

const passWordOrUserNameIncorrect = () =>{
    if(!document.querySelector('.notice')){
        const markup = `<div class="notice" > password Incorrect ! </div>`;
        document.querySelector('.login__form').insertAdjacentHTML('beforeend', markup);
    }
}