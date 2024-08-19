
let buildings = [
    {
        id: "000",
        "building_name": "Villager's Hut",
        "building_count": 0,
        "building_effect": 5,
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
        "building_count": 0,
        "building_effect": 5,
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
        "building_count": 0,
        "building_effect": 5,
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
                <h1>${building.material_name.mat_0}: <span>${building.building_requirements.mat_0}</span></h1>
                <h1>${building.material_name.mat_1}: <span>${building.building_requirements.mat_1}</span></h1>
           </div>
            <div class="container building-effect">
                <h1><span>${building.building_effect}</span></h1>
            </div>
            <div class="container building-count">
                <h1><span>${building.building_count}</span></h1>
            </div>
            <div class="container build">
                <button type="button" id="build${building.id}btn">Build</button>
            </div>
        </div>`

    document.getElementById("building-grid-container").insertAdjacentHTML("beforebegin",html);
})




