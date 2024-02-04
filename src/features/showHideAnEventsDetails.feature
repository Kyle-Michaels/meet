Feature: Show/Hide an events details
  Scenario: An event element is collapsed by default.
    Given user hasn’t clicked show details
    When the main page is open
    Then all event details elements should be closed
  Scenario: User can expand an event to see details.
    Given the main page is loaded
    When user clicks show details on an event
    Then details for selected event should be shown
  Scenario: User can collapse an event to hide details.
    Given user has clicked show details on an event
    When user clicks hide details
    Then details for selected element should be hidden