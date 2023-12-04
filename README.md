
# Interface de Login para Sistema de Recados

Este repositório contém uma página HTML para realizar o login de usuários na API de Recados.

## Descrição do Projeto

A tarefa consiste em criar uma página de login com os seguintes requisitos:

- Dois campos de formulário: username/email e senha.
- Dois botões: Login e Cadastre-se.
- Os campos de formulário são obrigatórios.
- Implementar um evento para submeter o login ao clicar no botão "Login".
- Tratamento de erros em caso de falha no login.
- Integração com a API de Recados para realizar o login.

### Regras Importantes

- A ênfase está na funcionalidade, não na estilização da página.
- Não é necessário implementar funcionalidade para o botão "Cadastre-se".
- Não submeter o formulário se os campos estiverem vazios.
- Após sucesso no login, redirecionar o usuário para a tela da lista de recados.
- Em caso de erro, exibir um alerta informando o problema.

### Desafio Adicional: Mecanismo de Sessão

Para garantir a segurança e privacidade dos recados, é proposto o desafio de implementar um mecanismo de sessão utilizando o `localStorage` do JavaScript. As seguintes etapas devem ser seguidas:

- Pesquisar sobre o `localStorage`, seu funcionamento, vantagens e comandos para armazenamento de informações.
- Utilizar o `localStorage` para criar e armazenar a sessão do usuário após o login.
- Não permitir acesso à tela da lista de recados para usuários não logados.
- Identificar o usuário logado na tela da lista de recados através da sessão para listar apenas os recados desse usuário.

## Instruções para Execução

1. Clone este repositório: `git clone https://github.com/seu-usuario/Login.git`
2. Abra o arquivo `index.html` em um navegador web.
3. Preencha os campos necessários e teste o login.

## Recursos Adicionais

- [Documentação do `localStorage`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- Conteúdos postados no classroom para pesquisa sobre o `localStorage`.
