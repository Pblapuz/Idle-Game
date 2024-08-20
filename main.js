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
let totalWorker = 0;
let worker = 0;



window.addEventListener("load", function() {
    hireWorkerButton.onclick = hire;
    function hire(){
    if (gold >= workerPrice){
        totalWorker++;
        worker++;
        workerAvailableText.innerText = worker;
        gold -= workerPrice;
        workerPrice = Math.floor(workerPrice*1.1);
        workerPriceText.innerText = workerPrice;
        }
    }
    setInterval(allTicks,100);
    function allTicks(){
        gold += 0.1*worker;
        goldText.innerText = Math.floor(gold);
        items.forEach(item => {
            id = item.id;
            req = item.req_id;
            if (req === ""){
                item.item_value += 0.1*item.job_value;
                allResource[id].innerText = Math.floor(items[id].item_value);
            } else {
                if (items[req].item_value > 0.1*item.req_ratio){
                    items[req].item_value -= 0.1*item.job_value*item.req_ratio;
                    item.item_value += 0.1*item.job_value;
                    allResource[req].innerText = Math.floor(items[req].item_value);
                    allResource[id].innerText = Math.floor(items[id].item_value);
                }
            }
        })
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
})