package com.assignment2.googlesearch.pageobjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class GoogleHome {
	public static WebElement element;
	public static List<WebElement> elements;
	
	public static WebElement searchbar(WebDriver driver) {
		return element = driver.findElement(By.name("q"));
	}
	
	public static void type(WebDriver driver, WebElement searchbar, String text)  {
		searchbar.sendKeys(text);
	}
	
	public static int getSuggestions(WebDriver driver){
		int count = 0;
		try {
			Thread.sleep(2000);
		}
		catch(InterruptedException e) {
			e.printStackTrace();
		}
		
		// Fetching all the dropdown list web elements.
		elements = driver.findElements(By.xpath("//div[@role='option']/div[1]/span"));
		// Iterating through the list to extract and printing the text.
		for (WebElement element: elements) {
			String text = element.getText();
			if(text!="") {
				count++;
				System.out.println(text);
			}
		}
		return count;
	}
	
	public static void clickSearchBtn(WebDriver driver) {
		try {
			Thread.sleep(2000);
		}
		catch(InterruptedException e){
			System.out.println(e);
		}
		
		// Clicking on First Item in dropdown! 
		WebElement toclick = driver.findElement(By.xpath("//input[@value='Google Search']"));
		toclick.click();
	}
	
}
