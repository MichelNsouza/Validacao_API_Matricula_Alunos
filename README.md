# Validação API de consulta de dados da matrícula de alunos

## Descrição
Este é um projeto de testes automatizados utilizando Cypress, proposto como avaliação final da disciplina de Gerenciamento e Qualidade de Software 5º Semestre 2024.01, ministrada pelo Professor Paulo Reis no curso de Bacharelado em Sistemas de Informação (BSI) da UNIME.

## API Testada
 - [Repositorio](https://github.com/PHPauloReis/oficial2-matriculas-api/) da API de matriculas testada.
 - [tasks](https://github.com/MichelNsouza/Validacao_API_Matricula_Alunos/blob/main/tasks/Avalia%C3%A7%C3%A3o%20Oficial%202%20-%20Gerenciamento%20e%20Qualidade%20%202c1a8cb42e3042c89d47288a68b2ac8b.md) testadas.

## Tecnologias e software's Utilizados
- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)
- [Intelij Idea Community](https://www.jetbrains.com/idea/download/)
- [Postman](https://www.postman.com/downloads/)
- [VScode](https://code.visualstudio.com/download)

## Passos para Executar os Testes

### Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [Node.js Download](https://nodejs.org/en/download/package-manager).

### 1. Navegar para o Diretório do Projeto
Abra o terminal e navegue para o diretório onde você baixou/clonou o projeto.
Ou abra o projeto diretamente na sua IDE de preferencia e abra o terminal integrado

### 2. Instalar Dependências
Execute o comando abaixo para instalar as dependências do projeto:
```bash
npm install
```

### 3. Executar os Testes
#### Com Interface Gráfica
Use o comando abaixo para abrir a interface do Cypress e executar os testes:
```bash
npx cypress open
```

#### Sem Interface Gráfica
Use o comando abaixo para executar os testes no terminal sem abrir a interface gráfica:
```bash
npx cypress run --headless
```

### Executando os testes
No diretório do projeto, você executaria os seguintes comandos no terminal:
Sem Interface Gráfica:
```bash
npx cypress run --headless
```


Na aplicação Cypress que abriu escolha:
* A opção E2E Testing
* Escolha o navegador de preferencia e click em "Start E2E Testing in 'SeuNavegador'"
* Na área de Specs escolha o Story que deseja executar.

Siga essas instruções para configurar e executar o projeto com sucesso. :)

