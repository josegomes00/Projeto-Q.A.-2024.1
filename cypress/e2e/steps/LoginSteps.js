/// <reference types="cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given("que acesso o site", () => {
        cy.visit('https://www.gov.br/pt-br')
    
})

And("Acesse o Login", () => {
        cy.wait(5000)
        cy.get('#barra-sso').click()
    
})



