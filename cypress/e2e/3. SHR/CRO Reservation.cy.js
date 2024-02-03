/// <reference types="cypress" />


describe('CRO REservation',function(){
    it('verify cro reservation',function(){

        //visit site
        cy.visit("https://uat.windsurfercrs.com/cromh/login/signin.aspx?croID=6")

        //login page
        cy.get('#txUsn').type('croadmin')
        cy.get('#txPwd').type('3100r550')
        cy.get('#buLogin').click()
        

        //select property
        //cy.get('#chHotelID14589').should('be.checked')
        cy.get('#chHotelID14589').check()
        cy.get('#txArrival').click()
         
        //cy.get('#txArrival').should('have.text',futureDate)



    })
})