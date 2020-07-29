package com.hrms.API.steps.practice;

import static io.restassured.RestAssured.given;

import io.cucumber.java.en.Given;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class TokenGenerateToken {
	String BaseURI = RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";
	public static String token;

	@Given("A JWT is generate token")
	public void a_JWT_is_generate_token() {
		RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";
		RequestSpecification generateTokenRequest = given().header("Content-Type", "application/json").body(
				"{\n" + "\n" + "  \"email\": \"Perla123@gmail.com\",\n" + "  \"password\": \"Lilly1234\"\n" + "}");
		Response getResult = generateTokenRequest.when().post("/generateToken.php");
		// String token = getResult.prettyPrint();
		token = "Bearer " + getResult.body().jsonPath().getString("token");
		System.out.println(token);
		

	}
}
