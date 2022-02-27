package com.assignment2.userreg.pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Homepage {
	public static WebElement element;
	public static List<WebElement> elements;
	
	public static void clickLogin(WebDriver driver) {
		element = driver.findElement(By.xpath("//a[@class='login']"));
		element.click();
	}

}
