# Avaliação Oficial 2 - Gerenciamento e Qualidade de Softwares

**Importante:** O link para o repositório do **GITHUB deve estar público** e deve ser enviado para o e-mail com o título: **Gerenciamento e Qualidade de Softwares - OFICIAL 2** até o dia 7 de junho de 2024.

Pode ser utilizado qualquer framework de automação de testes por meio de código como:

- Cypress
- JUnit
- PHPUnit
- Selenium
- Playwright
- etc…

**Deve existir um README** no repositório do GITHUB informando:

- O que precisa ser instalado para executar os testes
- Quais comandos precisam ser executados e como devem ser executados para executar os testes
    
    Caso algum BUG seja encontrado, crie no seu projeto um arquivo bugReport.xls com os reports no formato informado no final dessa página.
    
- Toda e qualquer configuração adicional necessária

## Sobre o projeto

Você foi contratado como QA do time de TI da Faculdade XPTO e como seu primeiro trabalho você precisa testar e validar a API de consulta de dados da matrícula dos alunos.

O seu gestor te passou as seguintes tasks:

### Story: Usuário solicita dados da matrícula de um aluno regular

```
Como um usuário do sistema eu gostaria de informar um número de matrícula 
para obter os dados dessa matrícula.

**Cenário:** Deve ser possível consultar os dados de uma matrícula regular ao 
informar um número de matrícula válido e sem restrições.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula válido e sem restrições.
**Então** deve ser retornado uma resposta em JSON com TODOS os dados da matrícula.
```

### Story: Usuário solicita dados da matrícula de um aluno com mensalidade atrasada

```
Como um usuário do sistema eu gostaria de ser informado quando tentar obter 
os dados de uma matrícula que possui pagamento em atraso.

**Cenário:** Deve ser retornada uma mensagem de erro ao consultar os dados de uma 
matrícula com pagamento em atraso.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula válido que está com pagamento atrasado.
**Então** deve ser retornado uma resposta em JSON com uma mensagem de erro 
indicando que a matrícula possui pagamento em atraso.
```

### Story: Usuário solicita dados da matrícula de um aluno bolsista 100%

```
Como um usuário do sistema eu gostaria de informar um número de matrícula de
um aluno bolsista 100% para obter os dados dessa matrícula.

**Cenário:** Deve ser possível consultar os dados de uma matrícula de aluno 
bolsista 100% ao informar um número de matrícula válido e sem restrições.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula de um aluno bolsista 100%.
**Então** deve ser retornado uma resposta em JSON com os dados da matrícula
**E** não deve ser retornado o valor da mensalidade
**E** não deve ser retornada a data de vencimento da mensalidade
```

### Story: Usuário solicita dados da matrícula de um aluno bolsista 50%

```
Como um usuário do sistema eu gostaria de informar um número de matrícula de
um aluno bolsista 50% para obter os dados dessa matrícula.

**Cenário:** Deve ser possível consultar os dados de uma matrícula de aluno 
bolsista 50% ao informar um número de matrícula válido e sem restrições.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula de um aluno bolsista 50%.
**Então** deve ser retornado uma resposta em JSON com TODOS os dados da matrícula
**E** não deve informar o STATUS: BOLSISTA_50
```

### Story: Usuário solicita dados da matrícula de um aluno com todas as mensalidades quitadas

```
Como um usuário do sistema eu gostaria de informar um número de matrícula de
um aluno bolsista para obter os dados dessa matrícula.

**Cenário:** Deve ser possível consultar os dados de uma matrícula de um aluno 
que já realizou todos os pagamentos das mensalidades futuras.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula de um aluno que já realizou o 
pagamento de todas as mensalidades futuras..
**Então** deve ser retornado uma resposta em JSON com os dados da matrícula
**E** não deve ser retornada a data de vencimento da mensalidade
```

### Story: Usuário solicita dados de uma matrícula que foi excluída

