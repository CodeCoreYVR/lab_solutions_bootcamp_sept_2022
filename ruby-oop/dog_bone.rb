class Dog
  attr_accessor :type, :color

  def initialize(type, color)
    @type = type
    @color = color
    @bones = []
  end

  def give(bone)
    unless bone.is_a? Bone
      raise ArgumentError.new("Must be a bone")
    end
    if @bones.length >= 3
      puts "I have too many bones"
    else
      @bones.push(bone)
    end
    self
  end

  def eat_bone
    if @bones.empty?
      "I have no bones left"
    else
      bone_eaten = @bones.pop
      "yummy! I ate #{bone_eaten.size} bone"
    end
  end

  def bones_left
    "I have #{@bones.length} bones left"
  end
end

class Bone
  attr_accessor :size

  def initialize
    random_number = rand(0..2)
    bone_sizes = %w(large medium small)
    @size = bone_sizes[random_number]
  end
end

d = Dog.new("Golden Retriver", "Golden")
d.give(Bone.new)
  .give(Bone.new)
  .give(Bone.new)
  .give(Bone.new)
puts d.eat_bone
puts d.eat_bone
puts d.eat_bone
puts d.eat_bone
puts d.bones_left
