// This script is intended to be run with Node.js.
// You'll need to set up Firebase Admin SDK or use client SDK with appropriate auth.
// For simplicity, this example uses the client SDK which might require user auth or running against an emulator.
// Ensure you have firebase installed (npm install firebase) and your .env.local or similar is configured if using client SDK directly.
// To run: ts-node tools/seed.ts (you might need to install ts-node: npm install -g ts-node)

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, doc, setDoc, collection, writeBatch } from 'firebase/firestore';
import { profileData as localProfileData } from '../src/data/profileData'; // Adjust path as needed

// Load your Firebase config. Best to use environment variables.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID",
};

async function seedDatabase() {
  console.log("Initializing Firebase app...");
  let app: FirebaseApp;
  try {
    app = initializeApp(firebaseConfig);
  } catch (error) {
    console.error("Failed to initialize Firebase app. Make sure your firebaseConfig is correct and environment variables are set.");
    console.error(error);
    return;
  }
  
  const db = getFirestore(app);
  console.log("Firebase initialized. Firestore instance obtained.");

  try {
    console.log("Seeding profile data to profile/main...");
    const profileDocRef = doc(db, 'profile', 'main');
    await setDoc(profileDocRef, localProfileData);
    console.log("Profile data seeded successfully to profile/main!");

    // Example of seeding projects to a separate collection if needed
    // console.log("Seeding projects data...");
    // const projectsCollectionRef = collection(db, 'projects');
    // const batch = writeBatch(db);
    // localProfileData.projects.forEach((project) => {
    //   const projectDocRef = doc(projectsCollectionRef, project.name.toLowerCase().replace(/\s+/g, '-'));
    //   batch.set(projectDocRef, project);
    // });
    // await batch.commit();
    // console.log("Projects data seeded successfully!");

  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// Check if projectId is set to avoid running with placeholder values
if (!firebaseConfig.projectId || firebaseConfig.projectId === "YOUR_PROJECT_ID") {
  console.warn("Firebase projectId is not set or is using a placeholder. Please configure your Firebase project details in firebaseConfig or environment variables.");
  console.warn("Skipping database seed process.");
} else {
  seedDatabase().then(() => {
    console.log("Seeding process finished.");
    // Client SDK might not automatically exit Node.js process.
    // For a proper CLI tool, consider firebase-admin or process.exit() after completion.
    // For now, this will hang if not run in an environment that auto-exits.
    // If running with ts-node, Ctrl+C to exit.
  }).catch(error => {
    console.error("Unhandled error during seeding:", error);
  });
}

// Note: If you get Firestore permission errors, ensure your Firestore security rules
// allow writes to the 'profile' collection (e.g., for authenticated admin users or during setup).
// For initial seeding, you might temporarily open up rules or use Firebase Admin SDK which bypasses rules.
