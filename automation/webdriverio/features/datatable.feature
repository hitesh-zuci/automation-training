Feature: Multiple user data

  Scenario: Read multiple users
    When I read these users:
      | username | password |
      | tomsmith | pass123  |
      | admin    | admin123 |
      | guest    | guest123 |