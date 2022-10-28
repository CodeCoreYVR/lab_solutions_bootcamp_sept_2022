Rails.application.routes.draw do
  get 'admin/panel'
  
  root "products#index"
  
  get "/home" => "welcome#home"
  get "/about" => "welcome#about"
  get "/contact_us" => "welcome#contact_us"
  get "/support_me" => "welcome#donate"
  get "/thank_you" => "welcome#thank_you"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :products do
    resources :reviews, only: [:create, :destroy]
    post '/reviews/:id', to: 'reviews#unhide', as: :review_unhide
  end

end
