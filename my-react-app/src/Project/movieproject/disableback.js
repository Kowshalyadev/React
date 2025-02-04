import { useEffect } from "react";
import { useLocation, useNavigate, } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DisableBackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const preventBackNavigation = () => {
      window.history.pushState(null, "", window.location.href);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && location.pathname === "/dashboard") {
        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", preventBackNavigation);
      } else {
        window.removeEventListener("popstate", preventBackNavigation);
      }
    });

    return () => {
      window.removeEventListener("popstate", preventBackNavigation);
      unsubscribe();
    };
  }, [location, auth]);

  return null;
};

export default DisableBackButton;
