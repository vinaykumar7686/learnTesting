package com.assignment2.userreg.pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class RegistrationPage {
	public static WebElement element;
	public static List<WebElement> elements;
	
	public static String id_gender_male = "id_gender1";
	public static String id_gender_female = "id_gender2";
	public static String id_custfname = "customer_firstname";
	public static String id_custlname = "customer_lastname";
	public static String id_passwd = "passwd";
	public static String id_days = "days";
	public static String id_months = "months";
	public static String id_years = "years";
	public static String id_firstname = "firstname";
	public static String id_lastname = "lastname";
	public static String id_company = "company";
	public static String id_address = "address1";
	public static String id_city = "city";
	public static String id_state = "id_state";
	public static String id_postcode = "postcode";
	public static String id_country = "id_country";
	public static String id_mobile = "phone_mobile";
	public static String id_alias = "alias";
	public static String id_submit = "submitAccount";
	
	public static void typein(WebDriver driver, String field, String text) {
		element = driver.findElement(By.id(field));
		element.sendKeys(text);
	}
	
	public static void clickon(WebDriver driver, String field) {
		element = driver.findElement(By.id(field));
		element.click();
	}
	public static List<WebElement> isErrorDisplayed(WebDriver driver) {
		// Fetching the alert data, using list here because value could be null.
		List<WebElement> error = driver.findElements(By.xpath("//div[@class='alert alert-danger']/p"));
		return error;
	}

}
