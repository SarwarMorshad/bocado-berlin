import { StrictMode, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import BocadoLoader from "./components/BocadoLoader.jsx";
import { Toaster } from "react-hot-toast"; // ADD THIS
import StructuredData from "./components/StructuredData.jsx";

export function Root() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <BocadoLoader onComplete={handleLoadComplete} />}
      {!loading && (
        <HelmetProvider>
          <StructuredData></StructuredData>
          <RouterProvider router={router} />
        </HelmetProvider>
      )}
      {/* ADD THIS - Toaster will work even during loading */}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#feaa3f",
              color: "white",
              fontWeight: "600",
            },
            iconTheme: {
              primary: "#134e4a",
              secondary: "white",
            },
            duration: 5000,
          },
          error: {
            style: {
              background: "#ef4444",
              color: "white",
              fontWeight: "600",
            },
            duration: 6000,
          },
        }}
      />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
