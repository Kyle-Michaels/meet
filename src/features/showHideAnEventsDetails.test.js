import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('user hasn’t clicked show details', () => {
      AppComponent = render(<App />);
    });
    let AppDOM;
    when('the main page is open', async () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventList = within(EventListDOM).queryAllByRole('listitem');
        expect(EventList.length).toBe(32);
      })
    });
    then('all event details elements should be closed', () => {
      const EventDetails = AppDOM.querySelector('.details');
      expect(EventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    given('the main page is loaded', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventList = within(EventListDOM).queryAllByRole('listitem');
        expect(EventList.length).toBe(32);
      })
    });
    when('user clicks show details on an event', async () => {
      const user = userEvent.setup();
      const EventListDOM = AppDOM.querySelector('#event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      const DetailsButton = EventListItems[0].querySelector('.details-btn');

      await user.click(DetailsButton);
    });
    then('details for selected event should be shown', () => {
      const EventDetails = AppDOM.querySelector('.details');
      expect(EventDetails).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    given('user has clicked show details on an event', async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventList = within(EventListDOM).queryAllByRole('listitem');
        expect(EventList.length).toBe(32);
      })
    });

    when('user clicks hide details', async () => {
      const user = userEvent.setup();
      const EventListDOM = AppDOM.querySelector('#event-list');
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      const DetailsButton = EventListItems[0].querySelector('.details-btn');

      await waitFor(() => {
        user.click(DetailsButton);
        user.click(DetailsButton);
      })
    });

    then('details for selected element should be hidden', () => {
      const EventDetails = AppDOM.querySelector('.details');
      expect(EventDetails).not.toBeInTheDocument();
    });
  });
});