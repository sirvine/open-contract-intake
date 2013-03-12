class CreateAdversaries < ActiveRecord::Migration
  def change
    create_table :adversaries do |t|
      t.string :name

      t.timestamps
    end
  end
end
