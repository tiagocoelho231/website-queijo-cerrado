import axios from '../lib/axios'

export default {
  state: { isLoading: false, data: null, error: null },
  reducers: {
    clear: () => ({ isLoading: false, data: null, error: null }),
    beforeFetch: () => ({ isLoading: true, data: null, error: null }),
    onSuccess: (state, data) => ({ ...state, data, isLoading: false }),
    onError: (state, error) => ({ ...state, isLoading: false, error })
  },
  effects: dispatch => ({
    fetch: async (url) => {
      dispatch.article.beforeFetch();
      try {
        const { data } = await axios.get(`/articles/${url}`);
        dispatch.article.onSuccess(data);
      } catch (error) {
        dispatch.article.onError(error);
      }
    }
  }),
}