package com.hrms.API.steps.practice;

import static io.restassured.RestAssured.given;

import org.junit.Test;

import io.cucumber.java.en.Given;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APostCreateEmployee {
	static String baseURI=RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";
	
	static String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTUxNjg1NTUsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU5NTIxMTc1NSwidXNlcklkIjoiNjQ5In0.Ubkq-UNg0sFAMqwvtTgERDuZTgt-ffnefwGYu-fm3hg";
	static String employeeID;
	@Test
	public void aPOSTcreateEmployee() {
		 RequestSpecification createEmployeeRequest = given().header("Content-Type", "application/json")
					.header("Authorization", token).body("{\n" + 
							" \"emp_firstname\": \"syntaxFirstName\",\n" + 
							" \"emp_lastname\": \"syntaxLastName\",\n" + 
							" \"emp_middle_name\": \"syntaxMiddleName\",\n" + 
							" \"emp_gender\": \"F\",\n" + 
							" \"emp_birthday\": \"2000-07-11\",\n" + 
							" \"emp_status\": \"Employee\",\n" + 
							" \"emp_job_title\": \"Cloud Architect\"\n" + 
							"}");
			Response createEmployeeReponse = createEmployeeRequest.when().post("/createEmployee.php");
			createEmployeeReponse.prettyPrint();
			 employeeID = createEmployeeReponse.jsonPath().getString("Employee[0].employee_id");
				System.out.println("employee ID that I'm printing "+employeeID);
			createEmployeeReponse.then().assertThat().statusCode(201).log().all();
			
		
		}
}
