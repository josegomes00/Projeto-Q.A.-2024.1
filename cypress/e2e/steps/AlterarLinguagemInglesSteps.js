/// <reference types="cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given("que acesso o site", () => {
    cy.visit('https://www.gov.br/pt-br')
    
})

And("Encontrar Elemento para Troca de Linguagem", () => {
    cy.wait(2000)
    cy.get('.link-language-select > .fas').wait(1000).click()
    
})

And("Trocar para Inglês", () => {
    cy.wait(2000)
    cy.get('.languages > :nth-child(1)').wait(1000).click()
    
})



