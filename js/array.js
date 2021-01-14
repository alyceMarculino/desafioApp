var perguntas = [
    {'pergunta': '1. O que mais incentiva o seu desempenho é:',
        'suposicao1':'Um salário de acordo com as suas necessidades básicas e as da sua família.',
        'suposicao2':'A oportunidade de testar sua própria capacidade',
        'V': 0,
        'Z': 0
    },
    {'pergunta': '2. Se você tiver que escolher entre duas empresas, prefere aquela que lhe:',
        'suposicao1':' Oferece garantias de estabilidade no emprego.',
        'suposicao2':'Dá oportunidade de realizar novas ideias.',
        'W': 0,
        'Z': 0
    },
    {'pergunta': '3. O tipo de subordinado que mais o irrita é aquele que:',
        'suposicao1':'Não valoriza as boas condições do ambiente de trabalho.',
        'suposicao2':'Não dá a você o devido respeito e consideração.',
        'V': 0,
        'Y': 0
    },
    {'pergunta': '4. Se você pudesse escolher entre dois cargos, daria preferência aquele que:',
        'suposicao1':'Tem normas de trabalho claramente definidas.',
        'suposicao2':'Lhe dá maior prestígio e poder.',
        'W': 0,
        'Y': 0
    },
    {'pergunta': '5. A sua produtividade pode ser prejudicada quando:',
        'suposicao1':'Você fica sem tempo para trocar ideias com seus colegas.',
        'suposicao2':'Suas funções atuais deixaram de representar um desafio, auto-realização.',
        'X': 0,
        'Z': 0
    },
    {'pergunta': '6. O que faz você trabalhar com mais "garra" é:',
        'suposicao1':'Um ambiente de trabalho organizado e uma chefia em que possa confiar',
        'suposicao2':' O reconhecimento que lhe dão quando faz algo além do esperado',
        'W': 0,
        'Y': 0
    },
    {'pergunta': '7. Uma atitude que o deixa contrariado é quando:',
        'suposicao1':'Não lhe conferem o respeito do qual você se acha merecedor.',
        'suposicao2':'Resistem a colaborar com você na experimentação de novas ideias',
        'Y': 0,
        'Z': 0
    },
    {'pergunta': '8. O que você realmente valoriza numa empresa são:',
        'suposicao1':'As boas condições de trabalho, refeitório, assistência médica, etc..',
        'suposicao2':'As relações de amizade e companheirismo entre os colegas',
        'V': 0,
        'X': 0
    },
    {'pergunta': '9. Você desenvolve suas tarefas com maior entusiasmo quando:',
        'suposicao1':'Recebe um salário bastante razoável, em relação aos demais.',
        'suposicao2':'Você tem a certeza de que não será demitido, mesmo quando há redução de pessoal.',
        'V': 0,
        'W': 0
    },
    {'pergunta': '10. Você detesta ter como colega uma pessoa que:',
        'suposicao1':'Não pensa no dia de amanhã, nem na família.',
        'suposicao2':'É anti-social e está sempre criticando os outros.',
        'W': 0,
        'X': 0
    },
    {'pergunta': '11. Você fica bastante desestimulado quando:',
        'suposicao1':'Seu grupo não está trabalhando com harmonia e companheirismo.',
        'suposicao2':'Outra pessoa é escolhida, por favoritismo, para o cargo que você estava querendo.',
        'X': 0,
        'Y': 0
    },
    {'pergunta': '12. Sua eficiência aumenta consideravelmente quando você sente que:',
        'suposicao1':'Lhe conferem reconhecimento em função dos seus méritos.',
        'suposicao2':'Tem liberdade de implantar suas novas ideias.',
        'Y': 0,
        'Z': 0
    },
    {'pergunta': '13. Se você for chamado por duas empresas, escolherá aquela que:',
        'suposicao1':'Tem normas de trabalho e dá estabilidade no emprego.',
        'suposicao2':'Possui uma equipe com excelente nível de relacionamento.',
        'W': 0,
        'X': 0
    },
    {'pergunta': '14. No seu atual cargo, você gostaria de ter mais:',
        'suposicao1':'Poder e status.',
        'suposicao2':'Integração, franqueza e amizade por parte dos outros.',
        'Y': 0,
        'X': 0
    },
    {'pergunta': '15. Se um amigo quisesse se empregar, você o aconselharia a procurar uma empresa que:',
        'suposicao1':'Tivesse refeitório, cesta básica, assistência médica, enfim, todos benefícios.',
        'suposicao2':'Desse autonomia para implantar novas ideias.',
        'V': 0,
        'Z': 0
    },
    {'pergunta': '16. Seu desempenho fica abalado quando:',
        'suposicao1':'Correm boatos que a empresa vai demitir gente.',
        'suposicao2':'As reposições são insuficientes e o seu salário vai ficando "achatado".',
        'W': 0,
        'Z': 0
    },
    {'pergunta': '17. Uma de suas maiores preocupações é:',
        'suposicao1':'Buscar formas de se auto-realizar como profissional competente.',
        'suposicao2':'Guardar um dinheirinho para eventualidades futuras.',
        'Z': 0,
        'W': 0
    },
    {'pergunta': '18. Você sente que fica mais motivado quando:',
        'suposicao1':'Consegue melhorar seu ambiente de trabalho (layout, máquinas, ventilação, reformas, etc.).',
        'suposicao2':'Seus colegas o convidam para confraternizar (churrascos, happy hour, etc.).',
        'V': 0,
        'X': 0
    },
    {'pergunta': '19. É muito ruim para a empresa contar com chefias que:',
        'suposicao1':'Nada fazem para melhorar o ambiente de trabalho dos subordinados.',
        'suposicao2':'Não dão o reconhecimento devido ao funcionário que merece.',
        'V': 0,
        'Y': 0
    },
    {'pergunta': '20. Um futuro cargo que lhe agradaria ocupar teria que:',
        'suposicao1':'Proporcionar-lhe o maior número de desafios a vencer.',
        'suposicao2':'Fazê-lo integrar-se a um grupo de pessoas unidas e de bom relacionamento.',
        'Z':0,
        'X':0
    } 
]

