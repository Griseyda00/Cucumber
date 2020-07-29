package com.hrms.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (
		features = "src/test/resources/features/", //specify which feature file to run
					//in our case we do say to run all features inside features package
		glue="com/hrms/API/steps/practice", //where we can find implementation code for gherkin steps?
					//we specify just package
		dryRun=true, //if set to true it will quickly scan that all gherkin steps have implementation code
					// if set to true no actual execution will happen
		monochrome=true,
		//strict=true (this is going skipped all the unimplemented methods and failed the test 
		// no really useful
         //if any undef step is going to treat it as a error
		tags="@workflow"
		,plugin= {
				"pretty",//prints gherkin steps in console
				"html:target/cucumber-default-report"// create basic html report in specified location
		}
		)
public class ApiWorkFlowRunner {

}
