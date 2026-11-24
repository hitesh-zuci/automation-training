Feature: Dynamic Controls

  Background:
    Given I am on the dynamic controls page

  Scenario: Remove and add checkbox
    When I remove the checkbox
    Then the checkbox should disappear

    When I add the checkbox
    Then the checkbox should appear

  Scenario: Enable and disable input
    When I enable the input
    Then the input should be enabled

    When I disable the input
    Then the input should be disabled