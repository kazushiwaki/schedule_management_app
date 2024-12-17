class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :title, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.text :notes
      t.boolean :all_day, default: false, null: false

      t.timestamps
    end
  end
end
