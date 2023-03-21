class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false

      t.timestamps
    end

    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
