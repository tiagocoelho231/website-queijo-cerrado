import axios from '../lib/axios'

export default {
  state: { isLoading: false, success: false, error: null },
  reducers: {
    beforeSend: () => ({ isLoading: true, success: false, error: null }),
    onSuccess: state => ({ ...state, isLoading: false, success: true }),
    onError: (state, error) => ({ ...state, isLoading: false, error })
  },
  effects: dispatch => ({
    sendMessage: async data => {
      dispatch.messages.beforeSend();
      try {
        await axios.post('/messages', data);
        dispatch.messages.onSuccess();
      } catch (error) {
        dispatch.messages.onError(error);
      }
    }
  }),
}