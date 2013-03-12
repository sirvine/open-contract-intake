class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.boolean :original
      t.boolean :final
      t.integer :project_id

      t.timestamps
    end
    add_index :documents, :project_id
  end
end
