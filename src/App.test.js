import { render, fireEvent } from '@testing-library/svelte';
import App from './App.svelte';

describe('App', () => {
  it('testing', () => {
    const wrapper = render(App);

    expect(wrapper).toMatchSnapshot();
  });
});
