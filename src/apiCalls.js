export const getAllPeriods = async (page) => {
  let res = await fetch(`https://api.harvardartmuseums.org/period?size=100&page=${page}&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let periods = await res.json();
  if (res.ok) {
    return periods;
  } else {
    throw new Error(periods);
  }
}

export const getAllPlaces = async (page) => {
  let res = await fetch(`https://api.harvardartmuseums.org/place?size=100&page=${page}&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let places = await res.json();
  if (res.ok) {
    return places;
  } else {
    throw new Error(places);
  }
}

export const getAllClassifications = async () => {
  let res = await fetch(`https://api.harvardartmuseums.org/classification?size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let classifications = await res.json();
  if (res.ok) {
    return classifications;
  } else {
    throw new Error(classifications);
  }
}

export const getAllGalleries = async () => {
  let res = await fetch(`https://api.harvardartmuseums.org/gallery?size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let gallery = await res.json();
  if (res.ok) {
    return gallery;
  } else {
    throw new Error(gallery);
  }
}

export const getObjects = async (period, periodId) => {
  let res = await fetch(`https://api.harvardartmuseums.org/object?${period}=${periodId}&size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let objects = await res.json();
  if (res.ok) {
    return objects;
  } else {
    throw new Error(objects);
  }
}
