describe("Consultar dados de matrícula com mensalidade atrasada", () => {

  const matricula = 5566778; 
  const apiKey = "unime-qualidade-oficial2"; 

  beforeEach(() => {
    cy.request({
      method: "GET",
      url: `http://localhost:8080/v1/matriculas/${matricula}`,
      headers: {
        "X-API-KEY": apiKey,
      },
    }).as("matriculaRequest"); 
  });
    it("Deve ser retornada o status code 409", () => {
  
      cy.get("@matriculaRequest").then((response) => {
  
        expect(response.status).to.equal(409); 
        const dadosMatricula = response.body;

      });
    });
    it("Deve ser retornada uma mensagem de erro ao consultar os dados de uma matrícula com pagamento em atraso", () => {
  
      cy.get("@matriculaRequest").then((response) => {

          expect(response.body.mensagem).to.equal("A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!");
          
        });
      });
  });
  