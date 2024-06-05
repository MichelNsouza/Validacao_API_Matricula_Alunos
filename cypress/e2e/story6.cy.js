describe("Consultar dados de matrícula que foi excluída", () => {
  const matricula = 4653499; 
  const apiKey = "unime-qualidade-oficial2"; 

  beforeEach(() => {
    cy.request({
      method: "GET",
      url: `http://localhost:8080/v1/matriculas/${matricula}`,
      headers: {
        "X-API-KEY": apiKey,
      },
      failOnStatusCode: false,
    }).as("matriculaRequest"); 
  
  });


  
    it("deve retornar uma mensagem de erro indicando que a matrícula encontra-se excluída.", () => {
  
      cy.get("@matriculaRequest").then((response) => { 
        const dadosMatricula = response.body;
        expect(response.body.mensagem).to.equal("A matrícula informada foi excluída de nossa base de dados!");
        
      });
    });
    it("deve retornar code status 404", () => {
  
      cy.get("@matriculaRequest").then((response) => {
  
        expect(response.status).to.equal(404); 
  
      });
    });
  });
  