describe('Login e registro de usuários no alura pic',()=>{

    //primeiro teste a ser executado
    beforeEach(()=>{
        //vita o site da Alura.Criado a baseURL no arquivo cypress.json
        cy.visit('/');

    })
    it('verifica mensagens de validação da tela cadastro',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
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



    //referenciar nosso novo arquivo. e buscar na pasta onde tem o Json
    const usuarios=require('../../fixtures/usuarios.json'); // busca caminho dos usuários
    usuarios.forEach(usuario=>{ //para cada elemento do usuário ele faça uma função

        it(`Registra novo usuário ${usuario.userName}`,()=>{       
            //verifica se na tag "a" contém o texto Register Now.
        cy.registra(`${usuario.email}`,`${usuario.fullName}`,`${usuario.userName}`,`${usuario.password}`);
        })

    });


    /*Teste do campo Login*/
    it('Efetuar login com usuário válido',()=>{
        cy.login('flavio','123');
        cy.contains('a', '(Logout)').should('be.visible');
    })  


    it('Efetuar login com usuário inválido',()=>{
        cy.login('wellington','125873');
        cy.on('window.alert',(str)=>{
            expert(str).to.equal('invalid user name or password')
        })  

    })
})
