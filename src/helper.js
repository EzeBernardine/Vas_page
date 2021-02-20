export const getStoryFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  let storyItems = null;

  try {
    const parsedJSON = JSON.parse(value);
    if (Array.isArray(parsedJSON)) {
      storyItems = parsedJSON;
    }
  } catch (error) {
    storyItems = [];
  }
  return storyItems;
};

export const saveStoryToLocalStorage = (key, data) => {
  const oldData = JSON.parse(localStorage.getItem(key)) || [];
  oldData.push(data);
  localStorage.setItem(key, JSON.stringify(oldData));
};
