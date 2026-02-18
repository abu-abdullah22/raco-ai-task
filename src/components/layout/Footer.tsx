import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 bg-[var(--color-obsidian)] text-sm text-[var(--color-muted)]">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-5 h-5 bg-[var(--color-electric-blue)] rounded"></div>
           <span className="font-semibold text-white">Xai</span>
        </div>
        
        <div className="flex gap-6">
           <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
           <Link href="#" className="hover:text-white transition-colors">Terms</Link>
           <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
           <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
        </div>
        
        <div>
          © 2024 Xai Intelligence. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
