import {useApp} from './app.hook';
import {httpClient} from '~/utils';

export const useHttp = () => {
  const {showLoading, hideLoading} = useApp();

  const getCities = async () => {
    try {
      showLoading();
      const cities = await httpClient.fetchCities();
      console.log('cities -> ', cities);
    } catch (err) {
      console.log('catch', err);
    } finally {
      hideLoading();
    }
  };

  return {getCities};
};
