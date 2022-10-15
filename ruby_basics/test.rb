def map(arr)
    output = []
    for val in arr
        output << yield(val)
    end    
    p output
end

map([2,4,5]) {|x| x*2 }