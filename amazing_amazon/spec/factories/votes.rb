FactoryBot.define do
  factory :vote do
    is_up { false }
    user { nil }
    review { nil }
  end
end
