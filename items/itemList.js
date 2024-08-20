let items = [
    {
        id: 0,
        "job_name": "Woodcutters",
        "job_value": 0,
        "job_limit": 0,
        "item_name": "Wood",
        "item_value": 20,
        "req_id": "",
        "req_ratio": 0,
    },
    {
        id: 1,
        "job_name": "Stone Miners",
        "job_value": 0,
        "job_limit": 0,
        "item_name": "Stone",
        "item_value": 20,
        "req_id": "",
        "req_ratio": 0,
    },
    {
        id: 2,
        "job_name": "Wood Worker",
        "job_value": 0,
        "job_limit": 0,
        "item_name": "Wooden Plank",
        "item_value": 0,
        "req_id": 0,
        "req_ratio": 2,
    },
    {
        id: 3,
        "job_name": "Mason",
        "job_value": 0,
        "job_limit": 0,
        "item_name": "Bricks",
        "item_value": 0,
        "req_id": 1,
        "req_ratio": 2,
    },
]



items.forEach(item => {
    let html = 
    `<div class="container item-container">
        <div class="container job-name">
            <h1>${item.job_name}</h1>
        </div>
        <div class="container job-value">
            <span class="job">${item.job_value}</span>
        </div>
        <div class="container item-name">
            <span>${item.item_name}</span>
        </div>
        <div class="container item-value">
            <span class="item">${item.item_value}</span>
        </div>
        <div class="container item-buttons">
                <button type="button" onclick="add(${item.id})">+</button>
                <button type="button" onclick="remove(${item.id})">-</button>
        </div>
    </div>`

    document.getElementById("item-grid-container").insertAdjacentHTML("beforebegin",html);
})

const allJob = document.querySelectorAll(".job");
const allResource = document.querySelectorAll(".item");

function add(int){
    let item = items[int];
    if ((worker > 0) && (item.job_limit > item.job_value)) {
        item.job_value++;
        worker--;
        allJob[int].innerText = item.job_value;
        workerAvailableText.innerText = worker;
    }
}
function remove(int){
    let item = items[int];
    if (item.job_value > 0) {
        item.job_value--;
        worker++;
        allJob[int].innerText = item.job_value;
        workerAvailableText.innerText = worker;
    }
}