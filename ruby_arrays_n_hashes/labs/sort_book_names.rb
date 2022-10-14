# [Lab] Sort Book Names

# Write some code that keeps asking the user for book names until the 
# user enters "exit". After typing "exit" the program should display 
# all the entered book names sorted and have the book names capitalized.


user_input = ''
books = []

while user_input != "Exit" do
  puts "Please endter a book name or type \"exit\" to end"
  user_input = gets.chomp.downcase.split(" ").map { |word| word.capitalize }.join(' ')
  user_input != 'Exit' ? books << user_input : (p books.sort)
end




