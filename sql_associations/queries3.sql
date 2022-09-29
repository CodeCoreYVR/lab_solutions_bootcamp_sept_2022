-- To run lab ender:
    -- $ psql -d sql_lab -f queries3.sql

-- [Lab] Queries 3

-- Write the following SQL Queries:
-- 1.    Select all the products that have been purchased in the last 24 months.

SELECT products.id, products.name, orders.completed_on
FROM products
LEFT JOIN line_items ON products.id = line_items.product_id
LEFT JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on >= '2018-01-01' AND orders.completed_on < '2021-02-01'
ORDER BY orders.completed_on;


-- 2.    Select the top 10 products in terms of last year's gross sales.

SELECT products.id, products.name, SUM(line_items.price * line_items.quantity) AS gross_sales
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on >= '2017-01-01' AND orders.completed_on < '2019-01-01'
GROUP BY products.id
ORDER BY gross_sales DESC
LIMIT 10;


-- 3.    Select all the products that weren't purchased during the last 24 months.

SELECT products.id, products.name, orders.completed_on
FROM products
LEFT JOIN line_items ON products.id = line_items.product_id
LEFT JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on NOT BETWEEN '2018-02-01' AND '2020-02-01'
ORDER BY orders.completed_on DESC;




-- [Note] the price in the line_items table is price per unit and not total price.
