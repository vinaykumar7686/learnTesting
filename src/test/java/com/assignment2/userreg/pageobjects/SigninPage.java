package com.assignment2.userreg.pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SigninPage {
	public static WebElement element;
	public static List<WebElement> elements;
	
	public static void enterEmail(WebDriver driver, String email) {
		// Waiting for login page to show up!
		try {
			Thread.sleep(2000);
		}
		catch(InterruptedException e){
			System.out.println(e);
		}
		
		// Typing in email and clicking on submit create button.
		element = driver.findElement(By.id("email_create"));
		element.sendKeys(email);
	}
	public static void clickSubmitCreate(WebDriver driver) {
		element = driver.findElement(By.id("SubmitCreate"));
		element.click();
	}
}
