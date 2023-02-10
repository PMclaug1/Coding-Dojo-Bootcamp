package com.caranddriver;
public class CarDriverTest {

	public static void main(String[] args) {
		Driver driver = new Driver();
		
		driver.drive();
		driver.drive();
		driver.drive();
		driver.drive();
		
		driver.boost();
		
		driver.refuel();
		driver.refuel();
		driver.refuel();
	}
}
