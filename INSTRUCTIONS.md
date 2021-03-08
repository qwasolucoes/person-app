# Regras de negócio
Uma empresa precisa fazer um sistema para efetuar o cadastro de candidatos para o seu programa de trainee.
O Cadastro será feito em dois passos, mas na mesma tela:
1. A tela deve conter um formulário para o usuário inserir as informações do candidato
2. Agrupar os candidatos  em uma tabela para efetuar o envio de todos os candidatos de uma única vez.

Inicialmente o RH deve fazer o cadastro de acordo com o número de vagas de trainee disponíveis na empresa. O primeiro processo será de 10 vagas, caso o RH tente cadastrar mais candidatos do que vagas, o sistema precisa validar e avisar que o número de candidatos superou o limite permitido.

As informações necessárias para cadastrar um candidato são:
- Nome
- Sobrenome
- CPF
- Data de Nascimento

Todas as informações são obrigatórias, caso não seja preenchido o usuário deve ser avisado sobre os campos não foram preenchidos ou foram preenchidos incorretamente.

O mesmo canditato não pode ser cadastrado em duplicidade.

A tabela que irá agrupar os candidatos antes da submissão deve conter as seguintes informações:

- Nome
- Sobrenome
- Data de Nascimento
- Idade
- É maior de idade?

E por fim um botão para confirmar o cadastro de todos os candidatos agrupados.

Apresentar uma mensagem confirmando o sucesso da operação.


# Orientações para execução do ambiente

Para a inicialização dos servidores é possível a utilização dos scripts `startup.sh` (no Linux) ou `startup.cmd` (no Windows).

Caso seja necessário visualizar os logs das aplicações execute o script
`view-logs.sh` (no Linux) ou `view-logs.cmd` (no Windows).

Para encerrar os servidores utilizar o script `shutdown.sh` (no Linux) ou `shutdown.cmd` (no Windows).