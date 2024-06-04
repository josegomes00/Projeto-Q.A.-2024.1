/// <reference types="cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given("que acesso o site", () => {
    cy.visit('https://www.gov.br/pt-br')
    
})

And("Encontrar Elemento de Busca", () => {
    cy.wait(2000)
    cy.get('#searchtext-input').type("MEI")
    
})



