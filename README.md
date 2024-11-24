# NM_LMS_LearnTok

This repository contains project work submitted for NaanMudhalvan-Smartbridge MERN stack course. Our topic is Online Learning System. We have named it LearnTok.

Project Report (with Screenshots) Link: https://drive.google.com/file/d/1U4Kh6p_yAglvzh7AWU393q2FrLBz-3RX/view?usp=sharing

Demo Video Link: https://drive.google.com/file/d/1zSuAjnMOFxqF1y95sivKP6ufFvXQH3tr/view?usp=sharing

To run this project on your local system, please use this as a manual.

# Pre-Requisites
1. MongoDB
2. Node.js
3. Latest web browser

# How to Run

1. Download or clone this repository to your local system. Navigate to the `NM_LMS_LearnTok/src` folder.
2. Set environment variable values (JWT_TOKEN, MONGO_URI, PORT) in the `backend/.env` file.
3. Make sure that MongoDB is up and running. Verify it from MongoDBCompass if required.
4. Open a Command Line window and execute the following in sequence:
   1. `cd backend`
   2. `npm install`
   3. `npm start`
5. Open another Command Line window and execute the following in sequence:
   1. `cd frontend`
   2. `npm install`
   3. `npm run`
6. To visit the homepage, go to "http://localhost:5173" or whatever URL is given as output of `npm run` in frontend.

# Admin Dashboard

1. To view Admin Dashboard, open 2 command prompts and execute the following:
   1. `cd admin\backend`
   2. `npm install`
   3. `node index.js`
2. In the other terminal, execute:
   1. `cd admin\frontend`
   2. `npm install`
   3. `npm start`
3. Now, go to "http://localhost:3000" to explore the Admin side of LearnTok.
