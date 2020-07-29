package com.hrms.API.steps.practice;

import org.testng.annotations.Test;

public class TDD {
  @Test
  public void KnockingDoor() {
	  System.out.println("Someone is knocking on the door");
  }
  @Test(dependsOnMethods= {"KnockingDoor"})
  public void openingDoor() {
	  System.out.println("I will open door but ony if someone knocked");
  }
@Test(dependsOnMethods= {"openingDoor"})
public void closingDoor() {
	System.out.println("I closed the door after opening the door to whoever knocked");
}
	
	
	
}
