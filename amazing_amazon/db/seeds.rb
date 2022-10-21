
40.times do
    created_at = Faker::Date.backward(days:365 * 5)
    Product.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        price: rand(1000),
        created_at: created_at,
        updated_at: created_at
    )
end