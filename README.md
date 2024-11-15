#  DroneMedix - On-Demand Medicine Delivery 🚁💊
DroneMedix is a revolutionary platform that delivers medicines to your doorstep using cutting-edge drone technology. With DroneMedix, get your essential medicines delivered quickly, safely, and effortlessly with a single click.

## 🚀 Features

- **Drone-Powered Delivery**: Quick and efficient delivery of medicines via drones.
- **User-Friendly Interface**: Intuitive navigation that ensures a seamless ordering experience.
- **Dynamic Product Listings**: Easily browse through a wide variety of medicines.
- **Login System**: Personalized user profiles with order history and account management.
- **Cart Management**: Add, remove, and review your orders in real time.
- **Responsive Design**: Optimized for both desktop and mobile devices for a smooth experience on any screen.


## 📱 Technologies Used

 - **Database**:
  - MongoDB

  - **Backend**:
  - Node.js
  - Express.js

  **Frontend**: 
  - HTML5
  - CSS3
  - JavaScript
  - EJS (Embedded JavaScript Templates)
  - Font Awesome for icons

- **Drone Delivery**: Simulated concept for now, aiming to implement real drone deliveries.


Prerequisites
Node
Git
MongoDB
Express
Installation
First of all, Clone this repository & navigate to the directory
git clone https://github.com/sohamsk13/DroneMedix.git

Install the Dependencies
npm install
Running Locally
First Create .env file in root directory using the following content and make changes if required.
PORT=8080
MONGO_URI="YourMongoDBuri"
TOKEN_SECRET="JwtSecret"
Starting the Server
npm start
or
npm run dev
Adding New Medicines to Database Collection 
To add Medicines to database run

npm run menu
Edit items.csv file under assets/csv to change food items.

Author
@sohamsk13 - Designing & Developement
