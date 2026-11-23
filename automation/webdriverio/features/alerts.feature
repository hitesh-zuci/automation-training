Feature: Alerts

  Scenario: Confirming Alerts
    Given I am on the alerts page
    When I click the jsconfirm link
    Then I should get alert text and i should cancel it
    Then I should get cancel message