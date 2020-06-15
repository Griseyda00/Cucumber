package com.hrms.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

public class PersonalDetailsPageElements extends CommonMethods {
	@FindBy(id = "personal_cmbNation")
	public WebElement nationalityDD;

	@FindBy(name = "personal[optGender]")
	public List<WebElement> genderRadioGroup;

	@FindBy(xpath = "//div[@id='pdMainContainer']/div[1]/h1")
	public WebElement lblPersonalDetails;

	@FindBy(id = "personal_txtEmployeeId")
	public WebElement employeeId;
	
	@FindBy(xpath = "//div[@id='profile-pic']//h1")
	public WebElement profilePic;
	
	@FindBy(xpath="//input[@id='btnSave']")
	public WebElement btnEdit;
	
	@FindBy(xpath="//input[@name='personal[txtLicenNo]']")
	public WebElement driverlicenseNum;
	
	@FindBy(xpath="//input[@id='personal_txtNICNo']")
	public WebElement SSN;
   
	@FindBy(xpath="//input[@id='personal_txtLicExpDate']")
	public WebElement licenseExDate;
	
	@FindBy(xpath="//input[@id='personal_optGender_2']")
	public WebElement fGender;
	
	@FindBy(xpath="//select[@id='personal_cmbMarital']")
	 public WebElement MaritalStatus;
	
	@FindBy(xpath="//select[@id='personal_cmbNation']")
	   public WebElement nationality;
	
	@FindBy(xpath="//input[@id='personal_DOB']")
	 public WebElement DateOfBirth;
	
	@FindBy(xpath="//input[@id='personal_txtMilitarySer']")
	public WebElement MilitariSer;
	
	@FindBy(xpath="//input[@id='personal_txtEmpNickName']")
	public WebElement nickName;
	
	@FindBy(xpath="//input[@name='personal[txtSINNo]']")
	public WebElement SIN;
	
	@FindBy(xpath="//input[@id='personal_chkSmokeFlag']")
	public WebElement smoker;
	
	@FindBy(xpath="//input[@id='btnSave']")
	public WebElement btnSave;
	
	@FindBy(xpath="//input[@id='personal_txtEmpNickName']")
	public WebElement ExpectedNname;
	public PersonalDetailsPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
}
