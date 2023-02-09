public class Item {

    // mem vars
    private String name;
    private double price;
    private int index;

    // constructor
    public Item(String name, double price){
        this.name = name;
        this.price = price;
    }

    // getters/setters
    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public double getPrice(){
        return this.price;
    }

    public void setPrice(double price){
        this.price = price;
    }

    public int getIndex(){
        return this.index;
    }

    public void setIndex(int index){
        this.index = index;
    }
}