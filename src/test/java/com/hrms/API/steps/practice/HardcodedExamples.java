package com.hrms.API.steps.practice;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
//import org.apache.hc.core5.http.ContentType;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)

public class HardcodedExamples {
	/**
	 * Rest Assured
	 * 
	 * given - prepare your request when - your making call to the end point then -
	 * validating
	 * 
	 * @param args
	 */
	static String baseURI = RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";

	static String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTU2ODA5NTcsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU5NTcyNDE1NywidXNlcklkIjoiNjQ5In0.T90znRv0yM6ARxCt2RqEtyVQlHClszGL5lACSdJm0aE";
	public static String employeeID;

	public static void main(String[] args) {
		RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";

		String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTU2MzQzOTIsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU5NTY3NzU5MiwidXNlcklkIjoiNjQ5In0.wQ0DhFjQx0HXRKswAvNaRdjbUy8TpxDmsJKY2vJ1v8Q";

		RequestSpecification getOneEmployeeRequest = given().header("Content-Type", "application/json")
				.header("Authorization", token).queryParam("employee_id", "11521A").log().all();

		Response getOneEmployeeResponse = getOneEmployeeRequest.when().get("/getOneEmployee.php");

		String response = getOneEmployeeResponse.prettyPrint();
		// String response = getOneEmployeeResponse.body().asString();
		// System.out.println(response);

		getOneEmployeeResponse.then().assertThat().statusCode(200);

	}

	@Test

	public void aPOSTcreateEmployee() {

		RequestSpecification createEmployeeRequest = given().header("Content-Type", "application/json")
				.header("Authorization", token).body(Batch6.body3());
		Response createEmployeeReponse = createEmployeeRequest.when().post("/createEmployee.php");
		createEmployeeReponse.prettyPrint();
		employeeID = createEmployeeReponse.jsonPath().getString("Employee[0].employee_id");
		System.out.println(employeeID);
		createEmployeeReponse.then().assertThat().statusCode(201).log().all();
		createEmployeeReponse.then().assertThat().body("Message", equalTo("Entry Created"));
		createEmployeeReponse.then().assertThat().body("Employee[0].emp_firstname", equalTo("Mahady"));
//			createEmployeeReponse.then().header("Server", "");
		createEmployeeReponse.then().assertThat().header("Content-Type", "application/json");

	}

	@Test
	public void bGETcreatedEmployee() {
		RequestSpecification getCreatedEmployee = given().header("Content-type", "application/json")
				.header("Authorization", token).queryParam("employee_id", employeeID).log().all();

		Response getResult = getCreatedEmployee.when().get("/getOneEmployee.php");
		String response = getResult.prettyPrint();
		String empID = getResult.body().jsonPath().getString("employee[0].employee_id");
		boolean verifyingID = empID.equalsIgnoreCase(employeeID);
		Assert.assertTrue(verifyingID);
		System.out.println(verifyingID);
		getResult.then().assertThat().statusCode(200);
		JsonPath js = new JsonPath(response);
		String emplID = js.getString("employee[0].employee_id");
		String firstName = js.getString("employee[0].emp_firstname");
		String MiddleName = js.getString("employee[0].emp_middle_name");
		String LastName = js.getString("employee[0].emp_lastname");
		String emp_bday = js.getString("employee[0].emp_birthday");
		String gender = js.getString("employee[0].emp_gender");
		String jobTitle = js.getString("employee[0].emp_job_title");
		String empStatus = js.getString("employee[0].emp_status");
		System.out.println(emplID);
		js.prettyPrint();
		Assert.assertTrue(emplID.contentEquals(employeeID));
		System.out.println(employeeID);
		// firstName.contentEquals("syntaxFirstName");
		Assert.assertTrue(firstName.contentEquals("Mahady"));
		// LastName.contentEquals("syntaxLastName");
		Assert.assertTrue(LastName.contentEquals("Brian"));
		Assert.assertTrue(emp_bday.contentEquals("2000-07-10"));
		Assert.assertTrue(empStatus.contentEquals("Employee"));
		Assert.assertEquals("Male", gender);
		Assert.assertEquals("Mahad", MiddleName);
		boolean JTAssert = jobTitle.contentEquals("Cloud Architect");
		Assert.assertTrue(JTAssert);

	}

	@Test
	public void cGetAllEmployees() {

		RequestSpecification getAllEmployeesRequest = given().header("Content-type", "application/json")
				.header("Authorization", token).log().all();
		Response getAllEmployeesResponse = getAllEmployeesRequest.when().get("/getAllEmployees.php");
		// getAllEmployeesResponse.prettyPrint();
		String allEmployees = getAllEmployeesResponse.body().asString();
		int numberOfEmp = allEmployees.length();
		System.out.println(numberOfEmp);
		JsonPath js = new JsonPath(allEmployees);
		int sizeOfList = js.getInt("Employees.size()");
		System.out.println(sizeOfList);
		// int count=0;
//		for (int i = 0; i < sizeOfList; i++) {
//			String AllEmployeesIDS = js.getString("Employees["+ i +"].employee_id");
//			//System.out.println(AllEmployeesIDS);
//			if(AllEmployeesIDS.contentEquals(employeeID)) {
//				System.out.println("Employee ID "+employeeID+" is present in body");
//				String employeeFN = js.getString("Employees["+i+"].emp_firstname");
//				System.out.println(employeeFN);
//				break;
//			}
//			
//		}
//		System.out.println(count);
	}

