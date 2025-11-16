import { StrictMode, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import BocadoLoader from "./components/BocadoLoader.jsx";

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
          <RouterProvider router={router} />
        </HelmetProvider>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
