
  Feature:cdncin
 
   Scenario: sarmed
    Given user is logged with valid admin credentials
    And user navigate to employee list page
    And admin search employee by id "13889" and click search  
    And Sarmed clicks on Farid