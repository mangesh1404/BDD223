package com.stepdefinition;

import java.io.FileInputStream;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

public class LoginStepdefs {

	public static WebDriver driver = null;

	@Before("@run1")
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "D:/chromedriver.exe");
		driver = new ChromeDriver();
	}

	@After("@run2")
	public void teardown() {
		driver.close();
	}

	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() {
		driver.get("file:///C:/Users/LENOVO/Downloads/Offline%20Website/index.html");
	}

	@When("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {

		FileInputStream fis = new FileInputStream("TestData.xls");
		Workbook wb = Workbook.getWorkbook(fis);
		Sheet sh = wb.getSheet("Sheet1");
		int rows = sh.getRows();
		int cols = sh.getColumns();
		for (int i = 0; i < rows; i++) {// rows
				Cell unameCell = sh.getCell(0, i);
				Cell passCell = sh.getCell(1, i);
				driver.findElement(By.id("email")).sendKeys(unameCell.getContents());
				driver.findElement(By.id("password")).sendKeys(passCell.getContents());
				driver.findElement(By.xpath("//button")).click();
		}
	}

	@Then("^user will be on home page$")
	public void user_will_be_on_home_page() throws Throwable {
		Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());
	}

	@Then("^user should see JBK logo$")
	public void user_should_see_JBK_logo() throws Throwable {
		WebElement logo = driver.findElement(By.tagName("img"));
		boolean flag = logo.isDisplayed();
		Assert.assertTrue(flag);
	}
	@Given("^user enters \"([^\"]*)\"$")
	public void user_enters(String url) throws Throwable {
		driver.get(url);
	}
	
	@When("^user click on register link$")
	public void user_click_on_register_link() throws Throwable {
	   driver.findElement(By.partialLinkText("Register")).click();
	    
	}

	@When("^user should be on registration page$")
	public void user_should_be_on_registration_page() throws Throwable {
	   Assert.assertEquals("JavaByKiran | Registration Page", driver.getTitle());
	    
	}

	@Then("^user fills \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_fills_and_and_and(String name, String mobile, String email, String password) throws Throwable {
	   driver.findElement(By.id("name")).sendKeys(name);
	   driver.findElement(By.id("mobile")).sendKeys(mobile);
	   driver.findElement(By.id("email")).sendKeys(email);
	   driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^user click on submit$")
	public void user_click_on_submit() throws Throwable {
	   driver.findElement(By.xpath("//button[@type='submit']")).click();
	    
	}

	@Then("^user handles an alert$")
	public void user_handles_an_alert() throws Throwable {
	   Alert al = driver.switchTo().alert();
	   al.accept();
	    
	}

	
	
}
