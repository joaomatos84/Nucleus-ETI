describe('Testes Nucleus ETI', () => {
    beforeEach(() => {

        cy.visit('https://nucleus.eti.br/')

    })

    it('Teste do comando Serviços', () => {

        cy.get('#scroll_services').click()
        cy.get('.col-md-8 > section > .nucleus-title').should('have.text','Buscamos soluções\ntecnológicas customizadas\npara empresas e pessoas.')
    })
    
    it('Teste do comando Portfolio', () => {

        cy.get('#scroll_portfolio').click()
        cy.get('h6').should('have.text','Veja alguns dos nossos clientes')
    
    })

    it('Teste do comando Blog', () => {

        cy.get('#scroll_blog').click()
        cy.get('.text-left > .nucleus-title').should('have.text','Acompanhe o  nosso blog')


    })

    it('Teste do comando Contato', () => {

        cy.get('#scroll_contact').click()
        cy.get('#scroll_contact > .container > .row > .wow > section > .nucleus-title').should('have.text','Tire o Seu Projeto do Papel')


    })
})
