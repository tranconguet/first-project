import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';


const EachCompany = company => {
    const markup = `
        <div style="border: 5px brown solid;border-radius: 10px; padding: 10px; width: 500px" class="company" id="company_69312">
            <a style="color:red;font-size: 30px" href="#company/${Utility.getCompanyCodeFromUrl(company.url)}" >
                <div style="text-align: center; margin: 20px;height: 200px "><img alt="Logo" src=${company.logo}></div>
                ${company.title}
            </a>
            <p>Adress: ${company.address}</p>
            <div style="display:block; margin: 30px ">
                ${company.keySkills.slice(0,3).map(tag =>  `<div style="${Utility.tagStyle}">${tag}</div>`).join('')}
            </div>
            <div style="display:block; margin: 30px ">
                ${company.keySkills.slice(3,10).map(tag => `<div style="${Utility.tagStyle}">${tag}</div>`).join('')}
            </div>
            <a style="color:red;font-size:20px;float:right" href="#company-${Utility.getCompanyCodeFromUrl(company.url)}">Detail >>> </a>
        </div>
      `; 
    return markup;
};

const renderMore = (companyList, first, last) =>{
    const CompanyPage = `
        ${companyList.slice(first,last).map(job =>EachCompany(job)).join('')}
    `;
    document.querySelector('.company_list').insertAdjacentHTML('beforeend', CompanyPage);
}


export const renderCompanyList = companyList => {
    let firstElement = 0;
    const markup = `
        <div class="company_list">
            ${companyList.slice(0,6).map(company => EachCompany(company)).join('')}
        </div>
        <button class="see_more">See more >></button>
        `;
    elements.container.insertAdjacentHTML('beforeend', markup);
    document.querySelector('.see_more').addEventListener('click',e=>{
        firstElement+=6;
        renderMore(companyList,firstElement,firstElement+6);
    })
}

