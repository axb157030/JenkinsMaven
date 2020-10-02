package maven.testing;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(format = {"pretty", "html:target/cucumber"}, features = "src/main/resources/IsNumber.feature",
monochrome = true)
public class MavenTest {
// https://www.youtube.com/watch?v=Wc3UDbYO_b4&t=425s

}
