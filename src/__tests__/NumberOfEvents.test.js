// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  let NOEInput;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
    NOEInput = NumberOfEventsComponent.queryByRole('textbox');
  });

  test('renders textbox', () => {
    expect(NOEInput).toBeInTheDocument();
  });
  test('verify that default value is 32', () => {
    expect(NOEInput).toHaveValue('32');
  });
  test('verify that value changes based on user input', async () => {
    const user = userEvent.setup();
    NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
    await user.type(NOEInput, '{backspace}{backspace}10');
    expect(NOEInput).toHaveValue('10');
  });
});