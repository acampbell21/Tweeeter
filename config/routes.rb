Rails.application.routes.draw do
  namespace :api do
    resources :tweeter_posts
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
