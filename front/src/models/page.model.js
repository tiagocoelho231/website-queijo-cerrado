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
    fetch: async (id, state) => {
      dispatch.page.beforeFetch();
      try {
        const { data } = await axios.get(`/pages/${id}`);
        dispatch.page.onSuccess(data);
      } catch (error) {
        dispatch.page.onError(error);
      }
    }
  }),
}