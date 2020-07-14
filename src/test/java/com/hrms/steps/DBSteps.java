package com.hrms.steps;

import java.util.List;
import java.util.Map;

import com.hrms.practice.DBUtils;
import com.hrms.utils.GlobalVariables;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DBSteps {
	public static List<Map<String,String>> dbData;
	
	@When("get data from db")
	public void get_data_from_db() {
	  String sqlQuery="select emp_firstname from hs_hr_employees where employee_id= "+GlobalVariables.empID;
	  dbData=DBUtils.storeDatafromDB(sqlQuery);
	  
	}
	@Then("get the last name from DB")
	public void get_the_last_name_from_DB() {
	   String  sqlQuery="select emp_lastname from hs_hr_employees where employee_id= "+GlobalVariables.empID ;
	   dbData=DBUtils.storeDatafromDB(sqlQuery);
	}
}
