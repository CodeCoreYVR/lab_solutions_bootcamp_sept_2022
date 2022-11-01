FactoryBot.define do
  factory :news_article do
    sequence(:title) { |n| Faker::Movies::StarWars.character + " #{n}" }
    description { Faker::Hacker.say_something_smart }
    association(:user, factory: :user)
  end
end
