import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';

const tagStyle = "display: inline;background-color: brown; margin: 10px;padding: 10px;border-radius: 10px;font-size:15px;"

const EachCompany = company => {
    const markup = `
        <div style="border: 5px brown solid;border-radius: 10px; padding: 10px; width: 500px" class="company" id="company_69312">
            <a style="color:red;font-size: 30px" href="#company-${Utility.getCompanyCodeFromUrl(company.url)}" >
                <div style="text-align: center; margin: 20px;height: 200px "><img alt="Logo" src=${company.logo}></div>
                ${company.title}
            </a>
            <p>Adress: ${company.address}</p>
            <div style="display:block; margin: 30px ">
                ${company.keySkills.slice(0,3).map(tag => `<div style="${tagStyle}">${tag}</div>`).join('')}
            </div>
            <div style="display:block; margin: 30px ">
                ${company.keySkills.slice(3,10).map(tag => `<div style="${tagStyle}">${tag}</div>`).join('')}
            </div>
            <a style="color:red;font-size:20px;float:right" href="#company-${Utility.getCompanyCodeFromUrl(company.url)}">Detail >>> </a>
        </div>
      `; 
    return markup;
};

export const renderCompanyList = companyList => {
    const list = companyList.map(company => EachCompany(company)).join('');
    const markup = `
    <div class="company_list">
        ${list}
    </div>`;
    elements.container.insertAdjacentHTML('beforeend', markup);
}

