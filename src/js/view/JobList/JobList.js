import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


const tagStyle = "display: inline;background-color: brown; margin: 10px;padding: 10px;border-radius: 10px;font-size:15px;"

const EachJob = job => {
    const markup = `
        <div class="job" id="job_69312">
            <div style="height: 250px">
                <a class="logo" href="#${Utility.getJobCodeFromUrl(job.url)}">
                    <img alt="Logo" src=${job.employerInfo.image}>
                </a>
                <a href="#${Utility.getJobCodeFromUrl(job.url)}" style="font-size: 40px; color:blue;">${job.title}</a>
                <h3 style="font-size: 20px; margin: 20px">Adress: ${job.address}</h3>
                <h2>${job.employerInfo.shortDescription} ...</h2>
            </div>
            <div>
                ${job.tagList.slice(0,3).map(tag => `<div style="${tagStyle}">${tag}</div>`).join('')}
            </div>
        </div>
      `;
    return markup;
};

export const renderJobList = jobList => {
    jobList.forEach(job => {
        elements.container.insertAdjacentHTML('beforeend', EachJob(job));
    })
}

