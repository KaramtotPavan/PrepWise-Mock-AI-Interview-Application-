# PrepWise - AI Mock Interview Platform

PrepWise is an AI-powered mock interview platform designed to help users prepare for technical interviews. It provides real-time voice-assisted interview sessions and generates tailored interview questions using Google Gemini. The platform leverages Firebase for authentication and storage, and it is built using Next.js with ShadCN components for a modern and responsive UI.

## 🚀 Features
- **AI-Powered Interview Questions**: Uses Google Gemini to generate intelligent and relevant interview questions.
- **Voice Assistance**: Integrated with Vapi.ai for real-time voice responses and interaction.
- **Secure Authentication**: Firebase Authentication for user login and access control.
- **Cloud Storage**: Firebase Storage for storing user-related data.
- **Modern UI**: Built with Next.js and ShadCN components for a sleek and responsive design.
- **Deployed on Vercel**: Ensuring high availability and performance.

## 🛠️ Tech Stack
- **Frontend**: Next.js, ShadCN components
- **AI Integration**: Google Gemini
- **Voice Assistance**: Vapi.ai
- **Authentication & Storage**: Firebase Authentication, Firebase Storage
- **Deployment**: Vercel

## 📦 Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/KaramtotPavan/PrepWise-Mock-AI-Interview-Application-.git
   cd PrepWise-Mock-AI-Interview-Application-
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add your Firebase and API keys:
   ```sh
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 🚀 Deployment
To deploy on Vercel, run:
```sh
vercel
```
Or, use the Vercel dashboard to connect and deploy the repository.

## 🤝 Contributing
Contributions are welcome! If you have suggestions or want to improve the platform, feel free to fork the repository and submit a pull request.

## 📄 License
This project is licensed under the MIT License.

## 📬 Contact
For any queries or suggestions, reach out via GitHub Issues.

---

