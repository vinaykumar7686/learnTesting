$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/RegisterUser.feature");
formatter.feature({
  "name": "User Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register a new user to portal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simple"
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
  "status": "passed"
});
formatter.step({
  "name": "Enter email as \"ddffgh@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Submit Create",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmitCreate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select gender as \"male\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"customer_first_name\" as \"Rajesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"customer_last_name\" as \"Kumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"password\" as \"qwertyui\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"day\" as \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"month\" as \"January\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"year\" as \"2022\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"firstname\" as \"Rakesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"lastname\" as \"Bhai\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"company\" as \"Innovaccer\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"address\" as \"Earth\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"city\" as \"Lucknow\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"state\" as \"UP\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"postcode\" as \"22602\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"country\" as \"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"mobile\" as \"1037586846\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"alias\" as \"Somewhere\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.selectGender(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate User as \"Rajesh\" \"Kumar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterRunner.validateUser(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/RegisterUserVerifyError.feature");
formatter.feature({
  "name": "User Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register a new user to portal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simpleverify"
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
  "status": "passed"
});
formatter.step({
  "name": "Enter email as \"gal2sjh@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Submit Create",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmitCreate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterRunner.clickSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterRunner.isErrorDisplayed()"
});
formatter.result({
  "status": "passed"
});
});