$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    }
  ]
});
formatter.scenario({
  "name": "valid admin login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid admin username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_admin_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user is successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.admin_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "valid admin login");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "valid ess login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid ess username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_ess_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ess user is successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.ess_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "valid ess login");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User enter valid username and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_username_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see Invalid Credentials text on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_see_Invalid_Credentials_text_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Login with valid username and invalid password");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid username and password and see error message",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.i_enter_invalid_username_and_password_and_see_error_message(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Login with invalid credentials");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SearchEmployee.feature");
formatter.feature({
  "name": "Employee Search",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Search employee by id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "user see employee information is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.user_see_employee_information_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "Search employee by id");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Search employee by name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters valid employee name and last name",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.user_enters_valid_employee_name_and_last_name()"
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
  "name": "user see employee information is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.EmployeeSearchSteps.user_see_employee_information_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "Search employee by name");
formatter.after({
  "status": "passed"
});
});