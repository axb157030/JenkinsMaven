package maven;

public class MavenTester extends Thread {


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MavenTester thread = new MavenTester();
	    thread.start();
	    System.out.println("This code is outside of the thread");

	}
	
	  public void run() {
		    System.out.println("This code is running in a thread");
		  }

}
