import { getAllPeriods, getAllPlaces, getAllClassifications, getAllGalleries, getObjects } from './apiCalls.js';

describe('apiCalls', () => {
  describe('getAllPeriods', () => {
    const mockResponse = [
      {record: [{name: 'mid-century'}, {name: 'modern'}, {name: 'Roman Empire'}]}
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getProjects with the correct URL', () => {
      const url = `https://api.harvardartmuseums.org/period?size=100&page=1&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`;

      getAllPeriods(1);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array of projects', () => {
      expect(getAllPeriods(1)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getAllPeriods()).rejects.toEqual(Error('Error fetching periods'));
    });

    test('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getAllPeriods()).rejects.toEqual(Error('fetch failed'));
    });
  });

  describe('getAllPlaces', () => {
    const mockResponse = [
      {record: [{name: 'mid-century'}, {name: 'modern'}, {name: 'Roman Empire'}]}
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getProjects with the correct URL', () => {
      const url = `https://api.harvardartmuseums.org/place?size=100&page=1&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`;

      getAllPlaces(1);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array of projects', () => {
      expect(getAllPlaces(1)).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getAllPlaces()).rejects.toEqual(Error('Error fetching places'));
    });

    test('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getAllPlaces()).rejects.toEqual(Error('fetch failed'));
    });
  });

  describe('getAllClassifications', () => {
    const mockResponse = [
      {record: [{name: 'mid-century'}, {name: 'modern'}, {name: 'Roman Empire'}]}
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getProjects with the correct URL', () => {
      const url = `https://api.harvardartmuseums.org/classification?size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`;

      getAllClassifications();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array of projects', () => {
      expect(getAllClassifications()).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getAllClassifications()).rejects.toEqual(Error('Error fetching classifications'));
    });

    test('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getAllClassifications()).rejects.toEqual(Error('fetch failed'));
    });
  });

  describe('getAllGalleries', () => {
    const mockResponse = [
      {record: [{name: 'mid-century'}, {name: 'modern'}, {name: 'Roman Empire'}]}
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getAllGalleries with the correct URL', () => {
      const url = `https://api.harvardartmuseums.org/gallery?size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`;

      getAllGalleries();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array of galleries', () => {
      expect(getAllGalleries()).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getAllGalleries()).rejects.toEqual(Error('Error fetching galleries'));
    });

    test('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getAllGalleries()).rejects.toEqual(Error('fetch failed'));
    });
  });

  describe('getObjects', () => {
    const mockResponse = [
      {record: [{name: 'mid-century'}, {name: 'modern'}, {name: 'Roman Empire'}]}
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      });
    });

    test('should call getObjects with the correct URL', () => {
      const url = `https://api.harvardartmuseums.org/object?classification=12345&size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`;

      getObjects('classification', 12345);

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should return an array of objects', () => {
      expect(getObjects()).resolves.toEqual(mockResponse);
    });

    test('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getObjects()).rejects.toEqual(Error('Error fetching objects'));
    });

    test('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      });

      expect(getObjects()).rejects.toEqual(Error('fetch failed'));
    });
  });
});
