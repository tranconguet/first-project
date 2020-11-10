
const change = async () =>{
    const value = document.getElementById('slct').value
    console.log(value)
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
const renderData = async (type) => {
    clearPage()
    await fetch(`http://localhost:3000/${type}`)
        .then(response =>response.json())
        .then(data=>{
            const markup =`
                <div class="add_button">
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
                        if(el.title) title = el.title
                        else title = el.userName
                        return `<tr>
                            <th>${title}</th>
                            <th class="change_unit"><img class="change_button" onClick="fix('${title}','${type}')" src="../images/fix.svg" height=20/></th>
                            <th class="delete_unit"><img class="delete_button" onClick="remove('${title}','${type}')" src="../images/delete.svg" height=20/></th>
                        </tr>
                        `}).join('')}
                </table>
                `
            document.querySelector('.admin_page').insertAdjacentHTML('beforeend', markup)
        })
}