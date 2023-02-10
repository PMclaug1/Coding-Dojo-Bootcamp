package com.zookeper;

public class ZookeeperTest {

	public static void main(String[] args) {
		Gorilla gorilla = new Gorilla(100);
		
		gorilla.throwThings();
		gorilla.throwThings();
		gorilla.throwThings();

		gorilla.eatBanana();
		gorilla.eatBanana();
		
		gorilla.climb();

		Bat bat = new Bat(300);
		
		bat.attackTown();
		bat.attackTown();
		bat.attackTown();
		
		bat.eatHumans();
		bat.eatHumans();
		
		bat.fly();
		bat.fly();
	}

}
