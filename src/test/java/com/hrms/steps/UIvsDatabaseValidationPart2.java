package com.hrms.steps;

import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;

public class UIvsDatabaseValidationPart2 {
	@Then("user add the following employees and click on save btn")
	public void user_add_the_following_employees_and_click_on_save_btn(DataTable dTable) {
		for(Map<String, String> data : dTable.asMaps()) {
			System.out.println(data.get("FirstName"));
			
			System.out.println(data.get("MiddleName"));
			System.out.println(data.get("LastName"));
		}
	}
}
