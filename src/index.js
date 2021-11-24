document.addEventListener('DOMContentLoaded', () => {
//table-body where the dogs go
fetch('http://localhost:3000/dogs')
.then(response => response.json())
.then(data => addDog(data))

})

function addDog(dogs){
    let doglist = document.getElementById('table-body')
    for (let i =0; i <dogs.length;i++){
    
    let tablerow = document.createElement('tr')
    doglist.appendChild(tablerow)

    let dogname = document.createElement('td')
    dogname.innerHTML = dogs[i].name

    let dogbreed = document.createElement('td')
    dogbreed.innerHTML = dogs[i].breed

    let dogsex = document.createElement('td')
    dogsex.innerHTML = dogs[i].sex

    let edit = document.createElement('td')
    let editbtn = document.createElement('button')
    editbtn.innerHTML = 'Edit'

    tablerow.appendChild(dogname)
    tablerow.appendChild(dogbreed)
    tablerow.appendChild(dogsex)
    edit.appendChild(editbtn)
    tablerow.appendChild(edit)
    }
}