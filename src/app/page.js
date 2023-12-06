import React from "react";
import NavbarHomePage from "@/components/NavBarHomePage"; // Update the path based on your project structure

export default function Home() {
  const isLoggedIn = true; // You can set this based on your authentication state

  return (
    <div>
      <NavbarHomePage isLoggedIn={isLoggedIn} />
      {/* Other content of your homepage */}
    </div>
  );
}
