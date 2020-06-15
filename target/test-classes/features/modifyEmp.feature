#Author: Griseyda perla
Feature: modify employee
Scenario: navigate to modify employee
    Given user is logged with valid admin credentials
    And user navigate to employee list page
    And user click on employee 
    When user can modify Employeee
|Drive's license|License Expiry Date| SSN Number    |SIN Number|Gender|Marital Status|Nationality|Date of Birth|Nick Name|Military Service|
|A123456        | 2005-May-03      | 6789-777-8900 |03030303   |2     | Other        |Colombian|  2000-Mar-08 | Lilly   |  No            |
    Then user click on save button and "modifyDetailsSC"
    
    
 