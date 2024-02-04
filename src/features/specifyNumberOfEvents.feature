Feature: Specify number of events
  Scenario: 32 events are shown by default.
    Given the main page is open
    When user hasn't specified a number
    Then there should be 32 events listed on screen
  Scenario: User can change the number of events desplayed
    Given the main page is open
    When the user has specified a number
    Then there should be the user specified amount of events on screen