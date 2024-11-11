function rodar() {
    let pes = document.querySelectorAll("p")
    let p = []
    let contador = {}
    let divs = 1
    let fileira = document.querySelectorAll(".fileira")[0]
    const section = document.querySelector("section")
    document.addEventListener('keyup', function (e) {
        if (e.key === "ArrowUp") aumenta()
        if (e.key === "ArrowRight") add()
    })
    function aumenta(num) {
        contador.num = "true"
        console.log(contador)
    }
    function add(){
        if (divs % 5 == 0){
            criar("fileira")
        }
        criar("div")
        for(pNovo in pes){
            p.push(pNovo)
        }
        divs++
    }
    function criar(elemento){
        let novaFila = document.createElement("div")
        let novoContador = document.createElement("div")
        let novoP = document.createElement("p")
        let novoBotao = document.createElement("button")
        novaFila.classList.add("fileira")
        if (elemento === "div"){
            novoContador.classList.add("contador",`c${divs}`)
            novoBotao.classList.add("unset")
            novoBotao.innerText = "Adicione um atalho"
            novoP.innerText = "0"
            novoContador.append(novoP,novoBotao)
            fileira.appendChild(novoContador)
        }
        if(elemento === "fileira"){
            section.appendChild(novaFila)
            fileira = document.querySelectorAll(".fileira")[divs / 5]
        }
    }
}

// terminar de setar os valores de cada div usando o let divs e o objeto contador e colocar os atalhos,
// {c0: {contador:2, atalho:"y"}, c1: {contador:0, atalho:"t"}} 