class Api::TweeterPostsController < ApplicationController
  def index
    render json: TweeterPost.all
  end

  def create
    attrs = params.permit(:title, :img)
  tweeter = current_user.tweeter_posts.new(attrs)
    if tweeter.save
      render json: { id: tweeter.id, user_id: tweeter.user_id, img_url: tweeter.img.url, title: tweeter.title }
    else
      render json: { errors: tweeter.errors.full_messages }, status: 422
    end
  end

  def destroy
    current_user.tweeter_posts.find(params[:id]).destroy
  end
end
