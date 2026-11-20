Feature: Browser navigation

  Scenario: Navigate to Checkboxes and return to home page
    Given I am on the home page
    When I click the Checkboxes link
    Then I should be on the Checkboxes page
    When I navigate back
    Then I should return to home page