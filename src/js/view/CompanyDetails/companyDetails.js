import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


export const renderCompanyPage = company =>{
    const markup = `
    <div class="company_details" id="job_69312">
        <div style="text-align: center;"><img alt="background" href="" width="auto" height="350" src=${company.img}></div>
        <div style="margin-top: 30px;">
            <img style="float: left" alt="logo" src=${company.logo}>
            <div style="padding: 30px; padding-left: 200px">
                <h1 >${company.title}</h1>
                <p>${company.address}</p>
                <div style="margin: 30px">${company.keySkills.map(tag => `<div style="${Utility.tagStyle}">${tag}</div>`).join('')}</div>
            </div>
            
            <h1><strong>Overview:</strong></h1><br>
            ${Utility.convertDocument(company.overviews)}
            <br><br>
            <h1><strong>Why you'll love working here:</strong></h1><br>
            ${Utility.convertDocument(company.whyYouLoveWorkingHere)}
        </div>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}