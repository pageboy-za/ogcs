"use client"
import { useState } from "react";
import { FormEvent } from "react";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullname, email } = Object.fromEntries(new FormData(e.currentTarget));
    setLoading(true);

    try {
      const response = await fetch("api/subscribe", {
        method: "post",
        body: JSON.stringify({ fullname, email }),
      });

      if (response.ok) {
        setSubscribed(true);
      } else {
        // Handle error response if needed
        console.error("Failed to subscribe");
      }
    } catch (error) {
      // Handle fetch error if needed
      console.error("Error occurred while subscribing:", error);
    }

    setLoading(false);
  };

  return (
    <div id="newsletter" className="py-16 bg-olive-700 sm:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        {subscribed ? (
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Thanks for subscribing!</h2>
          </div>
        ) : (
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Want to keep up with news and updates?</h2>
            <p className="inline text-base sm:block lg:inline xl:block">Sign up for our newsletter.</p>
          </div>
        )}

        {!subscribed && (
          <form onSubmit={handleSubmit} method="POST" className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="fullname"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your Full Name"
              />

              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/75 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-olive-600 shadow-sm hover:bg-olive-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                disabled={loading} // Disable the button when loading is true
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              We care about your data. Read our{" "}
              <a href="#" className="font-semibold text-white hover:text-olive-50">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
