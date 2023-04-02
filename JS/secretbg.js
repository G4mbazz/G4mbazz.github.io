document.querySelector("#swap").addEventListener('click',bgSwap);

let count = 0;
function bgSwap(){
    if(count % 2 == 0){

        console.log("Jämn!");
        document.body.style.background = "linear-gradient(90deg,#685bca,#3adaf7)";
    }
    else{
        document.body.style.background = "linear-gradient(90deg,#3adaf7,#685bca)";
    }
    count++;
}