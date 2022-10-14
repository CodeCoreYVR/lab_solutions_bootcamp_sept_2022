arr = [[2,3,4], [5,6,7], [6,7,8]];

answer = arr.map { |arr2d| arr2d.map { |value| value * value } }

p answer




# [Lab] Square Array of Arrays

# Given an array of arrays:
# 1 | array = [[2,3,4], [5,6,7], [6,7,8]]

# Write a piece of code that will take that array and give back an array of arrays with 
# each element multiplied by itself so you will get back:
# 1 | [[4, 9, 16], [25, 36, 49], [36, 49, 64]]




