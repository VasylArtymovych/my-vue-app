import axios from 'axios';

export const postModule = {
  namespaced: true,
  state: () => ({
    posts: [],
    isLoading: false,
    limit: 10,
    page: 1,
    totalPages: 0,
    selectedSortOption: '',
    searchQuery: '',
    sortOptions: [
      { value: 'title', name: 'sort by title' },
      { value: 'body', name: 'sort by text' },
    ],
  }),

  getters: {
    sortedPosts(state) {
      return state.selectedSortOption !== ''
        ? [...state.posts].sort((p1, p2) =>
            p1[state.selectedSortOption].localeCompare(
              p2[state.selectedSortOption]
            )
          )
        : state.posts;
    },

    seachedAndSortedPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      console.log(posts);
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSelectedSortOption(state, selectedSortOption) {
      state.selectedSortOption = selectedSortOption;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  actions: {
    async fetchPosts(context) {
      try {
        context.commit('setLoading', true);

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _limit: context.state.limit,
              _page: context.state.page,
            },
          }
        );

        context.commit(
          'setTotalPages',
          Math.ceil(response.headers['x-total-count'] / context.state.limit)
        );

        context.commit('setPosts', response.data);
      } catch (error) {
        alert(error);
      } finally {
        context.commit('setLoading', false);
      }
    },
  },
};
