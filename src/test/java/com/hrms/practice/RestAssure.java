package com.hrms.practice;

import org.junit.Assert;
import org.junit.Test;

import static io.restassured.RestAssured.*;
import io.restassured.response.Response;


public class RestAssure {
@Test
public void Test() {
 Response resp =get("https://reqres.in/api/users?page=2");
 int code=resp.getStatusCode();
 System.out.println("Status code is "+code);
 Assert.assertEquals(code, 200);
 int second = get("https://reqres.in/api/users?page=2").getStatusCode();
}
@Test
public void TestBody() {
 Response resp =get("https://reqres.in/api/users?page=2");
  String code = resp.asString();
 System.out.println("Data is "+code);
 System.out.println("Response time "+resp.getTime());
 String second = get("https://reqres.in/api/users?page=2").asString();
}

}