	@Test
	public void dPUTupdatedCreatedEmployee() {
		RequestSpecification UpdatedEmployeeRequest = given().header("Content-type", "application/json")
				.header("Authorization", token).body(Batch6.body());
		Response UpdatedEmployeeResponse = UpdatedEmployeeRequest.when().put("/updateEmployee.php");
		String reponse = UpdatedEmployeeResponse.prettyPrint();
		System.out.println(reponse);
		UpdatedEmployeeResponse.then().assertThat().body("Message", equalTo("Entry updated"));
		String emplID = UpdatedEmployeeResponse.body().jsonPath().getString("employee[0].employee_id");
		Assert.assertEquals(employeeID, emplID);
		
	}
    @Test
	public void eGetUpdatedEmployee() {

		RequestSpecification UpdatedEmployee = given().header("Content-type", "application/json")
				.header("Authorization", token).queryParam("employee_id", employeeID).log().all();
		Response getResult = UpdatedEmployee.when().get("/getOneEmployee.php");
		String response = getResult.prettyPrint();
		String empID = getResult.body().jsonPath().getString("employee[0].employee_id");
		boolean verifyingID = empID.equalsIgnoreCase(employeeID);
		Assert.assertTrue(verifyingID);
		System.out.println(verifyingID);
		getResult.then().assertThat().statusCode(200);
		JsonPath js = new JsonPath(response);
		String emplID = js.getString("employee[0].employee_id");
		String firstName = js.getString("employee[0].emp_firstname");
		String MiddleName = js.getString("employee[0].emp_middle_name");
		String LastName = js.getString("employee[0].emp_lastname");
		String emp_bday = js.getString("employee[0].emp_birthday");
		String gender = js.getString("employee[0].emp_gender");
		String jobTitle = js.getString("employee[0].emp_job_title");
		String empStatus = js.getString("employee[0].emp_status");
		System.out.println(emplID);
		js.prettyPrint();

		// emplID.contentEquals(employeeID);
		Assert.assertTrue(emplID.contentEquals(employeeID));
		System.out.println(employeeID);
		// firstName.contentEquals("syntaxFirstName");
		Assert.assertTrue(firstName.contentEquals("Griseyda"));
		// LastName.contentEquals("syntaxLastName");
		Assert.assertTrue(LastName.contentEquals("Perla"));
		Assert.assertTrue(emp_bday.contentEquals("2000-07-11"));
		Assert.assertTrue(empStatus.contentEquals("Employee"));
		Assert.assertEquals("Female", gender);
	     Assert.assertEquals(null, MiddleName);
		boolean JTAssert = jobTitle.contentEquals("IT Support Manager");
		Assert.assertTrue(JTAssert);
	}
    @Test
    public void fPartiallyUpdateEmp() {
		RequestSpecification partiallyUpdateEmployee = given().header("Content-type", "application/json")
				.header("Authorization", token).body(Batch6.body2());
		Response UpdatedEmployeeresponse = partiallyUpdateEmployee.when().patch("/updatePartialEmplyeesDetails.php");
		String response = UpdatedEmployeeresponse.prettyPrint();
		System.out.println(response);

	}
     @Test
	public void gGetPartiallyUpdated() {
		RequestSpecification getCreatedEmployee = given().header("Content-type", "application/json")
				.header("Authorization", token).queryParam("employee_id", employeeID).log().all();

		Response getResult = getCreatedEmployee.when().get("/getOneEmployee.php");
		String response = getResult.prettyPrint();
		System.out.println(response);
		String empID = getResult.body().jsonPath().getString("employee[0].employee_id");
		boolean verifyingID = empID.equalsIgnoreCase(employeeID);
		Assert.assertTrue(verifyingID);
		System.out.println(verifyingID);
		getResult.then().assertThat().statusCode(200);
		getResult.then().assertThat().body("employee[0].emp_firstname", equalTo("Rose"));

	}
     @Test
	public void hDeleteEmployee() {
		RequestSpecification getDeleteEmp = given().header("Content-type", "application/json")
				.header("Authorization", token).queryParam("employee_id", employeeID).log().all();
		Response getResult = getDeleteEmp.when().delete("/deleteEmployee.php");
		
		String response = getResult.prettyPrint();
		System.out.println("=====================================================");
		System.out.println(response);
		String empID = getResult.body().jsonPath().getString("employee[0].employee_id");
		boolean verifyingID = empID.equalsIgnoreCase(employeeID);
		Assert.assertTrue(verifyingID);
		System.out.println(verifyingID);
		
		getResult.then().assertThat().statusCode(201);
	}
      
	@Test
	public void iGetEmployeeStatus() {
		RequestSpecification getEmployeeStatus = given().header("Content-Type","application/json").header("Authorization",token).log().all();
		     Response getResult = getEmployeeStatus.when().get("/employeeStatus.php");
		 	String response = getResult.prettyPrint();
			System.out.println(response);
			getResult.then().assertThat().statusCode(200);
			//String allStatus = getResult.body().asString();
			//System.out.println(allStatus);
			
			 
	}

	@Test 
	public void jGetEmployeeJobtitle() {
		RequestSpecification getEmployeeStatus = given().header("Content-Type","application/json").header("Authorization",token).log().all();
		Response getResult = getEmployeeStatus.when().get("/jobTitle.php");
		String response = getResult.prettyPrint();
		System.out.println(response);
		getResult.then().assertThat().statusCode(200);
	}
	
}
