package maven.testing;


import org.junit.gen5.api.Assertions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import maven.IsNumber;



public class IsNumberCucumber {
	
	private IsNumber isNumber;
	private boolean result;

	@Given("Use isEven function to get boolean value of true")
	public void instantiateIsNumberClass() throws Throwable {
		isNumber = new IsNumber();
	}
	
	@When("^I pass even number (\\d*[02468]) to isEven function$")
	public void i_even_pass_number_to_isEven_function(int num) throws Throwable {
		result = isNumber.isEven(num);
	}
	
	
	@Then("The result is true$")
	public void the_result_is_true() throws Throwable {
		Assertions.assertEquals(result, true );
	}
	
	@Given("Use isEven function to get boolean value of false")
	public void instantiateIsNumberClass2() throws Throwable {
		isNumber = new IsNumber();
	}
	
	@When("^I pass odd number (\\d*[13579]) to isEven function$")
	public void i_odd_pass_number_to_isEven_function(int num) throws Throwable {
		result = isNumber.isEven(num);
	}
	
	@Then("The result is false$")
	public void the_result_is_false() throws Throwable {
		Assertions.assertEquals(result, false );
	}
	
	

	
	
	


}
