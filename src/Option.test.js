import { render, fireEvent } from '@testing-library/svelte';
import Option from './Option.svelte';
import { getObjects } from './apiCalls.js';

jest.mock('./apiCalls.js');

describe('Option', () => {
  it('should match the snapshot', () => {
    const wrapper = render(Option, {
      name: '17th CE',
      id: 12312
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getObjects within handleClick on button click', async () => {
    const { getByText, getByTestId } = render(Option, {
      name: '17th CE',
      id: 12312
    });
    getObjects.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}] }
      );
    });
    const par = getByTestId('option-p');
    await fireEvent.click(par)
    expect(getObjects).toHaveBeenCalledWith('', 12312);
  });
});
