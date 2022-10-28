require "minitest/autorun"
require "./dog.rb"

class DogTest < MiniTest::Test
  attr_accessor :dog

  def setup
    @dog = Dog.new
    dog.give_bone("small")
  end

  def test_give_bone
    assert_equal(2, dog.give_bone("large"))
  end

  def test_eat_bone
    length = dog.bone_count
    assert_equal("small", dog.eat_bone)
    assert_equal(dog.bone_count, length - 1)
  end

  def test_bone_count
    assert_equal(1, dog.bone_count)
  end
end
