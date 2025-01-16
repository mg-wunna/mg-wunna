import { Category } from '../../types/category-type';

type CategoryFilterProps = {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
};

const CategoriesFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryChange(category)}
          className={`relative overflow-hidden rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/20 sm:px-6 sm:py-2 sm:text-sm ${
            selectedCategory.name === category.name
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25'
              : 'bg-white text-gray-600 shadow-md hover:shadow-lg hover:shadow-orange-500/10'
          }`}
          aria-label={`Filter by ${category.name} projects`}
        >
          <span className="relative z-10">{category.name}</span>
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200/40 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </button>
      ))}
    </div>
  );
};

export default CategoriesFilter;
