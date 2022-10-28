class Student
  attr_accessor :first_name, :last_name, :score

  def initialize(first_name, last_name, score)
    if score < 0 || score > 100
      raise ArgumentError.new("Score must be between 0 and 100.")
    end
    @first_name = first_name
    @last_name = last_name
    @score = score
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def grade
    if score > 90
      "A"
    elsif score > 80
      "B"
    elsif score > 70
      "C"
    elsif score > 60
      "D"
    else
      "F"
    end
  end
end
