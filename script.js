let townLevel = 1;
let gold = 100;
let workerPrice = 10;
let worker = 0;
let woodcutter = 0;
let wood = 0;
let stoneMiner = 0;
let stone = 0;


const workButton = document.querySelector("#workButton");
const hireWorkerButton = document.querySelector("#hireWorkerButton")
const addWoodcutterButton = document.querySelector("#addWoodcutterButton")
const removeWoodcutterButton = document.querySelector("#removeWoodcutterButton")
const addStoneMinerButton = document.querySelector("#addStoneMinerButton")
const removeStoneMinerButton = document.querySelector("#removeStoneMinerButton")

const goldText = document.querySelector("#goldText");
const workerPriceText = document.querySelector("#workerPriceText");
const workerAvailableText = document.querySelector("#workerAvailableText")
const woodcutterText = document.querySelector("#woodcutterText")
const stoneMinerText = document.querySelector("#stoneMinerText")
const woodText = document.querySelector("#woodText")
const stoneText = document.querySelector("#stoneText")

setInterval(allTicks,100);
workButton.onclick = work;
hireWorkerButton.onclick = hire;
addWoodcutterButton.onclick = addWoodcutter;
removeWoodcutterButton.onclick = removeWoodcutter;
addStoneMinerButton.onclick = addStoneMiner;
removeStoneMinerButton.onclick = removeStoneMiner;



function allTicks(){
        gold += .1*worker;
        goldText.innerText = Math.floor(gold);
        wood += .1*woodcutter;
        woodText.innerText = Math.floor(wood);
        stone += .1* stoneMiner;
        stoneText.innerText = Math.floor(stone);
}
function work(){
    gold++;
    goldText.innerText = gold;
}
function hire(){
    if (gold >= workerPrice){
        worker++;
        workerAvailableText.innerText = worker;
        gold -= workerPrice;
        workerPrice = Math.floor(workerPrice*1.5);
        workerPriceText.innerText = workerPrice;
    }
}
function addWoodcutter(){
    if (worker > 0){
        worker--;
        workerAvailableText.innerText = worker;
        woodcutter++;
        woodcutterText.innerText = woodcutter;
    }
}
function removeWoodcutter(){
    if (woodcutter > 0){
        worker++;
        workerAvailableText.innerText = worker;
        woodcutter--;
        woodcutterText.innerText = woodcutter;
    }
}
function addStoneMiner(){
    if (worker > 0){
        worker--;
        workerAvailableText.innerText = worker;
        stoneMiner++;
        stoneMinerText.innerText = stoneMiner;
    }
}
function removeStoneMiner(){
    if (stoneMiner > 0){
        worker++;
        workerAvailableText.innerText = worker;
        stoneMiner--;
        stoneMinerText.innerText = stoneMiner;
    }
}
