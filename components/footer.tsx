"use client";

import SocialList from "./socials/social-list";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright {new Date().getFullYear()}. All right reserved, Darrick
          Develops.
        </p>

        <SocialList variant="secondary" />
      </div>
    </footer>
  );
}
