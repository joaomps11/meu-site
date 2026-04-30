describe("Testes de Integração - Site João Marcos", () => {

  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html")
  })

  it("Deve carregar o nome principal", () => {
    cy.contains("João Marcos").should("be.visible")
  })

  it("Deve exibir a navbar com links", () => {
    cy.get("nav").should("be.visible")
    cy.contains("Início")
    cy.contains("Sobre")
    cy.contains("Projetos")
    cy.contains("Habilidades")
    cy.contains("Contato")
  })

  it("Deve navegar para seção Sobre", () => {
    cy.get('a[href="#sobre"]').click()
    cy.get("#sobre").should("be.visible")
  })

  it("Deve navegar para seção Projetos", () => {
    cy.get('a[href="#projetos"]').click()
    cy.get("#projetos").should("be.visible")
  })

  it("Deve navegar para seção Habilidades", () => {
    cy.get('a[href="#habilidades"]').click()
    cy.get("#habilidades").should("be.visible")
  })

  it("Deve navegar para seção Contato", () => {
    cy.get('a[href="#contato"]').click()
    cy.get("#contato").should("be.visible")
  })

  it("Deve acessar página AFA ao clicar no projeto", () => {
    cy.get(".project-card").contains("Projeto AFA").click()
    cy.url().should("include", "afa.html")
  })

  it("Deve acessar página Raspberry", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
    cy.get(".project-card").contains("Raspberry").click()
    cy.url().should("include", "raspberry.html")
  })

  it("Deve acessar página LICEU", () => {
    cy.visit("http://127.0.0.1:5500/index.html")
    cy.get(".project-card").contains("LICEU").click()
    cy.url().should("include", "liceu.html")
  })

  it("Deve preencher o formulário de contato", () => {
    cy.get("#nome").type("Teste")
    cy.get("#email").type("teste@email.com")
    cy.get("#mensagem").type("Mensagem de teste")
  })

  it("Deve funcionar no mobile", () => {
    cy.viewport("iphone-6")
    cy.get("body").should("be.visible")
  })

})