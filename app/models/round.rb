class Round < ApplicationRecord
  belongs_to :game
  has_many :player_states
  has_many :dealstacks
end
