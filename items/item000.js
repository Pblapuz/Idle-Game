const job_000 = document.querySelector("#job_000");
const resource_000 = document.querySelector("#resource_000");
const add_000btn = document.querySelector("#add_000btn");
const remove_000btn = document.querySelector("#remove_000btn");

add_000btn.onclick = add_000;
remove_000btn.onclick = remove_000;

function add_000(){
    if ((worker > 0) && ( items[0].job_value < max_000)) {
        items[0].job_value++;
        worker--;
        job_000.innerText = items[0].job_value;
        workerAvailableText.innerText = worker;
    }
}
function remove_000(){
    if (items[0].job_value > 0) {
        items[0].job_value--;
        worker++;
        job_000.innerText = items[0].job_value;
        workerAvailableText.innerText = worker;
    }
}