var questao = 0;
window.load = carregarPergunta();

function carregarPergunta(op) {
    localStorage.getItem('questao', questao);

    if (op == 'voltar'){
        questao = questao - 1;

        localStorage.setItem('questao', questao);

        if (questao == 1 || questao == 3 || questao == 8 || questao == 9 || questao == 15 || questao == 18 || questao ==19) {
            document.getElementById('valor1').value = perguntas[questao-1].V;
        }
        if (questao == 5 || questao == 11) {
            document.getElementById('valor1').value = perguntas[questao-1].X;
        }
        if (questao == 8 || questao == 10 || questao == 13 || questao == 14 || questao ==18 || questao ==20) {
            document.getElementById('valor2').value = perguntas[questao-1].X;
        }
        if (questao == 2 || questao == 4 || questao ==6 ||questao ==10 || questao ==13 || questao==16) {
            document.getElementById('valor1').value = perguntas[questao-1].W;
        }
        if (questao == 9 || questao ==17) {
            document.getElementById('valor2').value = perguntas[questao-1].W;
        }
        if (questao == 7 || questao == 12 || questao == 14) {
            document.getElementById('valor1').value = perguntas[questao-1].Y;
        }
        if (questao == 3 || questao == 4 || questao == 11 || questao ==19) {
            document.getElementById('valor2').value = perguntas[questao-1].Y;
        }
        if (questao == 17 || questao == 2) {
            document.getElementById('valor1').value = perguntas[questao-1].Z;
        }
        if (questao == 1 || questao==2 || questao ==5 || questao == 7 || questao==12 || questao == 15) {
            document.getElementById('valor2').value = perguntas[questao-1].Z;
        } 
    }
    else{
        questao = questao + 1;
        localStorage.setItem('questao', questao);
        document.getElementById('valor1').value = "";
        document.getElementById('valor2').value = "";
    }

    console.log(questao-1);

    if (questao < 21){
        moveBarraDeRolagem(localStorage.getItem('questao'));
        document.getElementById('pergunta').innerText = perguntas[questao-1].pergunta;
        document.getElementById('suposicao1').innerText = perguntas[questao-1].suposicao1;
        document.getElementById('suposicao2').innerText = perguntas[questao-1].suposicao2;
        if(questao == 1){
            document.getElementById('botaoDePerguntaAnterior').style.visibility= "hidden";
        }
        else{
            document.getElementById('botaoDePerguntaAnterior').style.visibility= "";
        }
        if(questao == 20){
            document.getElementById('botaoDeProximaPergunta').innerText = "Finalizar Teste";
            console.log(perguntas);
        }
    }
    else{
        passarValores();
    }    
}