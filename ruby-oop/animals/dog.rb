require_relative "./animal.rb"

class Dog < Animal
  def eat
    super
    puts "bones are yummy!"
  end

  def bark
    puts "woof!"
  end
end

winston = Dog.new("winston", "gold")
winston.eat
winston.bark
