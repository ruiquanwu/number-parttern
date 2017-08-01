class CreateHistoryDraws < ActiveRecord::Migration
  def change
    create_table :history_draws do |t|
      t.integer :position
      t.text :value

      t.timestamps null: false
    end
  end
end
