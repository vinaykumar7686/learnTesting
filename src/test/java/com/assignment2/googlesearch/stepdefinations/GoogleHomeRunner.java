package com.assignment2.googlesearch.stepdefinations;

import java.io.File;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import com.assignment2.commonUtils.INVCommonTestBase;
import com.assignment2.googlesearch.pageobjects.GoogleHome;
import com.assignment2.googlesearch.pageobjects.SearchResults;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@CucumberOptions(features = "src/test/resources/FeatureFiles/googlesearch.feature", 
					glue = "com/assignment2/googlesearch/stepdefinations/",
					tags = "@multiple", plugin = {"pretty", "html:target/cucumber"})
public class GoogleHomeRunner extends INVCommonTestBase {
	
	public static WebDriver driver;
	public static WebElement element;
	
	@Given("^Navigate to Google$")
	public void navigateToGoogle() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + File.separator
				+ "Driver/linux/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
	}
	
	@When("^Search bar is clicked$")
	public void startTestingBtn() {
		element = GoogleHome.searchbar(driver);
	}
	
	@And("^\"([^\"]*)\" is typed in searchbar$")
	public void typetext(String text) {
		GoogleHome.type(driver, element, text);
	}
	
	@Then ("^Get Suggestions$")
	public void getsuggestions() {
		int count = GoogleHome.getSuggestions(driver);
		Assert.assertNotEquals(count, 0);
		
	}
	
	@When ("^Click on search button$")
	public static void clicksuggestion() {
		GoogleHome.clickSearchBtn(driver);
	}
	
	@Then ("^Validating if the results are for \"([^\"]*)\"$")
	public static void searchresults(String text) {
		String searchbarText = SearchResults.searchbarText(driver);
		Assert.assertEquals(searchbarText, text);
		driver.close();
	}
}
