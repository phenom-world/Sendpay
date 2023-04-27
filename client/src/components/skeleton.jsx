const cn = (...classes) => classes.filter(Boolean).join(' ');

function Skeleton({ className, ...props }) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export { Skeleton };
