import { render, fireEvent } from '@testing-library/svelte';
import IsLoading from './IsLoading.svelte';

describe('App', () => {
  it('should match the snapshot without colors or image passed as props', () => {
    const wrapper = render(IsLoading);

    expect(wrapper).toMatchSnapshot();
  });
});
