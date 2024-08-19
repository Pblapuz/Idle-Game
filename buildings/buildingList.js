
let buildings = [
    {
        id: "000",
        "building_name": "Villager's Hut",
        "building_count": 1,
        "building_effect": "Max worker +5",
        "effect": 5,
        "building_requirements": {
            "mat_0": 100,
            "mat_1": 100,
        },
        "material_name": {
            "mat_0": "Wood",
            "mat_1": "Stone",
        },
    },
    {
        id: "001",
        "building_name": "Lumberjack's Hut",
        "building_count": 1,
        "building_effect": "Max Woodcutter +5",
        "effect": 5,
        "building_requirements": {
            "mat_0": 100,
            "mat_1": 100,
        },
        "material_name": {
            "mat_0": "Wood",
            "mat_1": "Stone",
        },
    },
    {
        id: "002",
        "building_name": "Stone Mine",
        "building_count": 1,
        "building_effect": "Max Stone Miner +5",
        "effect": 5,
        "building_requirements": {
            "mat_0": 100,
            "mat_1": 100,
        },
        "material_name": {
            "mat_0": "Wood",
            "mat_1": "Stone",
        },
    },

]

buildings.forEach(building => {
    let html =`
        <div class="container buildings" id="building000">
            <div class="container building-name">
                <h1>${building.building_name}</h1>
            </div>
            <div class="container building-requirements">
                <h1>${building.material_name.mat_0}: <span id="mat_00_${building.id}">${building.building_requirements.mat_0}</span></h1>
                <h1>${building.material_name.mat_1}: <span id="mat_01_${building.id}">${building.building_requirements.mat_1}</span></h1>
           </div>
            <div class="container building-effect">
                <h1>${building.building_effect}</h1>
                <h1><span id="effect_${building.id}">${building.effect}</span></h1>
            </div>
            <div class="container building-count">
                <h1><span id="building_count_${building.id}">${building.building_count}</span></h1>
            </div>
            <div class="container build">
                <button type="button" id="build${building.id}btn">Build</button>
            </div>
        </div>`

    document.getElementById("building-grid-container").insertAdjacentHTML("beforebegin",html);
})




