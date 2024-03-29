export const removeDuplicates = (array) => {
    return array.filter((obj, index, self) =>
      index === self.findIndex(t => JSON.stringify(t) === JSON.stringify(obj))
    );
  }