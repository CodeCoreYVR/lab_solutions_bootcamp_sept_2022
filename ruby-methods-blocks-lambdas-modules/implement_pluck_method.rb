def pluck(hashes, value)
  result = []
  for hash in hashes
    result << hash[value]
  end
  p result
end

pluck([{ a: 1 }, { a: 2 }], :a)
pluck([{ b: 2 }, { a: 4, b: 4 }, { a: 1 }, { c: 4 }], :a)
pluck([{ b: 2 }, { a: 4, b: 4 }, { a: 1 }, { c: 4 }], :b)
