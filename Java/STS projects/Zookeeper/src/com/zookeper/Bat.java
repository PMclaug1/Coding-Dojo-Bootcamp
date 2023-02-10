package com.zookeper;

public class Bat extends Mammal{
	
	public Bat(int energy) {
		super(energy);
		this.energy = energy;
	}
	
	public void fly() {
		System.out.println("Zooooom");
		energy -= 50;
		displayEnergy();
	}
	
	public void eatHumans() {
		energy += 25;
		displayEnergy();
	}
	
	public void attackTown() {
		System.out.println("Screams and chaos ensues");
		energy -= 100;
		displayEnergy();
	}


}
