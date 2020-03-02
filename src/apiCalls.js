export const getAllPeriods = async (page) => {
  let res = await fetch(`https://api.harvardartmuseums.org/period?size=100&page=${page}&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  let periods = await res.json();
  if (res.ok) {
    return periods;
  } else {
    throw new Error(periods);
  }
}

  //
  // if (res.ok) {
  //   categoryOptions.update(store => [...store, ...periods.records]);
  //   if (periods.info.pages > 1) {
  //     for (var i = 2; i <= periods.info.pages; i ++) {
  //       let res = await fetch(`https://api.harvardartmuseums.org/period?size=100&page=${i}&apikey=c7ad4d00-5bf5-11ea-80aa-f5d9d18048cb`);
  //       let periods = await res.json();
  //       if (res.ok) {
  //           categoryOptions.update(store => [...store, ...periods.records]);
  //         } else {
  //           throw new Error(text);
  //       }
  //     }
  //   }
  // } else {
  //   throw new Error(periods);
