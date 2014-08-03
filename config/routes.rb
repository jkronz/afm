Rails.application.routes.draw do
  get '/about', to: 'static_pages#about', as: 'about'
  get '/borrowers', to: 'static_pages#borrowers', as: 'borrowers'
  get '/team', to: 'static_pages#team', as: 'team'
  get '/investors', to: 'static_pages#investors', as: 'investors'
  get '/uahp', to: 'static_pages#uahp', as: 'uahp'
  get '/underwriting_criteria', to: 'static_pages#underwriting_criteria', as: 'underwriting_criteria'
  root to: 'static_pages#about'
end
