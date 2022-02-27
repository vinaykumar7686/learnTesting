Feature: User Registration

  @simpleverify
  Scenario: Register a new user to portal
    Given Navigate to Homepage
    And Click on Login
    And Enter email as "gal2sjh@gmail.com"
    And Click on Submit Create
    And Click Submit Button
    Then Verify if the error message is displayed
    
  @multipleverify
  Scenario Outline: Register a new user to portal
    Given Navigate to Homepage
    And Click on Login
    And Enter email as "<email>"
    And Click on Submit Create
    And Select gender as "<gender>"
    And Enter "customer_first_name" as "<customer_first_name>"
    And Enter "customer_last_name" as "<customer_last_name>"
    And Enter "password" as "<password>"
    And Enter "day" as "<day>"
    And Enter "month" as "<month>"
    And Enter "year" as "<year>"
    And Enter "firstname" as "<firstname>"
    And Enter "lastname" as "<lastname>"
    And Enter "company" as "<company>"
    And Enter "address" as "<address>"
    And Enter "city" as "<city>"
    And Enter "state" as "<state>"
    And Enter "postcode" as "<postcode>"
    And Enter "country" as "<country>"
    And Enter "mobile" as "<mobile>"
    And Enter "alias" as "<alias>"
    And Click Submit Button
    Then Verify if the error message is displayed
    
    Examples:
    | email 					| gender | customer_first_name | customer_last_name | password | day | month 		| year | firstname | lastname | company | address 		| city 		| state | postcode | country | mobile 		| alias |
    | kihgt@gmail.com | male	 | Aryan							 |			  						| ggysb2n	| 1		| May				|	2000 | 					 | Sharma		| Sun			|	Earth				| Lucknow	| UP		|	22453		 | India	 | 						| US	  |
    | pndfe@gmail.com | female | Rajesh							 |	Raj								| ggyjb2n	| 12	| March			|	2004 | Rajesh		 | Raj			| Moon		|							| Delhi 	| Delhi	|					 | India	 | 8736473547 | UK	  |
    | blkks@gmail.com | male	 | Dinesh							 |	Trivedi						| igysb2n	| 18	| June			|	1999 | Dinesh		 | Trivedi	| Mars		|	Samsung			| 		   	| Nepal	|	21453		 | 				 | 9746473547 | 		  |
