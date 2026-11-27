Feature: Drag and drop
Background: 
Given I am on the dragndrop page

    Scenario: drag and drop and object over another
    When I drag A over B 
    Then the boxes should be swapped