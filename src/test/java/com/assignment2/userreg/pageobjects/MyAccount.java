package com.assignment2.userreg.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class MyAccount {
	public static WebElement element;
	public static WebElement fetchUserName(WebDriver driver) {
		// Validating if the user account is created or not!
		element = driver.findElement(By.xpath("//a[@class='account']/span"));
		return element;
	}
}
