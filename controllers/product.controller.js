import { createProductService, deleteProduct, findProduct, getallProductService, searchProduct, updateProduct } from "../service/index.js";


export const getAlldata = async (req, res, next) => {
  try {

      const {page, limit} = req.query
      console.log(page, limit);
      
    const result = await getallProductService(page, limit);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const createProductController = async (req, res, next) => {
  try {

    const result = await createProductService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const getByIdProduct = async (req, res, next) => {
  const {id} = req.params
  try {
    const result = await findProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const updateByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await updateProduct(req.body,id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const searchnameproduct = async (req, res, next) => {
  const {name} = req.query
// console.log(name);

  try {
    const result = await searchProduct(name);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await deleteProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


