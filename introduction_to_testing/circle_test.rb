require "minitest/autorun"
require "./circle.rb"

class CircleTest < MiniTest::Test
  def test_diameter
    assert_equal(6, Circle.new(3).diameter)
  end

  def test_area
    assert_in_delta(Circle.new(2).area, 12.57, 0.01)
  end

  def test_perimeter
    assert_in_delta(Circle.new(4).perimeter, 25.13, 0.01)
  end

  def test_initialize_raises_error_when_args_are_negative
    assert_raises ArgumentError do
      circle = Circle.new(-1)
    end
  end
end
