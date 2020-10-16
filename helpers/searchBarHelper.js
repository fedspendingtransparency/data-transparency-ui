export const resetOrSubmitSearch = (value, searchTerm, minChars) => {
  if (value && searchTerm === value) {
      return false;
  }
  else if (searchTerm && value.length < minChars) {
      return false
  }
  return true;
};

export const shouldResetSearchTerm = (e, searchTerm) => {
  if (searchTerm && !e.target.value) {
      // auto-reset the search when all input is deleted
      return true
  }
  return false;
};
