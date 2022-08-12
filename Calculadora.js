const visortotal = document.querySelector(' .visor ');
const confirmar = document.querySelector(' .clickigual ');

function insert( valor ){
    visortotal.innerHTML += valor;
}


function apagar() {
    visortotal.innerHTML = ' ';
}

function confirma() {
    if(visortotal.textContent != 'Erro'); {
        document.getElementById("visortotal").innerHTML = eval (visortotal.innerHTML)
    }
}