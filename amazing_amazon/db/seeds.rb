Review.destroy_all
Product.destroy_all

50.times do
    created_at = Faker::Date.backward(days:365 * 5)
    p = Product.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        price: rand(1000),
        created_at: created_at,
        updated_at: created_at
    )

    if p.valid?
        rand(1..5).times do 
            Review.create(rating:3,body:Faker::Company.name,product:p)
        end
    end
end

reviews = Review.all
products = Product.all
puts reviews.count
puts products.count