class Fizzbuzz
  attr_accessor :num1, :num2

  def initialize(num1, num2)
    @num1 = num1
    @num2 = num2
  end

  def run
    fizzbuzz = []
    for num in 1..100
      str = ""
      str += "fizz" if num % @num1 == 0
      str += "buzz" if num % @num2 == 0
      str += num.to_s if str.length == 0
      fizzbuzz << str
    end
    fizzbuzz
  end
end

fb = Fizzbuzz.new(3, 5)
p fb.run
fb.num1 = 4
fb.num2 = 5
p fb.run
