import { createProductModel, findProductById, getallProductModel, searchProductByname, updateProductById } from "../model/product.model.js";


export const getallProductService = async (page, limit) => {
  try {
    const result = await getallProductModel(page, limit);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const createProductService = async (product) => {
  try {
    const result = await createProductModel(product);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const findProduct = async (id) => {
  try {
    const result = await findProductById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const searchProduct = async (name) => {
  try {
    const result = await searchProductByname(name);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (product, id) => {
  try {
    const oldProduct = await findProductById(id);

    const newProduct = {
      ...oldProduct[0],
      ...product,
    };

    const result = await updateProductById(newProduct, id);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const deleteProduct = async (id) => {
  try {
    const product = await findProductById(id);

    if(product.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }

    await deleteProductById()
  } catch (error) {
    throw new Error(error.message);
  }
};
