context('Busca pelo cep', () => {
  beforeEach(() => {
    cy.visit('/encontrar-diarista');

  })
  it('botao desabilitado e habilitado', () => {
    cy.get('.MuiOutlinedInput-input').type('1234567');
    const button = cy.get('button').contains(/buscar/i);
    button.should('be.disabled');

    cy.wait(1000);

    cy.get('.MuiOutlinedInput-input').clear('12345678');
    button.should('not.be.disabled');
  });

  it('buscar cep', () => {
    cy.get('.MuiOutlinedInput-input').type('44.008-710');
    cy.get('button').contains(/buscar/i).click();

    cy.get('div').contains('Feira de Santana').should('be.visible');
  });

});