class SportradarController < ApplicationController
	# respond_to :html, :js, :json
	require 'httparty'
	require 'json'
	require 'responders'

  def index
  end

  def show
  end

  def create
	end

	# Call Sportradar MLB v6 API - Daily Box Score, parse / format JSON, and prep for AJAX consumption
  def mlbSportradar
		date = Time.now.strftime("%Y/%m/%d")
		@response = HTTParty.get("http://api.sportradar.us/mlb-t6/games/#{date}/boxscore.json?api_key=#{ENV['SPORTRADAR_MLB_API_KEY']}")
		hash = JSON.parse(@response.body)
		hash.keys
		# puts hash

		games = hash["league"]["games"]
		# puts games

		@g = []
		games.each do |game|
		  @g << {
			  id: 				 game['game']['id'],
			  home_name: 	 game['game']['home']['name'],
			  home_runs: 	 game['game']['home']['runs'],
			  home_hits: 	 game['game']['home']['hits'],
			  home_errors: game['game']['home']['errors'],
			  away_name: 	 game['game']['away']['name'],
			  away_runs:   game['game']['away']['runs'],
			  away_hits:   game['game']['away']['hits'],
			  away_errors: game['game']['away']['errors'],
   		}
		end
		
		respond_to do |format|
			format.js { render json: @g }
			format.html 
		end
	end
end