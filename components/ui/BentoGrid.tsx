import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-1 gap-6 sm:auto-rows-[18rem] md:auto-rows-[20rem] md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col rounded-3xl border border-neutral-200/10 bg-white/[0.01] transition-all duration-300 backdrop-blur-sm dark:border-white/[0.05] dark:bg-black/[0.1] dark:shadow-none min-h-[250px] relative overflow-hidden p-0",
        className,
      )}
    >
      {header}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-100 transition-all duration-300 flex flex-col justify-end p-5"
      >
        <div className="transform translate-y-0 transition-transform duration-300">
          {icon && <div className="mb-2">{icon}</div>}
          {title && (
            <div className="font-sans font-medium text-white text-xl mb-2">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-sm font-normal text-white/90 line-clamp-2">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
