package com.hrms.steps;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.ConfigsReader;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginSteps extends CommonMethods{
	
	@Given("user is logged with valid admin credentials")
	public void user_is_logged_with_valid_admin_credentials() {
	  sendText(login.username, ConfigsReader.getProperty("username"));
	  sendText(login.password, ConfigsReader.getProperty("password"));
	  click(login.loginBtn);
	}
	

	@When("user enter valid admin username and password")
	public void user_enter_valid_admin_username_and_password() {
		 sendText(login.username, ConfigsReader.getProperty("username"));
		  sendText(login.password, ConfigsReader.getProperty("password"));
	}

	@When("user click on login button")
	public void user_click_on_login_button() {
	 click(login.loginBtn);
	}

	@Then("admin user is successfully logged in")
	public void admin_user_is_successfully_logged_in() {
		String expected = "Welcome Admin";
		String actual = dashboard.welcome.getText();
		Assert.assertEquals("Welcome text is not display correctly", expected, actual);
		System.out.println(actual);
	
	}

	@When("user enter valid ess username and password")
	public void user_enter_valid_ess_username_and_password() {
		 sendText(login.username, "Griseyda");
		  sendText(login.password, "Syntax123#");
	}

	@Then("ess user is successfully logged in")
	public void ess_user_is_successfully_logged_in() {
		String expected = "Welcome Griseyda";
		String actual = dashboard.welcome.getText();
		Assert.assertEquals("Welcome text is not display correctly", expected, actual);
		System.out.println(actual);
	
		
	}

	@When("User enter valid username and invalid password")
	public void user_enter_valid_username_and_invalid_password() {
		sendText(login.username, "Elvira");
		 sendText(login.password, "Syntax123...");
	}

	@Then("User see Invalid Credentials text on login page")
	public void user_see_Invalid_Credentials_text_on_login_page() {
	    String expected="Invalid credentials";
	    String actual=login.errorMsg.getText();
	    Assert.assertEquals("Not correct message is display", expected, actual);
	} 
	@When("I enter invalid username and password and see error message")
	public void i_enter_invalid_username_and_password_and_see_error_message(DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
	   List<Map<String, String>> list = dataTable.asMaps();
	   for(Map<String, String> map:list) {
		   sendText(login.username,map.get("Username"));
		   sendText(login.username,map.get("Password"));
		   jsClick(login.loginBtn);
		   
		   Assert.assertEquals("Not correct error message is displayed", map.get("ErrorMessage"), login.errorMsg.getText());
		   
	   }
	}
	@When("user enter valid {string} and {string}")
	public void user_enter_valid_and(String string, String string2) {
	    sendText(login.username, string);
	    sendText(login.password,string2);
	    
	}

	@Then("{string} is successfully logged in")
	public void is_successfully_logged_in(String name) {
	     String expected="Welcome"+" "+name;
	     String actual=dashboard.welcome.getText();
	     Assert.assertEquals("Test case failed ", expected, actual);
	}
}