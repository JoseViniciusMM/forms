const inputFormulario = document.getElementById('formulario'); // Removido os '#' de todos
const inputNome = document.getElementById('nome');
const inputQtdDependentes = document.getElementById('qtd_dependentes');
const inputDataNascimento = document.getElementById('data_nascimento');
const inputDatetimeEvento = document.getElementById('datetime_evento');
const inputObservacoes = document.getElementById('observacoes');
const inputAceitosOsTermos = document.getElementById('aceitos_os_termos');
const inputMasculino = document.getElementById('masculino');
const inputFeminino = document.getElementById('feminino');
const inputUf = document.getElementById('uf');

// Array mantido no escopo global
const arrayDadosFormulario = [];

// Função limpar formulário
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

// Corrigido o nome da variável para 'inputFormulario'
inputFormulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // O objeto deve ser criado AQUI, no momento do envio, para capturar os valores preenchidos
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

    // Adiciona ao array que você criou
    arrayDadosFormulario.push(dadosFormulario);

    // Logs no console utilizando o objeto atualizado
    console.log(`Nome: ${dadosFormulario.nome}`);
    console.log(`Aceitos os Termos: ${dadosFormulario.aceitosOsTermos ? 'Sim' : 'Não'}`);
    console.log(`Qtd. Dependentes: ${dadosFormulario.qtdDependentes}`);
    console.log(`Data de Nascimento: ${dadosFormulario.dataNascimento}`);
    console.log(`Data do Evento: ${dadosFormulario.datetimeEvento}`);
    console.log(`Observações: ${dadosFormulario.observacoes}`);
    console.log(`Sexo: ${dadosFormulario.sexo}`);
    console.log(`UF: ${dadosFormulario.uf}`);
    
    // Log do array completo para confirmar que está guardando o histórico
    console.log('Array completo de cadastros:', arrayDadosFormulario);

    // Opcional: Chama a função para limpar a tela após o cadastro
    limparFormulario(); 
});