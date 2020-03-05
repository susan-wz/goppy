class BasicDatabaseSetup < ActiveRecord::Migration[6.0]
  def change
    drop_table :users

    create_table :players do |t|
      t.string :username
      t.string :password
      t.integer :points
      t.string :type
      t.timestamps null: false
    end

    create_table :game_types do |t|
      t.string :name
      t.string :description
      t.string :tutorial
      t.integer :min_players
      t.integer :max_players
      t.timestamps null: false
    end
    
    create_table :games do |t|
      t.integer :game_type_id, :references => [:game_types, :id]
      t.string :status
      t.string :winner
      t.timestamps null: false
    end

    create_table :game_rounds do |t|
      t.integer :game_id, :references => [:games, :id]
    end

    create_table :player_states do |t|
      t.integer :round_id, :references => [:game_rounds, :id]
      t.integer :player_id, :references => [:players, :id]
      t.string :suit
      t.string :score
      t.boolean :card_1
      t.boolean :card_2
      t.boolean :card_3
      t.boolean :card_4
      t.boolean :card_5
      t.boolean :card_6
      t.boolean :card_7
      t.boolean :card_8
      t.boolean :card_9
      t.boolean :card_10
      t.boolean :card_11
      t.boolean :card_12
      t.boolean :card_13
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
