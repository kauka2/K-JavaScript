const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []


//console.log(listElement, inputElement, buttonElement)

//const tarefas = ["Estudar pra prova", "Dormir cedo"]

function renderTarefas() {
    listElement.innerHTML = ""
    for (const itemTarefa of tarefas) {
        //console.log(itemTarefa)
        const tarefaElement = document.createElement("li")
        const tarefaText = document.createTextNode(itemTarefa)
        const linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")
        const pos = tarefas.indexOf(itemTarefa)
        linkElement.setAttribute("onclick", `deleteTarefa(${pos})`)
        const linkText = document.createTextNode("-Apagar")
        linkElement.appendChild(linkText)

        tarefaElement.appendChild(tarefaText)
        tarefaElement.appendChild(linkElement)
        listElement.appendChild(tarefaElement)
    }
}
renderTarefas()
function addTarefas() {
    const text = inputElement.value
    tarefas.push(text)
    renderTarefas()
    inputElement.value = ""
    saveToStorage()
}
buttonElement.onclick = addTarefas
function deleteTarefa(pos) {
    delete tarefas[pos]
    tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()   
}
function saveToStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))


}