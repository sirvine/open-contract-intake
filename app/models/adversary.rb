class Adversary < ActiveRecord::Base
  has_many :memberships, :as => :member
end
