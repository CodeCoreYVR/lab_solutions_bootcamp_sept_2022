# array = (1..15).to_a.shuffle
# 2 |
# 3 | # Your sorting code here
# 4 |
# 5 | print array # array must sorted here: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



array = (1..15).to_a.shuffle
sorted = []
# --------------------- ternary operator ----------------------
array.map { |value|
  sorted.length == 0 ? sorted << value :
    sorted.map.with_index { |v,i|
      value < v ? (sorted[i,0] = value) && break : 
        (sorted[-1] == v) && (value > v) ? sorted << value : nil
    }
}
# -------------------------- if else --------------------------
# array.map { |value| 
#   if sorted.length == 0
#     sorted << value
#   else
#     sorted.map.with_index { |v,i|
#       if value < v
#         sorted[i,0] = value
#         break
#       else
#         if (sorted[-1] == v) && (value > v)
#           sorted << value
#         end
#       end
#     }
#   end
# }
# -------------------------------------------------------------
p sorted





