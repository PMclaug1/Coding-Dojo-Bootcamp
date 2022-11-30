
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

class User:
    population = 0

    def __init__(self,name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=200)
        User.population += 1

    def deposit(self):
        self.account.deposit()

    def withdraw(self):
        self.account.withdraw

    def yield_interest(self):
        self.account.yield_interest

Mike = User("Mike","test@gmail.com")

Mike.account.deposit(50).withdraw(25).display_account_info()

