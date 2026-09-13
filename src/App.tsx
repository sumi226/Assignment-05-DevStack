
import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechCard from "./components/technologies/TechCard";
import Stack from "./components/technologies/Stack";
import type { ITechnology } from "./components/type/techTypes";
import FooterTop from "./components/FooterTop";
import FooterBtm from "./components/FooterBtm";

const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technology data");
  }

  const data = await res.json();

  return data;
};

const technologiesPromise = technologiesFetch();

function App() {
  const [stack, setStack] = useState<ITechnology[]>([]);

  // Add Technology to Stack
  const handleAddToStack = (technology: ITechnology) => {
    setStack((prev) => {
      const alreadyAdded = prev.some(
        (item) => item.id === technology.id
      );

      if (alreadyAdded) {
        alert(`${technology.name} is already in your stack!`);
        return prev;
      }

      return [...prev, technology];
    });
  };

  // Remove Single Technology
  const handleRemove = (id: number) => {
    setStack((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Remove All Technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Nav />

      <Banner />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Technology Grid */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <h2 className="text-center py-10">
                  Loading...
                </h2>
              }
            >
              <TechCard
                technologiesPromise={technologiesPromise}
                onAddToStack={handleAddToStack}
              />
            </Suspense>
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1">
            <Stack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </div>

      <FooterTop />
      <FooterBtm />
    </>
  );
}

export default App;
