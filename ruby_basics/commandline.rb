# [Lab] Command line
# Build a command line quiz where it prompts the user with a three questions like:

# How many sides does a hexagon have?
# 1- five
# 2- six
# 3- seven

# Enter the correct number:

# The user can then enter the correct number of the question.

# At the end it will display:

# You scored 66%, you got 2 out of 3 questions correctly.

puts "How many sides does a hexagon have?"
puts "1=>five"
puts "2=>six"
puts "3=>seven"
answer_1 = gets.chomp
puts "What is 88 + 12"
puts "1=>100"
puts "2=>90"
puts "3=>110"
answer_2 = gets.chomp
puts "What r we learning today ?"
puts "1=> JS"
puts "2=>Python"
puts "3=>Ruby"
answer_3 = gets.chomp
correct_answers = 0
if answer_1 == "six" || answer_1 == "2"
  correct_answers += 1
end
if answer_2 == "100" || answer_2 == "1"
  correct_answers +=1
end
if answer_3 == "ruby" || answer_3 == "3"
  correct_answers +=1
end
total = 3
puts "You scored #{(correct_answers.to_f / total.to_f) * 100}%, you got #{correct_answers} out of 3 questions correctly"