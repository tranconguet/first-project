import { elements } from "../../utility/elements";
import axios from "axios";
import * as Utility from '../../utility/Utility';


const allSkill = ['SQL','Tester','HTML5','UI-UX','Designer','MySQL','Java','Spring','JavaScript','NodeJS','ReactJS','iOS','Android','CSS','Python','PHP','Kotlin','Wordpress','C#','.NET','React Native','Networking','Golang','VueJS','Magento','Laravel','Angular','Oracle'];

export const renderEmployerProfile = (info) => {
    const markup = `
      <div id="container">
          <strong style="font-size: 40px">Company Information</strong>
          <form >
              <div class="left-container">
                  <div>
                      <label for="fullname"><p>Company Name: </p></label>
                      <input class="input_field" type="text" name="fullName" id="fullname" value="${info.fullName ? info.fullName : ''}" required>
                      <br>
                  </div>
                  <div>
                      <label for="dateofbirth"><p>Actived since :</p></label>
                      <input class="input_field" type="date" name="activedate" id="activedate" value="${info.activeDate}" >
                  </div>
                  
                  
                  <div>
                      <label for="address"><p>Location:</p></label>
                      <input class="input_field" type="text" name="address" id="address" value="${info.address ? info.address : ''}" required>
                  
                  </div>
  
                  <div>
                      <label for="phonenumber"><p>Hotline: </p></label>
                      <input class="input_field" type="text" name="phoneNumber" id="phonenumber" value="${info.phoneNumber ? info.phoneNumber : ''}"required>
                  </div>
                  <div>
                      <label for="email"><p>Email:</p></label>
                      <input class="input_field" type="text" name="email" id="email" value="${info.email ? info.email : ''}" >
                  </div>
                  <div>
                      <input style="border-radius: 30px" type="image" src="https://i.pinimg.com/originals/72/c8/1b/72c81be85e6df82ac04e592648911b92.jpg" alt="Submit" width="300" height="300">
                  </div>
              </div>
  
              <div class="right-container">
                  <div>
                      <label for="habit">
                          <p>Majors: </p>
                      </label>
                      <input class="input_field" type="text" id="major" name="major" value="${info.major ? info.major : ''}">
                  </div>
                  <div>
                      <label ><p>Our key skills: </p></label>
                      <div>
                      <select name="skills" id="skill_select" style="height: 40px; font-size: 20px">
                          <option value="">-Choose your skill-</option>
                          ${allSkill.map(el => `<option value="${el}">${el}</option>`).join('')}
                      </select>
                      <div class="add_btn"> Add </div>    
                      </div>
                      
                      <div class="skills">
                          ${info.skills.map(tag => `<div class="skill" style="${Utility.tagStyle}">${tag} [x]</div>`).join('')}
                      </div>
                  </div>
                  <div>
                      <label ><p>Overview: </p></label>
                      <textarea style="font-size: 20px" name="experience" id="overviews" cols="50" rows="10">${info.overviews ? info.overviews : ''}</textarea>
                  </div>
                  <div>
                      <label ><p>Benefits: </p></label>
                      <textarea style="font-size: 20px" name="experience" id="benefits" cols="50" rows="8">${info.benefits ? info.benefits : ''}</textarea>
                  </div>
              </div>
          </form>
          <input class="btn-update" type="submit"  value="Update">
          <a class="btn-findcandidate" href="#"> Find candidate >> </a>
          <a class="logout_btn" href="http://localhost:8080/">Log out</a>
      </div>
      `;
    elements.container.insertAdjacentHTML("beforeend", markup);
    document.querySelector(".add_btn").addEventListener('click',addSkills);
    let list = document.querySelectorAll('div.skills > div');
    list = [...list];
    list.forEach(el => el.addEventListener('click', e => {deleteSkill(e.target)}));
    document.querySelector(".logout_btn").addEventListener("click", logOut);
    document.querySelector(".btn-update").addEventListener("click", () => update(info.userName,info.type));
};


