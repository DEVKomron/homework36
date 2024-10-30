import { createMarketService, findMarketService, updateMarketService, deleteMarketService} from "../service/index.js";

export const createMarketController = async (req, res, next) => {
  try {

    const result = await createMarketService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const findMarketController = async (req, res, next) => {
  try {

    const resultid = findMarketService(req.body.id);
    if (resultid.error) {
      return res.status(409).send(resultid.message);
    }



    res.send(resultid);

    
  } catch (error) {

      next(error)

  }
  
};

export const updateMarketController = async (req, res, next) => {
  try {

    const result = updateMarketService(req.body);
    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);

    
  } catch (error) {

      next(error)

  }
  
};


export const deleteMarketController = async (req, res, next) => {
  try {

    const result = deleteMarketService(req.body.id);
    if (result.error) {
      return res.status(409).send(result.message);
    }



    res.send(result);

    
  } catch (error) {

      next(error)

  }
  
};