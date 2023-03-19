export default {
  name: 'intersection',

  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        binding.value.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};

// it is triggerd when component has been mounted and is updated!!!

// export default (el, binding) => {
//   console.log(el, binding);

//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0,
//   };
//   const callback = function (entries, observer) {
//     if (entries[0].isIntersecting) {
//       console.log(binding.arg);
//       binding.value.loadMorePosts();
//     }
//   };
//   const observer = new IntersectionObserver(callback, options);
//   observer.observe(el);
// };
