const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")

const workButton = document.querySelector("#workButton");
const hireWorkerButton = document.querySelector("#hireWorkerButton");

const goldText = document.querySelector("#goldText");
const workerPriceText = document.querySelector("#workerPriceText");
const workerAvailableText = document.querySelector("#workerAvailableText");

let townLevel = 1;
let gold = 100;
let workerPrice = 10;
let worker = 0;

hireWorkerButton.onclick = hire;

function hire(){
    if (gold >= workerPrice){
        worker++;
        workerAvailableText.innerText = worker;
        gold -= workerPrice;
        workerPrice = Math.floor(workerPrice*1.5);
        workerPriceText.innerText = workerPrice;
    }
}
setInterval(allTicks,100);
function allTicks(){
    gold += .1*worker;
    goldText.innerText = Math.floor(gold);
    items.forEach(item => {
        item.resource_value += .1*item.job_value;
    })
    resource_000.innerText = Math.floor(items[0].resource_value);
    resource_001.innerText = Math.floor(items[1].resource_value);
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })
        target.classList.add("active")
    })
})