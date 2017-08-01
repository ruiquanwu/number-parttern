class CreateDraws < ActiveRecord::Migration
  def change
    create_table :draws do |t|
      t.integer :number
      t.string :result

      t.timestamps null: false
    end
  end
end
