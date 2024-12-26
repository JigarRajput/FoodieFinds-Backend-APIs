# A food discovery app - 'FoodieFinds' 

## Introduction
> This system will allow users to search for restaurants and dishes based on various filters and sorting options.

> This document outlines the API endpoints and features of the "FoodieFinds" project.

***

## API Endpoints

1. Get All Restaurants.

    - Endpoint: `/restaurants`
    - Method: `GET` <br/>
    - Description: Fetch all restaurants from the database.

2. Get Restaurant by ID

    - Endpoint: `/restaurants/details/{restaurantId}`
    - Method: `GET` <br/>
    - Path Parameter: `restaurantId` (type: `integer`)
    - Description: Fetch a specific restaurant by its ID.

3. Get Restaurants by Cuisine

   - Endpoint: `/restaurants/cuisine/{cuisineName}`
   - Method: `GET`
   - Path Parameter: `cuisineName` (type: `string`)
   - Description: Fetch restaurants based on their cuisine.

4. Get Restaurants by Filter

    - Endpoint: `/restaurants/filter`
    - Method:  `GET`
    - Query Parameters: `isVeg`, `hasOutdoorSeating`, `isLuxury` (type: `true` or `false`)
    - Description: Fetch restaurants based on filters such as veg/non-veg, outdoor seating, luxury, etc.   

5. Get Restaurants Sorted by Rating

    - Endpoint: `/restaurants/sort-by-rating`
    - Method: `GET`
    - Query Parameter: `none`
    - Description: Fetch restaurants sorted by their rating (highest to lowest).

6. Get All Dishes

    - Endpoint: `/dishes`
    - Method: `GET`
    - Query Parameter: `none`
    - Description: Fetch all dishes from the database.

7. Get Dish by ID

    - Endpoint: `/dishes/details/{dishId}`
    - Method: `GET`
    - Path Parameter: `dishId` (type: `integer`)
    - Description: Fetch a specific dish by its ID.

8. Get Dishes by Filter

    - Endpoint: `/dishes/filter`
    - Method:  `GET`
    - Query Parameters: `isVeg` (type: `true` or `false`)
    - Description: Fetch dishes based on filters such as veg/non-veg.

9. Get Dishes Sorted by Price
    - Endpoint: `/dishes/sort-by-price`
    - Method: `GET`
    - Query Paramaters: `none`
    - Description:  Fetch dishes sorted by their price (lowest to highest).
    
---

If you want to try it live, here is the url: [`https://trip-with-us-backend-apis.vercel.app/hotels`](https://trip-with-us-backend-apis.vercel.app/hotels)
---
Made with ❤️ by Jigar 
    

