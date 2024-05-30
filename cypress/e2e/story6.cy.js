describe("Consultar dados de matrícula que foi excluída", () => {
    it("deve retornar uma mensagem de erro indicando que a matrícula encontra-se excluída.", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:8080/v1/matriculas/4653499",
        headers: {
          "X-API-KEY": "unime-qualidade-oficial2", 
        },
        failOnStatusCode: false,
      }).then((response) => { 
        const dadosMatricula = response.body;
        expect(response.body.mensagem).to.equal("A matrícula informada foi excluída de nossa base de dados!");
        
      });
    });
    it("deve retornar code status 404", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:8080/v1/matriculas/4653499",
        headers: {
          "X-API-KEY": "unime-qualidade-oficial2", 
        },
        failOnStatusCode: false,
      }).then((response) => {
  
        expect(response.status).to.equal(404); 
  
      });
    });
  });
  