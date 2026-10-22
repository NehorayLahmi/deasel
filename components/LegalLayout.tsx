import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <a
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            חזרה לעמוד הבית
          </a>

          <h1 className="text-2xl font-headline text-ink sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">עודכן לאחרונה: {updatedAt}</p>

          <div className="prose-legal mt-8 space-y-6 text-right leading-relaxed text-slate-700">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
