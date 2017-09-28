class CreateTweeterPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :tweeter_posts do |t|
      t.string :title

      t.timestamps
    end
  end
end
