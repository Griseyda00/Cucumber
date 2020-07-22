package com.hrms.API.steps.practice;

public class Batch6 {
	
public static String body() {
	String res="{\n" + 
			"  \"employee_id\": \""+HardcodedExamples.employeeID+"\",\n" + 
			"  \"emp_firstname\": \"Griseyda\",\n" + 
			"  \"emp_lastname\": \"Perla\",\n" + 
			"  \"emp_middle_name\":\"string\",\n" + 
			"  \"emp_gender\": \"F\",\n" + 
			"  \"emp_birthday\": \"2000-07-11\",\n" + 
			"  \"emp_status\": \"Employee\",\n" + 
			"  \"emp_job_title\": \"IT Support Manager\"\n" + 
			"}";
	return res;
}

}
