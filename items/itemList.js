let items = [
    {
        id: "000",
        "job_name": "Woodcutters",
        "job_value": 0,
        "resource_name": "wood",
        "resource_value": 0,
    },
    {
        id: "001",
        "job_name": "Stone Miners",
        "job_value": 0,
        "resource_name": "stone",
        "resource_value": 0,
    },
]

items.forEach(item => {
    let html = 
    `<div class="container item-container">
        <div class="container labels">
            <h1>${item.job_name}</h1>
        </div>
        <div class="container workers">
            <h1><span id="job_${item.id}">${item.job_value}</span></h1>
        </div>
        <div class="container values">
            <h1><span id="resource_${item.id}">${item.resource_value}</span></h1>
        </div>
        <div class="container buttons">
                <button type="button" id="add_${item.id}btn">+</button>
                <button type="button" id="remove_${item.id}btn">-</button>
        </div>
    </div>`

    document.getElementById("grid-container").insertAdjacentHTML("beforebegin",html);
})