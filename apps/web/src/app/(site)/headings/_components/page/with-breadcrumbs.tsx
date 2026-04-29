import { HeadingBreadcrumbs } from "../shared";

export function PageWithBreadcrumbs() {
  return (
    <div className="border-b border-border bg-background px-6 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HeadingBreadcrumbs />
        <h1 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
          Back End Developer
        </h1>
      </div>
    </div>
  );
}
