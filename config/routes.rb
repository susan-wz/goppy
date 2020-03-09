Rails.application.routes.draw do
  resources :dealstacks
  resources :rounds
  resources :player_states
  resources :games
  resources :cards
  resources :gametypes
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
