function completarNumero(valorCampo, qualCampo) {
    var valorDoCampoACompletar = 0;
    var qualQuestaoEsta = localStorage.getItem('questao');
    if (valorCampo == 0) {
        valorDoCampoACompletar = 3;
    }
    else if (valorCampo == 1) {
        valorDoCampoACompletar = 2;
    }
    else if (valorCampo == 2) {
        valorDoCampoACompletar = 1;
    }
    else {
        valorDoCampoACompletar = 0;
    }

    if (qualCampo == 1) {
        
        if (qualQuestaoEsta == 1 || qualQuestaoEsta == 3 || qualQuestaoEsta == 8 || qualQuestaoEsta == 9 || qualQuestaoEsta == 15 || qualQuestaoEsta == 18 || qualQuestaoEsta ==19) {
            perguntas[qualQuestaoEsta-1].V = valorCampo;
        }
        if (qualQuestaoEsta == 5 || qualQuestaoEsta == 11) {
            perguntas[qualQuestaoEsta-1].X= valorCampo;
        }
        if (qualQuestaoEsta == 8 || qualQuestaoEsta == 10 || qualQuestaoEsta == 13 || qualQuestaoEsta == 14 || qualQuestaoEsta ==18 || qualQuestaoEsta ==20) {
            perguntas[qualQuestaoEsta-1].X = valorDoCampoACompletar;
            document.getElementById('valor2').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 2 || qualQuestaoEsta == 4 || qualQuestaoEsta == 6 ||qualQuestaoEsta ==10 || qualQuestaoEsta ==13 || qualQuestaoEsta==16) {
            perguntas[qualQuestaoEsta-1].W = valorCampo;
        }
        if (qualQuestaoEsta == 9 || qualQuestaoEsta ==17) {
            perguntas[qualQuestaoEsta-1].W = valorDoCampoACompletar;
            document.getElementById('valor2').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 7 || qualQuestaoEsta == 12 || qualQuestaoEsta == 14) {
            perguntas[qualQuestaoEsta-1].Y= valorCampo;
        }
        if (qualQuestaoEsta == 3 || qualQuestaoEsta == 4 || qualQuestaoEsta == 6 || qualQuestaoEsta == 11 || qualQuestaoEsta ==19) {
            perguntas[qualQuestaoEsta-1].Y = valorDoCampoACompletar;
            document.getElementById('valor2').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 17 || qualQuestaoEsta == 2 || qualQuestaoEsta ==20) {
            perguntas[qualQuestaoEsta-1].Z = valorCampo;
        }
        if (qualQuestaoEsta == 1 || qualQuestaoEsta==2 || qualQuestaoEsta ==5 || qualQuestaoEsta == 7 || qualQuestaoEsta==12 || qualQuestaoEsta == 15 || qualQuestaoEsta ==16) {
            perguntas[qualQuestaoEsta-1].Z = valorDoCampoACompletar;
            document.getElementById('valor2').value = valorDoCampoACompletar;
        } 
    }

    else {
        if (qualQuestaoEsta == 1 || qualQuestaoEsta == 3 || qualQuestaoEsta == 8 || qualQuestaoEsta == 9 || qualQuestaoEsta == 15 || qualQuestaoEsta == 18 || qualQuestaoEsta ==19) {
            perguntas[qualQuestaoEsta-1].V = valorDoCampoACompletar;
            document.getElementById('valor1').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 5 || qualQuestaoEsta == 11) {
            perguntas[qualQuestaoEsta-1].X= valorDoCampoACompletar;
            document.getElementById('valor1').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 8 || qualQuestaoEsta == 10 || qualQuestaoEsta == 13 || qualQuestaoEsta == 14 || qualQuestaoEsta ==18 || qualQuestaoEsta ==20) {
            perguntas[qualQuestaoEsta-1].X = valorCampo;
        }
        if (qualQuestaoEsta == 2 || qualQuestaoEsta == 4 || qualQuestaoEsta == 6 ||qualQuestaoEsta == 10 || qualQuestaoEsta ==13 || qualQuestaoEsta==16) {
            perguntas[qualQuestaoEsta-1].W = valorDoCampoACompletar;
            document.getElementById('valor1').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 9 || qualQuestaoEsta ==17) {
            perguntas[qualQuestaoEsta-1].W = valorCampo;
        }
        if (qualQuestaoEsta == 7 || qualQuestaoEsta == 12 || qualQuestaoEsta == 14) {
            perguntas[qualQuestaoEsta-1].Y= valorDoCampoACompletar;
            document.getElementById('valor1').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 3 || qualQuestaoEsta == 4 || qualQuestaoEsta == 6|| qualQuestaoEsta == 11 || qualQuestaoEsta ==19) {
            perguntas[qualQuestaoEsta-1].Y = valorCampo;
        }
        if (qualQuestaoEsta == 17 || qualQuestaoEsta == 2 || qualQuestaoEsta ==20) {
            perguntas[qualQuestaoEsta-1].Z = valorDoCampoACompletar;
            document.getElementById('valor1').value = valorDoCampoACompletar;
        }
        if (qualQuestaoEsta == 1 || qualQuestaoEsta== 2 || qualQuestaoEsta == 5 || qualQuestaoEsta == 7 || qualQuestaoEsta==12 || qualQuestaoEsta == 15 || qualQuestaoEsta ==16) {
            perguntas[qualQuestaoEsta-1].Z = valorCampo;
        } 
        console.log(perguntas[qualQuestaoEsta-1]);
    }
}

var X = 0, V = 0, Y = 0, W = 0, Z = 0;

var valoresFinais = {
    'V': {
        'valorFinalV': 0
    },
    'W': {
        'valorFinalW': 0
    },
    'X': {
        'valorFinalX': 0
    },
    'Y': {
        'valorFinalY': 0
    },
    'Z': {
        'valorFinalZ': 0
    }
};

function passarValores() {
    rodarVetor();
    
    localStorage.setItem('X', valoresFinais.X);
    localStorage.setItem('V', valoresFinais.V);
    localStorage.setItem('W', valoresFinais.W);
    localStorage.setItem('Y', valoresFinais.Y);
    localStorage.setItem('Z', valoresFinais.Z);

    window.location = "resposta.html";
}

function rodarVetor() {
    for (var i = 0; i < 20; i++) {
        console.log(perguntas[i]);
        if (typeof perguntas[i].X != "undefined") {       
            incrementar(perguntas[i].X, 'X');
        }
        if (typeof perguntas[i].Y != "undefined") {
            incrementar(perguntas[i].Y, 'Y');
        }
        if (typeof perguntas[i].V != "undefined") {
            incrementar(perguntas[i].V, 'V');
        }
        if (typeof perguntas[i].W != "undefined") {
            incrementar(perguntas[i].W, 'W');
        }
        if (typeof perguntas[i].Z != "undefined") {
            incrementar(perguntas[i].Z, 'Z');
        }
        if(i == 19){
            console.log(valoresFinais);
        }
    }
}

function incrementar(valor, campo) {
    if (campo == "X") {
        X = X + parseInt(valor);
        valoresFinais.X = X;
    }
    else if (campo == "Y") {
        Y = Y + parseInt(valor);
        valoresFinais.Y = Y;
    }
    else if (campo == "Z") {
        Z = Z + parseInt(valor);
        valoresFinais.Z = Z;
    }
    else if (campo == "W") {
        W = W + parseInt(valor);
        valoresFinais.W = W;
    }
    else if (campo == "V") {
        V = V + parseInt(valor);
        valoresFinais.V = V;
    }
}
