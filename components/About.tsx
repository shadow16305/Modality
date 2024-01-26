import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import disc from "../assets/disc.svg";
import aboutImg from "../assets/about-image.png";
import shape from "../assets/weird-shape-two.svg";

const aboutListItems = [
  {
    id: "a1",
    title: "Diagnostic Machines Management",
    paragraph:
      "Our extensive knowledge of DICOM, RIS, & PACS enables us to efficiently oversee your diagnostic machines, ensuring smooth operations.",
  },
  {
    id: "a2",
    title: "Years of Experience",
    paragraph:
      "With years of industry experience, we've been supporting diagnostic clinics, ensuring their seamless operation and growth.",
  },
  {
    id: "a3",
    title: "Optimizing Patient Flow",
    paragraph:
      "With our tailored IT support, our aim is to streamline clinic workflows, expediting patient processing for swift and efficient care.",
  },
];

const About = () => {
  return (
    <div className="text-white container mx-auto mt-48 flex justify-between">
      <div className="flex flex-col gap-y-32">
        <div className="relative flex flex-col items-center gap-y-4">
          <Image
            src={shape}
            alt="weird shape"
            width={624}
            height={688}
            className="absolute -top-1/2 -z-10"
          />
          <SectionHeader title="about us" />
          <h2 className="max-w-[660px] text-center text-[56px] font-semibold">
            Experts in DICOM, RIS, & PACS Management
          </h2>
        </div>
        <ul className="flex flex-col gap-y-16">
          {aboutListItems.map((item) => (
            <div className="flex items-center gap-x-4" key={item.id}>
              <Image src={disc} alt="disc" width={32} height={32} />
              <li className="max-w-[500px]">
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p>{item.paragraph}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-y-24">
        <p className="max-w-[675px]">
          We're a dedicated team of experts, formerly employed by Canada's top
          DICOM, RIS, & PACS providers. With an in-depth understanding of
          diagnostic clinics, we're adept at resolving the specific IT issues
          you encounter daily.
        </p>
        <Image
          src={aboutImg}
          alt="person operating a weird computer"
          width={480}
          height={580}
        />
      </div>
    </div>
  );
};

export default About;
