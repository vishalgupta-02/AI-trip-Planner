<div align="center">
  <h1 align="center">TravelEase</h1 >

  <h3>AI-Based Trip Planner</h3>

  <p align="center">
    Discover personalized itineraries and curated hotel recommendations tailored to your interests. Simplify travel planning with smart suggestions for top destinations and activities, making every trip easy and enjoyable.
    <br />
    <br />
    
    <br />
    <br />

  </p>
</div>
</br>
<div align="center">

## About The Project

</div>

<div class="sampleImages" align="center" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
    <a href="https://ibb.co/gRX4Bcx"><img src="https://i.ibb.co/RDMjVJq/image.png" alt="image" style="border-radius: 10px; height: 170px; border: 0;"></a>
    <a href="https://ibb.co/f1zjdLn"><img src="https://i.ibb.co/Ss4FwGd/image-2.png" alt="image-2" style="border-radius: 10px; height: 170px; border: 0;"></a>
    <a href="https://ibb.co/yySg2kP"><img src="https://i.ibb.co/ncCQp1m/image-1.png" alt="image-1" style="border-radius: 10px; height: 170px; border: 0;"></a>
    <a href="https://ibb.co/26srCZS"><img src="https://i.ibb.co/hMZN4Yc/image-3.png" alt="image-3" style="border-radius: 10px; height: 170px; border: 0;"></a>
    <a href="https://ibb.co/jfty8cW"><img src="https://i.ibb.co/Khn25ML/image-5.png" alt="image-5" style="border-radius: 10px; height: 170px; border: 0;"></a>
    <a href="https://ibb.co/r5MtJxg"><img src="https://i.ibb.co/zPb5wX1/image-4.png" alt="image-4" style="border-radius: 10px; height: 170px; border: 0;"></a>
</div>
</br>

**TravelEase** is an AI-based travel planning application designed to make trip planning _easier and more efficient_. This project leverages artificial intelligence to analyze user preferences and provide personalized recommendations for destinations, accommodations, and activities.

Key features of TravelEase include:

- **Personalized Recommendations**: The AI suggests ideal destinations, hotels, and activities tailored to the traveler’s preferences.
- **Automated Itinerary Generation**: The app automatically creates a full itinerary that considers factors like travel time and user preferences.

JourneyJolt aims to enhance the travel experience by providing a streamlined, easy-to-use platform for trip planning, designed for both casual travelers and frequent explorers alike.

## Built With

This project is built with the following major frameworks, libraries, and services:

- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&background=E4E4E4)](https://reactjs.org/)
- [![Vite](https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
- [![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/)
- [![Gemini AI](https://img.shields.io/badge/Gemini%20AI-FF5F00?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/blog/topics/ai-machine-learning/introducing-gemini-the-new-ai-powered-google-cloud-platform)
- [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
- [![Auth0](https://img.shields.io/badge/Auth0-000000?style=for-the-badge&logo=auth0&background=E4E4E4)](https://auth0.com/)
- [![React Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-FF5733?style=for-the-badge&logo=react&logoColor=black)](https://react-hot-toast.com/)

## Getting Started

Setting up TravelEase is simple — just configure your `.env` file, and you're ready to go!

To get started with TravelEase, follow these instructions to set up the project locally on your machine for development and testing.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js _(v16.0 or above)_ - [Download Node.js](https://nodejs.org/en)
- VS Code _(Code Editor)_ - [Download VS Code](https://visualstudio.microsoft.com/downloads/)

### Services & API Keys Setup

To fully integrate TravelEase with third-party services, you'll need to sign up for the following services, configure the required settings, and obtain API keys. Below are the steps for each service:

<details>
  <summary>Google Cloud Setup</summary>
    Follow these steps to set up Google Cloud for your project:
  <ol>
    <li>Create an account on <a href="https://cloud.google.com" target="_blank">Google Cloud</a>.</li>
    <li>As a new user, you will receive a free trial with 90 days and ₹25,000 in free credits, which you can use for your project.</li>
    <li>After setting up your account, go to the <b>APIs & Services</b> section to create an API key.</li>
    <li>Next, enable the following APIs:
      <ul>
        <li>Maps JavaScript API</li>
        <li>Maps Embed API</li>
        <li>Geolocation API</li>
        <li>Geocoding API</li>
        <li>Places API</li>
        <li>Places API (New)</li>
      </ul>
    </li>
    <li>The "Places API (New)" may require you to set up a billing account. Don’t worry, your free credits are more than enough to cover the cost!</li>
    <li>Once everything is set up, you will have your Google API key ready to use.</li>
    <li>Paste the API key in your environment file: 
      <pre><code>VITE_GOOGLE_MAP_API_KEY="YOUR_GOOGLE_API_KEY"</code></pre>
    </li>
  </ol>
</details>

<details>
  <summary>Gemini API Setup</summary>
    Follow these steps to set up the Gemini API:
  <ol>
    <li>Go to the <a href="https://ai.google.dev/" target="_blank">Gemini AI website</a>.</li>
    <li>Create an account if you don't have one, or sign in with your existing account.</li>
    <li>The Gemini API is free, meaning there are no charges associated with using it for your project.</li>
    <li>Once your account is set up, you can start using the Gemini API for your project.</li>
    <li>Paste the API key in your environment file: 
      <pre><code>VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY"</code></pre>
    </li>
  </ol>
</details>

<details>
  <summary>Auth0 Setup</summary>
  <p>
    Follow these steps to set up Auth0 for your project:
  </p>
  <ol>
    <li>Go to the <a href="https://auth0.com/" target="_blank">Auth0 website</a>.</li>
    <li>Create a free account. The free plan supports up to 25,000 monthly active users, which is more than enough for our project.</li>
    <li>After signing up, select the type of project you are creating. Choose "Single Page Application" as we are building a React app.</li>
    <li>Once your account is set up, create a new application within Auth0.</li>
    <li>Go to the settings of the created application to get the authentication credentials.</li>
    <li>You'll need the following credentials:
      <ul>
        <li><strong>Domain Name</strong></li>
        <li><strong>Client ID</strong></li>
      </ul>
    </li>
    <li>Paste the credentials into your environment file:
      <pre><code>VITE_DOMAIN_NAME="your-auth0-domain"</code></pre>
      <pre><code>VITE_AUTH0_CLIENT_ID="your-client-id"</code></pre>
    </li>
  </ol>
  <p><strong>Important Note:</strong> After running the project, you will need to configure the callback URL and logout URL in the Auth0 application settings. The callback URL should be the hosted URL of your React app when it is running locally or deployed. <em>(generally: http://localhost:5173/)</em></p>
</details>

<details>
  <summary>Firebase Setup</summary>
  <ul>
    <li>Visit the <a href="https://firebase.google.com/">Firebase website</a> and create an account or log in if you already have one.</li>
    <li>Once logged in, create a new project by clicking on "Add Project". Follow the prompts for setting up the project. Choose the "Test mode" option for the database so you can easily set up read and write permissions.</li>
    <li>After the project is created, click on the "Web" icon to create a new web app within the Firebase project.</li>
    <li>Follow the prompts to register your app. Firebase will provide you with the necessary configuration details during this step.</li>
    <li>Once the web app is created, go to your Firebase Console, and select the project you just created.</li>
    <li>Navigate to the "Project settings" by clicking on the gear icon near the top left corner.</li>
    <li>In the "General" tab, you will find the credentials for your Firebase project. These credentials are needed to set up Firebase in your React project.</li>
    <li>Copy the credentials provided by Firebase (e.g., API key, auth domain, etc.) and paste them into your `.env` file with the following format:</li>
  </ul>
  <pre>
    VITE_FIREBASE_API_KEY = "your-api-key-here"
    VITE_FIREBASE_AUTH_DOMAIN = "your-auth-domain-here"
    VITE_FIREBASE_PROJECT_ID = "your-project-id-here"
    VITE_FIREBASE_STORAGE_BUCKET = "your-storage-bucket-here"
    VITE_FIREBASE_MESSAGING_SENDER_ID = "your-messaging-sender-id-here"
    VITE_FIREBASE_APP_ID = "your-app-id-here"
    VITE_MEASUREMENT_ID = "your-measurement-id-here"
  </pre>
</details>

</br>
<div align="center">

## Installation

</div>

The installation process is straightforward. You can either clone the repository or download the zip file of the code.

### Steps to Install and Set Up:

1. **Clone the repository or download the ZIP file**

   - To clone the repo, run the following command:
     ```sh
     https://github.com/vishalgupta-02/AI-trip-Planner.git
     ```
   - Alternatively, you can download the ZIP file from the repository page and extract it.

2. **Open the project folder in a code editor**  
   Open the folder in your preferred code editor (e.g., [VS Code](https://code.visualstudio.com/)).

3. **Set up the `.env` file**  
   The main objective is to set up your `.env` file with the necessary API keys.

   - Follow the steps in the **Setup and API Keys** section to get the required API keys for Google Cloud, Gemini API, Auth0, and Firebase.
   - After getting the keys, create a `.env` file in the root of the project and add the required keys like so:
     ```env
     VITE_GOOGLE_MAP_API_KEY = "your-google-api-key"
     VITE_GEMINI_API_KEY = "your-gemini-api-key"
     VITE_AUTH0_CLIENT_ID = "your-auth0-client-id"
     VITE_DOMAIN_NAME = "your-auth0-domain-name"
     VITE_FIREBASE_API_KEY = "your-firebase-api-key"
     VITE_FIREBASE_AUTH_DOMAIN = "your-firebase-auth-domain"
     VITE_FIREBASE_PROJECT_ID = "your-firebase-project-id"
     VITE_FIREBASE_STORAGE_BUCKET = "your-firebase-storage-bucket"
     VITE_FIREBASE_MESSAGING_SENDER_ID = "your-firebase-messaging-sender-id"
     VITE_FIREBASE_APP_ID = "your-firebase-app-id"
     VITE_MEASUREMENT_ID = "your-firebase-measurement-id"
     ```

4. **Install required NPM packages**  
   Once the `.env` file is set up, install the required NPM packages:

   ```sh
   npm install
   ```

5. **Run the Project**  
   After the packages are installed, you can start the development server by running:
   ```sh
   npm run dev
   ```
   This will run the project locally and you can access it at http://localhost:5173.

#### By following these simple steps, you'll have the project up and running in no time!

</br>
<div align="center">

## Roadmap

</div>

The roadmap represents the challenges and updates that I plan to implement in the future. As I continue to enhance the project, I encourage you to try completing these tasks as well and contribute to the project. Collaboration is welcome, and feel free to open pull requests with improvements or fixes. Here's what's coming next:

- [x] Set up project environment with API keys
- [x] Add Google Cloud API integration for Maps, Geolocation, and Places
- [x] Add Gemini AI API integration for AI-based content generation
- [x] Set up Auth0 authentication for secure login (including Callback URL setup)
- [x] Add Firebase integration for real-time data storage
- [x] Implement a more user-friendly UI for API Key setup
- [ ] Implement additional functionality for Google Maps (e.g., custom markers)
- [x] Optimize app for mobile devices
- [ ] Implement unit testing for all components
- [ ] Add better error handling for API integrations
- [ ] Multi-language Support
  - [ ] Hindi
- [x] Deploy the project to a cloud platform (e.g., Firebase Hosting, Vercel)
- [ ] Add detailed logging for API requests and responses
- [ ] Implement automatic configuration of environment variables from the UI

</br>
<div align="center">

## Contributing

</div>
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have an idea or feature that would make this project even better, please feel free to contribute. Whether it's fixing bugs, adding new features, improving documentation, or anything else, your help is welcome!

### How to Contribute:

1. **Fork the repository**  
   Click on the "Fork" button at the top of this repo to create a copy of the repository on your own GitHub account.

2. **Clone the repo**  
   Clone your forked version of the repo to your local machine.

   ```sh
   git clone https://github.com/vishalgupta-02/AI-trip-Planner.git
   ```

3. **Create your feature branch**  
   Create a new branch for the feature you're working on.

   ```sh
   git checkout -b feature/your-feature-nam
   ```

4. **Make your Changes**  
   Modify the code, add new features, or fix bugs. Don't forget to test your changes!

5. **Commit your changes**  
   Commit the changes you've made with a descriptive message.

   ```sh
   git commit -m 'Add a new feature or fix a bug'
   ```

6. **Push to your branch**  
   Push the changes to your forked repo.

   ```sh
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**  
   Go to the original repo and click "New Pull Request". Select your branch and provide a description of what your changes do. Once you're ready, submit the pull request!

## Report Issues and Suggestions

If you encounter a bug or have a suggestion to improve the project, please open an [issue](https://github.com/vishalgupta-02/AI-trip-Planner.git) on the Issues page. If it's a new feature or improvement, tag it as an "enhancement".

</br>
<div align="center">

## Contact Us

</div>
We’d love to hear from you! Whether you have a question, suggestion, or issue to report, feel free to get in touch with us.

### Ways to Contact Us:

1. **GitHub Issues**: You can open an issue directly on this repository for bugs, feature requests, or general inquiries.

   - [Open an Issue](https://github.com/vishalgupta-02/AI-trip-Planner.gits)

2. **Email**: Reach out to us via email at:

   - **abhimanyug987@gmail.com**

3. **Social Media**:
   - **Instagram**: (https://www.instagram.com/vishal_listens/)

---
