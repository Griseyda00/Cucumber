package com.hrms.steps;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import com.hrms.utils.CommonMethods;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ModifyEmpSteps extends CommonMethods{
	

	@When("user click on employee")
	public void user_click_on_employee() {
	    click(dashboard.modifyEmp);
	    
	}
	@When("user can modify Employeee")
	public void user_can_modify_Employeee(io.cucumber.datatable.DataTable dataTable) {
	   List<Map<String, String>> map = dataTable.asMaps();
	   for(Map<String, String> list:map) {
		   jsClick(pdetails.btnEdit);
		   wait(3);
		   String driverlicense=list.get("Drive's license");
		   String licenseExdate=list.get("License Expiry Date");
		   String SSNnumber=list.get("SSN Number");
		   String SINNumber=list.get("SIN Number");
		   String gender=list.get("Gender");
		   String maritalStatus=list.get("Marital Status");
		   String nationality=list.get("Nationality");
		   String dateOfBirth=list.get("Date of Birth");
		   String nickName=list.get("Nick Name");
		   String militaryService=list.get("Military Service");
		   
		    sendText(pdetails.driverlicenseNum,driverlicense);
		    sendText(pdetails.SSN,SSNnumber);
		    sendText(pdetails.SIN,SINNumber);
		    sendText(pdetails.nickName,nickName);
		    sendText(pdetails.MilitariSer,militaryService);
		    sendText(pdetails.licenseExDate,licenseExdate);
		    sendText(pdetails.DateOfBirth,dateOfBirth);
		    selectDdValue(pdetails.nationality,nationality);
		    selectDdValue(pdetails.MaritalStatus,maritalStatus);
		    clickRadioOrCheckbox(pdetails.genderRadioGroup,gender);
		    
		    if(pdetails.smoker.isEnabled()) {
		    	click(pdetails.smoker);
		    }	    
	   }
	}
	@Then("user click on save button and {string}")
	public void user_click_on_save_button_and(String string) {
	    click(pdetails.btnSave);
	    takeScreenshot(string);
	}

}
