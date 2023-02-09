public class TestOrders {
    
    public static void main(String[] args){
        CoffeeKiosk coffeeKiosk = new CoffeeKiosk();

        coffeeKiosk.addMenuItem("banana", 2.00);
        coffeeKiosk.addMenuItem("coffee", 2.50);
        coffeeKiosk.addMenuItem("latte", 4.00);

        coffeeKiosk.displayMenu();
    }
}
