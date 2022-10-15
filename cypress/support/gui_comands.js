

/*Criar comando para testes de login*/
Cypress.Commands.add('login',(nome,senha)=>{
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha,{log:false});
    cy.get('button[type="submit"]').click();
})

/*Criar comando para testes de registro*/
Cypress.Commands.add('registra',(email,fullName,userName,password)=>{
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(fullName);
    cy.get('input[formcontrolname="userName"]').type(userName);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.contains('button', 'Register').click();

})

