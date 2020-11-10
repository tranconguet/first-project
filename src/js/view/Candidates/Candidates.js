import {elements} from '../../utility/elements';
import * as Utility from '../../utility/Utility';
import axios from 'axios';


export const renderCandidates = () =>{
    axios.get('http://localhost:3000/auth/')
    .then(response => {
        const candidates = response.data;
        const data = candidates.filter(el => {
            return el.type === 'candidate';
        });
        const markup =`
            <div class="candidates_page">
                <p style="font-size: 30px">Number of results: ${data.length}</p>
                ${data.map(el => `
                    <div class="candidate">
                        <p>Candidate name: ${el.fullName}</p>
                        <p>Experiences: ${el.experiences}</p>
                        <p>Skills:</p> 
                        ${el.skills.map(tag => `
                            <a href="search-${tag}">
                                <div style="${Utility.tagStyle}">${tag}</div>
                            </a>`).join('')}
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