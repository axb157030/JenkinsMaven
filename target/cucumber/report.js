$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/IsNumber.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    }
  ],
  "line": 20,
  "name": "IsNumber test",
  "description": "",
  "id": "isnumber-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "See if isEven function returns true if a number is even",
  "description": "",
  "id": "isnumber-test;see-if-iseven-function-returns-true-if-a-number-is-even",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Use isEven function to get boolean value of true",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I pass even number 4 to isEven function",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The result is true",
  "keyword": "Then "
});
formatter.match({
  "location": "IsNumberCucumber.instantiateIsNumberClass()"
});
formatter.result({
  "duration": 216298600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "IsNumberCucumber.i_even_pass_number_to_isEven_function(int)"
});
formatter.result({
  "duration": 3652900,
  "status": "passed"
});
formatter.match({
  "location": "IsNumberCucumber.the_result_is_true()"
});
formatter.result({
  "duration": 4154300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "See if isEven function returns false if a number is false",
  "description": "",
  "id": "isnumber-test;see-if-iseven-function-returns-false-if-a-number-is-false",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Use isEven function to get boolean value of false",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I pass odd number 5 to isEven function",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The result is false",
  "keyword": "Then "
});
formatter.match({
  "location": "IsNumberCucumber.instantiateIsNumberClass2()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "IsNumberCucumber.i_odd_pass_number_to_isEven_function(int)"
});
formatter.result({
  "duration": 120800,
  "status": "passed"
});
formatter.match({
  "location": "IsNumberCucumber.the_result_is_false()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
});