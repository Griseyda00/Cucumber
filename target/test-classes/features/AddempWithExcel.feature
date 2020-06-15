Feature: Add emp from excel
@smoke
Scenario: Add multiple employee with excel file
 Given user is logged with valid admin credentials
    And user navigates to AddEmployeePage
Then I enter info from excel and save emp

