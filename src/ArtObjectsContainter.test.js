import { render, fireEvent } from '@testing-library/svelte';
import ArtObjectsContainer from './ArtObjectsContainer.svelte';
import { artObjects } from './stores.js';

describe('App', () => {
  it('should match the snapshot without colors or image passed as props', () => {
    const wrapper = render(ArtObjectsContainer);

    expect(wrapper).toMatchSnapshot();
  });
});
