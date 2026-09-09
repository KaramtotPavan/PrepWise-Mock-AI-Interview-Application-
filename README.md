# PrepWise - AI Mock Interview Platform 🎙️

PrepWise is an AI-powered mock interview platform designed to simulate realistic technical and behavioral interviews. It delivers dynamic voice-assisted conversations, generates role-specific interview questions using Google Gemini, and handles authentication and session state with Firebase.

---

## 🚀 Key Features
- **Adaptive AI Interviewing**: Uses Google Gemini to generate dynamic, role-tailored technical and behavioral interview questions.
- **Real-Time Voice Assistant**: Powered by Vapi.ai for conversational voice interaction and low-latency speech feedback.
- **Secure Authentication**: Firebase Auth for session management, login, and user profile isolation.
- **Cloud Storage**: Firebase Storage to persist interview records and user assessment logs.
- **Modern UI/UX**: Built with Next.js (App Router), Tailwind CSS, and ShadCN UI for a responsive interface.

---

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS, ShadCN UI
- **AI Engine**: Google Gemini API
- **Voice Pipeline**: Vapi.ai SDK
- **Backend & Auth**: Firebase Authentication, Firestore / Storage
- **Deployment**: Vercel

---

## 🏗️ Project Structure
```text
PrepWise-Mock-AI-Interview-Application-/
├── app/                  # Next.js App Router pages and route handlers
├── components/           # UI components (ShadCN, interview cards, audio controls)
├── lib/                  # Firebase initialization, Gemini API helpers
├── hooks/                # Custom hooks for Vapi voice connection
├── public/               # Static assets and icons
├── .env.example          # Example environment configuration
└── package.json


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

