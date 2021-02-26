import {useDispatch} from 'react-redux';
import {setLoading} from '~/redux/actions';
export const useApp = () => {
  const dispatch = useDispatch();

  const showLoading = () => dispatch(setLoading(true));
  const hideLoading = () => dispatch(setLoading(false));

  return {dispatch, showLoading, hideLoading};
};
