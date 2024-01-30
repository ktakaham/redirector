import { useEffect } from "react";

export const UserIndexPageComponents = () => {
  useEffect(() => {
    window.location.href = process.env.NEXT_PUBLIC_REDIRECT_URL ?? "";
  }, []);
  return <div></div>;
};