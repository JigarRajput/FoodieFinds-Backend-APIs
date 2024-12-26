const express = require('express');
const { resolve } = require('path');
const {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantsByCuisine,
  getRestaurantsByFilter,
  getRestaurantsSortedByRating,
  getAllDishes,
  getDishById,
  getDishesByFilter,
  getDishesSortedByPrice,
} = require('./utils');

const app = express();
const port = 3010;

// Get all restaurants endpoint.
app.get('/restaurants', async (req, res) => {
  try {
    const results = await getAllRestaurants();
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ message: 'No restaurants found' });
  }
});

// Get restaurant by id endpoint.
app.get('/restaurants/details/:restaurantId', async (req, res) => {
  try {
    const restaurantId = parseInt(req.params.restaurantId);
    // check if the id passed is integer or not
    if (isNaN(restaurantId)) {
      return res.status(400).json({ message: 'Id must be integer' });
    }
    // getting restaurant by id
    const result = await getRestaurantById(restaurantId);
    // no restaurant case
    if (!result.restaurant || !Object.keys(result.restaurant).length) {
      return res.json({
        message: `No restaurant found with id ${restaurantId}`,
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get restaurants by cuisine endpoint.
app.get('/restaurants/cuisine/:cuisineName', async (req, res) => {
  try {
    const cuisine = req.params.cuisineName;
    const result = await getRestaurantsByCuisine(cuisine);
    // handle empty result array
    if (result.restaurants.length === 0) {
      return res.status(404).json({
        message: `No restaurants found with cuisine ${cuisine}`,
      });
    } else {
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get restaurants by filter endpoint.
app.get('/restaurants/filter', async (req, res) => {
  try {
    const isVeg = req.query.isVeg;
    const hasOutdoorSeating = req.query.hasOutdoorSeating;
    const isLuxury = req.query.isLuxury;

    const result = await getRestaurantsByFilter({
      isVeg,
      isLuxury,
      hasOutdoorSeating,
    });

    if (result.restaurants.length === 0) {
      return res
        .status(404)
        .json({ message: 'No restaurants found for given filter' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get all the restaurants sorted by pricing from highest to lowest.
app.get('/restaurants/sort-by-rating', async (req, res) => {
  try {
    const result = await getRestaurantsSortedByRating();
    if (result.restaurants.length === 0) {
      return res.status(404).json({ message: 'No restaurants found!' });
    } else {
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get all the dishes.
app.get('/dishes', async (req, res) => {
  try {
    const result = await getAllDishes();
    if (result.dishes.length === 0) {
      return res.status(404).json({ message: 'No dishes found!' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get dish by id.
app.get('/dishes/details/:dishId', async (req, res) => {
  try {
    const dishId = parseInt(req.params.dishId);
    if (isNaN(dishId)) {
      return res.status(400).json({ message: 'Id must be an integer' });
    }
    const result = await getDishById(dishId);

    if (!result || !Object.keys(result.dish).length) {
      return res.status(404).json({ message: 'No dish found with id' });
    } else {
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get restaurants by filter endpoint
app.get('/dishes/filter', async (req, res) => {
  try {
    const isVeg = req.query.isVeg;

    const result = await getDishesByFilter(isVeg);

    if (result.dishes.length === 0) {
      return res
        .status(404)
        .json({ message: 'No dishes found for given filter' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get dishes sorted by price, from lowest to highest.
app.get('/dishes/sort-by-price', async (req, res) => {
  try {
    const result = await getDishesSortedByPrice();
    if (result.dishes.length === 0) {
      return res.status(404).json({ message: 'No dishes found!' });
    } else {
      return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
