# **New York Times Article Search app**
### The New York Times Article Search app is a React based article search application with a mongo/mongoose backend to allow the user to save articles they want to look at later. It uses React, the Create-React-App and Yarn packages, HTML, CSS, Bootstrap, javascript, JSX, Mongo and Mongoose.
### Author: Rod Skoglund
### Date: October 8, 2018

----------------

# **Table Of Contents**
1. Application Introduction
2. Instructions
3. Minimum Requirements
4. Demo
5. Installation

----------------

## **1. Application Introduction**
This used the create-react-app and yarn to develop this article search application. On the front end, it uses bootstrap, HTML/CSS and JSX to display the search form and both search results and saved articles. The user can search for and save articles to a DB backend. 

----------------

## **3. Minimum Requirements**
In order to run this application, you will need the following utilities and packages:
 * create-react-app 
 * yarn
 * The following npm packages:
     * axios": "^0.17.1",
     * jquery": "^3.3.1",
     * moment": "^2.20.1",
     * react": "^16.2.0",
     * react-dom": "^16.2.0",
     * react-router-dom": "^4.2.2",
     * react-scripts": "1.1.0"
     * body-parser": "^1.17.2",
     * cors": "^2.8.4",
     * express": "^4.15.4",
     * if-env": "^1.0.4",
     * mongoose": "^5.0.17"

----------------

## **4. Demo**

The New York Times Article Search app is deployed to Heroku. Use the following link to see it in action.

https://cryptic-thicket-14299.herokuapp.com/

----------------

## **5. Installation**

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/Rod-Skoglund/NYT-React-Article-Search
	
Next, install the application dependencies.

  If you do not have create-react-app and yarn installed, execute the following:
  
    npm install -g create-react-app yarn

  Then do the following:

	cd NYT-React-Article-Search
	yarn install

Next, make sure Mongo is running
  open command window and run 'mongod'

Finally, run the application locally.

	yarn start
	
The application should start automatically in a browser window. 
if not, open the local application on port 3000 at the URL: `http://localhost:3000/`.

Enjoy :smiley: 