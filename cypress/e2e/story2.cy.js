describe("Consultar dados de matrícula com mensalidade atrasada", () => {
    it("Deve ser retornada o status code 409", () => {
  
      cy.request({
        method: "GET",
        url: "http://localhost:8080/v1/matriculas/5566778",
        headers: {
          "X-API-KEY": "unime-qualidade-oficial2", 
        },
      }).then((response) => {
  
        expect(response.status).to.equal(409); 
        const dadosMatricula = response.body;

      });
    });
    it("Deve ser retornada uma mensagem de erro ao consultar os dados de uma matrícula com pagamento em atraso", () => {
  
        cy.request({
          method: "GET",
          url: "http://localhost:8080/v1/matriculas/5566778",
          headers: {
            "X-API-KEY": "unime-qualidade-oficial2", 
          },
        }).then((response) => {

          expect(response.body.mensagem).to.equal("A matrícula informada possui débitos em aberto. Não é possível obter dados da mesma até a quitação!");
          
        });
      });
  });
  