Rails.application.routes.draw do
  resources :player_states
  resources :games
  resources :cards
  resources :gametypes
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/users' => 'users#index'
resources :users 
end
