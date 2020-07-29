@Login @Sprint1
Feature: Login

  @smoke
  Scenario: valid admin login
    When user enter valid admin username and password
    And user click on login button
    Then admin user is successfully logged in

  @smoke
  Scenario: valid ess login
    When user enter valid ess username and password
    And user click on login button
    Then ess user is successfully logged in
   @try
  Scenario Outline: 
    When user enter valid "<Username>" and "<Password>"
    And user click on login button
    Then "<FirstName>" is successfully logged in

    Examples: 
      | Username | Password    | FirstName |
      | Griseydal   | Syntax123. |GRISEYDA|
      | Admin    | Hum@nhrm123 |Admin|

  @smoke
  Scenario: Login with valid username and invalid password
    When User enter valid username and invalid password
    And user click on login button
    Then User see Invalid Credentials text on login page
   
   @smoke
   Scenario: Login with invalid credentials
   When I enter invalid username and password and see error message
   |Username| Password | ErrorMessage|
   |Admin |admin123 |Password cannot be empty|
   |Hello|Syntax123!|Password cannot be empty|