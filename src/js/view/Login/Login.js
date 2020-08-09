import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility'; 

export const renderLogin = () =>{
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
        
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
}