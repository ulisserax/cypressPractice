class homePage 
{
    insertName(element)
    {
        cy.get('input[name="name"]:nth-child(2)').type(element);
    }

    insertEmail(element)
    {
        cy.get('input[name="email"]').type(element);
    }

    insertPassword(element)
    {
        cy.get('input[type="password"]').type(element);
    }

}

export default homePage;