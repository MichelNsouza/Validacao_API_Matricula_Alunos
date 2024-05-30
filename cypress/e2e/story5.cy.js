describe("Consultar dados de matrícula com todas as mensalidades quitadas", () => {
  it("deve retornar propriedades da matrícula ao informar um número válido de matrícula com todas as mensalidades quitadas", () => {

    cy.request({
      method: "GET",
      url: "http://localhost:8080/v1/matriculas/1122334",
      headers: {
        "X-API-KEY": "unime-qualidade-oficial2", 
      },
    }).then((response) => {
      const dadosMatricula = response.body;
      expect(response.body).to.have.property("tuition");
      expect(response.body).to.have.property("student");
    });
  });
  it("não deve ser retornada a data de vencimento da mensalidade", () => {

      cy.request({
        method: "GET",
        url: "http://localhost:8080/v1/matriculas/1122334",
        headers: {
          "X-API-KEY": "unime-qualidade-oficial2", 
        },
      }).then((response) => { 
        const dadosMatricula = response.body;
        expect(response.body.tuition.status).to.not.equal("BOLSISTA_50");
      });
    });
  it("deve retornar dados da matrícula ao informar um número válido", () => {

    cy.request({
      method: "GET",
      url: "http://localhost:8080/v1/matriculas/1122334",
      headers: {
        "X-API-KEY": "unime-qualidade-oficial2", 
      },
    }).then((response) => { 
      const dadosMatricula = response.body;

      expect(response.body.id).to.not.be.empty;
      expect(response.body.courseName).to.not.be.empty;
      
      expect(response.body.tuition.formattedAmount).to.not.be.empty;
      expect(response.body.tuition.status).to.not.be.empty;

      expect(response.body.student.firstName).to.not.be.empty;
      expect(response.body.student.lastName).to.not.be.empty;
      expect(response.body.student.birthDate).to.not.be.empty;
      expect(response.body.student.cpf).to.not.be.empty;
    });
  });
  it("deve retornar code status 200", () => {

    cy.request({
      method: "GET",
      url: "http://localhost:8080/v1/matriculas/1122334",
      headers: {
        "X-API-KEY": "unime-qualidade-oficial2", 
      },
    }).then((response) => {

      expect(response.status).to.equal(200); 

    });
  });
});
