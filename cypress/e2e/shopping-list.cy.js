describe('Shopping List Tests', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/');
  });

  it('should add a new item to the list', () => {
      const itemText = 'New Item';
      cy.get('.input-group input[type="text"]')
        .type(itemText);
      cy.get('#button-addon2').click();
      cy.get('.list-group').should('contain', itemText);
  });

  it('should show an alert if input is empty and add button is clicked', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      cy.get('#button-addon2')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Please enter an item.');
        });
  });

  it('should remove an item from the list', () => {
      // Add an item first
      const itemText = 'Item to Delete';
      cy.get('.input-group input[type="text"]')
        .type(itemText);
      cy.get('#button-addon2').click();

      // Then delete it
      cy.get('.list-group-item').contains('Item to Delete').within(() => {
        cy.get('button').click();
    });

    cy.get('.list-group').should('not.contain', 'Item to Delete');
});

it('should add an item when enter is pressed', () => {
    const itemText = 'Item from Enter';
    cy.get('.input-group input[type="text"]')
      .type(`${itemText}{enter}`);

    cy.get('.list-group').should('contain', itemText);
});
});
     


