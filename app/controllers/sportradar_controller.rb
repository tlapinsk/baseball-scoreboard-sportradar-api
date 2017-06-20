require 'httparty'
require 'json'

class SportradarController < ApplicationController
  def index
  end

  def mlbSportradar
		date = Time.now.strftime("%Y/%m/%d")
		@response = HTTParty.get("http://api.sportradar.us/mlb-t6/games/#{date}/boxscore.json?api_key=#{ENV['SPORTRADAR_MLB_API_KEY']}")
		hash = JSON.parse(@response.body)
		hash.keys
		# puts hash

		games = hash["league"]["games"]
		# puts games

		games.each do |games|
		  puts "#{games['game']['id']}"
		  puts "#{games['game']['home']['name']}"
		  puts "#{games['game']['home']['runs']}"
		  puts "#{games['game']['home']['hits']}"
		  puts "#{games['game']['home']['errors']}"
		  puts "#{games['game']['away']['name']}"
		  puts "#{games['game']['away']['runs']}"
		  puts "#{games['game']['away']['hits']}"
		  puts "#{games['game']['away']['errors']}"
		end
	end
end

# Pull game id, home, and away team data using .collect
# puts games.collect { |g| "#{g['game']['id']}" }
# puts games.collect { |g| "#{g['game']['home']['name']}" }
# puts games.collect { |g| "#{g['game']['home']['runs']}" }
# puts games.collect { |g| "#{g['game']['home']['hits']}" }
# puts games.collect { |g| "#{g['game']['home']['errors']}" }
# puts games.collect { |g| "#{g['game']['away']['name']}" }
# puts games.collect { |g| "#{g['game']['away']['runs']}" }
# puts games.collect { |g| "#{g['game']['away']['hits']}" }
# puts games.collect { |g| "#{g['game']['away']['errors']}" }

# HTTParty class to pull data
# class Sportradar
# 	include HTTParty
# 	format :json
# 	base_uri 'api.sportradar.us'

# 	def box_score
# 		date = Time.now.strftime("%Y/%m/%d")
# 		self.class.get("/mlb-t6/games/#{date}/boxscore.json?api_key=#{ENV['SPORTRADAR_MLB_API_KEY']}")
# 	end
# end

# # Parse Sportradar MLB boxscore data
# scores = Sportradar.new
# box_scores = scores.box_score
# # hash = JSON.parse(box_scores)
# games = box_scores["league"]["games"]
# # puts games

# games.each do |games|
#   puts "#{games['game']['id']}"
#   puts "#{games['game']['home']['name']}"
#   puts "#{games['game']['home']['runs']}"
#   puts "#{games['game']['home']['hits']}"
#   puts "#{games['game']['home']['errors']}"
#   puts "#{games['game']['away']['name']}"
#   puts "#{games['game']['away']['runs']}"
#   puts "#{games['game']['away']['hits']}"
#   puts "#{games['game']['away']['errors']}"
# end