import {elements} from './utility/elements';
import * as Utility from './utility/Utility';
import * as JobList from './view/JobList/JobList';
import * as Home from './view/Home/home';
import * as CompanyList from './view/Companies/companyList';
import * as JobDetails from './view/JobDetails/jobDetails';
import * as CompanyDetails from './view/CompanyDetails/companyDetails';
import * as Login from './view/Login/Login';
import * as Profile from './view/Profile/profile';
import * as Blog from './view/Blog/Blog';
import * as Register from './view/Register/register';
import * as AboutUs from './view/AboutUs/AboutUs';
import axios from 'axios';



const jobs = require('../../data/jobs-data.json');

const companies = require('../../data/company-data.json');
const jobNames = jobs.map(job => Utility.getJobCodeFromUrl(job.url));
const companyNames = companies.map(com => `companies/${Utility.getCompanyCodeFromUrl(com.url)}`);

const state = {};

(async() => {
    await axios.get('http://localhost:3000/state')
    .then(response =>{
    console.log(response.data[0]);
    if(response.data[0]){
        state.user = response.data[0];
    }}).catch(err =>{
    console.log(err);
});})().then(response=>{
    if(state.user){
        console.log('dang dang nhap');
        document.querySelector('.switchState').innerHTML ='';
        document.querySelector('.switchState').insertAdjacentHTML('beforeend',`
        <a class="profile" href="#profile">Profile</a>
        `);
        axios.get(`http://localhost:3000/auth/users/${state.user.userName}`)
        .then(response =>{
            console.log(response.data[0]);
            state.userProfile = response.data[0];
            elements.header.insertAdjacentHTML('beforeend',`<p id="say_hello">Hi ${state.userProfile.fullName ? state.userProfile.fullName : state.userProfile.userName} !</p>`);
        }).catch(err =>{
        console.log(err);})}
    else{
        console.log('khong ai dang nhap');
        document.querySelector('.switchState').innerHTML ='';
        document.querySelector('.switchState').insertAdjacentHTML('beforeend',`
        <a class="signin" href="#signin">Sign in</a>
        `);
    }});


document.querySelector('.search_field').addEventListener('change',e=>{
    document.getElementById('search').setAttribute("href",`#search-${e.target.value}`);
});


['hashchange','load'].forEach(event => window.addEventListener(event, e =>{
    const link = window.location.hash.replace('#', '');
    if(link.includes('search')){
        const searchWord = link.slice(7);
        console.log(searchWord);
        renderSeachingJobsPage(searchWord);
        return;
    }
    if(jobNames.find(el => el === link)){
        renderEachJobPage(link);
        return;
    }
    if(companyNames.find(el => el === link)){
        console.log('find!')
        renderEachCompanyPage(link);
        return;
    }
    switch(link){
        case '':
            renderHomePage();
            return;
        case 'jobs':
            renderJobsPage();
            return;
        case 'companies':
            renderCompaniesPage();
            return;
        case 'blogs':
            renderBlog();
            return;
        case 'signin':
            renderLogin();
            return;
        case 'register':
            renderRegister();
            return;
        case 'aboutus':
            renderAbouUs();
            return;
        case 'profile':
            if(state.userProfile)
                renderProfile(state.userProfile);
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

const renderCompaniesPage = () =>{
    Utility.clearPage();
    CompanyList.renderCompanyList(companies);
}
const renderHomePage = () =>{
    Utility.clearPage();
    Home.renderHomePage();
};
const renderJobsPage = () =>{
    Utility.clearPage();
    axios.get('http://localhost:3000/jobs')
    .then(response=>{
        JobList.renderJobList(response.data);
    }
    ).catch(err=>{
        console.log(err);
    });   
}
const renderProfile = (userInfo) =>{
    Utility.clearPage();
    if(userInfo.type === 'candidate')
        Profile.renderCandidateProfile(userInfo);
    else
        Profile.renderEmployerProfile(userInfo);
}

const renderBlog = () => {
    Utility.clearPage(); 
    Blog.renderBLog();
}

const renderAbouUs = () => {
    Utility.clearPage(); 
    AboutUs.renderAboutUs();
}



