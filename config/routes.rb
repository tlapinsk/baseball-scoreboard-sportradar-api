Rails.application.routes.draw do
  get 'sportradar/index'
  
  resources :sportradars do
	  collection do
	  	get :mlbSportradar
	 	end
	end

  root 'sportradar#index'
end

