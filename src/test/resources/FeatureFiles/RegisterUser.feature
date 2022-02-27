Feature: User Registration

  @simple
  Scenario: Register a new user to portal
    Given Navigate to Homepage
    And Click on Login
    And Enter email as "ddffgh@gmail.com"
    And Click on Submit Create
    And Select gender as "male"
    And Enter "customer_first_name" as "Rajesh"
    And Enter "customer_last_name" as "Kumar"
    And Enter "password" as "qwertyui"
    And Enter "day" as "1"
    And Enter "month" as "January"
    And Enter "year" as "2022"
    And Enter "firstname" as "Rakesh"
    And Enter "lastname" as "Bhai"
    And Enter "company" as "Innovaccer"
    And Enter "address" as "Earth"
    And Enter "city" as "Lucknow"
    And Enter "state" as "UP"
    And Enter "postcode" as "22602"
    And Enter "country" as "India"
    And Enter "mobile" as "1037586846"
    And Enter "alias" as "Somewhere"
    And Click Submit Button
    Then Validate User as "Rajesh" "Kumar"
    
  @multiple
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
    Then Validate User as "<customer_first_name>" "<customer_last_name>"
    
    Examples:
    | email 					| gender | customer_first_name | customer_last_name | password | day | month 		| year | firstname | lastname | company | address 		| city 		| state | postcode | country | mobile 		| alias |
    | d4dfx@gmail.com	| male	 | Aryan							 |	Sharma						| ggysb2ns | 1	 | May			|	2000 | Aryan		 | Sharma		| Sun			|	Earth				| Lucknow	| UP		|	22453		 | India	 | 8746473547 | US	  |
    | b7dfekgmail.com	| female | Rajesh							 |	Raj								| ggyjb2nd | 12	 | March		|	2004 | Rajesh		 | Raj			| Moon		|	Galaxy			| Delhi 	| Delhi	|	22483		 | India	 | 8736473547 | UK	  |
    | b7dfj@gmail.com	| male	 | Dinesh							 |	Trivedi						| igysb2ns | 18	 | June			|	1999 | Dinesh		 | Trivedi	| Mars		|	Samsung			| Goa   	| Nepal	|	21453		 | India	 | 9746473547 | IN	  |
