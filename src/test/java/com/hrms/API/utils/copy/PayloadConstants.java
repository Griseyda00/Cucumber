package com.hrms.API.utils.copy;

import org.json.JSONObject;

import com.google.protobuf.Value;
import com.hrms.API.steps.practice.HardcodedExamples;


public class PayloadConstants {
	
	
	
	/**
	 * Create employee body
	 * @return
	 */
	public static String createEmployeeBody() {	
		String createEmployeeBody ="{\n" + 
				"  \"emp_firstname\": \"Mahady\",\n" + 
				"  \"emp_lastname\": \"Brian\",\n" + 
				"  \"emp_middle_name\": \"Mahad\",\n" + 
				"  \"emp_gender\": \"M\",\n" + 
				"  \"emp_birthday\": \"2000-07-10\",\n" + 
				"  \"emp_status\": \"Employee\",\n" + 
				"  \"emp_job_title\": \"Cloud Architect\"\n" + 
				"}"; 
		return createEmployeeBody;
	}	
	/**
	 * Created method to return payload - to reduce messy code
	 * @return
	 */
	public static String createEmployee() {
		JSONObject value=new JSONObject();	
		value.put("employee_id", "Mahady");
		
		
		
		return value.toString();
	}

	
	
	public static String updateCreatedEmpBody() {		
		String updateBody = "{\n" + 
				"   \"employee_id\": \""+HardcodedExamples.employeeID+"\",\n" + 
				"   \"emp_firstname\": \"Rose\"\n" + 
				"}";
				return updateBody;
	}
	
	

}
