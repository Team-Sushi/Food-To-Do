# COMP30022-Project

## Project Title:
FoodToDo

## Project Description: 
Web-based app Grocery Item Register, to keep track of your groceries and remind you at your next shop.

## Project Aim:
Assisting shoppers by tracking their grocery list, giving convenience to their grocery shopping experience

## Dependencies:

Node.js

Create React App

React-Router-Dom

Express

## How to Install, Run and Deploy the Project?
`type the text here in your terminal/cmd` (make sure you're in the food-to-do folder :))

#### Run the project locally in development: 
1. `npm install`
2. `npm run develop` (will automatically open up locally on http://localhost:3000)

#### Build for production:
1. `npm run build`

#### View production build locally (make sure you have built for production):
1. `npm start`
2. type http://localhost:9000 in your browser to view (does not aut6omatically open up

#### Once you are happy with your production build commit and push
1. `git add .` 
2. `git commit -m "descriptive name for your commit"`
3. `git push`

#### on github start a pull request to merge into main

#### Set up your Heroku CLI (command line interface) to prepare for deployment (Only needs to be done once):
1. Sign up for a Heroku account with your uni email (that has been added as a collaborator to the FoodToDo Heroku app)
2. on a mac terminal: `brew tap heroku/brew && brew install heroku` (for windows and linux, refer to the instructions here: https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
3. `heroku login`
4. `heroku git:remote -a foodtodo`

#### Deploy the main branch to Heroku (***make sure*** you are on the main branch and that the latest changes have been built for production and has been merged into the main branch (see above)):
1. `git checkout main` to go to main branch
2. `git pull` to pull the latest changes (the branch you have just pull request and merged into main) from main
3. `git push heroku` deploy to heroku

Created by Team Sushi (Team 33) for the COMP30022 subject
- David Imanuel (1213958, dimanuel@student.unimelb.edu.au)
- Gabriella Nadia Suwanda (1166340, gsuwanda@student.unimelb.edu.au)
- Jayn Wong (1166297, jaynw@student.unimelb.edu.au)
- Jason Nicholas Susanto (1166298, jasonnichola@student.unimelb.edu.au)
- Nattasha Techathawiekul (1069432, ntechathawie@student.unimelb.edu.au)
