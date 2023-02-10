package com.zookeper;

public class Gorilla extends Mammal {
	
	public Gorilla(int energy) {
		super(energy);
		this.energy = energy;
	}
	
	public void throwThings() {
		System.out.println("Throwing junk at folks");
		energy -= 5;
		displayEnergy();
	}
	
	public void climb() {
		System.out.println("Gorilla is climbing");
		energy -= 10;
		displayEnergy();
	}
	
	public void eatBanana() {
		System.out.println("Banana, yum");
		energy += 10;
		displayEnergy();
	}
	
}