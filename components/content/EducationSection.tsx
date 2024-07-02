const educations = [
  {
    title: "Blockchain 101-102",
    description: "Blockchain dünyasına etkili bir giriş yaptık.",
  },
];

const EducationSection = () => (
  <section className="py-8 px-4 flex flex-col justify-center items-center w-full">
    <h2 className="text-4xl font-bold mb-6">Eğitimler</h2>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {educations.map((education, index) => (
        <div
          key={index}
          className="border dark:border-white border-gray-600 rounded-lg shadow-lg p-4"
        >
          <h3 className="text-2xl font-semibold">{education.title}</h3>
          <p className="">{education.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
