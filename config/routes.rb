Rails.application.routes.draw do
  get 'welcome/index'
  
  post '/searchPattern', to: "welcome#searchPattern"

  # You can have the root of your site routed with "root"
  root 'welcome#index'
end
