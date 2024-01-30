import { useEffect } from "react";

export const UserIndexPageComponents = () => {
  console.log(process.env.NEXT_PUBLIC_REDIRECT_URL)
  useEffect(() => {
    window.location.href = process.env.NEXT_PUBLIC_REDIRECT_URL ?? "";
  }, []);

  return <div>Redirecting...</div>;

};