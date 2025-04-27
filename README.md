
Built by https://www.blackbox.ai

---

# Bus Buddy

## Project Overview
Bus Buddy is a web application designed to manage bus routes, student information, and real-time bus location tracking. It features user login functionality, an interactive dashboard, and forms for managing buses and students. Utilizing Firebase for backend services, this application aims to streamline bus management and enhance user experience with dynamic updates and real-time data.

## Installation
To get started with Bus Buddy, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bus-buddy.git
   cd bus-buddy
   ```

2. **Open the project in your browser:**
   Simply open the `index.html` file directly in your browser or set up a local server using:
   ```bash
   python -m http.server
   ```
   Access it at `http://localhost:8000`.

3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Replace the placeholder values in `firebase-config.js` with your Firebase project's credentials.

## Usage
1. **Login:** Access the application via the login form. Enter your username and password (currently no backend authentication).
2. **Dashboard:** Once logged in, you'll be redirected to the dashboard where you can navigate to different sections:
   - **Students:** View, add, or manage student information.
   - **Bus:** Add or update bus information.
   - **Location:** Set bus routes and locations.
3. **Real-Time Location Tracking:** Use the driver page to update the bus's geolocation every 5 seconds, which will reflect on the dashboard.

## Features
- User login and authentication simulation.
- Interactive dashboard with navigation links to manage student and bus information.
- Real-time updates for bus location using Firebase Realtime Database.
- Form validation for adding buses and location updates.
- Responsive design ensuring usability across devices.

## Dependencies
The project relies on the following libraries:
- [Firebase](https://firebase.google.com/docs/web/setup) for backend services.
- [Leaflet](https://leafletjs.com/) for map functionalities (dynamically loaded).

Note: Firebase and Leaflet are included via CDN in the JavaScript files.

## Project Structure
The project is organized as follows:
```
bus-buddy/
├── index.html            # Homepage with login form
├── dashboard.html        # Dashboard interface after login
├── students.html         # Student management page
├── buses.html            # Bus management page
├── location.html         # Location setting page
├── driver.html           # Driver's location update page
├── style.css             # Main stylesheet for application
├── script.js             # JavaScript for UI handling and navigation
├── firebase-config.js    # Firebase configuration settings
├── map.js                # Handles Leaflet map and bus location tracking
└── assets/               # Directory for image and asset files
    └── logo.png          # Logo for Bus Buddy
```

With these features and structured navigation, Bus Buddy aims to provide an efficient and user-friendly experience for managing bus routes and student associations. For more information, feel free to explore the code or contribute!