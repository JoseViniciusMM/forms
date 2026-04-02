const inputFormulario = document.getElementById('formulario'); 
const inputNome = document.getElementById('nome');
const inputQtdDependentes = document.getElementById('qtd_dependentes');
const inputDataNascimento = document.getElementById('data_nascimento');
const inputDatetimeEvento = document.getElementById('datetime_evento');
const inputObservacoes = document.getElementById('observacoes');
const inputAceitosOsTermos = document.getElementById('aceitos_os_termos');
const inputMasculino = document.getElementById('masculino');
const inputFeminino = document.getElementById('feminino');
const inputUf = document.getElementById('uf');

const arrayDadosFormulario = [];


function limparFormulario() {
    inputNome.value = '';
    inputQtdDependentes.value = '0'; 
    inputDataNascimento.value = '';
    inputDatetimeEvento.value = '';
    inputObservacoes.value = '';
    inputAceitosOsTermos.checked = false;
    inputMasculino.checked = false;
    inputFeminino.checked = false;
    inputUf.value = 'AC'; 
}


inputFormulario.addEventListener('submit', (event) => {
    event.preventDefault();


    const dadosFormulario = {
        nome: inputNome.value,
        qtdDependentes: parseInt(inputQtdDependentes.value),
        dataNascimento: inputDataNascimento.value,
        datetimeEvento: inputDatetimeEvento.value,
        observacoes: inputObservacoes.value,
        aceitosOsTermos: inputAceitosOsTermos.checked,
        sexo: inputMasculino.checked ? "Masculino" : "Feminino",
        uf: inputUf.value
    };

    arrayDadosFormulario.push(dadosFormulario);


    console.log(`Nome: ${dadosFormulario.nome}`);
    console.log(`Aceitos os Termos: ${dadosFormulario.aceitosOsTermos ? 'Sim' : 'Não'}`);
    console.log(`Qtd. Dependentes: ${dadosFormulario.qtdDependentes}`);
    console.log(`Data de Nascimento: ${dadosFormulario.dataNascimento}`);
    console.log(`Data do Evento: ${dadosFormulario.datetimeEvento}`);
    console.log(`Observações: ${dadosFormulario.observacoes}`);
    console.log(`Sexo: ${dadosFormulario.sexo}`);
    console.log(`UF: ${dadosFormulario.uf}`);
    

    console.log('Array completo de cadastros:', arrayDadosFormulario);

    limparFormulario(); 
});