#Author=griseydal.09@gmail.com
Feature: Dashboard
@smoke
Scenario: Dashboard view for admid
 Given user is logged with valid admin credentials
 Then user see dashboard menu is displayed
  | Admin | PIM | Leave | Time | Recruitment | Performance | Dashboard | Directory |
