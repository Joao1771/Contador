function rodar() {

    class Contagem {
        constructor(num,atalho = "x",valor = 0){
            this.num = num
            this.atalho = atalho
            this.valor = valor
        }
    }

    let p = document.querySelector("p")
    let divs = 1
    let valores = [new Contagem(0,"ArrowUp")]
    let contadores = document.querySelectorAll(".contador")
    let fileira = document.querySelectorAll(".fileira")[0]
    let botoes = document.querySelectorAll("button")
    let zero = 0
    const section = document.querySelector("section")
    
    document.addEventListener('keyup', (e) => {
        for (valor of valores){
            if (e.key == valor.atalho){
                aumenta(zero)
            }
            zero++
        }
        zero = 0
        if (e.key === "ArrowRight") add()
    })
    section.addEventListener("click", (e) => {
        for (botao of botoes){
            if (e.target == botao){
                setAtalho(zero)
            }
            zero++
        }
        zero = 0
        // for (contador of contadores){
        //     if(e.target == contador || e.target == contador.querySelector("p")){ 
        //         alvo = contador
        //     }
        // } 
    })

    function aumenta(alvo) {
        valores[alvo].valor += 1
        contadores[alvo].querySelector("p").innerText =  valores[alvo].valor
    }
    function add() {
        if (divs % 5 == 0) {
            criar("fileira")
        }
        criar("div")
        divs++
        contadores = document.querySelectorAll(".contador")
        botoes = document.querySelectorAll("button")
    }
    function criar(elemento) {
        let novaFila = document.createElement("div")
        let novoContador = document.createElement("div")
        let novoP = document.createElement("p")
        let novoBotao = document.createElement("button")
        novaFila.classList.add("fileira")
        
        if (elemento === "div") {
            novoContador.classList.add("contador", `c${divs}`)
            novoBotao.classList.add("unset", `b${divs}`)
            novoBotao.innerText = "Adicione um atalho"
            novoP.innerText = "0"
            novoContador.append(novoP, novoBotao)
            fileira.appendChild(novoContador)
            valores.push(new Contagem(divs))
            console.log(valores)
        }
        if (elemento === "fileira") {
            section.appendChild(novaFila)
            fileira = document.querySelectorAll(".fileira")[divs / 5]
        }
    }
    function setAtalho(alvo) {
        //botoes[alvo].innerText = "|"
        const atalhoEscrito = prompt("Insira o atalho desejado").toLowerCase()[0]
        valores[alvo].atalho = atalhoEscrito
        botoes[alvo].innerText = valores[alvo].atalho.toUpperCase()
    }
}

// terminar de setar os valores de cada div usando o let divs e o objeto contador e colocar os atalhos,
// colocar uma função para parar um contador