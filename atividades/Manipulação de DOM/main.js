const miniaturas = document.querySelectorAll(".miniaturas img");
const imgDestaque = document.querySelector(".destaque img");

miniaturas.forEach( miniatura => {
    miniatura.addEventListener("click", evento => {
        miniaturas.forEach(img => img.classList.remove('ativa'));
        
        evento.target.classList.add("ativa");
        imgDestaque.src = evento.target.src;

        imgDestaque.classList.add('ativa');
    })
})