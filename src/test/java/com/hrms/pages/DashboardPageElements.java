package com.hrms.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

public class DashboardPageElements extends CommonMethods{
	@FindBy(id="welcome")
	public WebElement welcome;
	
	@FindBy(xpath = "//div[@id='branding']/a[1]/img")
	public WebElement logo;

	@FindBy(xpath = "//a[@id='menu_pim_addEmployee']")
	public WebElement addEmp;
	
	@FindBy(xpath = "//a[@id='menu_pim_viewPimModule']")
	public WebElement PIM;
	@FindBy(css="a[id='menu_pim_viewEmployeeList']")
	public WebElement empListPage;
	
	@FindBy(xpath = "//div[@class='menu']/ul/li")
	public List<WebElement> dashMenu;
	
	@FindBy(xpath="//table[@id='resultTable']/tbody/tr[1]/td[3]")
	public WebElement modifyEmp;
	
	@FindBy(xpath="//a[text()='James J']")
	public WebElement sarmed;
	
	public DashboardPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

	public void navigateToAddEmployee() {
		jsClick(PIM);
		jsClick(addEmp);
	}
	public void navigateToEmpListPage() {
		jsClick(PIM);
		jsClick(empListPage);
	}
}