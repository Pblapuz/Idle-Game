
let buildings = [
    {
        id: 0,
        "building_name": "Lumberjack's Hut",
        "building_count": 0,
        "building_effect": "Max Woodcutter +5",
        "effect": 0,
        "effect_per_building": 5,
        "effect_target": 0,
        "req_count": 2,
        "building_requirements": {
            "mat_0": 10,
            "mat_1": 10,
        },
        "material_id": {
            "mat_0": 0,
            "mat_1": 1,
        },
        "req_increment": {
            "mat_0": .5,
            "mat_1": .4,
        },
    },
    {
        id: 1,
        "building_name": "Stone Mine",
        "building_count": 0,
        "building_effect": "Max Stone Miner +5",
        "effect": 0,
        "effect_per_building": 5,
        "effect_target": 1,
        "req_count": 2,
        "building_requirements": {
            "mat_0": 10,
            "mat_1": 10,
        },
        "material_id": {
            "mat_0": 0,
            "mat_1": 1,
        },
        "req_increment": {
            "mat_0": .4,
            "mat_1": .5,
        },
    },

]

buildings.forEach(building => {
    let html =`
        <div class="container buildings-container">
            <div class="container building-name">
                <h1>${building.building_name}</h1>
            </div>
            <div class="container building-requirements">
                <h1>${items[building.material_id.mat_0].item_name}: <span class="mat_0">${building.building_requirements.mat_0}</span></h1>
                <h1>${items[building.material_id.mat_1].item_name}: <span class="mat_1">${building.building_requirements.mat_1}</span></h1>
           </div>
            <div class="container building-effect">
                <h1>${building.building_effect}</h1>
                <h1><span class="effect">${building.effect}</span></h1>
            </div>
            <div class="container building-count">
                <h1><span class="building">${building.building_count}</span></h1>
            </div>
            <div class="container build-button">
                <button type="button" onclick="build(${building.id})">Build</button>
            </div>
        </div>`

    document.getElementById("building-grid-container").insertAdjacentHTML("beforebegin",html);
})

const allMat_0 = document.querySelectorAll(".mat_0");
const allMat_1 = document.querySelectorAll(".mat_1");
const allBuilding = document.querySelectorAll(".building");
const allEffect = document.querySelectorAll(".effect");

function build(int){
    let building = buildings[int];
    if(building.req_count === 2){
        mat0 = building.material_id.mat_0;
        mat1 = building.material_id.mat_1;
        if ((items[mat0].item_value >= building.building_requirements.mat_0)
            && 
           (items[mat1].item_value >= building.building_requirements.mat_1)){
            items[mat0].item_value -= building.building_requirements.mat_0;
            items[mat1].item_value -= building.building_requirements.mat_1;
            building.building_requirements.mat_0 += building.building_requirements.mat_0*building.req_increment.mat_0;
            building.building_requirements.mat_1 += building.building_requirements.mat_1*building.req_increment.mat_1;
            building.building_count++;
            building.effect = building.effect_per_building*building.building_count;
            items[building.effect_target].job_limit = building.effect;

            allResource[mat0].innerText = Math.floor(items[mat0].item_value);
            allResource[mat1].innerText = Math.floor(items[mat1].item_value);
            allMat_0[int].innerText = Math.floor(building.building_requirements.mat_0);
            allMat_1[int].innerText = Math.floor(building.building_requirements.mat_1);
            allBuilding[int].innerText = building.building_count;
            allEffect[int].innerText =  building.effect;
        }
    }
}

