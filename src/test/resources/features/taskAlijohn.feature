

@Homework
Feature: Last name validation 
  

  
  Scenario: LastName validation 
    Given user is logged with valid admin credentials 
    And user navigate to employee list page
     When user enters valid employee "14688"
    And click on search button
    Then verify table is displayed
    And get last name from table
    And get the last name from DB
    Then I validate last name from DB against UI
    

  
