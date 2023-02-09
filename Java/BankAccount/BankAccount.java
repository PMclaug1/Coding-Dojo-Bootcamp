
public class BankAccount {
	
	//Attributes
	private String accountNumber = "";
	private Double checkingBalance = 0.0;
	private Double savingsBalance = 0.0;
	private static int accountsCreated = 0;
	private static Double totalMoney = 0.0;
	
	//Constructors
	public BankAccount() {
		Double checkingBalance = 0.0;
		Double savingsBalance = 0.0;
		accountsCreated +=1;
		System.out.println("Total accounts: " + accountsCreated);		
	}
	
	//Getters
	public Double getCheckingBalance() {
		return checkingBalance;
	}
	public Double getSavingsBalance() {
		return savingsBalance;
	}

	//Setters
	public void setCheckingBalance(Double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}

	public void setSavingsBalance(Double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}

	//Methods

    public Double myBalance() {
		Double allBalance = checkingBalance + savingsBalance;
		System.out.println(allBalance);
		return allBalance;
	}
	
	public void accountDeposit(String type, Double depositAmt) {
		if(type == "Checking") {
			setCheckingBalance(getCheckingBalance() + depositAmt);
			totalMoney += depositAmt;
		}
		if(type == "Savings") {
			setSavingsBalance(getSavingsBalance() + depositAmt);
			totalMoney += depositAmt;
		}
		else {
			System.out.println("Please choose an account type.");
		}	
	}
	
	public void accountWithdrawal(String type, Double withdrawalAmt) {
		if(type == "Checking") {
			if(getCheckingBalance() < withdrawalAmt) {
				System.out.println("Insufficient Funds!");
			}
			else {
			setCheckingBalance(getCheckingBalance() - withdrawalAmt);
			totalMoney -= withdrawalAmt;
			}
		}
		if(type == "Savings") {
			if(getSavingsBalance() < withdrawalAmt) {
				System.out.println("Insufficient Funds!");
			}
			else {
			setSavingsBalance(getSavingsBalance() - withdrawalAmt);
			totalMoney -= withdrawalAmt;
			}
		}
	}

}