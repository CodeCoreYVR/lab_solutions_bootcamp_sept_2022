a = ["a","b",5,1,2,3,4,5,6,7,8,9,10,"a"]

# ------------------------------ with hashes -------------------------------
p a.group_by{|e| e}.select{|k,v| v.length > 1}.map(&:first)
# ----------------------------- without hashes -----------------------------
# repeat = []
# a.map.with_index { |v,i| a[i+1..-1].each { |val| v == val ? (repeat << v) && break : nil} }
# p repeat
# -------------------------- visual purposes only --------------------------
puts "Uniq values: #{a.uniq}" 
puts "Repeated values and their index: "
a.select.with_index{|v,i| if a.count(v) > 1 then puts("value: \"#{v}\" at index: \"#{i}\"")end}
# ------------------------------------------------------------------------




# [Lab] Find The Repeated Number

# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. 
# How can you determine which one? Can you think of a way to do it using little extra memory?

# Solve it in two ways: one using hashes and one without.




