puts "Enter Information as asked:"
puts "First Name?"
first_name = gets
puts "Last Name?"
last_name = gets
puts "City of Birth?"
city_of_birth = gets
puts "Your Age?"
age = gets.chomp

users = {
    "first_name" => first_name,
    "last_name" => last_name,
    "city_of_birth" => city_of_birth,
    "age" => age
}

puts "\n\nUser Information:"
users.each do |key, value|
    key.class === 'string' ? (puts "Your #{key.split('_').join(' ')} is #{value.capitalize()}") : (puts "Your #{key} is #{value}")
end



# [Lab] Hash of Information

# Ask the user for personal information: first name, last name, city of birth and age. Then store 
# that information in a hash. After that loop through the hash and display the results, for example:
# Your first name is Tam.
# Your last name is K.
# Your city of birth is Burnaby.
# Your age is 25.

# Capitalize the inputs from the user if they are capitalizable.