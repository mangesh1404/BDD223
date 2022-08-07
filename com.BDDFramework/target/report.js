$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.before({
  "duration": 3180733400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "JBK logo test",
  "description": "",
  "id": "jbk-offline-application;jbk-logo-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@run1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters \"file:///C:/Users/LENOVO/Downloads/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user should see JBK logo",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/LENOVO/Downloads/Offline%20Website/index.html",
      "offset": 13
    }
  ],
  "location": "LoginStepdefs.user_enters(String)"
});
formatter.result({
  "duration": 718136400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_should_see_JBK_logo()"
});
formatter.result({
  "duration": 191914800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "register user test",
  "description": "",
  "id": "jbk-offline-application;register-user-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@run2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be on registration page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills \"\u003cname\u003e\" and \"\u003cmobile\u003e\" and \"\u003cemail\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user handles an alert",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "jbk-offline-application;register-user-test;",
  "rows": [
    {
      "cells": [
        "name",
        "mobile",
        "email",
        "pass"
      ],
      "line": 20,
      "id": "jbk-offline-application;register-user-test;;1"
    },
    {
      "cells": [
        "mangesh",
        "123456",
        "mangesh@gmail.com",
        "qwerty"
      ],
      "line": 21,
      "id": "jbk-offline-application;register-user-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "register user test",
  "description": "",
  "id": "jbk-offline-application;register-user-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    },
    {
      "line": 10,
      "name": "@run2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be on registration page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user fills \"mangesh\" and \"123456\" and \"mangesh@gmail.com\" and \"qwerty\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user handles an alert",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.user_click_on_register_link()"
});
formatter.result({
  "duration": 392840100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_should_be_on_registration_page()"
});
formatter.result({
  "duration": 10126600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 26
    },
    {
      "val": "mangesh@gmail.com",
      "offset": 39
    },
    {
      "val": "qwerty",
      "offset": 63
    }
  ],
  "location": "LoginStepdefs.user_fills_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 558175400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_click_on_submit()"
});
formatter.result({
  "duration": 95460300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.user_handles_an_alert()"
});
formatter.result({
  "duration": 33513700,
  "status": "passed"
});
formatter.after({
  "duration": 341544300,
  "status": "passed"
});
});