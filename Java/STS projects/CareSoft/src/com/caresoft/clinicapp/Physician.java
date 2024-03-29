package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPPACompliantUser {


	public Physician(Integer id) {
		super (id);

	}
	

	private ArrayList<String> patientNotes;
	private Integer confirmedAuthID;

	
	@Override
	public boolean assignPin(int pin) {
		this.pin = pin;
		return false;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (id == this.confirmedAuthID)
			return true;
		else
		return false;
	}
	
	public void newPatientNotes(String notes, String patientName, Date date) {
	    String report = String.format(
	        "Datetime Submitted: %s \n", date);
	    report += String.format("Reported By ID: %s\n", this.id);
	    report += String.format("Patient Name: %s\n", patientName);
	    report += String.format("Notes: %s \n", notes);
	    this.patientNotes.add(report);
	}
	    
//	    getters/setters

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
}
	


