
repeat = 1
for letter in "a".."z"
    #puts letter * repeat
    repeat.times{ print letter }
    puts ""
    repeat += 1
end