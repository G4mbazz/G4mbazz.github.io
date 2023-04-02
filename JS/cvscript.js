function readCv(){
    fetch('../assets/cv.json')
    .then((response) => response.json())
    .then((data) => 
    {
        getFormerEmployment(data["Work"]);
        getEducation(data["Education"]);
})}

function getFormerEmployment(work){
    var listDiv = document.getElementById('exp_list');
    var ul = document.createElement('ul');

    console.log(work);

    for(let i = 0; i < work.length; i++){
        var li = document.createElement('li');
        li.innerHTML = work[i].Place  + '<br>' + work[i].Desc + '<br>'+ '<br>';
        ul.appendChild(li)
    }
    listDiv.appendChild(ul);
}
function getEducation(edu){
    var listDiv = document.getElementById('edu_list');
    var ul = document.createElement('ul');

    console.log(edu);

    for(let i = 0; i < edu.length; i++){
        var li = document.createElement('li');
        li.innerHTML = edu[i].School + "<br>" + edu[i].Major + "<br>" + edu[i].Time + '<br>'+ '<br>';
        ul.appendChild(li)
    }
    listDiv.appendChild(ul);
}
readCv();