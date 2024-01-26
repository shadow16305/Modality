import Image from "next/image";
import disc from "../../assets/disc.svg";

const featuresColOne = [
  {
    id: "f1",
    text: "Unlimited Onsite Support",
  },
  {
    id: "f2",
    text: "Unlimited Remote Support",
  },
  {
    id: "f3",
    text: "24/7 Help Desk",
  },
  {
    id: "f4",
    text: "Hardware & Software Installation Help",
  },
];

const featuresColTwo = [
  {
    id: "fc5",
    text: "Network management",
  },
  {
    id: "fc6",
    text: "Diagnostic Machines Management Help",
  },
  {
    id: "fc7",
    text: "Cybersecurity Solutions",
  },
  {
    id: "fc8",
    text: "Third-party Vendor Management ",
  },
];

const Features = () => {
  return (
    <div className="text-white mt-48 flex flex-col items-center gap-y-20">
      <h2 className="max-w-[654px] text-center text-[56px] font-semibold">
        For a flat-monthly fee, here’s what you get:
      </h2>
      <div className="flex gap-x-20">
        <ul className="flex flex-col gap-y-5">
          {featuresColOne.map((feature, index) => (
            <div className="flex items-center gap-x-4" key={index}>
              <Image src={disc} alt="disc" width={32} height={32} />
              <li className="font-semibold">{feature.text}</li>
            </div>
          ))}
        </ul>
        <ul className="flex flex-col gap-y-5">
          {featuresColTwo.map((feature, index) => (
            <div className="flex items-center gap-x-4" key={index}>
              <Image src={disc} alt="disc" width={32} height={32} />
              <li className="font-semibold">{feature.text}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
