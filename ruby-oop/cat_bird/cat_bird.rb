require_relative "./module_helper_method"
class Animals
    attr_accessor :name
    def initialize(name)
      @name = name
    end
end

class Cats < Animals
    def catch_bird(bird)
        rand_num = random_number()
        if rand_num > 4
            puts "#{@name} catched #{bird.name}"
        else
            puts "#{@name} didn't catch #{bird.name}" 
        end
    end
    private
    include HelperMethod
end

class Birds < Animals
    
end

for value in 1..100 do
    cat = Cats.new("cat#{value}")
    cat.catch_bird(Birds.new("bird#{value}"))
end