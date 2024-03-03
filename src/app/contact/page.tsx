"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FormEvent, useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    // <div className="min-h-screen relative max-w-5xl flex flex-col items-center mx-auto bg-black py-12 pt-32">
    //   <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
    //     Contact Us
    //   </h1>
    //   <p className="text-gray-400 w-1/2 text-center">
    //     We are here to help with any questions about our courses, programs, or
    //     events. Reach out and let us know how we can assist you in your musical
    //     journey.
    //   </p>
    //   <form className="w-1/2 flex flex-col items-center gap-5 py-10">
    //     <input
    //       type="text"
    //       required
    //       placeholder="Your email address"
    //       className="w-full px-5 py-2 rounded bg-transparent border border-gray-500"
    //     />
    //     <textarea
    //       rows={5}
    //       required
    //       placeholder="Your message"
    //       className="w-full px-5 py-2 rounded bg-transparent border border-gray-500"
    //     />
    //     <button
    //       type="submit"
    //       className="bg-white w-full text-black px-4 py-2 rounded-md mt-4"
    //     >
    //       Send
    //     </button>
    //   </form>

    //   <Meteors number={20} />
    // </div>

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
