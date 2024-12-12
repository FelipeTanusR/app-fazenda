import {ExternalLinkIcon} from "lucide-react";
import Link from "next/link";
import {Button} from "./ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-30 boder-b bg-background px-4 sm:px-6">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <div className="flex gap-4">
            <Link href="/" className="flex items-center gap-2">
                <ExternalLinkIcon className="h-6 w-6" />
                <span className="gont-bold">Início</span>
            </Link>
            <nav>
                <Link href="/Cadastro" className="text-sm font-medium text-muted-foreground
                 transition-colors hover:text-foreground"
                >
                    Cadastro    
                </Link>
            </nav>
            <nav>
              <Link href="/Pagina1" className="text-sm font-medium text-muted-foreground
                 transition-colors hover:text-foreground"
                >
                    Opções   
              </Link>
            </nav>
        </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </div>
    </div>
  )
}
