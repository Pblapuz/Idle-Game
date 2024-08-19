const mat_00_000 = document.querySelector("#mat_00_000");
const mat_01_000 = document.querySelector("#mat_01_000");
const effect_000 = document.querySelector("#effect_000");
const building_count_000 = document.querySelector("#building_count_000");;

const build000btn = document.querySelector("#build000btn");

build000btn.onclick = build_000;

function build_000(){
    if((items[0].resource_value >= buildings[0].building_requirements.mat_0)
         && 
        (items[1].resource_value >= buildings[0].building_requirements.mat_1)){
        buildings[0].building_requirements.mat_0 += 100;
        buildings[0].building_requirements.mat_1 += 100;
        buildings[0].building_count++;
        buildings[0].effect += 5;
        max_worker = buildings[0].effect;
        items[0].resource_value -= buildings[0].building_requirements.mat_0,
        items[1].resource_value -= buildings[0].building_requirements.mat_1,

        mat_00_000.innerText = buildings[0].building_requirements.mat_0;
        mat_01_000.innerText = buildings[0].building_requirements.mat_1;
        building_count_000.innerText = buildings[0].building_count;
        effect_000.innerText = buildings[0].effect;
        resource_000.innerText = items[0].resource_value;
        resource_001.innerText = items[1].resource_value;
    }   
}


