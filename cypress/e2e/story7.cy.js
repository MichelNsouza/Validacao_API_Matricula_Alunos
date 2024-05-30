describe("Consultar dados de matrícula que foi excluída", () => {
    it("deve retornar uma mensagem de erro indicando que a matrícula informada é inválida.", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:8080/v1/matriculas/999999999999",
        headers: {
          "X-API-KEY": "unime-qualidade-oficial2", 
        },
        failOnStatusCode: false,
      }).then((response) => { 
        const dadosMatricula = response.body;
        expect(response.body.mensagem).to.equal("A matrícula informada não parece ser válida!");
        
      });
    });
    it("deve retornar code status 400", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:8080/v1/matriculas/999999999999",
        headers: {
          "X-API-KEY": "unime-qualidade-oficial2", 
        },
        failOnStatusCode: false,
      }).then((response) => {
  
        expect(response.status).to.equal(400); 
  
      });
    });
  });
  