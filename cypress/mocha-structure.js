describe('primer test con datos reales', function(){

    beforeEach('ir a pagina antes cada it', ()=>{
        cy.visit('www.page.com');

        cy.get('.class')
         .type('activity-A{enter}')
         .type('activity-B{enter}')

    });

    it('verificar 2 elementos fueorn creados', ()=>{

        cy.get('.lu_class li')
         .should('have.length, 2');


    });

  
    it('verificar texto de 2 elementos es el esperado', ()=> {
        cy.get('.class_lu li')
         .should('have.length, 2')
         .and($li =>{
            expected($li.get(0).textContent, 'primer elemento').to.equal('elemento a');
            expected($li.get(1).textContent, 'segundo elemento').to.equal('elemento b');
         });
    });

});