import axios from '../lib/axios'

export default {
  state: { isLoading: false, success: false, error: null },
  reducers: {
    updateState: (state, payload) => ({ ...state, ...payload })
  },
  effects: dispatch => ({
    sendMessage: async (payload, state) => {
      dispatch.messages.updateState({ isLoading: true });
      try {
        await axios.post('/messages', payload);
        dispatch.messages.updateState({ isLoading: false, success: true });
      } catch (error) {
        dispatch.messages.updateState({ isLoading: false, error });
      }
    }
  }),
}