```
Como um usuário do sistema eu gostaria de ser informado quando tentar obter 
os dados de uma matrícula que já foi excluída.

**Cenário:** Deve ser retornada uma mensagem de erro ao consultar os dados de uma 
matrícula que já foi excluída.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula válido que foi excluída anteriormente.
**Então** deve ser retornado uma resposta em JSON apenas com uma mensagem de erro 
indicando que a matrícula encontra-se excluída.
```

### Story: Usuário solicita dados de uma matrícula inválida

```
Como um usuário do sistema eu gostaria de ser informado quando tentar obter 
os dados de uma matrícula inválida.

**Cenário:** Deve ser retornada uma mensagem de erro ao consultar os dados de uma 
matrícula inválida.

**Dado** que realizo uma requisição do tipo GET para o endpoint de consulta de 
matrículas.
**Quando** eu informar um número de matrícula inválido.
**Então** deve ser retornado uma resposta em JSON apenas com uma mensagem de erro 
indicando que a matrícula informada é inválida.
```

### Instruções para uso / teste

Baixe o respositório no Github: [https://github.com/PHPauloReis/oficial2-matriculas-api/](https://github.com/PHPauloReis/oficial2-matriculas-api/)

Execute com o: Intellij Idea Community

**Endpoint:** http://localhost:8080/v1/matriculas/{numero_da_matricula}

**Method:** GET

**Header:** X-API-KEY = unime-qualidade-oficial2

<aside>
💡 Todas as chamadas à API devem informar o **header** `X-API-KEY` com o valor `unime-qualidade-oficial2`

</aside>

- Formato de resposta

```json
{
	"matricula": 123456,
	"curso": "Sistemas de Informação",
	"mensalidade": {
		"valor": 1390.00,
		"valor_formatado": "R$ 1390,00",
		"vencimento": "2024-06-10",
		"status": "EM_DIA"
	}
	"aluno": {
		"nome": "Mariana",
		"sobrenome": "Santana de Jesus",
		"data_nascimento": "1980-02-10",
		"cpf": "123.321.123.23"
	}
}
```

- Possíveis status

<aside>
💡 *EM_DIA, 
BOLSISTA_100, 
BOLSISTA_50,
CONTRATO_QUITADO, 
PAGAMENTO_EM_ATRASO,
MATRICULA_EXCLUIDA*

</aside>

- Mensagens de validação

```json
**Pagamento atrasado:
Status Code: 409**
JSON: 
{
    "mensagem": "A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!"
}

**Matrícula não encontrada:
Status Code: 404**
JSON:
{
    "mensagem": "A matrícula informada não foi localizada em nossa base de dados!"
}

**Matrícula excluída:
Status Code: 404**
JSON:
{
    "mensagem": "A matrícula informada foi excluída de nossa base de dados!"
}

**Matrícula inválida:
Status Code: 400**
{
    "mensagem": "A matrícula informada não parece ser válida!"
}

X-API-KEY ausente no header
Status Code: 401
JSON:
{
    "mensagem": "A API Key informada é inválida!"
}
```

- Massa de teste

```json
**Matrícula em dia:
4653421

Matrícula de Bolsista 100%:
7890123

Matrícula de Bolsista 50%:
1113499

Matrícula Inválida:
1 ou 99 ou XPTO123 ou 999999999999

Matrícula com todos os pagamentos quitados:
1122334

Matrícula com pagamento atrasado:
5566778

Matrícula excluída:
4653499

Matrícula inexistente:
1234567 ou 2222222 ou 7777777**
```

Formato do Report de Bugs

![Avaliac%CC%A7a%CC%83o%20Oficial%202%20-%20Gerenciamento%20e%20Qualidade%20%202c1a8cb42e3042c89d47288a68b2ac8b/Untitled.png](https://github.com/MichelNsouza/Validacao_API_Matricula_Alunos/blob/main/tasks/Avalia%C3%A7%C3%A3o%20Oficial%202%20-%20Gerenciamento%20e%20Qualidade%20%202c1a8cb42e3042c89d47288a68b2ac8b/Untitled.png)

# Exportado do Notion de [Paulo Reis](https://github.com/PHPauloReis)
