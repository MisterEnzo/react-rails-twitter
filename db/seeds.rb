# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating new users.."

User.create!(email: "enz@enz.com", first_name: "enz", password: 123456)

3.times do |user|
  User.create!(email: "#{user}@example.com", first_name: "User #{user}", password: 123456)
end

puts "Finished creating users."

puts "Creating new tweets.."
5.times do |tweet|
  Tweet.create!(user_id: 1, body: "#{'Hello! ' * tweet}")
  Tweet.create!(user_id: 2, body: "#{'Hello! ' * tweet}")
  Tweet.create!(user_id: 3, body: "#{'Hello! ' * tweet}")
end
puts "Finished creating sample tweets."
