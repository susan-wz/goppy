# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  Player.create(username: "susan", password: "123123", points: 10, player_type: "user")

  Gametype.create(
    name: "Gops", 
    description: "Goofspiel, also known as The Game of Pure Strategy or GOPS, is a card game for two or more players.", 
    tutorial: "Goofspiel is played using cards from a standard deck of cards, and is typically a two-player game, although more players are possible. Each suit is ranked A (low), 2, ..., 10, J, Q, K (high).", 
    min_players: 2, 
    max_players: 4
  )

  Card.create(name: "Ace of Hearts", suit: "Hearts", value: 1, img_url: "")
  Card.create(name: "Two of Hearts", suit: "Hearts", value: 2, img_url: "")
  Card.create(name: "Three of Hearts", suit: "Hearts", value: 3, img_url: "")
  Card.create(name: "Four of Hearts", suit: "Hearts", value: 4, img_url: "")
  Card.create(name: "Five of Hearts", suit: "Hearts", value: 5, img_url: "")
  Card.create(name: "Six of Hearts", suit: "Hearts", value: 6, img_url: "")
  Card.create(name: "Seven of Hearts", suit: "Hearts", value: 7, img_url: "")
  Card.create(name: "Eight of Hearts", suit: "Hearts", value: 8, img_url: "")
  Card.create(name: "Nine of Hearts", suit: "Hearts", value: 9, img_url: "")
  Card.create(name: "Ten of Hearts", suit: "Hearts", value: 10, img_url: "")
  Card.create(name: "Jack of Hearts", suit: "Hearts", value: 11, img_url: "")
  Card.create(name: "Queen of Hearts", suit: "Hearts", value: 12, img_url: "")
  Card.create(name: "King of Hearts", suit: "Hearts", value: 13, img_url: "")
  Card.create(name: "Ace of Clubs", suit: "Clubs", value: 1, img_url: "")
  Card.create(name: "Two of Clubs", suit: "Clubs", value: 2, img_url: "")
  Card.create(name: "Three of Clubs", suit: "Clubs", value: 3, img_url: "")
  Card.create(name: "Four of Clubs", suit: "Clubs", value: 4, img_url: "")
  Card.create(name: "Five of Clubs", suit: "Clubs", value: 5, img_url: "")
  Card.create(name: "Six of Clubs", suit: "Clubs", value: 6, img_url: "")
  Card.create(name: "Seven of Clubs", suit: "Clubs", value: 7, img_url: "")
  Card.create(name: "Eight of Clubs", suit: "Clubs", value: 8, img_url: "")
  Card.create(name: "Nine of Clubs", suit: "Clubs", value: 9, img_url: "")
  Card.create(name: "Ten of Clubs", suit: "Clubs", value: 10, img_url: "")
  Card.create(name: "Jack of Clubs", suit: "Clubs", value: 11, img_url: "")
  Card.create(name: "Queen of Clubs", suit: "Clubs", value: 12, img_url: "")
  Card.create(name: "King of Clubs", suit: "Clubs", value: 13, img_url: "")
  Card.create(name: "Ace of Spades", suit: "Spades", value: 1, img_url: "")
  Card.create(name: "Two of Spades", suit: "Spades", value: 2, img_url: "")
  Card.create(name: "Three of Spades", suit: "Spades", value: 3, img_url: "")
  Card.create(name: "Four of Spades", suit: "Spades", value: 4, img_url: "")
  Card.create(name: "Five of Spades", suit: "Spades", value: 5, img_url: "")
  Card.create(name: "Six of Spades", suit: "Spades", value: 6, img_url: "")
  Card.create(name: "Seven of Spades", suit: "Spades", value: 7, img_url: "")
  Card.create(name: "Eight of Spades", suit: "Spades", value: 8, img_url: "")
  Card.create(name: "Nine of Spades", suit: "Spades", value: 9, img_url: "")
  Card.create(name: "Ten of Spades", suit: "Spades", value: 10, img_url: "")
  Card.create(name: "Jack of Spades", suit: "Spades", value: 11, img_url: "")
  Card.create(name: "Queen of Spades", suit: "Spades", value: 12, img_url: "")
  Card.create(name: "King of Spades", suit: "Spades", value: 13, img_url: "")
  Card.create(name: "Ace of Diamonds", suit: "Diamonds", value: 1, img_url: "")
  Card.create(name: "Two of Diamonds", suit: "Diamonds", value: 2, img_url: "")
  Card.create(name: "Three of Diamonds", suit: "Diamonds", value: 3, img_url: "")
  Card.create(name: "Four of Diamonds", suit: "Diamonds", value: 4, img_url: "")
  Card.create(name: "Five of Diamonds", suit: "Diamonds", value: 5, img_url: "")
  Card.create(name: "Six of Diamonds", suit: "Diamonds", value: 6, img_url: "")
  Card.create(name: "Seven of Diamonds", suit: "Diamonds", value: 7, img_url: "")
  Card.create(name: "Eight of Diamonds", suit: "Diamonds", value: 8, img_url: "")
  Card.create(name: "Nine of Diamonds", suit: "Diamonds", value: 9, img_url: "")
  Card.create(name: "Ten of Diamonds", suit: "Diamonds", value: 10, img_url: "")
  Card.create(name: "Jack of Diamonds", suit: "Diamonds", value: 11, img_url: "")
  Card.create(name: "Queen of Diamonds", suit: "Diamonds", value: 12, img_url: "")
  Card.create(name: "King of Diamonds", suit: "Diamonds", value: 13, img_url: "")

end
