
export const saveLike = () => {
  localStorage.setItem('like', 'true');
};

export const removeLike = () => {
  localStorage.removeItem('like');
};