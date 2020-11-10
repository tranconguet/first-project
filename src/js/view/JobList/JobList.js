import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';



const EachJob = job => {
    const markup = `
        <div class="job" id="job_69312">
            <div style="height: 250px">
                <a class="logo" href="/${Utility.getJobCodeFromUrl(job.url)}">
                    <img alt="Logo" src=${job.employerInfo.image}>
                </a>
                <a href="/${Utility.getJobCodeFromUrl(job.url)}" style="font-size: 40px; color:blue;">${job.title}</a>
                <h3 style="font-size: 20px; margin: 20px">Adress: ${job.address}</h3>
                <h2>${job.employerInfo.shortDescription} ...</h2>
            </div>
            <div>
                ${job.tagList.slice(0,3).map(tag => `<a href="#search-${tag}"><div style="${Utility.tagStyle}">${tag}</div></a>`).join('')}
            </div>
        </div>
      `;
    return markup;
};

const renderMore = (jobList, first, last) =>{
    const JobsPage = `
        ${jobList.slice(first,last).map(job =>EachJob(job)).join('')}
    `;
    document.querySelector('.page').insertAdjacentHTML('beforeend', JobsPage);
}


export const renderJobList = jobList => {
    let firstElement = 0;
    const JobsPage = `
        <div class="page">
            ${jobList.slice(0,4).map(job =>EachJob(job)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
    elements.container.insertAdjacentHTML('beforeend', JobsPage);
    document.querySelector('.see_more').addEventListener('click',e=>{
        firstElement+=4;
        renderMore(jobList,firstElement,firstElement+4);
    })
};

export const renderSearchJobList = jobList => {
    let firstElement = 0;
    const JobsPage = `
        <div class="page">
            <h1>Number of results: ${jobList.length}</h1>
            ${jobList.slice(0,4).map(job =>EachJob(job)).join('')}
        </div>
        <button class="see_more">See more >></button>
    `;
    elements.container.insertAdjacentHTML('beforeend', JobsPage);
    document.querySelector('.see_more').addEventListener('click',e=>{
        firstElement+=4;
        renderMore(jobList,firstElement,firstElement+4);
    })
}



