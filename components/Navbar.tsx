// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 h-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
        <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
      </Link>

      {/* Navigation + Auth Buttons */}
      <div className="flex items-center gap-6">
        <NavItems />

        {/* Sign In button when signed out */}
        <SignedOut>
          <SignInButton>
            <button className="btn-primary">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        {/* User button when signed in */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
