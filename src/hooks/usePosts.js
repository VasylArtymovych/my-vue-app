import axios from 'axios';
import { onMounted, ref } from 'vue';

export function usePosts(limit) {
  const posts = ref([]);
  const isLoading = ref(false);
  const page = ref(1);
  const totalPages = ref(0);

  const fetching = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: limit,
            _page: page.value,
          },
        }
      );
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit);
      posts.value = response.data;
    } catch (error) {
      alert(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    posts,
    isLoading,
    page,
    totalPages,
  };
}
