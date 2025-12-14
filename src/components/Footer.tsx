import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
           {/* Placeholder for social links */}
        </div>
      </Container>
    </footer>
  );
}
