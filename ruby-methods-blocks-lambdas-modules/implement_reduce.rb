def reduce(arr, init)
  accumulator = init

  for value in arr
    accumulator = yield(accumulator, value)
  end

  accumulator
end

p reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21

p reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => " This is my sentence"

p reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) { |min, v|
  if min > v
    v
  else
    min
  end
}
# => 1
