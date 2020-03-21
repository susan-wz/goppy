class Game < ApplicationRecord
  has_many :rounds
  belongs_to :gametype
  has_many :player_states, :through => :rounds
  has_and_belongs_to_many :players
end
