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


const jobs = require('../../data/jobs-data.json');

const companies = require('../../data/company-data.json');
const jobNames = jobs.map(job => Utility.getJobCodeFromUrl(job.url));
const companyNames = companies.map(com => `company/${Utility.getCompanyCodeFromUrl(com.url)}`);

const state = {};

['hashchange','load'].forEach(event => window.addEventListener(event, e =>{
    const link = window.location.hash.replace('#', '');
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
            renderJobsPage(jobs);
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
            renderProfile();
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
    const index = jobNames.findIndex(el => el === jobCode);
    Utility.clearPage();
    JobDetails.renderJobPage(jobs[index]);
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
const renderJobsPage = (jobs) =>{
    Utility.clearPage();    
    JobList.renderJobList(jobs);
}
const renderProfile = () =>{
    Utility.clearPage();    
    Profile.renderProfile();
}

const renderBlog = () => {
    Utility.clearPage(); 
    Blog.renderBLog();
}

const renderAbouUs = () => {
    Utility.clearPage(); 
    AboutUs.renderAboutUs();
}



