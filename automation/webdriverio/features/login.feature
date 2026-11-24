Feature: Login data-driven testing

  Background: 
    Given I am on the login page
  @smoke
  Scenario: Successful login
    When I login with "tomsmith" and "SuperSecretPassword!"
    Then I should see "You logged into a secure area!"

  @regression
  Scenario: Invalid username
    When I login with "invalid" and "wrong123"
    Then I should see "Your username is invalid!"

  @regression
  Scenario: Invalid password
    When I login with "tomsmith" and "wrong123"
    Then I should see "Your password is invalid!"