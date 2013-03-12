OpenContractIntake::Application.routes.draw do
  resources :projects do
    member do
      post :add_stakeholder
      post :add_adversary
    end
  end
  post 'add_stakeholder' => 'projects#add_stakeholder'
  post 'add_adversary' => 'projects#add_adversary'
  root to: 'projects#new'
end
