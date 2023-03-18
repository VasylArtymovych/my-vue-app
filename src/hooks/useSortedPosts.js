import { computed, ref } from 'vue';

export function useSortedPosts(posts) {
  const selectedSort = ref('');

  const sortedPosts = computed(() => {
    return selectedSort.value !== ''
      ? [...posts.value].sort((p1, p2) =>
          p1[selectedSort.value].localeCompare(p2[selectedSort.value])
        )
      : posts.value;
  });

  return {
    selectedSort,
    sortedPosts,
  };
}
