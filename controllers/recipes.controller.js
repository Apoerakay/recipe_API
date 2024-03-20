import { RecipeModel } from "../models/recipe.js";


export const addRecipe = async (req, res) => {
   // Add Recipe to the database
    const createResult = await RecipeModel.create(req.body);
    //Return Response
    res.json(createResult);
  }

  export const getRecipes = (req, res) => {
    res.send("GET");
  }
  
  export const getRecipe =  (req, res) => {
    res.send("get.com");
  }

  export const updateRecipe = (req, res) => {
    res.send("Patch them all");
  }

  export const deleteRecipe = (req, res) => {
    res.send("burn it all");
  }
  