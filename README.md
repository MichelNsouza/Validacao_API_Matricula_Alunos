# Validação a API de consulta de dados da matrícula de alunos

## Descrição
Este é um projeto de testes automatizados utilizando Cypress, proposto como avaliação final da disciplina de Gerenciamento e Qualidade de Software, ministrada pelo Professor Paulo Reis no curso de Bacharelado em Sistemas de Informação (BSI) da UNIME.

## Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)

## Pré-requisitos
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [Node.js Download](https://nodejs.org/en/download/package-manager).

## Passos para Executar

### 1. Navegar para o Diretório do Projeto
Abra o terminal e navegue para o diretório do projeto Cypress que você baixou/clonou.

### 2. Instalar Dependências
Execute o comando abaixo para instalar as dependências do projeto:
```bash
npm install
```

### 3. Executar os Testes
#### Com Interface Gráfica
Use o comando abaixo para abrir a interface do Cypress e executar os testes:
```bash
npx cypress run
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

Com Interface Gráfica
```bash
npx cypress open
```
Na aplicação Cypress que abriu escolha:
* A opção E2E Testing
* Escolha o navegador de preferencia e click em "Start E2E Testing in 'SeuNavegador'"
* Na área de Specs escolha o Story que deseja executar.

Siga essas instruções para configurar e executar seu projeto Cypress com sucesso. :)

