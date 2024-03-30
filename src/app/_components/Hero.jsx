import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image src="/doctor.jpg" height={700} width={700} alt="doc" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Get treatment from the{" "}
                <span className="text-primary">Best Doctors</span> here
              </h2>

              <p className="mt-4 text-gray-600">
                Say goodbye to long waiting times and endless phone calls – with
                our user-friendly platform, scheduling your next doctor's
                appointment is as easy as a few taps on your smartphone. Whether
                you're seeking routine check-ups, specialist consultations, or
                urgent care, our app connects you with a network of trusted
                healthcare providers in your area. Experience the future of
                healthcare booking today with our intuitive and reliable doctor
                appointment booking app.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
