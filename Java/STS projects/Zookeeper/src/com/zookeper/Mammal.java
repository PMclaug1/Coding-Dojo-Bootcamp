package com.zookeper;

public class Mammal {
	public int energy = 100;
	
	public Mammal(int energy){
		this.energy = energy;
	}
	
	public void displayEnergy() {
		System.out.println("Energy remaining: " + energy);
	}
}