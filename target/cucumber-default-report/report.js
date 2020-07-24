$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddEmployee.feature");
formatter.feature({
  "name": "Add new Employee",
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee with first and lastname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters employees \"John\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_enters_employees_first_name_and_last_name(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"John Smith\" is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.employee_is_added_successfully(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Add Employee with first and lastname");
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee without employee id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters employees first name and last name",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_enters_employees_first_name_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deletes employee id",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_deletes_employee_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.employee_is_added_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Add Employee without employee id");
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "AddEmployee and create Login Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters employees first name and last name",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_enters_employees_first_name_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on create login checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_on_create_login_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_enters_login_credentials()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027divUsername\u0027]/input\"}\n  (Session info: headless chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Griseydas-MacBook-Air.local\u0027, ip: \u00272601:14c:280:6a80:0:0:0:e33f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/94/zj_cz_s14gx...}, goog:chromeOptions: {debuggerAddress: localhost:56347}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: defaeb6440e25183eb9d26cf981c15c9\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027divUsername\u0027]/input}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:30)\n\tat com.hrms.steps.AddEmployeeSteps.user_enters_login_credentials(AddEmployeeSteps.java:67)\n\tat ✽.user enters login credentials(file:///Users/griseydaperla/eclipse-workspace/Hrms/src/test/resources/features/AddEmployee.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "employee is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.employee_is_added_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "AddEmployee and create Login Credentials");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Adding multiple employees",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter employees \"\u003cFirstName\u003e\", \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.step({
  "name": "\"\u003cFirstName\u003e\", \"\u003cMiddleName\u003e\" and \"\u003cLastName\u003e\" is added successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName"
      ]
    },
    {
      "cells": [
        "James",
        "J",
        "Smith"
      ]
    },
    {
      "cells": [
        "Faisal",
        "F",
        "Sakhi"
      ]
    },
    {
      "cells": [
        "Sohil",
        "S",
        "Instuctor"
      ]
    },
    {
      "cells": [
        "Yunus",
        "Emre",
        "Yakut"
      ]
    }
  ]
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple employees",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter employees \"James\", \"J\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.enteringEmployee(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"James\", \"J\" and \"Smith\" is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.and_is_added_successfully(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Adding multiple employees");
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple employees",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter employees \"Faisal\", \"F\" and \"Sakhi\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.enteringEmployee(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Faisal\", \"F\" and \"Sakhi\" is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.and_is_added_successfully(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "Adding multiple employees");
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple employees",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter employees \"Sohil\", \"S\" and \"Instuctor\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.enteringEmployee(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Sohil\", \"S\" and \"Instuctor\" is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.and_is_added_successfully(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "Adding multiple employees");
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple employees",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter employees \"Yunus\", \"Emre\" and \"Yakut\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.enteringEmployee(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_clicks_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Yunus\", \"Emre\" and \"Yakut\" is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.and_is_added_successfully(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "Adding multiple employees");
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple employees",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enters employee details and click on save then employee is added",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_enters_employee_details_and_click_on_save_then_employee_is_added(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", "Adding multiple employees");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AddempWithExcel.feature");
formatter.feature({
  "name": "Add emp from excel",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add multiple employee with excel file",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user navigates to AddEmployeePage",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmployeeSteps.user_navigates_to_AddEmployeePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter info from excel and save emp",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpFromExcelSteps.i_enter_info_from_excel_and_save_emp()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: headless chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Griseydas-MacBook-Air.local\u0027, ip: \u00272601:14c:280:6a80:0:0:0:e33f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/94/zj_cz_s14gx...}, goog:chromeOptions: {debuggerAddress: localhost:58145}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6e9262b250439cc7e9be972283bb9128\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:124)\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:30)\n\tat com.hrms.steps.AddEmpFromExcelSteps.i_enter_info_from_excel_and_save_emp(AddEmpFromExcelSteps.java:40)\n\tat ✽.I enter info from excel and save emp(file:///Users/griseydaperla/eclipse-workspace/Hrms/src/test/resources/features/AddempWithExcel.feature:6)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png", "Add multiple employee with excel file");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Dashboard.feature");
formatter.feature({
  "name": "Dashboard",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Dashboard view for admid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user see dashboard menu is displayed",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.DashboardSteps.user_see_dashboard_menu_is_displayed(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", "Dashboard view for admid");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
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
formatter.embedding("image/png", "embedded10.png", "valid admin login");
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
formatter.embedding("image/png", "embedded11.png", "valid ess login");
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
formatter.embedding("image/png", "embedded12.png", "Login with valid username and invalid password");
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
  "error_message": "org.junit.ComparisonFailure: Not correct error message is displayed expected:\u003c[Invalid credentials]\u003e but was:\u003c[Password cannot be empty]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.hrms.steps.LoginSteps.i_enter_invalid_username_and_password_and_see_error_message(LoginSteps.java:90)\n\tat ✽.I enter invalid username and password and see error message(file:///Users/griseydaperla/eclipse-workspace/Hrms/src/test/resources/features/Login.feature:34)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded13.png", "Login with invalid credentials");
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
formatter.embedding("image/png", "embedded14.png", "Search employee by id");
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
formatter.embedding("image/png", "embedded15.png", "Search employee by name");
formatter.after({
  "status": "passed"
});
});