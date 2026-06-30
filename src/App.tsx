import { useState } from "react";
import Header from "./components/layouts/header";
import Navigations from "./components/layouts/navigations";
import Card from "./components/ui/card";
import { useExtensions } from "./hooks/useExtensions";

type Filter = "all" | "active" | "inactive";

const App = () => {
  const { extensions, activeExtensions, inactiveExtensions, toggle, remove } =
    useExtensions();
  const [filter, setFilter] = useState<Filter>("all");

  const visibleExtensions =
    filter === "active"
      ? activeExtensions
      : filter === "inactive"
      ? inactiveExtensions
      : extensions;

  return (
    <main className="container mx-auto px-4 max-w-7xl">
      <Header />
      <Navigations filter={filter} onFilter={setFilter} />
      <ul
        className="mt-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-label="Extensions"
        role="list"
      >
        {visibleExtensions.map((extension) => (
          <li key={extension.id}>
            <Card
              extension={extension}
              onToggle={toggle}
              onRemove={remove}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
