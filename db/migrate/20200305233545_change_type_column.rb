class ChangeTypeColumn < ActiveRecord::Migration[6.0]
  def change
    rename_table :game_rounds, :rounds
    rename_column :players, :type, :player_type
  end
end
