describe('Buscar fotos e dados',()=>{

    /*//primeiro teste a ser executado
    beforeEach(()=>{
        //vita o site da Alura
        cy.visit('https://alura-fotos.herokuapp.com');
        */
   
    it('buscar as fotos do Flavio',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.request({
            method:'GET',
            url:'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {

            //verifica se status é igual a 200
            expect(res.status).to.be.equal(200)            
            //verifica se corpo do site veio com resposta
            expect(res.body).is.not.empty
            //verifica se corpo do site tenha a propety description
            expect(res.body[0]).is.have.property('description')
            //verifica se na descrição da posição [0] tem o texto FArol iluminado
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    
    })

    it('Fazer login do Flavio',()=>{
       
        //verifica se na tag "a" contém o texto Register Now.
        cy.request({
            method:'POST',
            url:'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {

            //verifica se status é igual a 200
            expect(res.status).to.be.equal(200)            
            //verifica se corpo do site veio com resposta
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.id).to.be.equal('flavio@alurapic.com.br')
        })
    
    })

})