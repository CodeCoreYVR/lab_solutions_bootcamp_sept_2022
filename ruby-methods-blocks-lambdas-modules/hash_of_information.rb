def get_user_info
  hash = {}
  puts "Enter your first name:"
  hash[:first_name] = gets.chomp
  puts "Enter your last name:"
  hash[:last_name] = gets.chomp
  puts "Enter your city of birth:"
  hash[:city_of_birth] = gets.chomp
  puts "Enter your age:"
  hash[:age] = gets.chomp.to_i
  return hash
end

p get_user_info
