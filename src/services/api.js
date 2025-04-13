export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

export const fetchCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
};

export const fetchByCategory = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.json();
};
