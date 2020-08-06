import {elements} from './utility/elements';
import * as Utility from './utility/Utility';
import * as JobList from './view/JobList/JobList';
import * as Home from './view/Home/home';
import * as CompanyList from './view/Companies/companyList';


const jobs = require('../../data/jobs-data.json');
const companies = require('../../data/company-data.json')

const state = {};

['hashchange','load'].forEach(event => window.addEventListener(event, e =>{
    const link = window.location.hash.replace('#', '');
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
            renderJobsPage();
            return;
        case 'aboutus':
            renderJobsPage();
            return;
    }
}));

const controlSearch = async () => {
    
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

