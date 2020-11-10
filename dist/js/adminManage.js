
const change = async () =>{
    const value = document.getElementById('slct').value
    switch(value){
        case 'jobs':
            renderData('jobs')
            break
        case 'companies':
            renderData('companies')
            break
        case 'candidates':
            renderData('auth')
            break
        default:
            clearPage()
    }
}

const clearPage = () =>{
    document.querySelector('.admin_page').innerHTML = ''
}
const remove = (title, type)=> {
    const confirmed = confirm("Do you want to delete " + title + " ?")
    if(confirmed){
        fetch(`http://localhost:3000/${type}/${title}`,{
            method: 'DELETE'
        }).then(response=>{
            renderData(type)
        })
    }else{
        alert("cancel")
    }
}
const fix = () => {
    alert("This feature is not available now ...")
}
const add = (type) => {
    if(type === 'auth')
        alert("This feature is not available now ...")
    else
        renderAddForm(type)
}
const renderData = async (type) => {
    console.log('hello')
    clearPage()
    await fetch(`http://localhost:3000/${type}`)
        .then(response =>response.json())
        .then(data=>{
            const markup =`
                <div class="add_button" onClick="add('${type}')">
                    Add
                    <img src="../images/add.svg" height=30/>
                </div>
                <table>
                    <tr>
                    <th>Title</th>
                    <th class="change_unit">Change</th>
                    <th class="delete_unit">Delete</th>
                    </tr>
                    ${data.map(el =>{   
                        let title
                        let url
                        if(el.title) title = el.title
                        else title = el.userName
                        if(type === 'jobs')
                            url = getJobCodeFromUrl(el.url)
                        if(type === 'companies')
                            url = 'companies/' + getCompanyCodeFromUrl(el.url)

                        return `<tr>
                            <th><a href="/${url}">${title}</a></th>
                            <th class="change_unit"><img class="change_button" onClick="fix('${title}','${type}')" src="../images/fix.svg" height=20/></th>
                            <th class="delete_unit"><img class="delete_button" onClick="remove('${title}','${type}')" src="../images/delete.svg" height=20/></th>
                        </tr>
                        `}).join('')}
                </table>
                `
            document.querySelector('.admin_page').insertAdjacentHTML('beforeend', markup)
        })
}

const renderAddForm = (type) => {
    clearPage()
    const markup = `
    <div id="container">
        <form action="" method="get">
            <div class="left-container">

                <div>
                    <label><p>Title:</p></label>
                    <input class="input_field" type="text" id="titlee" value="" required>
                </div>

                <div>
                    <label><p>Url:</p></label>
                    <input class="input_field" type="text" id="url" value="" required>
                </div>

                <div>
                    <label><p>Employer Name:</p></label>
                    <input class="input_field" type="text" id="employerName"value="" required>
                </div>

                <div>
                    <label><p>Short Descriptions:</p></label>
                    <input class="input_field" type="text" id="shortDescriptions" value="" required>
                </div>
                <div>
                    <label><p>Link logo:</p></label>
                    <input class="input_field" type="text" id="logoLink" value="" required>
                </div>
                <div>
                    <label><p>Required technology:</p></label>
                    <input class="input_field" type="text" id="tagList" value="" required>
                </div>
                <div>
                    <label><p>Address:</p></label>
                    <input class="input_field" type="text" id="address" value="" required>
                </div>
            </div>

            <div class="right-container">
                <div>
                    <label><p>Reasons why:</p></label>
                    <textarea style="font-size: 20px" name="experience" id="reasons" cols="40" rows="6"></textarea>
                </div>
                <div>
                    <label><p>Job descriptions:</p></label>
                    <textarea style="font-size: 20px" name="experience" id="jobDescriptions" cols="40" rows="6"></textarea>
                </div>
                <div>
                    <label><p>Required experiences:</p></label>
                    <textarea style="font-size: 20px" name="experience" id="experiences" cols="40" rows="6"></textarea>
                </div>
                <div>
                    <label><p>Why you love working here:</p></label>
                    <textarea style="font-size: 20px" name="experience" id="whyLoveWorkingHere" cols="40" rows="6"></textarea>
                </div>
                <div>
                    <label><p>Contact:</p></label>
                    <input class="input_field" type="text" id="contact" value="" required>
                </div>
            </div>
        </form>
    </div>
    <div class="add_job"><button class="add_job_button">Add</button></div>
    
    `
    document.querySelector('.admin_page').insertAdjacentHTML('beforeend', markup)
    document.querySelector('.add_job_button').addEventListener('click',addNewJob(type))
}

const addNewJob = (type) => {
    const title = document.getElementById('titlee').value
    const url = document.getElementById('url').value
    const employerName = document.getElementById('employerName').value
    const shortDescriptions = document.getElementById('shortDescriptions').value
    const logoLink = document.getElementById('logoLink').value
    const tagList = document.getElementById('tagList').value.split(' ')
    const address = document.getElementById('address').value
    const reasons = document.getElementById('reasons').value
    const jobDescriptions = document.getElementById('jobDescriptions').value
    const experiences = document.getElementById('experiences').value
    const whyLoveWorkingHere = document.getElementById('whyLoveWorkingHere').value
    const contact = document.getElementById('contact').value
    const data = {
        title: title,
        url: url,
        employerInfo: {
            name: employerName,
            shortDescriptions: shortDescriptions,
            image: logoLink
        },
        tagList: tagList,
        address: address,
        timePost: new Date(),
        threeReasons: reasons,
        jobDescriptions: jobDescriptions,
        experiences: experiences,
        whyLoveWorkingHere: whyLoveWorkingHere,
        contact: contact
    }
    if(data.title === ''){
        alert('Enter the title ...')
        return 
    }
    fetch('http://localhost:3000/jobs',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response=>{
        alert('Add jobs successfully')
    })
}

const getCompanyCodeFromUrl = url =>{
    return url.slice(29, url.length);
}
const getJobCodeFromUrl = url =>{
    return url.slice(28, url.length);
}