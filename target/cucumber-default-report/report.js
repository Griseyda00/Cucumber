$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/taskAlijohn.feature");
formatter.feature({
  "name": "Last name validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Homework"
    }
  ]
});
formatter.scenario({
  "name": "LastName validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Homework"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to employee list page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.user_navigate_to_employee_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid employee \"14688\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.user_enters_valid_employee_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify table is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.verify_table_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get last name from table",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.get_last_name_from_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the last name from DB",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.DBSteps.get_the_last_name_from_DB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate last name from DB against UI",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.i_validate_last_name_from_DB_against_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "LastName validation");
formatter.after({
  "status": "passed"
});
});