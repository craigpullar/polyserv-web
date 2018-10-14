export const objectIsEmpty = object => {
  if (!object) return true;
  return Object.keys(object).every(key => {
    return (
      (Array.isArray(object[key]) && object[key].length === 0) ||
      Object.keys(object[key]).length === 0
    );
  });
};
