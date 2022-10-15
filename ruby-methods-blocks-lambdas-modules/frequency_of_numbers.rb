def frequency_of_numbers(arr)
  arr.each_with_object(Hash.new(0)) { |key, hash| hash[key] += 1 }
end

array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
array1 = [1, 2, 6, 6, 6, 6, 6, 6, 3, 4, 4, 4, 2, 3, 3, 3]
p frequency_of_numbers(array)
p frequency_of_numbers(array1)
