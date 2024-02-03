
/// <reference types="cypress" />

describe('Verify the IBE Reservation',function(){
    it('IBE reservation on the UAt',function(){
        //Visit site
        cy.visit('https://uat.windsurfercrs.com/IBE/index.aspx?propertyID=14240&nono=1&lang=en-us')
        
        cy.get('#buWsDelegAuthLogin').click()
        cy.get('#MyHeading_txLoginUsnHeaderFull').type('erin.sun@Shr.global')
        cy.get('#txLoginPwdHeaderFull').type('black123')
        cy.get('#MyHeading_buDelegAuthSignInAPI').click()
        
        
        //checkin in calender
        // cy.get('#ws-check-in').type()
        // cy.get('#dv_8843').click()
        // cy.get('#dv_8844').click()
        // cy.get('[type=button]').click()
        
        //cy.get('#402134').click()
        //cy.get('.ws-icon').click()


        
    })
})