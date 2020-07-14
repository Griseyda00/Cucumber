package com.hrms.practice;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import org.junit.Test;



public class Class01part2 {
	String dbUsername = "syntax_hrm";
	String dbPassword = "syntaxhrm123";
	// JDBC: driver type:hostname:port/dbName
	String url = "jdbc:mysql://18.232.148.34:3306/syntaxhrm_mysql";
	@Test
	public void dataBaseDemo() throws SQLException {
		Connection connection = DriverManager.getConnection(url, dbUsername, dbPassword);
		System.out.println("DB Connection is successful");
		System.out.println(connection);
		Statement st = connection.createStatement();
		ResultSet resultSet = st.executeQuery("select * from hs_hr_employees");
		System.out.println("FirstName" +"\t"+ "LastName");
		while (resultSet.next()) {
			String columnData = resultSet.getString("emp_firstname");
			String columnData1 = resultSet.getString("emp_lastname");
			System.out.println(columnData +"\t\t"+ columnData1);
		}
		resultSet.close();
		st.close();
		connection.close();
	}
	@Test
	public void dbMetadata() throws SQLException{
	Connection conn = DriverManager.getConnection("dbUrl, dbUsername, dbPassword");
	DatabaseMetaData dbMetaData= conn.getMetaData();
	String driverName = dbMetaData.getDriverName();
	String dbVersion= dbMetaData.getDatabaseProductVersion();
	System.out.println(driverName);
	System.out.println(driverName);
	
	
}
	@Test
	public void rsMetadata() throws SQLException {
		Connection conn = DriverManager.getConnection("dbUrl, dbUsername, dbPassword");
		Statement st = conn.createStatement();
		ResultSet rs = st.executeQuery("select * from hs_hr_employees where emp_number = 14688");
		ResultSetMetaData rsMetadata = rs.getMetaData();
		int colNumbers = rsMetadata.getColumnCount();
		System.out.println(colNumbers);
		String colName1=rsMetadata.getColumnClassName(1);
		System.out.println(colName1);
		
		
		for (int i=1; i<=colNumbers; i++) {
			String colNames=rsMetadata.getColumnName(i);
			System.out.println(colNames);
			
			// hw get the resultset metadata store it in the arraylist and retrieve it from arraylist
			// also get column type name get the table names
		}	
}	
	
}
