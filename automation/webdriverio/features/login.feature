Feature: Login data-driven testing

  @smoke
  Scenario: Successful login
    Given I am on the login page
    When I login with "tomsmith" and "SuperSecretPassword!"
    Then I should see "You logged into a secure area!"

  @regression
  Scenario: Invalid username
    Given I am on the login page
    When I login with "invalid" and "wrong123"
    Then I should see "Your username is invalid!"

  @regression
  Scenario: Invalid password
    Given I am on the login page
    When I login with "tomsmith" and "wrong123"
    Then I should see "Your password is invalid!"