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
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@try"
    }
  ]
});
formatter.step({
  "name": "user enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "\"\u003cFirstName\u003e\" is successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "FirstName"
      ]
    },
    {
      "cells": [
        "Elvira",
        "Syntax123.",
        "Elvira"
      ]
    },
    {
      "cells": [
        "Admin",
        "Hum@nhrm123",
        "Admin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    },
    {
      "name": "@try"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid \"Elvira\" and \"Syntax123.\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_and(java.lang.String,java.lang.String)"
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
  "name": "\"Elvira\" is successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.is_successfully_logged_in(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Test case failed  expected:\u003cWelcome[1] Elvira\u003e but was:\u003cWelcome[] Elvira\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.hrms.steps.LoginSteps.is_successfully_logged_in(LoginSteps.java:105)\n\tat ✽.\"Elvira\" is successfully logged in(file:///Users/griseydaperla/eclipse-workspace/Hrms/src/test/resources/features/Login.feature:19)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Sprint1"
    },
    {
      "name": "@try"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid \"Admin\" and \"Hum@nhrm123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.user_enter_valid_and(java.lang.String,java.lang.String)"
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
  "name": "\"Admin\" is successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.LoginSteps.is_successfully_logged_in(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Test case failed  expected:\u003cWelcome[1] Admin\u003e but was:\u003cWelcome[] Admin\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.hrms.steps.LoginSteps.is_successfully_logged_in(LoginSteps.java:105)\n\tat ✽.\"Admin\" is successfully logged in(file:///Users/griseydaperla/eclipse-workspace/Hrms/src/test/resources/features/Login.feature:19)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "");
formatter.after({
  "status": "passed"
});
});