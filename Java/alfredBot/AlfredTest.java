public class AlfredTest {
    public static void main(String[] args) {

        AlfredQuotes alfredBot = new AlfredQuotes();

        String testGreeting = alfredBot.basicGreeting();
        String testGuestGreeting = alfredBot.guestGreeting("Beth", "evening");
        String testDateAnnouncement = alfredBot.dateAnnouncement();
        String alexisTest = alfredBot.respondBeforeAlexis("Alexis! This is a test.");
        String alfredTest = alfredBot.respondBeforeAlexis("Testing before - Alfred test");
        String notRelevantTest = alfredBot.respondBeforeAlexis("Irrelevant - index of won't be met");
    
        System.out.println(testGreeting);
        System.out.println(testGuestGreeting);
        System.out.println(testDateAnnouncement);
        System.out.println(alexisTest);
        System.out.println(alfredTest);
        System.out.println(notRelevantTest);
    
    }
}
