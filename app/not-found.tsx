import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-[#14283F]">
      <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">404</p>
      <h1 className="mt-6 text-4xl text-[#14283F]">This page is not available.</h1>
      <p className="mt-4 max-w-xl text-[#14283F]">
        The page you are looking for may have moved, or the requested luxury experience is not available at this time.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-[#14283F] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white">
        Return Home
      </Link>
    </main>
  );
}
