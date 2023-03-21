Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  resources :users

  resources :messages

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
