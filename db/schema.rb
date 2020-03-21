# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_05_221317) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "suit"
    t.integer "value"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dealstacks", force: :cascade do |t|
    t.integer "round_id"
    t.string "suit"
    t.boolean "card_1", default: true
    t.boolean "card_2", default: true
    t.boolean "card_3", default: true
    t.boolean "card_4", default: true
    t.boolean "card_5", default: true
    t.boolean "card_6", default: true
    t.boolean "card_7", default: true
    t.boolean "card_8", default: true
    t.boolean "card_9", default: true
    t.boolean "card_10", default: true
    t.boolean "card_11", default: true
    t.boolean "card_12", default: true
    t.boolean "card_13", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.integer "gametype_id"
    t.string "status"
    t.integer "winner"
    t.integer "host"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games_players", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "player_id"
    t.index ["game_id"], name: "index_games_players_on_game_id"
    t.index ["player_id"], name: "index_games_players_on_player_id"
  end

  create_table "gametypes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "tutorial"
    t.integer "min_players"
    t.integer "max_players"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "player_states", force: :cascade do |t|
    t.integer "round_id"
    t.integer "player_id"
    t.string "suit"
    t.integer "score", default: 0
    t.boolean "card_1", default: true
    t.boolean "card_2", default: true
    t.boolean "card_3", default: true
    t.boolean "card_4", default: true
    t.boolean "card_5", default: true
    t.boolean "card_6", default: true
    t.boolean "card_7", default: true
    t.boolean "card_8", default: true
    t.boolean "card_9", default: true
    t.boolean "card_10", default: true
    t.boolean "card_11", default: true
    t.boolean "card_12", default: true
    t.boolean "card_13", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.integer "points"
    t.string "player_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "rounds", force: :cascade do |t|
    t.integer "game_id"
    t.integer "round_in_game", default: 1, null: false
  end

end
