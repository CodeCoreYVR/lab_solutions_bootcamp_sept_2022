greeting = 'hello'
# -------------------- more efficient --------------------
def reverse str
  reply = ''
  index = str.length - 1
  while index >= 0 do
      reply += str[index]
      index -= 1
  end
  reply
end
# -------------------- less efficient --------------------
# def reverse str
#   reply = []
#   str.split('').map { |l| reply.unshift(l) }
#   reply.join('')
# end
# --------------------------------------------------------
p reverse greeting




# [Lab] Reverse engineer String's `reverse` method
# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:

# 1 | greeting = "hello"
# 2 | puts greeting.reverse # olleh

# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class.





