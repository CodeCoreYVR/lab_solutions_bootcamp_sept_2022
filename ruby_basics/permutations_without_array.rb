puts "Enter the 1st character:"
char_set = gets.chomp
puts "Enter the 2nd character:"
char_set << gets.chomp
puts "Enter the 3rd character:"
char_set << gets.chomp

# puts char_set

str = ''
for i in 0..2
    str[0] = char_set[i]
    for j in 0..2
        str[1] = char_set[j]
        for k in 0..2
            str[2] = char_set[k]
            puts str
        end
    end
end