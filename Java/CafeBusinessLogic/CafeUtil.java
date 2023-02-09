import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil {

    public int getStreakGoal(){
    int sum = 0;
    for (int i = 0; i < 11; i++){
        sum += i;
    }
    System.out.println(sum);
    return sum;
    }

    public double getOrderTotal(double[] prices){
        double sum = 0;
        for(int i = 0; i < prices.length; i++){
            sum += prices[i];
        }
        System.out.println(sum);
        return sum;
    }

    // // void displayMenu(ArrayList<String> menuItems)
    public void displayMenu(ArrayList<String> menuItems){
        String name = menuItems.get(0); 
        String name1 = menuItems.get(1); 
        String name2 = menuItems.get(2); 
        String name3 = menuItems.get(3); 
    }




    public void addCustomer(ArrayList<String> customerArray){
    customerArray.add("Heidi");
    customerArray.add("Paul");
    customerArray.add("Peter");
    customerArray.add("Mary");
    String userName = System.console().readLine();
    }
}