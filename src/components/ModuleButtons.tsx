
interface ModuleButtonsProps {
  activeModule: number;
  onModuleChange: (index: number) => void;
}

export function ModuleButtons({ activeModule, onModuleChange }: ModuleButtonsProps) {
  const modules = [
    'Sales & Revenue',
    'Marketing and Growth',
    'Operations',
    'Table booking System'
  ];

  return (
    <div className="flex gap-4 mb-16">
      {modules.map((module, index) => (
        <button
          key={index}
          onClick={() => onModuleChange(index)}
          className={`
            flex-1 px-6 py-4 rounded-xl font-semibold text-base
            transition-all duration-200
            ${
              activeModule === index
                ? 'bg-[#1a1d3a] text-white'
                : 'bg-[#4ade80] text-[#1a1d3a] hover:bg-[#3fcc70]'
            }
          `}
        >
          {module}
        </button>
      ))}
    </div>
  );
}
