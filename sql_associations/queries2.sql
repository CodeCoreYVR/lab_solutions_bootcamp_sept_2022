-- To run lab ender:
    -- $ psql -d sql_lab -f queries2.sql

-- [Lab] Queries 2

-- Write the following SQL Queries:

-- 1.    Calculate how many items in stock we've ever had for each product 
--       (remaining or sold) in the database.


SELECT products.id, products.name, (SUM(line_items.quantity) + products.remaining_quantity) AS total_quantity
FROM line_items
INNER JOIN products ON line_items.product_id = products.id
GROUP BY products.id
ORDER BY total_quantity DESC;

-- 2.    Find the average order total price for all the orders in the system


SELECT AVG(total_price) as average_total_price
FROM (
    SELECT order_id, SUM(quantity * price) as total_price
    FROM line_items
    GROUP BY order_id
) AS average;


-- [Note] the price in the line_items table is price per unit and not total price.
-- Stretch Find the average order total price for all the orders in the system 
-- with only one query. (without nested query) 
