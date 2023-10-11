Feature: User wants to find Cashews when searching

    User searching Cashews to be bought on the website

Background: Typing the word required to search in regards to vegetables

    Given A user type a word to search on the search bar
    When The products are shown on the page 
    Then It should be displayed only four products 

Scenario: Finding Cashews

    Given a user can see the four products able to be added on the cart
    When the user finds Cashews
    Then the Cashews can be visible on the cart by pressing the ADD TO CART button