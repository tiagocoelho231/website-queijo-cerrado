import axios from '../lib/axios'

export default {
  state: { isLoading: false, data: [], error: null },
  reducers: {
    beforeFetch: () => ({ isLoading: true, data: [], error: null }),
    onSuccess: (state, data) => ({ ...state, data, isLoading: false }),
    onError: (state, error) => ({ ...state, isLoading: false, error })
  },
  effects: dispatch => ({
    fetch: async () => {
      dispatch.pages.beforeFetch();
      try {
        const [{ data: categories }, { data: pages }] = await Promise.all([axios.get('/categories'), axios.get('/pages')]);
        console.log('categories', categories)
        console.log('pages', pages)
        let data = pages.reduce((obj, page) => {
          if (obj[page.category])
            return { ...obj, [page.category]: [...obj[page.category], page] };
          return { ...obj, [page.category]: [page] };
        }, {});
        data = Object.entries(data).reduce((array, [k, v]) => {
          const category = categories.find(category => category._id === k);
          return [...array, { ...category, subMenu: v }];
        }, []);
        dispatch.pages.onSuccess(data);
      } catch (error) {
        dispatch.pages.onError(error);
      }
    }
  }),
}