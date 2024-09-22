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
        [1] - Reservar Quarto\n
        [2] - Cadastrar Hospede\n
        [3] - Cadastrar, pesquisar e listar hospedes\n
        [4] - Reservar Evento\n
        [5] - Abaster Carro\n
        [6] - Manutenção de ar-condicionado\n
        `))

    switch (opcao) {
        case 1:
            reservarQuarto();
            break;

        case 2:
            cadastrarHospede();
            break;

        case 3:
            fornecerMenuHospedes();
            break;

        case 4:
            reservarEvento();
            break;

        case 5:
            abastecerCarro();
            break;

        case 6: 
        chamarManutencao();
        break;

        default:
            alert("Opção inválida")
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

function cadastrarHospede() {
    var valorDiaria = parseInt(prompt(`Qual o valor da diária?`));
    while (valorDiaria <= 0 || isNaN(valorDiaria)) {
        valorDiaria = parseInt(prompt(`O valor informado é inválido, ${nomeUsuario}! Informe novamente. `));
    }

    let i = true;
    let nomesDosHospedes = [];
    let qntdHospedagemGratuita = [];
    let qntdHospedagemMeia = [];
    let qntdHospedagem = [];

    while (i == true) {

        var nomeDoHospede = prompt("Qual o nome do hospede?");
        if (nomeDoHospede === "PARE") {
            i = false;
        } else {
            nomesDosHospedes.push(nomeDoHospede);
            var idadeDoHospede = prompt("Qual a idade do hospede?");
            if (idadeDoHospede <= 6) {
                alert(`${nomeDoHospede} cadastrado(a) com sucesso. ${nomeDoHospede} possui gratuidade.`)
                qntdHospedagemGratuita.push(nomeDoHospede)
            } else if (idadeDoHospede > 60) {
                alert(`${nomeDoHospede} cadastrado(a) com sucesso. ${nomeDoHospede} paga meia.`)
                qntdHospedagemMeia.push(nomeDoHospede);
            } else {
                alert(`${nomeDoHospede} cadastrado(a) com sucesso.`)
                qntdHospedagem.push(nomeDoHospede)
            }
        }
    }
    var valorHospedagem = (valorDiaria * qntdHospedagem.length) + ((valorDiaria * qntdHospedagemMeia.length) / 2);
    alert(`${nomeUsuario}, o valor total da hospedagem é: R$${valorHospedagem}. ${qntdHospedagemGratuita.length} gratuidade(s); ${qntdHospedagemMeia.length} meia(s)`)
}


let qntdHospedes = [];

function fornecerMenuHospedes() {

    let opcaoUsuario = parseInt(prompt("[1] - Cadastrar\n[2] - Pesquisar\n[3] - Listar\n [4] - Sair"))

    switch (opcaoUsuario) {
        case 1:
            cadastrarUmHospede();
            fornecerMenuHospedes();
            break;

        case 2:
            buscarHospede();
            fornecerMenuHospedes();
            break;

        case 3:
            ExibirHospedes();
            fornecerMenuHospedes();
            break;

        case 4:
            break;

        default:
            alert("Opção inválida.");
            fornecerMenuHospedes();
            break;
    }

    function cadastrarUmHospede() {
        let hospede = prompt(`Qual o nome do hóspede?`);
        if (qntdHospedes.length >= 15) {
            alert("Máximo de cadastros atingido")
        } else {
            qntdHospedes.push(hospede)
        }
    }

    function buscarHospede() {
        let buscaHospede = prompt("Qual o nome do hóspede que você quer encontrar?")

        let resultadoDaBusca = qntdHospedes.filter((hospede) => {
            return hospede === buscaHospede;
        })

        if (resultadoDaBusca.length > 0) {
            alert(`Hóspede ${buscaHospede} foi encontrado(a)!`);
        } else {
            alert(`Hóspede ${buscaHospede} não foi encontrado(a)!`);
        }
    }

    function ExibirHospedes() {
        alert(qntdHospedes.join("; "))
    }
}

function reservarEvento() {
    let auditorioLaranja = 220;
    let auditorioColorado = 350;

    let qntdConvidados = parseInt(prompt("Qual o número de convidados para o seu evento?"))

    while (qntdConvidados > 350 || qntdConvidados < 0 || isNaN(qntdConvidados)) {
        alert("Número de convidados inválido")
        qntdConvidados = parseInt(prompt("Qual o número de convidados para o seu evento?"))
    }

    if (qntdConvidados <= auditorioLaranja) {
        if (qntdConvidados > 150) {
            let qntdCadeiras = qntdConvidados - 150;
            alert(`Use o auditório Laranja (inclua mais ${qntdCadeiras} cadeiras)`)
        } else {
            alert("Use o auditório Laranja.");
        }
    } else (
        alert("Use o auditório Colorado.")
    )

    alert("Agora vamos ver a agenda do evento");

    var fimDeSemana = ["sabado", "domingo"];
    var diaDoEvento = prompt("Qual o dia do evento?");

    if (fimDeSemana.includes(diaDoEvento)) {
        var horaDoEvento = parseInt(prompt("Qual a hora do evento?"))
        if (horaDoEvento < 7 || horaDoEvento > 15 || isNaN(horaDoEvento)) {
            alert("Auditório indisponível")
        } else {
            var nomeDaEmpresa = prompt("Qual o nome da empresa?")
            alert(`Auditório reservado para ${nomeDaEmpresa}. ${diaDoEvento} ás ${horaDoEvento}hrs.`)
        }
    } else {
        var horaDoEvento = parseInt(prompt("Qual a hora do evento?"))
        if (horaDoEvento < 7 || horaDoEvento > 23 || isNaN(horaDoEvento)) {
            alert("Auditório indisponível")
        } else {
            let nomeDaEmpresa = prompt("Qual o nome da empresa?")
            alert(`Auditório reservado para ${nomeDaEmpresa}. ${diaDoEvento} ás ${horaDoEvento}hrs.`)
        }
    }


    let duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));
    valorHoraGarcom = 10.50;
    let garconsNecessarios = Math.ceil(qntdConvidados / 12);
    let garconsExtras = Math.ceil(duracaoEvento / 2);
    totalGarcons = garconsNecessarios + garconsExtras;

    let valorTotalGarcons = totalGarcons * duracaoEvento * valorHoraGarcom;

    alert(`São necessários ${totalGarcons} garçons.`);
    alert(`Custo: R$${valorTotalGarcons}`);

    let qntdCafe = 0.2 * qntdConvidados;
    let qntdAgua = 0.5 * qntdConvidados;
    let qntdSalgados = 7 * qntdConvidados;

    let custoTotalCafe = qntdCafe * 0.80;
    let custoTotalAgua = qntdAgua * 0.40;
    let custoTotalSalgados = qntdSalgados * 34;
    let custoTotal = custoTotalCafe + custoTotalAgua + custoTotalSalgados;

    alert(`O evento precisará de ${qntdCafe} litros de café, ${qntdAgua} litros de água e ${qntdSalgados} salgados.`)
    alert(`Nome da empresa: ${nomeDaEmpresa}\n
    Data: ${diaDoEvento}, ${horaDoEvento}H às ${horaDoEvento + duracaoEvento}H\n
    Duração do evento: ${duracaoEvento}H\n
    Quantidade de garçons: ${totalGarcons}\n
    Quantidade de Convidados: ${qntdConvidados}\n\n\n
    Custo do garçons: R$${valorTotalGarcons.toFixed(2)}\n
    Custo do buffet: R$${custoTotal.toFixed(2)}
    `)

    alert(`Valor total do evento: R$${(valorTotalGarcons + custoTotal).toFixed(2)}`)
    var respostaDoUsuario = prompt("Gostaria de efetuar a reserva? S/N")

    if (respostaDoUsuario === "S") {
        alert(`${nomeUsuario}, reserva efetuada com sucesso.`)
    } else {
        alert(`${nomeUsuario}, reserva não efetuada.`)
    }
}

function abastecerCarro(){
    let precoAlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"))
    let precoGasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"))
    let precoAlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"))
    let precoGasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"))

    let litrosDeCombustivel = 42;
    let totalAlcoolWayne = precoAlcoolWayne * litrosDeCombustivel;
    let totalGasolinaWayne = precoGasolinaWayne * litrosDeCombustivel;
    let totalAlcoolStark = precoAlcoolStark * litrosDeCombustivel;
    let totalGasolinaStark = precoGasolinaStark * litrosDeCombustivel;


    let alcoolMaisBarato = totalAlcoolWayne < totalGasolinaWayne * 0.7 || totalAlcoolStark < totalGasolinaStark * 0.7;
    let gasolinaMaisBarata = totalGasolinaWayne < totalAlcoolWayne * 1.3 || totalGasolinaStark < totalAlcoolStark * 1.3;

    let postoGasolina, precoGasolina;

    if (totalGasolinaStark < totalGasolinaWayne){
        postoGasolina = "Stark Petrol";
        precoGasolina = totalGasolinaStark;
    } else {
        postoGasolina = "Wayne Oil";
        precoGasolina = totalGasolinaWayne;
    }

    let postoAlcool, precoAlcool;

    if (totalAlcoolStark < totalAlcoolWayne){
        postoAlcool = "Stark Petrol";
        precoAlcool = totalAlcoolStark;
    } else {
        postoAlcool = "Wayne Oil";
        precoAlcool = totalAlcoolWayne;
    }

    if (alcoolMaisBarato) {
        alert(`${nomeUsuario} É mais barato abastecer com álcool no posto ${postoAlcool}.`);
    } else {
        alert(`${nomeUsuario} É mais barato abastecer com gasolina no posto ${postoGasolina}.`);
    }
}

function chamarManutencao(){
    var escolha = "S", menorValor= null, empresaMenorValor;

    while(escolha === "S"){
        var nomeDaEmpresa = prompt("Qual o nome da empresa?");
        var valorAparelho = parseFloat(prompt("Qual o valor por aparelho?"))
        var qntdAparelho = parseFloat(prompt("Qual a quantidade de aparelhos?"))
        var porcentagemDesconto = parseFloat(prompt("Qual a porcentagem de desconto?"))
        qntdMinimaAparelho = parseFloat(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

        var valorTotal = 0;
        if(qntdAparelho >= qntdMinimaAparelho){
            valorTotal = (valorAparelho * qntdAparelho) * (1 - porcentagemDesconto / 100);
        } else {
            valorTotal = valorAparelho * qntdAparelho;
        }

        alert(`O serviço da empresa ${nomeDaEmpresa} custará R$${valorTotal}`)

        if(menorValor == null || valorTotal < menorValor){
            menorValor = valorTotal;
            empresaMenorValor = nomeDaEmpresa;
        }
        escolha = prompt("Deseja informar novos dados? S/N")
    }

    alert(`O orçamento de menor valor é o de ${empresaMenorValor} por R$${menorValor.toFixed(2)}.`)
}

inicio();