import ServiceCard from "./ServiceCard";
import it_support from "../../assets/it-support.svg";
import network from "../../assets/network.svg";
import phone_system from "../../assets/phone-system.svg";
import printing from "../../assets/printing.svg";
import storage from "../../assets/storage.svg";
import pacs from "../../assets/pacs.svg";
import website from "../../assets/website.svg";
import hardware from "../../assets/hardware.svg";
import SectionTitle from "../ui/SectionTitle";

const serviceCardItemsOne = [
  {
    id: "s1",
    title: "IT Support On Call",
    description: "24/7 IT Specialists Ready To Help",
    imgSrc: it_support,
  },
  {
    id: "s2",
    title: "Network",
    description: "Maintaing your local network & Wi-Fi",
    imgSrc: network,
  },
  {
    id: "s3",
    title: "Phone System",
    description: "Phone system & auto-receptionist setup",
    imgSrc: phone_system,
  },
  {
    id: "s4",
    title: "Printing",
    description: "Support & Maintenance",
    imgSrc: printing,
  },
];

const serviceCardItemsTwo = [
  {
    id: "si1",
    title: "Data Storage",
    description: "Clinic data backup solutions",
    imgSrc: storage,
  },
  {
    id: "si2",
    title: "PACS and RIS Support",
    description: "Help with issues within our abilities",
    imgSrc: pacs,
  },
  {
    id: "si3",
    title: "Custom Website & Email",
    description: "Available for a separate fee",
    imgSrc: website,
  },
  {
    id: "si4",
    title: "Hardware",
    description: "Workstations repair & replacement options ",
    imgSrc: hardware,
  },
];

const Services = () => {
  return (
    <section
      className="mx-auto mt-20 flex scroll-mt-24 flex-col gap-y-[72px] text-white lg:max-w-[1060px] 2xl:max-w-[1364px]"
      id="services"
    >
      <div className="flex items-center justify-between">
        <div className="flex max-w-[700px] flex-wrap gap-x-8 gap-y-[72px]">
          {serviceCardItemsOne.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.imgSrc}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <SectionTitle
            title="Services for your clinic"
            header="what we do"
            className="max-w-[365px]"
          />
          <p className="mt-32">
            All services are included in the flat-monthly fee subscription
            plans.
          </p>
          <button className="group relative mt-10 h-16 w-[360px] rounded-lg border border-less-dark-blue py-3 uppercase">
            <span className="absolute left-0 top-0 h-full w-0 rounded-lg bg-cyan transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10 font-bold transition-all duration-300 group-hover:text-dark-blue">
              (647) - 227 - 5559
            </span>
          </button>
        </div>
      </div>
      <div className="flex gap-x-8">
        {serviceCardItemsTwo.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
