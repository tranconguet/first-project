import {elements} from './elements';


export const clearPage = () =>{
    elements.container.innerHTML = '';
}

export const getCompanyCodeFromUrl = url =>{
    return url.slice(29, url.length);
}

export const getJobCodeFromUrl = url =>{
    return url.slice(28, url.length);
}