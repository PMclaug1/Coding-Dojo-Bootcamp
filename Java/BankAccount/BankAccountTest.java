public class BankAccountTest {
	public static void main(String[] args) {
		
	BankAccount user1 = new BankAccount();
	BankAccount user2 = new BankAccount();
	BankAccount user3 = new BankAccount();
	user1.accountDeposit("Savings", 84.00);
	user2.accountDeposit("checking", 860.00);
	user3.accountDeposit("savings", 3000.75);
	user1.accountWithdrawal("Checking", 62.00);
	user2.accountWithdrawal("checking", 333.00);
	user3.accountWithdrawal("savings", 1456.00);
	user2.myBalance();
	user1.myBalance();
	user3.myBalance();
	}
}