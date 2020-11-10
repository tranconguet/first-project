import {elements} from './utility/elements'
import * as Utility from './utility/Utility'
import * as JobList from './view/JobList/JobList'
import * as Home from './view/Home/home'
import * as CompanyList from './view/Companies/companyList'
import * as JobDetails from './view/JobDetails/jobDetails'
import * as CompanyDetails from './view/CompanyDetails/companyDetails'
import * as Login from './view/Login/Login'
import * as Profile from './view/Profile/profile'
import * as Blog from './view/Blog/Blog'
import * as Register from './view/Register/register'
import * as AboutUs from './view/AboutUs/AboutUs'
import * as Candidates from './view/Candidates/Candidates'
import * as Admin from './view/Admin/Admin'
import axios from 'axios'



const jobs = require('../../data/jobs-data.json');

const companies = require('../../data/company-data.json');
const jobNames = jobs.map(job => Utility.getJobCodeFromUrl(job.url));
const companyNames = companies.map(com => `companies/${Utility.getCompanyCodeFromUrl(com.url)}`);

const state = {};

const fetchData = async () => {
    await axios.get('http://localhost:3000/state')
    .then(async response =>{
    console.log(response.data[0]);
    if(response.data[0]){
        state.user = response.data[0];
        console.log('dang dang nhap');
        document.querySelector('.switchState').innerHTML ='';
        document.querySelector('.switchState').insertAdjacentHTML('beforeend',`
            <a class="profile" href="/profile">Profile</a>`);
        if(response.data[0].userName === 'admin'){
            document.querySelector('.switchState').innerHTML ='';
            document.querySelector('.switchState').insertAdjacentHTML('beforeend',
                `<a class="profile" href="/admin">Admin</a>`);
        }
            
        await axios.get(`http://localhost:3000/auth/users/${state.user.userName}`)
        .then(response =>{
                console.log(response.data[0]);
                state.userProfile = response.data[0];
                elements.header.insertAdjacentHTML('beforeend',`<p id="say_hello">Hi ${state.userProfile.fullName ? state.userProfile.fullName : state.userProfile.userName} !</p>`);
        }).catch(err =>{
        console.log(err);})
    }else{
        console.log('khong ai dang nhap');
        document.querySelector('.switchState').innerHTML ='';
        document.querySelector('.switchState').insertAdjacentHTML('beforeend',`
        <a class="signin" href="/signin">Sign in</a>
        `);
    }}).catch(err =>{
    console.log(err);
});};

fetchData()


document.querySelector('.search_field').addEventListener('change',e=>{
    document.getElementById('search').setAttribute("href",`http://localhost:8080/search-${e.target.value}`);
});


['hashchange','load'].forEach(event => window.addEventListener(event, e =>{
    const link = window.location.href
    const path = link.slice(22,link.length)
    console.log(path)
    if(link.includes('search')){
        const searchWord = path.slice(7);
        console.log(searchWord);
        renderSeachingJobsPage(searchWord);
        return;
    }
    if(jobNames.find(el => el === path)){
        renderEachJobPage(path);
        return;
    }
    if(companyNames.find(el => el === path)){
        console.log('find!')
        renderEachCompanyPage(path);
        return;
    }
    switch(path){
        case '':
            renderHomePage()
            return;
        case 'jobs':
            renderJobsPage()
            return
        case 'companies':
            renderCompaniesPage()
            return
        case 'blogs':
            renderBlog()
            return
        case 'signin':
            renderLogin()
            return
        case 'register':
            renderRegister()
            return
        case 'aboutus':
            renderAbouUs()
            return;
        case 'profile':
            renderProfile()
            return;
        case 'admin':
            renderAdmin()
            return;
        case 'find-candidates':
            renderCandidates(state.userProfile.skills)
            return;
        case 'defaut':
            renderErorr();
    }
}));

const renderLogin = () =>{
    Utility.clearPage();
    Login.renderLogin();
}

const renderRegister = () =>{
    Utility.clearPage();
    Register.renderRegister();
}

const renderEachJobPage = (jobCode) => {
    Utility.clearPage();
    axios.get(`http://localhost:3000/jobs/${jobCode}`)
    .then(response=>{
        JobDetails.renderJobPage(response.data);
    }
    ).catch(err=>{
        console.log(err);
    });   
}
const renderSeachingJobsPage = search =>{
    Utility.clearPage();
    axios.get(`http://localhost:3000/jobs/search/${search}`)
    .then(response=>{
        JobList.renderSearchJobList(response.data);
    }
    ).catch(err=>{
        console.log(err);
    });   
}

const renderEachCompanyPage = (companyCode) => {
    const index = companyNames.findIndex(el => el === companyCode);
    Utility.clearPage();
    CompanyDetails.renderCompanyPage(companies[index]);
}

const renderCompaniesPage = async () =>{
    Utility.clearPage();
    await axios.get('http://localhost:3000/companies')
    .then(response=>{
        if(response.data)
            CompanyList.renderCompanyList(companies);
    }
    ).catch(err=>{
        console.log(err);
    });   
}
const renderHomePage = () =>{
    Utility.clearPage();
    Home.renderHomePage();
};
const renderJobsPage = async () =>{
    Utility.clearPage();
    await axios.get('http://localhost:3000/jobs')
    .then(response=>{
        if(response.data)
            JobList.renderJobList(response.data);
    }
    ).catch(err=>{
        console.log(err);
    });   
}
const renderProfile = () =>{
    console.log(state.user)
    Utility.clearPage()
    axios.get('http://localhost:3000/state')
    .then(response => {
        const userName = response.data[0].userName
        axios.get(`http://localhost:3000/auth/users/${userName}`)
        .then(response => {
            const userInfo = response.data[0]
            console.log(userInfo)
            if(userInfo.type === 'candidate')
                Profile.renderCandidateProfile(userInfo);
            else
                Profile.renderEmployerProfile(userInfo);
        })
    })
}
const renderAdmin = () => {
    Utility.clearPage()
    Admin.renderAdminPage()
}
const renderCandidates = (skills) =>{
    Utility.clearPage();
    Candidates.renderCandidates(skills);
}

const renderBlog = () => {
    Utility.clearPage(); 
    Blog.renderBLog();
}

const renderAbouUs = () => {
    Utility.clearPage(); 
    AboutUs.renderAboutUs();
}


function change(){
    console.log('hello')
}