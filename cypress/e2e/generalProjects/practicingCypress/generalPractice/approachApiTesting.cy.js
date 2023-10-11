/// <reference types="cypress" />

// describe('Testing with Query Parameters', () => {
//     it('should perform the test by inserting parameters', () => {
      
//       cy.request({

//             method: 'GET',
//             url: 'http://reqres.in/api/users',
//             qs: {page: 2}

//       }).then((response) => {
            
//             expect(response.body).to.have.property('page', 2);
//             expect(response.body).to.have.property('total', 12);
//             expect(response.body.data[0]).to.have.property('id', 7);
//             expect(response.body.data[0]).to.have.property('first_name', 'Michael');
//       })

//     });
// });

describe('Testing with Query Parameters', () => {
    
    let authToken = null;
    before('should create access Token', () => {

        cy.request({
    
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/api-clients/',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    clientName : "Test2",
                    clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
                },
        }).then((response) => {
            authToken=response.body.accessToken;
        })
    });

    before('should create an order', () => {
        
        cy.request({

            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: {
                "bookId" : 1,
                "customerName" : "Ulisses2"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.created).to.equal(true);
        })
    });

    it('should get the order created', () => {

        cy.request({

            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            }
        }).then((response) => {
                
                expect(response.status).to.equal(200);
                expect(response.body).has.length(1);
                //expect(response.body.bookId).to.equal("1");
                //expect(response.body.quantity).to.equal(1);
        });

    });
});
