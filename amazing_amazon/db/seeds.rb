

NUM_OF_PRODUCTS = 50
NUM_OF_REVIEWS = 2
PASSWORD = 'supersecret'
NUM_OF_USERS = 5
NUM_OF_TAGS = 10

Review.destroy_all
Product.destroy_all
User.destroy_all
Tagging.delete_all
Tag.delete_all

super_user = User.create(
  first_name: 'jon',
  last_name: 'snow',
  email: 'js@winterfell.gov',
  password: PASSWORD,
  is_admin: true
)

NUM_OF_USERS.times do |x|
  u = User.create({
    first_name: Faker::Games::SuperSmashBros.fighter,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD
  })
end

users = User.all


NUM_OF_TAGS.times do 
  Tag.create( name: Faker::Science.scientist )
end

tags = Tag.all


NUM_OF_PRODUCTS.times do
    created_at = Faker::Date.backward(days:365 * 5)
    p = Product.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        price: rand(1000),
        user: users.sample,
        created_at: created_at,
        updated_at: created_at
    )

    
    if p.valid?
        p.tags = tags.shuffle.slice(0, rand(1..tags.count))
        rand(1..NUM_OF_REVIEWS).times do 
          Review.create(
              rating:3,
              body:Faker::Company.name,
              product:p,
              user: users.sample
          )
        end
    end
end

reviews = Review.all
products = Product.all
puts "#{users.count} users created"
puts "#{reviews.count} reviews created"
puts "#{products.count} products created"
puts "#{tags.count} tags created"
puts "#{Tagging.all.count} product-tag relationships"
