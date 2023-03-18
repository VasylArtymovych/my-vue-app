import { computed, ref } from 'vue';

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('');

  const lowerCase = (val) => val.toLowerCase();

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      lowerCase(post.title).includes(lowerCase(searchQuery.value))
    );
  });

  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
