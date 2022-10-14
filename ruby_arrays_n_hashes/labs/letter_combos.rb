# [Lab] Letter combos
# Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent so your code will generate:
# 1 | ["ab", "bc", "cd"]
# Given a string 123456: 1| ["12", "23", "34", "45", "56"]


str = "river"
arr = []

str.each_char.with_index do |char, index|
    if index == str.length - 1
        break
    else 
        arr << char + str[index+1]
    end
end

p arr



