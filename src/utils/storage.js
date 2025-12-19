const KEY = "blogs";
export const getBlogs = () =>
  JSON.parse(localStorage.getItem(KEY)) || [];

export const saveBlogs = (blogs) =>
  localStorage.setItem(KEY, JSON.stringify(blogs));
