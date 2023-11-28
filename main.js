const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSons () {

    if (listaDeTeclas[0].onclick = true) {
        document.querySelector('#som_tecla_pom').play();
    } 
    if (listaDeTeclas[1].onclick = true) {
        document.querySelector('#som_tecla_clap').play();
    }
    
}

listaDeTeclas.onclick = tocaSons;
