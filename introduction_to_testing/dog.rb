class Dog
  attr_accessor :bones

  def initialize
    @bones = []
  end

  def give_bone(size)
    @bones << size if @bones.length < 3
    @bones.length
  end

  def eat_bone
    if bones.length > 0
      bones.pop
    else
      "I don't have any bones. :("
    end
  end

  def bone_count
    bones.count
  end
end
