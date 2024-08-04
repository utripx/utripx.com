import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PlaneIcon className="w-6 h-6" />
          <span className="text-lg font-bold">UtripX</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Button>Sign Up</Button>
      </header>
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Unlock the World with Utripx
            </h1>
            <p className="text-lg md:text-xl max-w-[600px]">
              Discover new destinations, plan your dream trips, and explore the
              world with our innovative travel platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Explore the World with Utripx
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Utripx offers a wide range of features to help you plan and book
                your perfect trip.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <SearchIcon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Destination Search</h3>
                <p className="text-muted-foreground">
                  Easily search and discover new destinations based on your
                  preferences.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <CalendarIcon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Trip Planning</h3>
                <p className="text-muted-foreground">
                  Create and manage your trip itinerary with our intuitive
                  planning tools.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <PlaneIcon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Booking & Reservations
                </h3>
                <p className="text-muted-foreground">
                  Book flights, hotels, and other travel services all in one
                  place.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Stay Updated with Utripx
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Sign up to our newsletter to receive the latest updates and
                exclusive offers.
              </p>
            </div>
            <div className="mx-auto max-w-md">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2024 Utripx. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function PlaneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
