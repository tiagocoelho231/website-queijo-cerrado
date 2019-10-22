import axios from '../lib/axios'

export default {
	state: { isLoading: false, data: [], error: null },
	reducers: {
		beforeFetch: () => ({ isLoading: true, data: [], error: null }),
		onSuccess: (state, data) => ({ ...state, isLoading: false, data }),
		onError: (state, error) => ({ ...state, isLoading: false, error })
	},
	effects: dispatch => ({
		fetch: async () => {
			dispatch.markers.beforeFetch();
			try {
				const { data } = await axios.get('/markers');
				dispatch.markers.onSuccess(data);
			} catch (error) {
				dispatch.markers.onError(error);
			}
		}
	})
}