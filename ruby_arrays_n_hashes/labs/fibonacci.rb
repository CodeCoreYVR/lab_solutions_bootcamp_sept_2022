def fib
  puts 'Enter a number'
  n = gets.to_i
  seq = [0,1]

  while seq.length < n
    seq << seq[-2] + seq[-1]
  end
  p seq
end

fib


# [Exercise] Fibonacci

# Given a number N from the user. Generate an array that contains the first N numbers of the fibonacci seq.

# note: In mathematics, the Fibonacci numbers or Fibonacci series or Fibonacci seq are the numbers in the 
# following integer seq:

# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

# The seq starts with 1 and then every number is the sum of the two previous numbers.