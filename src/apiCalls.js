export const getAllPeriods = async (page) => {
  let res = await fetch(`https://api.harvardartmuseums.org/period?size=100&page=${page}&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let periods = await res.json();
  if (res.ok) {
    return periods;
  } else {
    throw new Error(periods);
  }
}

export const getObjectsByPeriod = async (periodId) => {
  let res = await fetch(`https://api.harvardartmuseums.org/object?period=${periodId}&size=100&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let objects = await res.json();
  if (res.ok) {
    return objects;
  } else {
    throw new Error(objects);
  }
}
