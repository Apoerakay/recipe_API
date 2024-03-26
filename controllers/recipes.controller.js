import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    // Add Recipe to the database

    const createResult = await RecipeModel.create({
      ...req.body,
      image: req.file.filename
    });
    //Return Response

    res.status(201).json(createResult);
  } catch (error) {
    // forward to express error handler
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
    const findRecipes = await RecipeModel.find(req.body);
    res.json(findRecipes);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  try {
    const id = req.params.id;
    const getSingleRecipe = await RecipeModel.findById(id);
    res.json(getSingleRecipe);
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = (req, res) => {
  res.send("Patch them all");
};

export const deleteRecipe = (req, res) => {
  res.send("burn it all");
};
