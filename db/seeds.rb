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

  Card.create(name: "Ace of Hearts", suit: "Hearts", value: 1, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528913/Cards/AH_pda68c.jpg")
  Card.create(name: "Two of Hearts", suit: "Hearts", value: 2, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/2H_bckgez.jpg")
  Card.create(name: "Three of Hearts", suit: "Hearts", value: 3, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/3H_qmsqog.jpg")
  Card.create(name: "Four of Hearts", suit: "Hearts", value: 4, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/4H_sgy3kj.jpg")
  Card.create(name: "Five of Hearts", suit: "Hearts", value: 5, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/5H_l0nkrt.jpg")
  Card.create(name: "Six of Hearts", suit: "Hearts", value: 6, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/6H_dng0kn.jpg")
  Card.create(name: "Seven of Hearts", suit: "Hearts", value: 7, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/7H_k3fxyc.jpg")
  Card.create(name: "Eight of Hearts", suit: "Hearts", value: 8, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/8H_ivwefo.jpg")
  Card.create(name: "Nine of Hearts", suit: "Hearts", value: 9, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/9H_xlktgj.jpg")
  Card.create(name: "Ten of Hearts", suit: "Hearts", value: 10, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528913/Cards/10H_o6se8e.jpg")
  Card.create(name: "Jack of Hearts", suit: "Hearts", value: 11, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528917/Cards/JH_zt7tce.jpg")
  Card.create(name: "Queen of Hearts", suit: "Hearts", value: 12, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/QH_y0ynkm.jpg")
  Card.create(name: "King of Hearts", suit: "Hearts", value: 13, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528919/Cards/KH_zre1ml.jpg")
  Card.create(name: "Ace of Clubs", suit: "Clubs", value: 1, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528913/Cards/AC_aku1l2.jpg")
  Card.create(name: "Two of Clubs", suit: "Clubs", value: 2, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/2C_lxd5zw.jpg")
  Card.create(name: "Three of Clubs", suit: "Clubs", value: 3, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/3C_xle4zp.jpg")
  Card.create(name: "Four of Clubs", suit: "Clubs", value: 4, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/4C_m3miub.jpg")
  Card.create(name: "Five of Clubs", suit: "Clubs", value: 5, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/5C_o3fb19.jpg")
  Card.create(name: "Six of Clubs", suit: "Clubs", value: 6, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/6C_qav9p9.jpg")
  Card.create(name: "Seven of Clubs", suit: "Clubs", value: 7, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/7C_gotsiw.jpg")
  Card.create(name: "Eight of Clubs", suit: "Clubs", value: 8, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/8C_oljpry.jpg")
  Card.create(name: "Nine of Clubs", suit: "Clubs", value: 9, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/9C_p4dr3m.jpg")
  Card.create(name: "Ten of Clubs", suit: "Clubs", value: 10, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/10C_ko105e.jpg")
  Card.create(name: "Jack of Clubs", suit: "Clubs", value: 11, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528917/Cards/JC_v9fwql.jpg")
  Card.create(name: "Queen of Clubs", suit: "Clubs", value: 12, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528919/Cards/QC_fqa9tw.jpg")
  Card.create(name: "King of Clubs", suit: "Clubs", value: 13, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528919/Cards/KC_wcchrf.jpg")
  Card.create(name: "Ace of Spades", suit: "Spades", value: 1, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528913/Cards/AS_qvyntu.jpg")
  Card.create(name: "Two of Spades", suit: "Spades", value: 2, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/2S_tgoilv.jpg")
  Card.create(name: "Three of Spades", suit: "Spades", value: 3, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/3S_nudc6t.jpg")
  Card.create(name: "Four of Spades", suit: "Spades", value: 4, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/4S_bqmmra.jpg")
  Card.create(name: "Five of Spades", suit: "Spades", value: 5, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/5S_hdmwqh.jpg")
  Card.create(name: "Six of Spades", suit: "Spades", value: 6, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/6S_hj5oba.jpg")
  Card.create(name: "Seven of Spades", suit: "Spades", value: 7, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/7S_hffiq4.jpg")
  Card.create(name: "Eight of Spades", suit: "Spades", value: 8, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/8S_xtmdab.jpg")
  Card.create(name: "Nine of Spades", suit: "Spades", value: 9, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/9S_negjor.jpg")
  Card.create(name: "Ten of Spades", suit: "Spades", value: 10, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/10S_jmyxri.jpg")
  Card.create(name: "Jack of Spades", suit: "Spades", value: 11, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528918/Cards/JS_dy3a87.jpg")
  Card.create(name: "Queen of Spades", suit: "Spades", value: 12, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/QS_hawu15.jpg")
  Card.create(name: "King of Spades", suit: "Spades", value: 13, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528919/Cards/KS_ba28cm.jpg")
  Card.create(name: "Ace of Diamonds", suit: "Diamonds", value: 1, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528913/Cards/AD_org5jc.jpg")
  Card.create(name: "Two of Diamonds", suit: "Diamonds", value: 2, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/2D_zs6pz3.jpg")
  Card.create(name: "Three of Diamonds", suit: "Diamonds", value: 3, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/3D_yon8ba.jpg")
  Card.create(name: "Four of Diamonds", suit: "Diamonds", value: 4, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/4D_z4w506.jpg")
  Card.create(name: "Five of Diamonds", suit: "Diamonds", value: 5, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528910/Cards/5D_k0s7zh.jpg")
  Card.create(name: "Six of Diamonds", suit: "Diamonds", value: 6, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/6D_fbybtm.jpg")
  Card.create(name: "Seven of Diamonds", suit: "Diamonds", value: 7, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528911/Cards/7D_yqnpue.jpg")
  Card.create(name: "Eight of Diamonds", suit: "Diamonds", value: 8, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/8D_ujzakt.jpg")
  Card.create(name: "Nine of Diamonds", suit: "Diamonds", value: 9, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/9D_biwf24.jpg")
  Card.create(name: "Ten of Diamonds", suit: "Diamonds", value: 10, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528912/Cards/10D_uopy8l.jpg")
  Card.create(name: "Jack of Diamonds", suit: "Diamonds", value: 11, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528918/Cards/JD_iwm4zx.jpg")
  Card.create(name: "Queen of Diamonds", suit: "Diamonds", value: 12, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528920/Cards/QD_kktdaw.jpg")
  Card.create(name: "King of Diamonds", suit: "Diamonds", value: 13, img_url: "https://res.cloudinary.com/susanwz/image/upload/v1583528919/Cards/KD_v8vdot.jpg")

end
