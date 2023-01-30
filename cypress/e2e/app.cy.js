//import "describe" "it", "cy" from cypress package

import { cy, describe, it } from 'cypress';

describe('reports working', () => {
  it('pafr working', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/reports/pafr22');
    //ensure bonds svg renders
    cy.get('#bondschart4pafr svg', { timeout: 30000 });
    cy.get('h1').contains('Popular Annual Financial Report FY22');
  });
});
