describe("Consultar dados de matrícula bolsista 100%", () => {
  const matricula = 7890123; 
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

    it("deve retornar propriedades da matrícula ao informar um número válido de bolsista 100%", () => {
  
      cy.get("@matriculaRequest").then((response) => {
        const dadosMatricula = response.body;
        expect(response.body).to.have.property("tuition");
        expect(response.body).to.have.property("student");
      });
    });
    it("não deve retornar os dados da matrícula valor da mensalidade e vencimento", () => {
  
      cy.get("@matriculaRequest").then((response) => {
          const dadosMatricula = response.body;
          expect(response.body.tuition.formattedAmount).to.equal("R$ 0.00");
          expect(response.body.tuition.dueDate).to.be.null;

        });
    });
    it("deve retornar dados da matrícula ao informar um número válido", () => {
  
      cy.get("@matriculaRequest").then((response) => {
        const dadosMatricula = response.body;
  
        expect(response.body.id).to.not.be.empty;
        expect(response.body.courseName).to.not.be.empty;
        ;
        expect(response.body.tuition.status).to.not.be.empty;
  
        expect(response.body.student.firstName).to.not.be.empty;
        expect(response.body.student.lastName).to.not.be.empty;
        expect(response.body.student.birthDate).to.not.be.empty;
        expect(response.body.student.cpf).to.not.be.empty;
      });
    });
    it("deve retornar code status 200", () => {
  
      cy.get("@matriculaRequest").then((response) => {
  
        expect(response.status).to.equal(200); 
  
      });
    });
  });
  