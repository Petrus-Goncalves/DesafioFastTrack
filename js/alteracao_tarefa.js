document.addEventListener('DOMContentLoaded', function () {
    const index = getItem('tarefaEditando');
    if (index !== null) {
        const usuarioLogado = getItem('usuarioLogado');
        const tarefaParaEditar = usuarioLogado.tarefas[index];

        if (tarefaParaEditar) {
            document.getElementById('inputTarefa1').value = tarefaParaEditar.tarefa;
            document.getElementById('inputDataInicio1').value = tarefaParaEditar.dataInicio;
            document.getElementById('inputHoraInicio1').value = tarefaParaEditar.horaInicio;
            document.getElementById('inputDataTermino1').value = tarefaParaEditar.dataTermino;
            document.getElementById('inputHoraTermino1').value = tarefaParaEditar.horaTermino;
            document.getElementById('descricao1').value = tarefaParaEditar.descricao;
        } else {
            alert('Tarefa não encontrada.');
        }
    } else {
        alert('Nenhuma tarefa selecionada para edição.');
    }


    //função para cancelar a alteração da tarefa
    document.getElementById('confirmarAlteracao').addEventListener('click', function () {
        const index = getItem('tarefaEditando');

        if (index !== null) {
            const usuarioLogado = getItem('usuarioLogado');
            const usuarios = getItem('usuarios');

            // Atualizar os detalhes da tarefa para o usuário logado
            usuarioLogado.tarefas[index].tarefa = document.getElementById('inputTarefa1').value;
            usuarioLogado.tarefas[index].dataInicio = document.getElementById('inputDataInicio1').value;
            usuarioLogado.tarefas[index].horaInicio = document.getElementById('inputHoraInicio1').value;
            usuarioLogado.tarefas[index].dataTermino = document.getElementById('inputDataTermino1').value;
            usuarioLogado.tarefas[index].horaTermino = document.getElementById('inputHoraTermino1').value;
            usuarioLogado.tarefas[index].descricao = document.getElementById('descricao1').value;

            // Encontrar e atualizar o usuário correspondente na lista de usuários
            const usuarioIndex = usuarios.findIndex(u => u.email === usuarioLogado.email);
            if (usuarioIndex !== -1) {
                usuarios[usuarioIndex] = usuarioLogado;
                setItem('usuarios', usuarios);
                setItem('usuarioLogado', usuarioLogado);
                alert('Tarefa atualizada com sucesso!');
                window.location.href = 'pagina2_cadastro.html';
            } else {
                alert('Erro ao atualizar a tarefa.');
            }
        } else {
            alert('Erro ao atualizar a tarefa.');
        }
    });

    //função para excluir tarefa
    document.getElementById('excluirTarefa').addEventListener('click', function () {
        const indexTarefa = getItem('tarefaEditando');
        if (indexTarefa !== null) {
            const usuarioLogadoId = getItem('usuarioLogado').id;
            const usuarios = getItem('usuarios');

            // Encontrar o índice do usuário logado no array de usuários
            const indexUsuario = usuarios.findIndex(u => u.id === usuarioLogadoId);

            if (indexUsuario !== -1 && confirm('Tem certeza de que deseja excluir esta tarefa?')) {
                // Excluir a tarefa do usuário logado
                usuarios[indexUsuario].tarefas.splice(indexTarefa, 1);

                // Atualizar o localStorage com o array de usuários modificado
                setItem('usuarios', usuarios);

                // Atualizar o usuário logado no localStorage
                setItem('usuarioLogado', usuarios[indexUsuario]);

                alert('Tarefa excluída com sucesso!');
                window.location.href = 'pagina2_cadastro.html';
            }
        } else {
            alert('Erro ao tentar excluir a tarefa.');
        }
    });


    // Funcao para marcar como realizada
    document.getElementById('marcarComoRealizada').addEventListener('click', function () {
        const indexTarefa = getItem('tarefaEditando');
        const usuarioLogado = getItem('usuarioLogado');
        const usuarios = getItem('usuarios');

        if (indexTarefa !== null) {
            usuarioLogado.tarefas[indexTarefa].realizado = true;

            const usuarioIndex = usuarios.findIndex(u => u.id === usuarioLogado.id);
            if (usuarioIndex !== -1) {
                usuarios[usuarioIndex].tarefas[indexTarefa].realizado = true;

                setItem('usuarios', usuarios);
                setItem('usuarioLogado', usuarioLogado);

                alert('Tarefa marcada como realizada com sucesso!');
                window.location.href = 'pagina2_cadastro.html';
            }else {
                alert('Erro ao marcar a tarefa como realizada.');
            }
        }else {
            alert('Erro ao marcar a tarefa como realizada.');
        }
    });

    document.getElementById('cancelar').addEventListener('click', function (){
        window.location.href = 'pagina2_cadastro.html';
    })
});
