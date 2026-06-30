import type { Extension } from "../../hooks/useExtensions";

interface CardProps {
  extension: Extension;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const Card = ({ extension, onToggle, onRemove }: CardProps) => {
  const { id, name, logo, description, enabled } = extension;

  return (
    <article
      className="flex flex-col gap-8 rounded-3xl justify-between p-4 dark:border dark:border-gray-700 dark:bg-transparent bg-white shadow-sm h-full"
      aria-label={name}
    >
      <div className="flex gap-4">
        <figure className="w-16 h-16 shrink-0">
          <img
            src={`/images/${logo}`}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
            width={64}
            height={64}
          />
        </figure>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold dark:text-white text-gray-900">{name}</h2>
          <p className="dark:text-gray-400 text-gray-500 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onRemove(id)}
          aria-label={`Remove ${name}`}
          className="bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 text-gray-700 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors"
        >
          Remove
        </button>
        <label className="flex items-center gap-2 cursor-pointer" htmlFor={`toggle-${id}`}>
          <span className="sr-only">{enabled ? "Disable" : "Enable"} {name}</span>
          <button
            id={`toggle-${id}`}
            role="switch"
            aria-checked={enabled}
            aria-label={`${enabled ? "Disable" : "Enable"} ${name}`}
            onClick={() => onToggle(id)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
              enabled ? "bg-red-500" : "dark:bg-gray-600 bg-gray-300"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                enabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </label>
      </div>
    </article>
  );
};

export default Card;
