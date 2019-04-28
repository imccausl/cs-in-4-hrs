function bubbleSort(array) {
  let index = 0;

  do {
    for (let i = 0; i < array.length; i += 1) {
      const currItem = array[i],
        prevItem = array[i - 1];

      if (currItem < prevItem) {
        array[i] = prevItem;
        array[i - 1] = currItem;
      }
    }

    index += 1;
  } while (index < array.length);
}

module.exports = bubbleSort;
