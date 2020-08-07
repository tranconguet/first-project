import {elements} from './utility/elements';
import * as Utility from './utility/Utility';
import * as JobList from './view/JobList/JobList';
import * as Home from './view/Home/home';
import * as CompanyList from './view/Companies/companyList';
import * as JobDetails from './view/JobDetails/jobDetails';
import * as CompanyDetails from './view/CompanyDetails/companyDetails';


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
            renderJobsPage();
            return;
        case 'companies':
            renderCompaniesPage();
            return;
        case 'blogs':
            renderBlog();
            return;
        case 'aboutus':
            renderAbouUs();
            return;
        case 'defaut':
            renderErorr();
    }
}));

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
const renderJobsPage = () =>{
    Utility.clearPage();    
    JobList.renderJobList(jobs);
}

const renderBlog = () => {
    // Thi code o dayy
    // => vao file Blog viet 
}

const renderAbouUs = () => {

    // Thach code o day
    // => vao file AboutUs
}

