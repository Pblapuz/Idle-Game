const job_001 = document.querySelector("#job_001");
const resource_001 = document.querySelector("#resource_001");
const add_001btn = document.querySelector("#add_001btn");
const remove_001btn = document.querySelector("#remove_001btn");

add_001btn.onclick = add_001;
remove_001btn.onclick = remove_001;

function add_001(){
    if ((worker > 0) && ( items[1].job_value < max_001)) {
        items[1].job_value++;
        worker--;
        job_001.innerText = items[1].job_value;
        workerAvailableText.innerText = worker;
    }
}
function remove_001(){
    if (items[1].job_value > 0) {
        items[1].job_value--;
        worker++;
        job_001.innerText = items[1].job_value;
        workerAvailableText.innerText = worker;
    }
}