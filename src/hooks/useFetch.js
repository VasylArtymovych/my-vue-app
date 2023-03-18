import { ref } from 'vue';
import axios from 'axios';

export function useFetch(url, limit = 10, options) {
  const response = ref({});
  const page = ref(1);
  const isLoading = ref(false);
  const error = ref({});

  const request = async () => {
    try {
      isLoading.value = true;
      response.value = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: limit,
            _page: page.value,
          },
        }
      );
    } catch (error) {
      error.value = error;
      alert(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { response, page, isLoading, error, request };
}
