class BasicDatabaseSetup < ActiveRecord::Migration[6.0]
  def change

    create_table :players do |t|
      t.string :username
      t.string :password
      t.integer :points
      t.string :player_type
      t.timestamps null: false
    end

    create_table :gametypes do |t|
      t.string :name
      t.string :description
      t.string :tutorial
      t.integer :min_players
      t.integer :max_players
      t.timestamps null: false
    end
    
    create_table :games do |t|
      t.integer :gametype_id, :references => [:gametypes, :id]
      t.string :status
      t.string :winner
      t.timestamps null: false
    end

    create_table :rounds do |t|
      t.integer :game_id, :references => [:games, :id]
    end

    create_table :player_states do |t|
      t.integer :round_id, :references => [:rounds, :id]
      t.integer :player_id, :references => [:players, :id]
      t.string :suit
      t.integer :score, :default => 0
      t.boolean :card_1, :default => true
      t.boolean :card_2, :default => true
      t.boolean :card_3, :default => true
      t.boolean :card_4, :default => true
      t.boolean :card_5, :default => true
      t.boolean :card_6, :default => true
      t.boolean :card_7, :default => true
      t.boolean :card_8, :default => true
      t.boolean :card_9, :default => true
      t.boolean :card_10, :default => true
      t.boolean :card_11, :default => true
      t.boolean :card_12, :default => true
      t.boolean :card_13, :default => true
      t.timestamps null: false
    end

    create_table :cards do |t|
      t.string :name
      t.string :suit
      t.integer :value
      t.string :img_url
      t.timestamps null: false
    end
  end
end
