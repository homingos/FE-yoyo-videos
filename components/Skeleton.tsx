import { cn } from '@/lib/functions';

function Skeleton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden shadow-xl shadow-black/5 bg-gray-500',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-rose-100/10 before:bg-gradient-to-r before:from-transparent before:via-rose-100/10 before:to-transparent',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Skeleton };
