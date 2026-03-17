import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu acesso a página de login', () => {
  cy.visit('/login.html');
});

When('eu clico em Criar Conta', () =>{
    cy.get('[href="/register.html"]').click()          
})

Then('a página de cadastro deve ser exibida', () =>{
    cy.get('.text-5xl').should('contain','Cadastre-se no Hub de Leitura' )
})

When('eu preencho os campos obrigatórios', () => {
  const nome = `usuario${Date.now()}`
  const email = `usuario${Date.now()}@teste.com`

  cy.get('#name').type(nome)
  cy.get('#email').type(email)
  cy.get('#password').type('senha@123')
  cy.get('.form-check').click()
})

When('clico no botão Criar Conta', () => {
  cy.get('#register-btn').should('exist').and('be.visible').click({ force: true });
});

Then('a conta deve ser criada com sucesso', () => {
  cy.url().should('include', 'dashboard.html');
  cy.get('.text-xl > .text-muted').should('be.visible');
});