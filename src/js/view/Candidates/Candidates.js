import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';
import axios from 'axios';


export const renderCandidates = companySkills =>{
    axios.get('http://localhost:3000/auth/')
    .then(response => {
        const candidates = response.data;
        const data = candidates.filter(el => {
            const isIncludes = el.skills.map(skill=> companySkills.includes(skill));
            return isIncludes.find(cur => cur === true) && el.type === 'candidate';
        });
        const markup =`
            <div class="candidates_page">
                <p style="font-size: 30px">Number of results: ${data.length}</p>
                ${data.map(el => `
                    <div class="candidate">
                        <p>Candidate name: ${el.fullName}</p>
                        <p>Experiences: ${el.experiences}</p>
                        <p>Skills: ${el.skills.map(tag => `<a href="search-${tag}"><div style="${Utility.tagStyle}">${tag}</div></a>`).join('')}</p>
                        <p>Email: ${el.email}</p>
                    </div>
                `)}
            </div>
            `;
        elements.container.insertAdjacentHTML('beforeend', markup);})
        .catch(err=>{
        console.log(err);
    })
}