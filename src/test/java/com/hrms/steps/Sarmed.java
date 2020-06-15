package com.hrms.steps;

import com.hrms.utils.CommonMethods;

import io.cucumber.java.en.Given;

public class Sarmed extends CommonMethods{
	@Given("admin search employee by id {string} and click search")
	public void admin_search_employee_by_id_and_click_search(String id) {
		sendText(viewEmp.empID, id);
		jsClick(viewEmp.searchBtn);
		wait(3);
	}
	@Given("Sarmed clicks on Farid")
	public void sarmed_click_on_Farid() {
		wait(2);
	    jsClick(dashboard.sarmed);
	    wait(2);
	}
}
