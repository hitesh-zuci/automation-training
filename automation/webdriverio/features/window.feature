Feature: Windows 

  Scenario: Navigating through multiple browser windows
    Given I am on the window page
    When I click the ch link
    Then I should be on the new window
    When I switch back
    Then I should return to window page