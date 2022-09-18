import React from "react";

interface HomeInterface {}

export const Home: React.FC<HomeInterface> = () => {
  return <div className="h-screen w-full bg-red-300">Hola</div>;
};
