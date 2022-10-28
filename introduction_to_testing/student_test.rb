require "minitest/autorun"
require "./student.rb"

class StudentTest < MiniTest::Test
  attr_accessor :student

  def setup
    @student = Student.new("Hermione", "Granger", 100)
  end

  def test_full_name
    assert_equal("Hermione Granger", student.full_name)
  end

  def test_grade
    assert_equal("A", student.grade)
  end

  def test_initialize_raises_error_when_args_are_not_between_0_and_100
    assert_raises ArgumentError do
      student = Student.new("Gregory", "Goyle", -10)
    end
  end
end
