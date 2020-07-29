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
	 * Creating payload using JSONObject and returning it as a String 
	 * @return
	 */
	
	public static String creatEmployeePayload() {	
		JSONObject obj = new JSONObject();
		
		obj.put("emp_firstname", "syntaxFirstName");
		obj.put("emp_lastname", "syntaxLastName");
		obj.put("emp_middle_name", "syntaxMiddleName");
		obj.put("emp_gender", "F");
		obj.put("emp_birthday", "2000-07-11");
		obj.put("emp_status", "Employee");
		obj.put("emp_job_title", "Cloud Architect");		
		return obj.toString();	
	}

	
	
	public static String updateCreatedEmpBody() {		
		String updateBody = "{\n" + 
				"   \"employee_id\": \""+HardcodedExamples.employeeID+"\",\n" + 
				"   \"emp_firstname\": \"Rose\"\n" + 
				"}";
				return updateBody;
	}
	
	

}
