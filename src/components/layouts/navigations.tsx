type Filter = "all" | "active" | "inactive";

interface NavigationsProps {
  filter: Filter;
  onFilter: (filter: Filter) => void;
}

const tabs: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const Navigations = ({ filter, onFilter }: NavigationsProps) => {
  return (
    <section aria-label="Extensions list">
      <div className="flex flex-col items-center gap-4 justify-between lg:flex-row">
        <h1 className="text-2xl font-bold dark:text-white text-gray-900">Extensions List</h1>
        <nav aria-label="Filter extensions">
          <ul className="flex gap-4" role="list">
            {tabs.map(({ label, value }) => (
              <li key={value}>
                <button
                  onClick={() => onFilter(value)}
                  aria-pressed={filter === value}
                  className={`rounded-3xl py-2 px-4 transition-colors hover:cursor-pointer ${
                    filter === value
                      ? "bg-orange-500 text-white"
                      : "dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigations;
