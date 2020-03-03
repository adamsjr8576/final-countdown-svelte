import { render, fireEvent } from '@testing-library/svelte';
import CategorySelector from './CategorySelector.svelte';
import { getAllPeriods, getAllPlaces, getAllClassifications, getAllGalleries } from './apiCalls.js';

jest.mock('./apiCalls.js');

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = render(CategorySelector);

    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getAllPeriods within getPeriods on button click', async () => {
    const { getByText, getByTestId } = render(CategorySelector);
    getAllPeriods.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}],
          info: {pages: 0}
        }
      );
    });
    const article = getByTestId('period-article');
    await fireEvent.click(article)
    expect(getAllPeriods).toHaveBeenCalledWith(1);
  });

  it('should invoke getAllPeriods within getPeriods on button click', async () => {
    const { getByText, getByTestId } = render(CategorySelector);
    getAllPeriods.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}],
          info: {pages: 3}
        }
      );
    });
    const article = getByTestId('period-article');
    await fireEvent.click(article)
    expect(getAllPeriods).toHaveBeenCalledTimes(4);
  });

  it('should invoke getAllPlaces within getPlaces on button click', async () => {
    const { getByText, getByTestId } = render(CategorySelector);
    getAllPlaces.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}],
          info: {pages: 0}
        }
      );
    });
    const article = getByTestId('place-article');
    await fireEvent.click(article)
    expect(getAllPeriods).toHaveBeenCalledWith(1);
  });

  it('should invoke getAllPlaces within getPlaces on button click', async () => {
    const { getByText, getByTestId } = render(CategorySelector);
    getAllPlaces.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}],
          info: {pages: 3}
        }
      );
    });
    const article = getByTestId('place-article');
    await fireEvent.click(article)
    expect(getAllPeriods).toHaveBeenCalledTimes(4);
  });

  it('should invoke getAllClassifications within getClassifications on button click', async () => {
    const { getByText, getByTestId } = render(CategorySelector);
    getAllClassifications.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}] }
      );
    });
    const article = getByTestId('classification-article');
    await fireEvent.click(article)
    expect(getAllClassifications).toHaveBeenCalledTimes(1);
  });
  it('should invoke getAllGalleries within getGalleries on button click', async () => {
    const { getByText, getByTestId } = render(CategorySelector);
    getAllGalleries.mockImplementation(() => {
      return Promise.resolve(
        { records: [{name: 'Modern'}] }
      );
    });
    const article = getByTestId('gallery-article');
    await fireEvent.click(article)
    expect(getAllGalleries).toHaveBeenCalledTimes(1);
  });

});
