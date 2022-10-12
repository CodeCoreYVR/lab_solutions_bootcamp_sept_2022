# [Lab] Permutations
# Ask the user for for three inputs and then print out all the possible permutations for the user inputs. For instance if the users inputs `a`, `b` and `c` you should print out:

# a a a
# a a b
# a a c
# a b a
# a b b
# ....etc



# [STRETCH] Complete the exercise without making use of arrays permutation method.

# [STRETCH] Complete the exercise without making use of arrays.

  
puts "please give me a letter"
first = gets.chomp

puts "please give me another letter"
second = gets.chomp

puts "please give me one last letter"
third = gets.chomp

array = [first, second, third]
output = array.repeated_permutation(3).to_a
for each in output
    print each.join + "\n"
end

# Stretch

puts "Please enter first character"
char1 = gets.chomp 
puts "Please enter second character"
char2 = gets.chomp 
puts "Please enter third character"
char3 = gets.chomp

arr = [char1, char2, char3] # ['a', 'b', 'c']

for i in arr 
    for j in arr 
        for k in arr 
            puts "#{i} #{j} #{k}"         
        end
    end
end
