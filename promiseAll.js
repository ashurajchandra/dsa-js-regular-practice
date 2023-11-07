function promiseAll(arr) {
  return new Promise((resolve, reject) => {
    const result = new Array(arr.length);
    let unresolvedPromise = arr.length;

    if (unresolvedPromise === 0) {
      resolve(arr);
      return;
    }

    arr.forEach(async (item, index) => {
      try {
        const value = await item;
        result[index] = value;
        unresolvedPromise -= 1;

        if (unresolvedPromise === 0) {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

console.log(
  promiseAll([20, 30, 5]).then((result) => console.log("result", result))
);
