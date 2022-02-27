package com.assignment2.userreg.stepdefinations;

import java.io.File;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import com.assignment2.commonUtils.INVCommonTestBase;
import com.assignment2.userreg.pageobjects.Homepage;
import com.assignment2.userreg.pageobjects.MyAccount;
import com.assignment2.userreg.pageobjects.RegistrationPage;
import com.assignment2.userreg.pageobjects.SigninPage;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

@CucumberOptions(features = {"src/test/resources/FeatureFiles/RegisterUser.feature", "src/test/resources/FeatureFiles/RegisterUserVerifyError.feature"}, 
glue = "com/assignment2/userreg/stepdefinations/",
tags = {"@simple , @simpleverify"}, monochrome = true, plugin = {"pretty", "html:target/cucumber-reports/cucumber-pretty"})
public class RegisterRunner extends INVCommonTestBase {
	public static WebElement element;
	public static List<WebElement> elements;
	public static WebDriver driver;
	
	@Given("^Navigate to Homepage$")
	public void navigateToHomepage() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + File.separator
				+ "Driver/linux/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://automationpractice.com/index.php");
		driver.manage().window().maximize();
	}
	
	@And("^Click on Login$")
	public static void loginbtn() {
		Homepage.clickLogin(driver);
	}
	
	@And("^Enter email as \"([^\"]*)\"$")
	public static void enterEmail(String email) {
		SigninPage.enterEmail(driver, email);
	}
	
	@And("^Click on Submit Create$")
	public static void clickSubmitCreate() {
		SigninPage.clickSubmitCreate(driver);
		try {
			Thread.sleep(5000);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@And("^Select gender as \"([^\"]*)\"$")
	public static void selectGender(String gender) {
		if (gender.equals("male")) {
			RegistrationPage.clickon(driver, RegistrationPage.id_gender_male);
		}
		else {
			RegistrationPage.clickon(driver, RegistrationPage.id_gender_female);
		}
	}
	
	@And("^Enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public static void selectGender(String field, String text) {
		if (field.equals("customer_first_name")) {
			RegistrationPage.typein(driver, RegistrationPage.id_custfname, text);
		}
		else if (field.equals("customer_last_name")) {
			RegistrationPage.typein(driver, RegistrationPage.id_custlname, text);
		}
		else if (field.equals("password")) {
			RegistrationPage.typein(driver, RegistrationPage.id_passwd, text);
		}
		else if (field.equals("day")) {
			RegistrationPage.typein(driver, RegistrationPage.id_days, text);
		}
		else if (field.equals("month")) {
			RegistrationPage.typein(driver, RegistrationPage.id_months, text);
		}
		else if (field.equals("year")) {
			RegistrationPage.typein(driver, RegistrationPage.id_years, text);
		}
		else if (field.equals("firstname")) {
			RegistrationPage.typein(driver, RegistrationPage.id_firstname, text);
		}
		else if (field.equals("lastname")) {
			RegistrationPage.typein(driver, RegistrationPage.id_lastname, text);
		}
		else if (field.equals("company")) {
			RegistrationPage.typein(driver, RegistrationPage.id_company, text);
		}
		else if (field.equals("address")) {
			RegistrationPage.typein(driver, RegistrationPage.id_address, text);
		}
		else if (field.equals("city")) {
			RegistrationPage.typein(driver, RegistrationPage.id_city, text);
		}
		else if (field.equals("state")) {
			RegistrationPage.typein(driver, RegistrationPage.id_state, text);
		}
		else if (field.equals("postcode")) {
			RegistrationPage.typein(driver, RegistrationPage.id_postcode, text);
		}
		else if (field.equals("country")) {
			RegistrationPage.typein(driver, RegistrationPage.id_country, text);
		}
		else if (field.equals("mobile")) {
			RegistrationPage.typein(driver, RegistrationPage.id_mobile, text);
		}
		else if (field.equals("alias")) {
			RegistrationPage.typein(driver, RegistrationPage.id_alias, text);
		}
		
	}
	
	@And("^Click Submit Button$")
	public static void clickSubmit() {
		RegistrationPage.clickon(driver, RegistrationPage.id_submit);
	}
	
	@Then("^Validate User as \"([^\"]*)\" \"([^\"]*)\"$")
	public static void validateUser(String fname, String lname) {
		try {
			Thread.sleep(5000);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		String name = fname+" "+lname;
		// Validating if the user account is created or not!
		element = MyAccount.fetchUserName(driver);
		Assert.assertEquals(element.getText(), name);
		driver.close(); 
	}
	
	@Then ("^Verify if the error message is displayed$")
	public static void isErrorDisplayed() {
		elements = RegistrationPage.isErrorDisplayed(driver);
		Assert.assertFalse(elements.isEmpty());
		driver.close();
	}
	
	
}
