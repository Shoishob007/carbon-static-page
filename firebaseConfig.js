import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://carbon-static-page-default-rtdb.asia-southeast1.firebasedatabase.app", // Your database URL
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;