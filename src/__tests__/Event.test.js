// src/__tests__/Event.test.js

import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Event from '../components/Event';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;
  let detailsButton;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
    detailsButton = EventComponent.queryByRole('button');
  })

  test('renders event.summary as title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });
  test('renders event.created as start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });
  test('renders event.location as location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });
  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });
  test('by default, event details section should be hidden', () => {
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
  });
  test('show details when user clicks on "show details" button', async () => {
    const user = userEvent.setup();
    await user.click(detailsButton);
    expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
  });
  test('changes show details button to hide details on click', async () => {
    const user = userEvent.setup();
    await user.click(detailsButton);
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
  });
  test('hides details when user clicks on "hide details" button', async () => {
    const user = userEvent.setup();
    await user.click(detailsButton);
    await user.click(detailsButton);
    expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
  });
})

describe('<EventList /> integration', () => {
  test('renders a list of 32 events when the app is mounted and rendered', async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(32);
    });
  });
})