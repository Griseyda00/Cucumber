
@sprint1
Feature: Admin adds employees and views added employees details on the employee list page

Background: Admin logs in

  @tag1
  Scenario: Admin adds employees and view details
    Given Admin adds an employee
    When Admin verifies employee is added
    And 
    And yet another action
    Then I validate the outcomes
    And check more outcomes

  @tag2
  Scenario Outline: Title of your scenario outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
