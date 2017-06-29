# Sportradar Scoreboard

Baseball Scoreboard is a web app that pulls data from the [Sportradar](https://developer.sportradar.com/) MLB v6 Daily Box Score API and displays real-time updating scores on a web page.

It was built to get me familiar with API calls and using AJAX to create dynamically updating content on a web page.

## Getting Started

Ruby version: 2.3.0

Rails version: 5.0.4

1. Sign up for an account at [Sportradar.com](https://developer.sportradar.com/member/register)

2. Go to the [API Sandbox](https://developer.sportradar.com/io-docs), switch to the MLB v6 API, and grab your API key

3. Store your API key in an environment variable named 'SPORTRADAR_MLB_API_KEY'

4. [Download the repository](https://github.com/tlapinsk/rolemapping/archive/master.zip) OR open up Terminal:

	```shell session
	$ git clone https://github.com/tlapinsk/baseball-scoreboard-sportradar-api.git
	```

5. At the command prompt:

	```shell session
	$ cd baseball-scoreboard-sportradar-api
	$ rails s
	```

6. Using a browser, go to http://localhost:3000 and you will see the application homepage.

7. Edit the application to your liking. You may find the following resources handy:
	* [httparty](https://github.com/jnunemaker/httparty)
	* [Bootstrap](https://github.com/twbs/bootstrap-rubygem)

8. Visit [Configuration](#configuration) for more detailed instructions.

### System Dependencies

See [Gemfile](https://github.com/tlapinsk/baseball-scoreboard-sportradar-api/blob/master/Gemfile) and [Gemfile.lock](https://github.com/tlapinsk/baseball-scoreboard-sportradar-api/blob/master/Gemfile.lock).

_Note: I did not test the application on Windows, and I run the following system_

Macbook Pro (15-inch, Mid 2010)  
macOS Sierra | Version 10.12.4  
Memory: 8gb  
Storage: 500gb Samsung SSD

## Configuration

This section provides more detailed instructions for the application, including customization.

### Customizing Displayed Table Elements

1. Open up `sportradar_controller.rb`

2. Navigate to the `mlbSportradar` function (last function).

**Pulling additional data points from the API** 
To pull other data from the API, edit the 'games.each do |game|' loop. Make sure you dive through the JSON correctly!

Navigate to 'sportradar.js' to edit the loop that displays the data. Add the item where you would like it to sit in the table.

### Known Missing Items
The code is missing a couple, typically standard, pieces. See below:

1. Error handling

2. Current Inning (in the table)

3. Team Logos

4. Better column formatting

If there is anything else that I forgot, please let me know. And if you have any questions, you can always email at tim.lapinskas@gmail.com.

















