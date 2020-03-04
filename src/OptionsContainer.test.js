import { render, fireEvent } from '@testing-library/svelte';
import OptionsContainer from './OptionsContainer.svelte';

describe('OptionsContainer', () => {

  it('should match the snapshot', () => {
    const wrapper = render(OptionsContainer);

    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default search of '' ", () => {
    const { getByTestId } = render(OptionsContainer);
    const input = getByTestId('search-input');
    expect(input.value).toEqual('');
  });

  it("should update the value of the input on change", () => {
    const { getByTestId } = render(OptionsContainer);
    const input = getByTestId('search-input');

    fireEvent.change(input, {target: {value: 'Modern'}});
    expect(input.value).toEqual('Modern');
  });

  it("should display the error if no matches when enter is clicked on input", async () => {
    const { getByTestId } = render(OptionsContainer);
    const input = getByTestId('search-input');
    const error = getByTestId('search-error');

    expect(error.hidden).toEqual(true);
    await fireEvent.change(input, {target: {value: 'asdas'}});
    await fireEvent.keyDown(input, {key: 'Enter', code: 13});
    expect(error.hidden).toEqual(false);
  });

  it("should display the error if no matches when search button is clicked", async () => {
    const { getByTestId } = render(OptionsContainer);
    const input = getByTestId('search-input');
    const searchButton = getByTestId('search-button');
    const error = getByTestId('search-error');

    expect(error.hidden).toEqual(true);
    await fireEvent.change(input, {target: {value: 'asdas'}});
    await fireEvent.click(searchButton);
    expect(error.hidden).toEqual(false);
  });

  it("should invoke searchOptions on reset button click", async () => {
    const { getByTestId } = render(OptionsContainer);
    const input = getByTestId('search-input');
    const resetButton = getByTestId('reset-button');
    const error = getByTestId('search-error');

    await fireEvent.change(input, {target: {value: 'asdas'}});
    expect(input.value).toEqual('asdas');
    await fireEvent.click(resetButton);
    expect(error.hidden).toEqual(false);
  });
});
