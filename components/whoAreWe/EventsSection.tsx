const events = [
  {
    title: "ICP Hub ile Meetup",
    date: "19.10.2023",
    description:
      "Okulumuzun Teknoparkında gerçekleştirdiğimiz etkinlikte, Internet Computer’ı öğrendik ve Network elde etme fırsatı bulduk.",
  },
  {
    title: "ICP Hub ile Meetup",
    date: "19.10.2023",
    description:
      "Okulumuzun Teknoparkında gerçekleştirdiğimiz etkinlikte, Internet Computer’ı öğrendik ve Network elde etme fırsatı bulduk.",
  },
  {
    title: "ICP Hub ile Meetup",
    date: "19.10.2023",
    description:
      "Okulumuzun Teknoparkında gerçekleştirdiğimiz etkinlikte, Internet Computer’ı öğrendik ve Network elde etme fırsatı bulduk.",
  },
  {
    title: "ICP Hub ile Meetup",
    date: "19.10.2023",
    description:
      "Okulumuzun Teknoparkında gerçekleştirdiğimiz etkinlikte, Internet Computer’ı öğrendik ve Network elde etme fırsatı bulduk.",
  },
];

const EventsSection = () => (
  <section className="py-8 px-4 flex flex-col justify-center items-center w-full">
    <h2 className="text-4xl font-bold mb-6">Yaptıklarımız</h2>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <div
          key={index}
          className="border dark:border-white border-gray-600 rounded-lg shadow-lg p-4"
        >
          <h3 className="text-2xl font-semibold">{event.title}</h3>
          <p className="">{event.date}</p>
          <p className="">{event.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
