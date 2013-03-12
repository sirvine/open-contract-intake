class Project < ActiveRecord::Base
  has_many :documents
  has_many :memberships
  has_many :stakeholders, :as => :member
  has_many :adversaries, :as => :member
end
