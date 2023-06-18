let playerName;
let count = 0;
let result = [];
const enterName = () => {
    playerName = prompt("Enter your name to start the game.");
    if(playerName){
        document.getElementById('nameBtn').setAttribute("disabled","disabled");
        document.getElementById('countBtn').removeAttribute("disabled");
        document.getElementById('playerName').innerHTML = playerName;    
    }else{
        enterName();
    }    
}
const startGame =() => {
    if(count === 0){
        setTimeout(()=> {
            console.log(playerName, count);
            result.push({
                playerName: playerName,
                count: count
            })
            resetGame();
            displayResult();
        }, 5000)
    } 
    count++;
    document.getElementById('count').innerHTML = count;
}
const resetGame = () => {
    playerName = "";
    count = 0;
    document.getElementById('nameBtn').removeAttribute("disabled");
    document.getElementById('countBtn').setAttribute("disabled", "disabled");
    document.getElementById('playerName').innerHTML = playerName;
    document.getElementById('count').innerHTML = "";
}
const displayResult = () => {
    let htmlVar = "";
    result.map((item,index) => {
        htmlVar += "<tr>"
        htmlVar += `<td>${index+1}</td>`
        htmlVar += `<td>${item.playerName}</td>`
        htmlVar += `<td>${item.count}</td>`
        htmlVar += "</tr>"
    })
    document.getElementById('resultBody').innerHTML = htmlVar;

}