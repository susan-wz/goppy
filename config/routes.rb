Rails.application.routes.draw do
  resources :dealstacks, except: [:update, :destroy]
  resources :rounds, except: [:update, :destroy]
  resources :player_states, except: [:update, :destroy]
  resources :games
  resources :cards, only: [:index, :show]
  resources :gametypes, only: [:index, :show]
  resources :players

  get "/multi-players", to: 'players#multi'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
