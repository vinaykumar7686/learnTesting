package com.assignment2.googlesearch.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchResults {
	public static WebElement element;
	public static String searchbarText(WebDriver driver) {
		element = driver.findElement(By.name("q"));
		return element.getAttribute("value");
	}

}
