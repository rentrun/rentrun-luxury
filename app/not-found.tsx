import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090909] px-6 text-center text-[#f5efe6]">
      <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">404</p>
      <h1 className="mt-6 text-4xl text-white">This page is not available.</h1>
      <p className="mt-4 max-w-xl text-[#d9d1c5]">
        The page you are looking for may have moved, or the requested luxury experience is not available at this time.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-[#d4af75] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
        Return Home
      </Link>
    </main>
  );
}
