describe('teste e registro de usuários no alura pic',()=>{

     //primeiro teste a ser executado
     beforeEach(()=>{
        //vita o site da Alura.Criado a baseURL no arquivo cypress.json
        cy.visit('/');

    })

    //Abaixo, teremos os casos de testes.

    it('verifica mensagens de validação da tela cadastro',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible'); // pega elemento e verifica se testo está visível.
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Full name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');

    })
    
    it('verifica mensagens de e-mail inválidos',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Wellington');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
        
        
    })
    it('verifica mensagens de senha com menos de 8 caracteres',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');       
        
    })

    it('verifica se foi digitado o nomes com letra maiúscula',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('WELLINGTON');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Must be lower case').should('be.visible');       
        
    })
})