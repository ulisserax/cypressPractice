Feature: User wants to fill the Summary and set all user information

    User wants to fill summary, setup name, sex, born date and then submit all this info

Scenario: Filling the summary

    Given A user can see all space bars empty without any input data
    When A user types name
    And A user types email
    And A user types password
    And A user checks the IceCream option checkbox
    And A user set the gender
    And A user checks the employment status
    Then It should be displayed on the bottom on the page inside the Two-Way Data Binding bar
    And the user can submit all the personal info  