import ScheduleComponent from "@/components/Schedule/Schedule";
import Image from "next/image";
import ClubLogo from "@/public/YTUBC.png";
import EventImage from "@/public/event.png";
const page = () => {
  return (
    <div className=" text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-[#050259] text-white py-16">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={EventImage}
            alt="Blockchain"
            fill
            object-fit="cover"
            quality={75}
          />
        </div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to YTU Blockchain Education
          </h1>
          <p className="text-lg mb-8">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image
            src={ClubLogo}
            alt="Club Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <p className="text-lg">
            Welcome to the YTU Blockchain Uni Club! Follow these steps to get
            the most out of our educational offerings:
          </p>
          <ol className="list-decimal list-inside text-lg text-left max-w-2xl mx-auto mt-4">
            <li className="mb-2">
              <strong>Register for Classes:</strong> Sign up for upcoming
              classes through our website to ensure your spot.
            </li>
            <li className="mb-2">
              <strong>Join Our Meetings:</strong> Attend our weekly meetings to
              stay updated on the latest blockchain trends and club activities.
            </li>
            <li className="mb-2">
              <strong>Participate in Workshops:</strong> Engage in hands-on
              workshops to gain practical experience with blockchain technology.
            </li>
            <li className="mb-2">
              <strong>Collaborate on Projects:</strong> Work with fellow club
              members on exciting blockchain projects and initiatives.
            </li>
            <li className="mb-2">
              <strong>Stay Connected:</strong> Follow our social media channels
              and join our mailing list to receive updates and announcements.
            </li>
            <li>
              <strong>Contact Us:</strong> If you have any questions or need
              assistance, reach out to us at ytublockchain@ytu.edu.tr.
            </li>
          </ol>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Education Schedule
          </h2>
          <ScheduleComponent />
        </section>

        {/* Get Involved Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            Have questions or want to learn more? Reach out to us at:
          </p>
          <p className="font-bold">ytublockchain@ytu.edu.tr</p>
          <p className="text-lg">
            Location: YTU Davutpasa Campus, Istanbul, Turkey
          </p>
        </section>

        {/* Map Section */}
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
