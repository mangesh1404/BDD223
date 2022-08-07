package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features="src/main/java/com/features",
	glue="com.stepdefinition",
	plugin="html:target",
	dryRun=false,// compilation of feature file
	monochrome=true,// readable output 
	tags= {"@run1 , @run2"}// to run specific Scenario/feature
		)

public class TestRunner {

}
