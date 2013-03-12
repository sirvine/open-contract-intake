class Stakeholder < ActiveRecord::Base
  has_many :memberships, :as => :member
end
