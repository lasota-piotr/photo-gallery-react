const timeout = ms => {
  let timeoutId;

  const promise = new Promise(resolve => {
    timeoutId = setTimeout(() => {
      resolve('timeout done');
    }, ms);
  });

  return {
    promise,
    cancel() {
      clearTimeout(timeoutId);
    },
  };
};

export default timeout;
