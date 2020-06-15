package com.hrms.steps;


import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.Constants;
import com.hrms.utils.ExcelUtility;

import io.cucumber.java.en.Then;

public class AddEmpFromExcelSteps extends CommonMethods {
	@Then("I enter info from excel and save emp")
	public void i_enter_info_from_excel_and_save_emp() {
		List<Map<String, String>> list = ExcelUtility.excelIntroListOfMaps(Constants.TESTDATA_FILEPATH, "Sheet1");
		for (Map<String, String> map : list) {
			wait(3);
			jsClick(addEmp.CreateLoginDetails);
            
			String fName = map.get("FirstName");
			String mName = map.get("MiddleName");
			String lName = map.get("LastName");

			String userName = map.get("Username");
			String passWord = map.get("Password");
					
			sendText(addEmp.firstName, fName);
			sendText(addEmp.middleName, mName);
			sendText(addEmp.lastName, lName);
			String expected1 = addEmp.employeeId.getAttribute("value");
			
		

			sendText(addEmp.username, userName);
			sendText(addEmp.password, passWord);
			sendText(addEmp.confirmPassword, passWord);
 
			WebElement element = driver.findElement(By.xpath("//select[@id='status']"));
			Select select=new Select(element);
			select.selectByValue("Enabled");
			click(addEmp.saveBtn);
			String actual1 = addEmp.employeeId.getAttribute("value");
			
			Assert.assertEquals("Test case failed", expected1, actual1);
			dashboard.navigateToAddEmployee();		
		}
	}
}
