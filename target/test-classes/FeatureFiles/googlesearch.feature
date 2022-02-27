Feature: Perform Google search and grab search suggestions

  @simple
  Scenario: Performing google search and printing suggestions
    Given Navigate to Google
    When Search bar is clicked
    And "Hello" is typed in searchbar
    Then Get Suggestions
    When Click on search button
    Then Validating if the results are for "Hello"
    
  @multiple
  Scenario Outline: Performing google search and printing suggestions
    Given Navigate to Google
    When Search bar is clicked
    And "<Text>" is typed in searchbar
    Then Get Suggestions
    When Click on search button
    Then Validating if the results are for "<Text>"
    
  Examples:
  	| Text    | 
  	| Hello   |
  	| Amazing |
  	| Macbook	|
  	| Apple		|
  
    