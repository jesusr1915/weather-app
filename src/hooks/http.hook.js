import {useApp} from './app.hook';
import {httpClient} from '~/utils';
import {setCities} from '~/redux/actions';

export const useHttp = () => {
  const {showLoading, hideLoading, dispatch} = useApp();

  const getCities = async () => {
    showLoading();
    try {
      const cities = await httpClient.fetchCities();
      dispatch(setCities(cities));
    } catch (err) {
      console.error('catch', err);
    } finally {
      hideLoading();
    }
  };

  return {getCities};
};
