import { render, fireEvent } from '@testing-library/svelte';
import ArtObject from './ArtObject.svelte';

describe('App', () => {
  it('should match the snapshot without colors or image passed as props', () => {
    const wrapper = render(ArtObject, {
      description: 'A woman with a creepy smile',
      period: 'Romantic Period',
      title: 'The Mona Lisa',
      century: '17th CE',
      medium: 'Paint on Canvas'
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with colors or image passed as props', () => {
    const wrapper = render(ArtObject, {
      description: 'A woman with a creepy smile',
      colors: ['#93453', '#34523'],
      period: 'Romantic Period',
      image: 'monalisa.jpg',
      title: 'The Mona Lisa',
      century: '17th CE',
      medium: 'Paint on Canvas'
    });

    expect(wrapper).toMatchSnapshot();
  });

});
