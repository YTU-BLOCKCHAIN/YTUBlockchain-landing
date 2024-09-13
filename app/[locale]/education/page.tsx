import ScheduleComponent from "@/components/Schedule/Schedule";
import React from "react";
import Header from "./components/header";
import EventsComp from "./components/EventsComp";

const page = () => {
  return (
    <div className=" text-gray-900 dark:text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section
          id="schedule"
          className="mb-12 max-w-7xl mx-auto"
        >
          <ScheduleComponent />
          <EventsComp />
        </section>

        <section
          id="involvement"
          className="bg-gray-200 dark:bg-gray-800 py-12 px-4 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Get Involved</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Attend our Meetings
              </h3>
              <p>
                Join our weekly meetings to stay updated and get involved in
                club activities.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Participate in Workshops
              </h3>
              <p>
                Engage in hands-on workshops to deepen your understanding of
                blockchain technology.
              </p>
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Collaborate on Projects
              </h3>
              <p>
                Work with fellow members on exciting blockchain projects and
                initiatives.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            Have questions or want to learn more? Reach out to us at:
          </p>
          <p className="font-bold">ytublockchain@ytu.edu.tr</p>
          <p className="text-lg">
            Location: YTU Davutpasa Campus, Istanbul, Turkey
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12086.449865667506!2d28.8888258!3d41.0255118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba4ae1cfccb1%3A0x6c9c9d6b4e9aa0e4!2sYTU%20Electric%20and%20Electronics%20Faculty!5e0!3m2!1sen!2str!4v1620847693523!5m2!1sen!2str"
              width="100%"
              height="100%"
              allowFullScreen={true}
              aria-hidden={false}
              tabIndex={0}
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
