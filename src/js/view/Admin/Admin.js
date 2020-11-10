import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderAdminPage = () => {
    const markup = `
        <div class="admin">
            <h1>ADMINISTRATOR</h1>
            <div class="select">
                <select name="slct" id="slct" onChange="change()">
                    <optgroup>
                        <option selected disabled>------</option>
                        <option value="jobs">Jobs</option>
                        <option value="companies">Company</option>
                        <option value="candidates">Candidate</option>
                    </optgroup>
                </select>
            </div>
            <div class="admin_page">
            </div>
            <a class="logout_btn" href="http://localhost:8080/">Log out</a>
        </div>
      `; 
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector(".logout_btn").addEventListener("click", logOut);
};

const logOut = () => {
    fetch('http://localhost:3000/state',{
        method:"DELETE"
    }).then()
    .catch(err=>{
        console.log(err)
    })
};