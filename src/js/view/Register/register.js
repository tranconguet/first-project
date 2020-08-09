import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility'; 


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
            <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="User name"></div>
            <div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Email"></div>
            <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
            <div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div>
            <input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="SIGN UP">
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
}

const renderEmployerRegister = () =>{
    const markup =`
        <div class="signup__form" style="${Utility.signUpStyle}">
            <h1>REGISTER FOR EMPLOYER</h1><br>
            <div class="register_employer">
                <div>
                    <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="User name"></div>
                    <div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Email"></div>
                    <div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
                    <div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div>
                </div>
                <div style="text-align: left">
                    <div><input style="${Utility.formStyle}" type="text" class="user_name" placeholder="Your team or company name"></div>
                    <div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Address"></div>
                    <div><input style="${Utility.formStyle}" type="text" class="email" placeholder="Company Website"></div>
                    <p>What kinds of candidate are you looking for ? </p>
                    <div><input style="${Utility.formStyle};width:400px;" type="text" class="email" placeholder=""></div>
                    <p>Technology your company/team is using ?</p>
                    <div><input style="${Utility.formStyle};width:400px;" type="text" class="email" placeholder=""></div>
                </div>
                
            </div>
            
            <input style="display: block-inline;width: 100px;height: 40px; font-size: 20px" type="submit" class="type_register_submit" value="SIGN UP">
        </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
}


{/* <div><input style="${Utility.formStyle}" size="30" type="text" class="user_name" placeholder="User name"></div>
<div><input style="${Utility.formStyle}" size="30" type="text" class="email" placeholder="Email"></div>
<div><input style="${Utility.formStyle}" type="password" class="password" placeholder="Password"></div>
<div><input style="${Utility.formStyle}" type="password" class="password_again" placeholder="Password again"></div> */}