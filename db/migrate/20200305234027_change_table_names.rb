class ChangeTableNames < ActiveRecord::Migration[6.0]
  def change
    rename_table :game_types, :gametypes
  end
end
