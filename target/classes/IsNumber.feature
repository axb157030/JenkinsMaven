#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
Feature: IsNumber test

  Scenario: See if isEven function returns true if a number is even
    Given Use isEven function to get boolean value of true
    When I pass even number 4 to isEven function
    Then The result is true
    
   Scenario: See if isEven function returns false if a number is false
    Given Use isEven function to get boolean value of false
    When I pass odd number 5 to isEven function
    Then The result is false
    
