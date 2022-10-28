class Circle
  attr_accessor :radius

  def initialize(radius)
    if radius < 0
      raise ArgumentError.new("Negative arguments not allowed.")
    end
    @radius = radius
  end

  def diameter
    radius * 2
  end

  def area
    Math::PI * radius ** 2
  end

  def perimeter
    2 * Math::PI * radius
  end
end
