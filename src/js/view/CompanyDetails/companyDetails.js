import {elements} from '../../utility/elements';

const tagStyle = "display: inline;background-color: brown; margin: 10px;padding: 10px;border-radius: 10px;font-size:15px;"

export const renderCompanyPage = company =>{
    const markup = `
    <div class="company_details" id="job_69312">
        <img alt="background" href="" width="100%" height="auto" src=${company.img}>
        <div style="margin-top: 30px;">
            <img style="float: left" alt="logo" src=${company.logo}>
            <div style="padding: 30px; padding-left: 200px">
                <h1 >${company.title}</h1>
                <p>${company.address}</p>
            </div>
            
        </div>
    </div>
    `;
    elements.container.insertAdjacentHTML('beforeend', markup);
}