package com.hrms.steps;



import org.junit.Assert;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.GlobalVariables;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class EmployeeSearchSteps extends CommonMethods{
	@Given("user navigate to employee list page")
	public void user_navigate_to_employee_list_page() {
	   jsClick(dashboard.PIM);
	   jsClick(dashboard.empListPage);
	}

	@When("user enters valid employee {string}")
	public void user_enters_valid_employee_id(String id) {
	  sendText(viewEmp.empID,id);
	  GlobalVariables.empID=id;
	}

	@When("click on search button")
	public void click_on_search_button() {
		jsClick(viewEmp.searchBtn);
	  
	}

	@Then("user see employee information is displayed")
	public void user_see_employee_information_is_displayed() {
	   System.out.println("Employee is displayed");
	}

	@When("user enters valid employee name and last name")
	public void user_enters_valid_employee_name_and_last_name() {
	 
	}

@Then("verify table is displayed")
public void verify_table_is_displayed() {
	
  Assert.assertEquals(true, viewEmp.isTableDisplayed());
}

@Then("get first name from table")
public void get_first_name_from_table() {
	System.out.println(viewEmp.getFirstNameFromTable());
}
@Then("verify first name from ui against db")
public void verify_first_name_from_ui_against_db() {	
	Assert.assertEquals(DBSteps.dbData,viewEmp.getFirstNameFromTable());
}

@Then("get last name from table")
public void get_last_name_from_table() {
    System.out.println(viewEmp.getLastNameFromTable());
}
@Then("I validate last name from DB against UI")
public void i_validate_last_name_from_DB_against_UI() {
    Assert.assertEquals(DBSteps.dbData,viewEmp.getLastNameFromTable());
   
}
}


