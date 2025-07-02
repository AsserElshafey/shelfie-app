import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import ThemedLoader from "../ThemedLoader";

const GuestOnly = ({ children }) => {
  const { authChecked, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) router.replace("/books");
  }, [authChecked, user]);

  if (!authChecked || user) return <ThemedLoader />;

  return children;
};

export default GuestOnly;
