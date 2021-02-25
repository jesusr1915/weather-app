export const fetchCities = async () => {
  await delay();
  return {
    status: '01',
    message: 'succes',
    data: [
      {
        name: 'México',
        lat: '30303',
        lon: '3343',
        time: 30,
      },
      {
        name: 'México',
        lat: '30303',
        lon: '3343',
        time: 30,
      },
      {
        name: 'México',
        lat: '30303',
        lon: '3343',
        time: 30,
      },
    ],
  };
};

const delay = (time = 4000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, time);
  });
};
