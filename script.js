const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement =  document.querySelector("#app button")

//console.log(listElement, inputElement, buttonElement)

const tarefas = ["Estudar pra prova", "Dormir cedo"]

for (const itemTarefa of tarefas) {
    //console.log(itemTarefa)
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(itemTarefa)
    
    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}
