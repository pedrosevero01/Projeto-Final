document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formulario-login');
    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            event.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;

            //validação do usuário e senha
            if (usuario === 'Wayne' && senha === '1234') {
                window.location.href = 'addfunc.html';
            } else {
                alert('Usuário ou senha incorretos!');
            }
        });
    }
// codigo para página de adicionar funcionarios
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        const tabela = document.getElementById('tabelaRegistros').getElementsByTagName('tbody')[0];

        formRegistro.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const cargo = document.getElementById('cargo').value;
            const departamento = document.getElementById('departamento').value;

            const novaLinha = tabela.insertRow();

            const cellNome = novaLinha.insertCell(0);
            const cellCargo = novaLinha.insertCell(1);
            const cellDepartamento = novaLinha.insertCell(2);
            const cellAcoes = novaLinha.insertCell(3);

            cellNome.textContent = nome;
            cellCargo.textContent = cargo;
            cellDepartamento.textContent = departamento;

            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.classList.add('edit');
            btnEditar.onclick = function() {
                editarRegistro(novaLinha);
            };

            const btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.onclick = function() {
                removerRegistro(novaLinha);
            };

            const divAcoes = document.createElement('div');
            divAcoes.classList.add('actions');
            divAcoes.appendChild(btnEditar);
            divAcoes.appendChild(btnRemover);

            cellAcoes.appendChild(divAcoes);

            formRegistro.reset();
        });

        function editarRegistro(linha) {
            const cells = linha.getElementsByTagName('td');
            document.getElementById('nome').value = cells[0].textContent;
            document.getElementById('cargo').value = cells[1].textContent;
            document.getElementById('departamento').value = cells[2].textContent;

            linha.remove();
        }

        function removerRegistro(linha) {
            linha.remove();
        }
    }
});

//botao de sair funcionamento

document.getElementById("sair").addEventListener("click", function(){
    window.location.href = "login.html"
})

//gestão de recursos

document.addEventListener('DOMContentLoaded', function() {
    const formVeiculo = document.getElementById('formVeiculo');
    const formItemSeguranca = document.getElementById('formItemSeguranca');
    const tabelaVeiculos = document.getElementById('tabelaVeiculos').getElementsByTagName('tbody')[0];
    const tabelaItensSeguranca = document.getElementById('tabelaItensSeguranca').getElementsByTagName('tbody')[0];

    formVeiculo.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nomeVeiculo').value;
        const modelo = document.getElementById('modeloVeiculo').value;
        const ano = document.getElementById('anoVeiculo').value;
        
        const newRow = tabelaVeiculos.insertRow();
        newRow.innerHTML = `<td>${nome}</td><td>${modelo}</td><td>${ano}</td><td>Disponível</td><td><button onclick="removerLinha(this)">Remover</button></td>`;
        
        formVeiculo.reset();
    });

    formItemSeguranca.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nomeItem').value;
        const descricao = document.getElementById('descricaoItem').value;
        const quantidade = document.getElementById('quantidadeItem').value;
        
        const newRow = tabelaItensSeguranca.insertRow();
        newRow.innerHTML = `<td>${nome}</td><td>${descricao}</td><td>${quantidade}</td><td>Disponível</td><td><button onclick="removerLinha(this)">Remover</button></td>`;
        
        formItemSeguranca.reset();
    });
});

function removerLinha(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function navigateTo(page) {
    window.location.href = page;
}

document.getElementById('sair').addEventListener('click', function() {
    // Implementar lógica de sair
    alert('Você saiu!');
});


document.addEventListener('DOMContentLoaded', () => {
    const formAddAdmin = document.getElementById('formAddAdmin');
    const adminCards = document.getElementById('adminCards');

    if (formAddAdmin) {
        formAddAdmin.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('adminNome').value;
            const email = document.getElementById('adminEmail').value;
            const senha = document.getElementById('adminSenha').value;

            if (nome && email && senha) {
                const card = document.createElement('div');
                card.classList.add('admin-card');

                const cardContent = `
                    <h3>${nome}</h3>
                    <p>Email: ${email}</p>
                    <p>Senha: ${senha}</p>
                    <button onclick="removerCard(this)">Remover</button>
                `;

                card.innerHTML = cardContent;
                adminCards.appendChild(card);

                formAddAdmin.reset();
            }
        });
    }

    document.getElementById('sair').addEventListener('click', function() {
        window.location.href = "login.html";
    });
});

function removerCard(button) {
    const card = button.parentNode;
    card.parentNode.removeChild(card);
}

function navigateTo(page) {
    window.location.href = page;
}