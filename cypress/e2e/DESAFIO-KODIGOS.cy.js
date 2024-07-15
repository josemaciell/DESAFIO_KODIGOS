/// <reference types="Cypress" />

describe('Adicionar uma nova solicitação de compras.', function() {
  it('Preencher a Filial - Kodigos.', function() {
    cy.viewport(1280, 800) // Ajuste a largura e altura conforme necessário
    cy.visit('https://app.kodigos.com.br:63995/scm/front/novaSolicitacao', { timeout: 100000 }) 
    cy.title().should('be.equal', 'SCM')
    cy.get('[href="/scm/front/listaSolicitacao"] > .q-item__section--side > .q-icon').click()
    cy.get('.q-field__after > .q-btn > .q-btn__content > .q-icon').click()
    cy.contains('Filial').click()
    cy.contains('Instituto Kodigos').click()
    cy.get(':nth-child(3) > :nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container')
      .click()
    cy.contains('COMPRAS')
      .click()
    cy.contains('Tipo de Solicitação').click()
    cy.contains('SERVIÇO').click()
    cy.get(':nth-child(4) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native')
      .click()
    cy.contains('SOLICITAÇÃO DE COMPRA - PEÇAS DE REPOSIÇÃO DE MÁQUINAS E EQUIPAMENTOS')
      .click()
    cy.contains('Justificativa/Projeto').click().type('Lorem ipsum integer.')
    cy.contains('Quantidade').click().type('1')
    cy.get(':nth-child(7) > :nth-child(4) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container').click()
    cy.contains('CX')
    .click()
    cy.get(':nth-child(8) > .col-md-4 > .q-field > .q-field__inner > .q-field__control').type('ok')
    cy.get(':nth-child(8) > .col-md-auto > .q-btn > .q-btn__content > .block').click()   
    cy.contains('SALVAR').click()
    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('be.visible')
  });
});
