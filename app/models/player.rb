class Player < ApplicationRecord
  has_many :player_states
  has_and_belongs_to_many :games
end
