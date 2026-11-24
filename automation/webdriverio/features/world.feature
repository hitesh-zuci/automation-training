Feature: Scenario Context

  Scenario: Share data between steps
    Given I store a username
    When I retrieve the stored username
    Then the username should be "testuser"