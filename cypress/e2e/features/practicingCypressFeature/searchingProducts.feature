Feature: Searching for elements

    User trying to find an element using the search bar and want to see all elements filtered by the input word

Scenario: Typing the word required to search in regards to vegetables

    Given a user type a word to search on the search bar
    When the products are shown on the page 
    Then it should be displayed only four products    