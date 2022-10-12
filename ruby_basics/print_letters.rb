# [Lab] Print letters
# Write a code that prints letters in increasing number as follows:

# a
# b b
# c c c
# d d d d
# e e e e e
# ...etc

repeat = 1
for letter in "a".."z"
    puts letter * repeat
    repeat += 1
end

repeat = 1
for letter in "a".."z"
    #puts letter * repeat
    repeat.times{ print letter }
    puts ""
    repeat += 1
end