// Jai Ganesh
const getDb = require('./database/dbConnection.js');

// Get all restaurants in database
const getAllRestaurants = async () => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM  restaurants';
    const result = await db.all(query);
    return { restaurants: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error('Unable to get restaurants');
  }
};

// Get all restaurant by id
const getRestaurantById = async (restaurantId) => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM  restaurants WHERE id = ?';
    const result = await db.get(query, [restaurantId]);

    return { restaurant: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error(`Unable to get restaurant with id ${restaurantId}`);
  }
};

// Get restaurants by cuisine
const getRestaurantsByCuisine = async (cuisine) => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM restaurants WHERE LOWER(cuisine) = ?';

    const result = await db.all(query, [cuisine.toLowerCase()]);
    return { restaurants: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error(`Unable to get restaurant for cuisine ${cuisine}`);
  }
};

// Get restaurants by filter
const getRestaurantsByFilter = async ({
  isVeg,
  hasOutdoorSeating,
  isLuxury,
}) => {
  try {
    const db = await getDb();
    const query =
      'SELECT * FROM restaurants WHERE isVeg = ? AND hasOutdoorSeating = ? AND isLuxury = ?';

    const result = await db.all(query, [isVeg, hasOutdoorSeating, isLuxury]);

    return { restaurants: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error('Unable to find restaurants for given filter');
  }
};

// Get restaurants sorted by rating
const getRestaurantsSortedByRating = async () => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM restaurants ORDER BY rating DESC';

    const result = await db.all(query);
    return { restaurants: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error('Unable to get restaurants sorted by rating');
  }
};

// get all dishes
const getAllDishes = async () => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM dishes';
    const result = await db.all(query);
    return { dishes: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error('Unable to get dishes');
  }
};

// get dish by id
const getDishById = async (dishId) => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM dishes WHERE id = ?';
    const result = await db.get(query, [dishId]);
    return { dish: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error(`Unable to get dish with id ${dishId}`);
  }
};

// Get dishes by filter
const getDishesByFilter = async (isVeg) => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM dishes WHERE isVeg = ?';

    const result = await db.all(query, [isVeg]);

    return { dishes: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error('Unable to find dishes for given filter');
  }
};

const getDishesSortedByPrice = async () => {
  try {
    const db = await getDb();
    const query = 'SELECT * FROM dishes ORDER BY price';
    const result = await db.all(query);
    return { dishes: result };
  } catch (error) {
    console.error({ error: error.message });
    throw new Error('Unable to get dishes sorted by price');
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  getRestaurantsByCuisine,
  getRestaurantsByFilter,
  getRestaurantsSortedByRating,
  getAllDishes,
  getDishById,
  getDishesByFilter,
  getDishesSortedByPrice,
};
