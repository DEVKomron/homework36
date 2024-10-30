import { createMarketModel, findMarketById, updateMarketById, deleteMarketById } from "../model/index.js";
import { updateProductById } from "../model/product.model.js";

export const createMarketService = async (market) => {
  try {
    const result = await createMarketModel(market);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findMarketService = async (id) => {
  try {
    const result = await findMarketById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateMarketService = async (product, id) => {
  try {
    const oldProduct = await updateMarketById(id);

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



export const deleteMarketService = async (id) => {
  try {
    const product = await deleteMarketById(id);

    if(product.length ===0){
      return {
        error:true,
        message:"Market not found"
      }
    }

    await deleteProductById()
  } catch (error) {
    throw new Error(error.message);
  }
};
