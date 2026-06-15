import { Loader2 } from "lucide-react";

export default function PropertiesLoading() {
  return (
    <section className="flex min-h-[50vh] flex-grow items-center justify-center">
      <Loader2
        className="h-24 w-24 animate-spin text-blue-500"
        strokeWidth={1.5}
        aria-label="Loading Spinner"
      />
    </section>
  );
}
