var nomeHotel = "Terabithia's Paradise"; // Nome do hotel
var senha = 2678; // Senha de acesso do usuário ao hotel
var quartosDoHotel = Array(20).fill("livre "); // Inicializando uma lista com 20 posições não-declaradas (cada posição foi preenchida com LIVRE)

alert(`Bem vindo ao hotel ${nomeHotel}.`); // Exibindo ao usuário o nome do hotel
var nomeUsuario = prompt(`Por gentileza, informe o seu nome`)   // Variavél onde é solicitado o nome do usuário



function inicio() {
    alert(`Bem-vindo ao hotel ${nomeHotel}, ${nomeUsuario}. É um grande prazer ter você conosco!`) //criando saudação sempre q o usuário entrar no sistema

    // criação do menu de funcionalidades
    var opcao = parseInt(prompt(`
        O que você deseja fazer?\n
        [1] - Reservar Quarto
        `))

    switch (opcao) {
        case 1:
            reservarQuarto();
            break;

        case 2:
            cadastrarUsuario();
            break;
    }

    inicio();
}

// criação da função de reservar quartos
function reservarQuarto() {

    var valorDiaria = parseInt(prompt(`Digite o valor padrão diária.`));
    while (valorDiaria <= 0 || isNaN(valorDiaria)) {
        valorDiaria = parseInt(prompt(`O valor informado é inválido, ${nomeUsuario}! Informe novamente. `));
    }

    var qntdDiarias = parseInt(prompt(`Certo, ${nomeUsuario}. Agora me informe quantas diárias serão necessárias`));
    while (qntdDiarias > 30 || isNaN(qntdDiarias)) {
        qntdDiarias = parseInt(prompt(`${nomeUsuario}, a quantidade de diárias deve ser um número até 30. Por favor, informe novamente.`));
    }

    var nomeHospede = prompt(`Certo, ${nomeUsuario}. Qual o nome do hóspede?`)
    var escolhaQuarto = parseInt(prompt(`${nomeUsuario}, por favor escolha o número do quarto(1-20).`))

    while (escolhaQuarto > 20 || escolhaQuarto <= 0 || isNaN(escolhaQuarto)) {
        alert(`Escolha inválida`)
        escolhaQuarto = parseInt(prompt(`Por favor escolha o número do quarto(1-20).`))
    }

    if (quartosDoHotel[escolhaQuarto - 1] == "livre ") {
        var valorDaReserva = valorDiaria * qntdDiarias;
        alert(`O quarto está disponível.`)
        var confirmarReserva = prompt(`${nomeUsuario}, você confirma a hospedagem para ${nomeHospede} por ${qntdDiarias} dia(s) para o quarto ${escolhaQuarto} por R$${valorDaReserva}?\n[S] - Sim\n[N] - Não`);

        if (confirmarReserva === "S") {
            quartosDoHotel[escolhaQuarto - 1] = "ocupado ";
            var listaDosQuartos = [];
            for (contagem = 0; contagem < quartosDoHotel.length; contagem++) {
                listaDosQuartos += `${contagem + 1} - ${quartosDoHotel[contagem]}\n`;
            }
            alert(`Lista de quarto e suas ocupações:\n${listaDosQuartos}`);
        } else if (confirmarReserva === "N") {
            alert(`Ok, obrigado ${nomeUsuario}! Até logo.`)
        } else {
            alert(`Opção Inválida.`);
        }

    } else {
        alert(`Desculpe, o quarto ${escolhaQuarto} já está ocupado.`)
    }
}

function cadastrarUsuario() {

}

inicio();