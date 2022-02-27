$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/RegisterUserVerifyError.feature");
formatter.feature({
  "name": "User Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Register a new user to portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@multipleverify"
    }
  ]
});
formatter.step({
  "name": "Navigate to Homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Submit Create",
  "keyword": "And "
});
formatter.step({
  "name": "Select gender as \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"customer_first_name\" as \"\u003ccustomer_first_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"customer_last_name\" as \"\u003ccustomer_last_name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"password\" as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"day\" as \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"month\" as \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"year\" as \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"firstname\" as \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"lastname\" as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"company\" as \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"address\" as \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"city\" as \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"state\" as \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"postcode\" as \"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"country\" as \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"mobile\" as \"\u003cmobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter \"alias\" as \"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click Submit Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify if the error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "gender",
        "customer_first_name",
        "customer_last_name",
        "password",
        "day",
        "month",
        "year",
        "firstname",
        "lastname",
        "company",
        "address",
        "city",
        "state",
        "postcode",
        "country",
        "mobile",
        "alias"
      ]
    },
    {
      "cells": [
        "bn4st@gmail.com",
        "male",
        "Aryan",
        "",
        "ggysb2n",
        "1",
        "May",
        "2000",
        "",
        "Sharma",
        "Sun",
        "Earth",
        "Lucknow",
        "UP",
        "22453",
        "India",
        "",
        "US"
      ]
    },
    {
      "cells": [
        "b9n0t@gmail.com",
        "female",
        "Rajesh",
        "Raj",
        "ggyjb2n",
        "12",
        "March",
        "2004",
        "Rajesh",
        "Raj",
        "Moon",
        "",
        "Delhi",
        "Delhi",
        "",
        "India",
        "8736473547",
        "UK"
      ]
    },
    {
      "cells": [
        "b6n7b@gmail.com",
        "male",
        "Dinesh",
        "Trivedi",
        "igysb2n",
        "18",
        "June",
        "1999",
        "Dinesh",
        "Trivedi",
        "Mars",
        "Samsung",
        "",
        "Nepal",
        "21453",
        "",
        "9746473547",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register a new user to portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@multipleverify"
    }
  ]
});
formatter.step({
  "name": "Navigate to Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterRunner.navigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.loginbtn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027login\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.80)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027it002055\u0027, ip: \u0027192.168.18.9\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.10.0-1057-oem\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.80, chrome: {chromedriverVersion: 98.0.4758.80 (7f0488e8ba0d8..., userDataDir: /tmp/.com.google.Chrome.crVXKE}, goog:chromeOptions: {debuggerAddress: localhost:45659}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6c6bd28dbbac77c01fb24912953e17d1\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027login\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.assignment2.userreg.pageobjects.Homepage.clickLogin(Homepage.java:14)\n\tat com.assignment2.userreg.stepdefinations.RegisterRunner.loginbtn(RegisterRunner.java:41)\n\tat ✽.Click on Login(file:src/test/resources/FeatureFiles/RegisterUserVerifyError.feature:15)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter email as \"bn4st@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Submit Create",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmitCreate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select gender as \"male\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"customer_first_name\" as \"Aryan\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"customer_last_name\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"password\" as \"ggysb2n\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"day\" as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"month\" as \"May\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"year\" as \"2000\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"firstname\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"lastname\" as \"Sharma\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"company\" as \"Sun\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"address\" as \"Earth\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"city\" as \"Lucknow\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"state\" as \"UP\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"postcode\" as \"22453\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"country\" as \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"mobile\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"alias\" as \"US\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterRunner.isErrorDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register a new user to portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@multipleverify"
    }
  ]
});
formatter.step({
  "name": "Navigate to Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterRunner.navigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.loginbtn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027login\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.80)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027it002055\u0027, ip: \u0027192.168.18.9\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.10.0-1057-oem\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.80, chrome: {chromedriverVersion: 98.0.4758.80 (7f0488e8ba0d8..., userDataDir: /tmp/.com.google.Chrome.07iwJu}, goog:chromeOptions: {debuggerAddress: localhost:35719}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9e73b014305cb452bd483062e5b319ed\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027login\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.assignment2.userreg.pageobjects.Homepage.clickLogin(Homepage.java:14)\n\tat com.assignment2.userreg.stepdefinations.RegisterRunner.loginbtn(RegisterRunner.java:41)\n\tat ✽.Click on Login(file:src/test/resources/FeatureFiles/RegisterUserVerifyError.feature:15)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter email as \"b9n0t@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Submit Create",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmitCreate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select gender as \"female\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"customer_first_name\" as \"Rajesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"customer_last_name\" as \"Raj\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"password\" as \"ggyjb2n\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"day\" as \"12\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"month\" as \"March\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"year\" as \"2004\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"firstname\" as \"Rajesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"lastname\" as \"Raj\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"company\" as \"Moon\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"address\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"city\" as \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"state\" as \"Delhi\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"postcode\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"country\" as \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"mobile\" as \"8736473547\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"alias\" as \"UK\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterRunner.isErrorDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register a new user to portal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@multipleverify"
    }
  ]
});
formatter.step({
  "name": "Navigate to Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterRunner.navigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.loginbtn()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027login\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.80)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027it002055\u0027, ip: \u0027192.168.18.9\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.10.0-1057-oem\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.80, chrome: {chromedriverVersion: 98.0.4758.80 (7f0488e8ba0d8..., userDataDir: /tmp/.com.google.Chrome.4h4U4a}, goog:chromeOptions: {debuggerAddress: localhost:34035}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cbc0e70171c5557e85131da77ed650cc\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027login\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.assignment2.userreg.pageobjects.Homepage.clickLogin(Homepage.java:14)\n\tat com.assignment2.userreg.stepdefinations.RegisterRunner.loginbtn(RegisterRunner.java:41)\n\tat ✽.Click on Login(file:src/test/resources/FeatureFiles/RegisterUserVerifyError.feature:15)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter email as \"b6n7b@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Submit Create",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmitCreate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select gender as \"male\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"customer_first_name\" as \"Dinesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"customer_last_name\" as \"Trivedi\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"password\" as \"igysb2n\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"day\" as \"18\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"month\" as \"June\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"year\" as \"1999\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"firstname\" as \"Dinesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"lastname\" as \"Trivedi\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"company\" as \"Mars\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"address\" as \"Samsung\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"city\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"state\" as \"Nepal\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"postcode\" as \"21453\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"country\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"mobile\" as \"9746473547\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter \"alias\" as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterRunner.isErrorDisplayed()"
});
formatter.result({
  "status": "skipped"
});
});