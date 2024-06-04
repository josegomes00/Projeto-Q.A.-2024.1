/// <reference types="cypress" />
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given("que acesso o site", () => {
    cy.visit('https://www.gov.br/pt-br')
    
})

And("Encontrar Elemento de Consulta CPF", () => {
    cy.wait(5000)
    cy.get('[href="https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas"] > .texto')
    
})



