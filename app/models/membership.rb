class Membership < ActiveRecord::Base
  belongs_to :member, :polymorphic => true
end
