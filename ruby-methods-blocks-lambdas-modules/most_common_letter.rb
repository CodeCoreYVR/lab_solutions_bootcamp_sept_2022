def most_common_letter(string)
  obj = {}
  filtered_string = string.downcase.gsub(/[^0-9A-Za-z]/, "")
  filtered_string.each_char do |letter|
    if obj[letter] == nil
      obj[letter] = 1
    else
      obj[letter] += 1
    end
  end
  puts obj
  max = filtered_string[0]
  obj.each_key do |value|
    if obj[value] > obj[max]
      max = value
    end
  end
  puts max
end

most_common_letter("aaaaaaA aasd345sadg8FFFFFFF5fF678fnvn!!!!!!!!33333!!!!@!!zz34asdfzzzzjdf")
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"
most_common_letter("aaaabbc") # => "a"
