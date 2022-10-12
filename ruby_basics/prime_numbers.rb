# [Lab] Prime numbers
# Ask the user for a number x and then print the first x prime numbers.

#  Prime numbers are divisible only by 1 and themselves.

puts "How many prime numbers do you want to print!"
choosen_number = gets.to_i 
puts "___________________"

prime_list = []
number = 2
count = 0

while true

    isPrime = true
    prime_list.each do |item|
        if number % item == 0
            isPrime = false 
            break
        end
    end
    
    if isPrime
        prime_list.push(number)
        count += 1
    end

    break if count == choosen_number
    number += 1

end

prime_list.each do |num|
    puts num
end