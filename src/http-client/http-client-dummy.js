import * as dummyResponses from './dummy-responses';

export const fetchCities = async () => {
  await delay();
  return dummyResponses.getCitiesResponse.data;
};

const delay = (time = 4000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, time);
  });
};
