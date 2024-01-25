<h1>Meet app</h1>
<hr />
<h2>Objective<h2>
<p>
  To build a serverless, progressive web application (PWA) with React using a
  test-driven development (TDD) technique. The application uses the Google
  Calendar API to fetch upcoming events.
</p>
<hr />
<h2>User Stories</h2>
<h3>Feature 1: Filter Events By City<h3>
<p>
  As a user,
  I should be able to filter events by city
  So that I can see a list of events taking place in that city
</p>
<h3>Feature 2: Show/Hide Event Details</h3>
<p>
  As a user,
  I should be able to show/hide event details
  So I can see more information about events I'm interested in.
</p>
<h3>Feature 3: Specify Number of Events</h3>
<p>
  As a user,
  I should be able to see the total number of events
  So I can see how many events are taking place at a given time.
</p>
<h3>Feature 4: Use the App When Offline</h3>
<p>
  As a user,
  I should be able to use the app when not connected to the internet
  So I can see events that I saw when last I was connected to the internet.
</p>
<h3>Feature 5: Add an App Shortcut to the Home Screen</h3>
<p>
  As a user,
  I should be able to add an app shortcut to my home screen
  So I can easily and quickly open the app when I want to.
</p>
<h3>Feature 6: Display Charts Visualizing Event Details</h3>
<p>
  As a user,
  I should be able to see charts visualizing event details
  So I can better see which events are happening and where they are taking place.
</p>
<hr />
<h2>Given-When-Then Scenarios</h2>
<h3>Feature 1: Filter Events by City</h3>
<p>
  Scenario: When user hasn't searched for a specific city, show upcoming events from all cities.
  Given: User hasn't searched for any city
  When: User opens the app
  Then: User should see a list of upcoming events
</p>
<p>
  Scenario: User should see a list of suggestions when they search for a city.
  Given: Main page is open
  When: User starts typing in the city textbox
  Then User should receive a list of cities (suggestions) that match what they've typed
</p>
  Scenario: User can select a city from the suggested list.
  Given: User was typing "Berlin" in the city textbox AND the list of suggested cities is showing
  When: User selects a city(e.g., "Berlin, Germany") from the list
  Then: Their city should be changed to that city(i.e., "Berlin, Germany") AND the user should receive a list of upcoming events in the city
</p>
<h3>Feature 2: Show/Hide Event Details</h3>
<p>
  Scenario: User can expand an event to see its details
  Given: the list of events has been loaded
  When: User clicks on "Show details"
  Then: The event elements will be expanded to show the event details
</p>
<p>
  Scenario: An event element is collapsed by default
  Given: the list of events has been loaded
  When: User does not click "Show details" on any events
  Then: All event elemnts are collapsed by default.
</p>
<p>
  Scenario: User can collapse an event to hide details
  Given: Event details have been expanded
  When: User clicks on "Hide details"
  Then: Event element should collapse and hide event details
</p>
<h3>Feature 3: Specify Number of Events</h3>
<p>
  Scenario: When user hasn't specified a number, 32 events are shown by default
  Given: User hasnt specified a number and all events have loaded
  When: User accesses landing page for meet app
  Then: User should see 32 events on page by default
</p>
<p>
  Scenario: User can change the number of events desplayed
  Given: All events loaded on page
  When: User changes number of events to be desplayed per page
  Then: User should see specified number of events selected to show per page
</p>
<h3>Feature 4: Use the App When Offline</h3>
<p>
  Scenario: Show chached data when there's no internet conneciton.
  Given: User is not connected to the internet and has previously viewed events when connected to internet.
  When: User opens app when offline
  Then: User should see events viewed previously when online
</p>
<p>
  Scenario: Show error when user changes search settings (city, number of events)
  Given: User has not previously viewed these events with these changes and is offline
  When: User is offline and changes search settings
  Then: User should see an error 
</p>
<h3>Feature 5: Add an App Shortcut to the Home Screen</h3>
<p>
  Scenario: User can install the meet app as a shortcut on their device home screen.
  Given: User has downloaded meet app.
  When: User adds meet app to home screen
  Then: App shortcut should be added to user's home screen
</p>
<h3>Feature 6: Display Charts Visualizing Event Details</h3>
<p>
  Scenario: Show a chart with the number of upcoming events in each city
  Given: User is connected to the internet and all events are loaded
  When: User selects display charts of event details
  Then: User should see charts showing the number of upcoming events in each city.
</p>
<h3>How Meet will use Serverless Functions</h3>
<p>
  The Meet app will use serverless functions for authentication, authorization, and to present data from the Google Calender API.
  Serverless functions will be used through AWS Lambda and will be able to scale with user demands.
</p>
