import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('32 events are shown by default.', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    given('the main page is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });
    when('user hasn\'t specified a number', () => {
    });
    then('there should be 32 events listed on screen', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventList = within(EventListDOM).queryAllByRole('listitem');
        expect(EventList.length).toBe(32);
      })
    });
  });
  test('User can change the number of events desplayed', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    given('the main page is open', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });
    when('the user has specified a number', async () => {
      const user = userEvent.setup();
      const EventNumberDOM = AppDOM.querySelector('#number-of-events');
      const EventTextBox = within(EventNumberDOM).queryByRole('textbox');
      await user.type(EventTextBox, '{backspace}{backspace}10');
    });

    then('there should be the user specified amount of events on screen', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventList = within(EventListDOM).queryAllByRole('listitem');
        expect(EventList.length).toBe(10);
      })
    });
  });
});