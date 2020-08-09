import {elements} from '../../utility/elements';



export const renderJobPage = job =>{
    const markup = `
    <div class="job_details" id="job_69312">
        <div class="about_employers">
            <a style="text-align: center; display: block; margin-bottom: 20px" href=#${job.employerInfo.link.slice(1,100)}>
                <img  alt="logo" witdh="auto" height="auto" src=${job.employerInfo.image} >
            </a>
            <a href = #${job.employerInfo.link.slice(1,100)}>
                <h1 style="text-decoration: none; color: brown;font-size: 20px;">Company: ${job.employerInfo.name}</h1>
            </a>
            <p>${job.employerInfo.shortDescription}</p>

            <a href=#${job.employerInfo.link.slice(1,100)}>
                <h3 style="text-decoration: none; color: brown;">Detail ...</h3>
            </a>

        </div>
        <div class="about_job">
            <h1>${job.title}</h1>
            <div style="margin: 30px">${job.tagList.map(tag => `<div style="${Utility.tagStyle}">${tag}</div>`).join('')}</div>
            <p>Address: ${job.address}</p>
            <p>Time posted:${job.timePosted}</p>
            <ul>
                <h2>Top 3 reasons to join us:</h2><br>
                ${job.threeReasons.map(reason => `<li>${reason}</li>`).join('')}
            </ul>
            <ul>
                <h2>Job description:</h2><br>
                ${job.jobDescriptions.map(reason => `<li>${reason}</li>`).join('')}
            </ul>
            <ul>
                <h2>Your Skills and Experience:</h2><br>
                ${job.experiences.map(reason => `<li>${reason}</li>`).join('')}
            </ul>
            <ul>
                <h2>Why You'll Love Working Here</h2><br>
                ${job.whyLoveWorkingHere.map(reason => `<li>${reason}</li>`).join('')}
            </ul>
        </div>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}