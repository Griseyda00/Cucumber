package com.hrms.pages;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;

public class ViewEmployeePageElements {
	@FindBy(id = "empsearch_employee_name_empName")
	public WebElement empName;

	@FindBy(id = "empsearch_id")
	public WebElement empID;

	@FindBy(id = "searchBtn")
	public WebElement searchBtn;
	@FindBy(xpath = "//table[@id='resultTable']")
	public WebElement employeesTable;// employee comes after searching By Id

	@FindBy(xpath = "//table[@id='resultTable']/tbody/tr/td[3]")
	public List<WebElement> tableFirstName;

	public List<Map<String, String>> getFirstNameFromTable() {
		List<Map<String, String>> uiName = new ArrayList<>();
		for (WebElement row : tableFirstName) {
			Map<String, String> storeUiNames = new LinkedHashMap<>();
			String tableName = row.getText();
			storeUiNames.put("emp_firstname", tableName);
			uiName.add(storeUiNames);
		}
		return uiName;
	}

	@FindBy(xpath = "//table[@id='resultTable']/tbody/tr/td[4]")
	public List<WebElement> tableLastName;

	public List<Map<String, String>> getLastNameFromTable() {
		List<Map<String, String>> uiName = new ArrayList<>();

		for (WebElement row : tableLastName) {
			Map<String, String> storeUINames = new LinkedHashMap<>();
			String tableName = row.getText();
			storeUINames.put("emp_lastname", tableName);
			uiName.add(storeUINames);
		}

		return uiName;
	}

	/**
	 * this method will check if employee table is displayed
	 * 
	 * @return
	 */
	public boolean isTableDisplayed() {
		return employeesTable.isDisplayed();

	}

	public ViewEmployeePageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
}
