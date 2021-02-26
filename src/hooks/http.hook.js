import {useApp} from './app.hook';
import {httpClient} from '~/http-client';
import {setCities} from '~/redux/actions';

export const useHttp = () => {
  const {showLoading, hideLoading, dispatch} = useApp();

  const getCities = async () => {
    showLoading();
    try {
      const cities = await httpClient.fetchCities();
      dispatch(setCities(cities));
    } catch (err) {
      // TODO: we need to show some alert
      console.error('error => ', err);
    } finally {
      hideLoading();
    }
  };
  return {getCities};
};
