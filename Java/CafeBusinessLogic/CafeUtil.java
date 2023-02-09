import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil {

    public int getStreakGoal(){
    int sum = 0;
    for (int i = 0; i < 11; i++){
        sum += i;
    }
    System.out.println(sum);
}

    // double getOrderTotal(double[] prices)
    public getOrderTotal(double[] prices){
        int sum = 0;
        for(int i = 0; i < prices.length; i++){
            sum += prices[i];
        }
        System.out.println(sum);
    }

    // void displayMenu(ArrayList<String> menuItems)
    public void displayMenu(ArrayList<String>menuItems){
        for (int i = 0; i < menuItems.length; i++) {
            String name = menuItems.get(i);
        }
        System.out.println(int name + menuItems[i]);
    }

    // addCustomer(ArrayList<String> customers)

}