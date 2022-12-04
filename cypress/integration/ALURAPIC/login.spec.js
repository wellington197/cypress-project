describe('teste da tela login no alura pic',()=>{


     //primeiro teste a ser executado
     beforeEach(()=>{
        //vita o site da Alura.Criado a baseURL no arquivo cypress.json
        cy.visit('/');

    })
    //referenciar nosso novo arquivo. e buscar na pasta onde tem o Json
    const usuarios=require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario=>{

        it(`Registra novo usuário ${usuario.userName}`,()=>{       
            //verifica se na tag "a" contém o texto Register Now.
        cy.registra(`${usuario.email}`,`${usuario.fullName}`,`${usuario.userName}`,`${usuario.password}`);
        })

    });


    /*Teste do campo Login*/
    it('Efetuar login com usuário válido',()=>{
        cy.login(Cypress.env('userName'),Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })  


    it('Efetuar login com usuário inválido',()=>{
        cy.login('wellington','125873');
        cy.on('window.alert',(str)=>{
            expert(str).to.equal('invalid user name or password')
        })  

    })

}) 