export const renderCandidateProfile = (info) => {
  const isMale = info.sex === "male" ? "checked" : "";
  const isFemale = info.sex === "female" ? "checked" : "";
  const markup = `
    <div id="container">
        <strong style="font-size: 40px">Profile</strong>
        <form action="" method="get">
            <div class="left-container">
                <div>
                    <label for="fullname"><p>Full Name: </p></label>
                    <input class="input_field" type="text" name="fullName" id="fullname" value="${info.fullName ? info.fullName : ''}"required>
                    <br>
                </div>
                <div>
                    <p style="display: inline;">Sex: </p>
                    <input type="radio" name="gender" value="male" id="male" ${isMale}>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" value="female" id="female" ${isFemale}>
                    <label for="female">Female</label>
                </div>
                <div>
                    <label for="dateofbirth"><p>Date of birth:</p></label>
                    <input class="input_field" type="date" name="dateOfBirth" id="dateofbirth" value="${info.dateOfBirth ? info.dateOfBirth : ''}">
                </div>
                
                
                <div>
                    <label for="address"><p>Address:</p></label>
                    <input class="input_field" type="text" name="address" id="address" value="${info.address ? info.address : ''}"required>
                
                </div>

                <div>
                    <label for="phonenumber"><p>Phone number: </p></label>
                    <input class="input_field" type="text" name="phoneNumber" id="phonenumber" value="${info.phoneNumber ? info.phoneNumber : ''}"required>
            
                </div>
                <div>
                    <label for="email"><p>Email:</p></label>
                    <input class="input_field" type="text" name="email" id="email" value="${info.email ? info.email : ''}">
                </div>
                <div>
                    <label >
                        <p>Hobbies: </p>
                    </label>
                    <input class="input_field" type="text" id="habit" name="habit" value="${info.hobbies ? info.hobbies : ''}">
                </div>
            </div>

            <div class="right-container">
                <div>
                    <label for="grade"><p>Literacy: </p></label>
                    <input class="input_field" type="text" name="grade" id="grade" value="${info.literacy ? info.literacy : ''}"required>
                </div>
                <div>
                    <label >
                        <p>GPA: </p>
                    </label>
                    <input class="input_field" type="text" id="gpa" value="${info.gpa ? info.gpa : ''}">
                </div>
                <div>
                    <label><p>Your skills:</p></label>
                    <div>
                    <select name="skills" id="skill_select" style="height: 40px; font-size: 20px">
                        <option value="">-Choose your skill-</option>
                        ${allSkill.map(el => `<option value="${el}">${el}</option>`).join('')}
                    </select>
                    <div class="add_btn"> Add </div>    
                    </div>
                    
                    <div class="skills">
                        ${info.skills.map(tag => `<div class="skill" style="${Utility.tagStyle}">${tag} [x]</div>`).join('')}
                    </div>
                </div>  
                <div>
                    <label for="experience"><p>Experiences: </p></label>
                    <textarea style="font-size: 20px" name="experience" id="experiences" cols="40" rows="6"> ${info.experiences ? info.experiences : ''}</textarea>
                </div>
            </div>
            <input class="btn-update" type="submit"  value="Update">
            <a class="btn-findjob" href="#search-${info.skills.join(' ')}">Find jobs >></a>
        </form>
        <a class="logout_btn" href="http://localhost:8080/">Log out</a>
    </div>
    `;
  elements.container.insertAdjacentHTML("beforeend", markup);
  document.querySelector(".add_btn").addEventListener('click',addSkills);
  let list = document.querySelectorAll('div.skills > div');
  list = [...list];
  list.forEach(el => el.addEventListener('click', e => {deleteSkill(e.target)}));
  document.querySelector(".logout_btn").addEventListener("click", logOut);
  document.querySelector(".btn-update").addEventListener("click", () => update(info.userName,info.type));
};

const addSkills = ()=>{
    const newSkills = document.getElementById("skill_select").value;
    if(newSkills !== '' && !getAllCurrentSkill().includes(newSkills)){
        const markup = `<div class="skill" style="${Utility.tagStyle}">${newSkills} [x]</div>`;
        document.querySelector('.skills').insertAdjacentHTML('beforeend',markup);
    }
}

const deleteSkill = (node)=>{
    console.log(node.parentNode.removeChild(node));
}

const getAllCurrentSkill = () =>{
    let list = document.querySelectorAll('div.skills > div');
    list = [...list];
    return list.map(el => el.innerText.substring(0, el.innerText.length - 4));
}
const update = async (userName, type) => {
    let data;
    if(type === 'employer'){
        data = {
            userName: userName,
            type: type,
            fullName: document.getElementById("fullname").value,
            activeDate: document.getElementById("activedate").value,
            address: document.getElementById("address").value,
            phoneNumber: document.getElementById("phonenumber").value,
            email: document.getElementById("email").value,
            major: document.getElementById("major").value,
            skills: getAllCurrentSkill(),
            overviews: document.getElementById("overviews").value,
            benefits: document.getElementById("benefits").value
        }
    }
    if(type === 'candidate'){
        let sex = document.getElementById("male").checked ? 'male' : 'female';
        data = {
            userName: userName,
            type: type,
            fullName: document.getElementById("fullname").value,
            sex: sex,
            dateOfBirth: document.getElementById("dateofbirth").value,
            address: document.getElementById("address").value,
            phoneNumber: document.getElementById("phonenumber").value,
            email: document.getElementById("email").value,
            hobbies: document.getElementById("habit").value,
            literacy: document.getElementById("grade").value,
            gpa:document.getElementById("gpa").value,
            skills: getAllCurrentSkill(),
            experiences: document.getElementById("experiences").value
        };
    }
    await axios.patch(`http://localhost:3000/auth/users/${userName}`,data)
    .then(response=>{
        location.replace('http://localhost:8080/');
    }).catch(err=>{
    });
};
const logOut = () => {
  axios
    .delete("http://localhost:3000/state")
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });
};
