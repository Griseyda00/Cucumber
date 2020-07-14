package com.hrms.practice;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.junit.Test;

public class Class01 {
	String dbUsername = "syntax_hrm";
	String dbPassword ="syntaxhrm123";
	// JDBC: driver type:hostname:port/DB name
	// JDBC this is the bridge or the connection between the DB and Java
	String dbUrl = "jdbc:mysql://166.62.36.207:3306/syntaxhrm_mysql";
		@Test // if anything regarding connection fail you will get a sql exception
		public void abc() throws SQLException {
			Connection conn = DriverManager.getConnection(dbUrl, dbUsername, dbPassword);
			System.out.println("DB connection is successful");
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery("select * from hs_hr_employees");
			rs.next();
			String firstname = rs.getString("emp_firstname");
			System.out.println(firstname);
			rs.next();
			String firstname2=rs.getObject("Emp_firstname").toString(); // it is not case sensitive
			System.out.println(firstname2);
			
			String allData;
			while(rs.next()) {
				allData=rs.getObject("emp_firstname").toString();
				System.out.println(allData);
		
			}
			rs.close();
			st.close();
			conn.close();  // the purpose of closing is data leakage
			               //we close the connection between the DB and eclipse to protect the data
		}
	//retrieve all the job titles and store them in arraylist and show it in console from arraylist
	
	
		@Test
		public void jobTitles() throws SQLException{
			Connection conn = DriverManager.getConnection(dbUrl, dbUsername, dbPassword);
			System.out.println("DB connection is successful");
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery("select * from ohrm_job_title");
			ArrayList <Object> jobTitles = new ArrayList<Object>();
			while (rs.next()) {
				jobTitles.add(rs.getObject("job_title"));
			}
			for (Object title:jobTitles) {
				System.out.println(title.toString());
			}
//			rs.close();
//			st.close();
//			conn.close();
		}		
}