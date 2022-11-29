
class BankAccount:

    all_accounts = []

    def __init__(self,balance,int_rate):
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)
        
    @classmethod
    def all_info(cls):
        for one_account in cls.all_accounts:
            one_account.display_account_info()

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance,amount):
            self.balance -= amount
        else:
            print("Insufficient funs: Charging a $5 fee")
            self.balance -= 5
        return self

    @staticmethod
    def can_withdraw(balance,amount):
        if (balance - amount) < 0:
            return False
        else:
            return True

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        print(f"Interest Rate: {self.int_rate}")

    def yield_interest(self):
        self.balance += self.balance * self.int_rate
        return self 



Mike = BankAccount(500,.04)
Sarah = BankAccount (350,.05)
Mike.deposit(50).deposit(75).deposit(100).withdraw(100).yield_interest().display_account_info()
Sarah.deposit(50).deposit(23).withdraw(200).withdraw(25).withdraw(25).withdraw(500).yield_interest().display_account_info()
BankAccount.all_info()