import React from "react";
import Banner from "./Banner";
import SectionHeader from "../ui/SectionHeader";
import TestimonialsCarousel from "./Carousel";
import person_one from "../../assets/testimonial-person-one.svg";
import person_two from "../../assets/testimonial-preson-two.svg";
import person_three from "../../assets/testimonial-person-three.svg";
import person_four from "../../assets/testimonial-person-four.svg";

const testimonialItems = [
  {
    index: 1,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_one,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 2,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_two,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 3,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_three,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 4,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_four,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 5,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_one,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 6,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_two,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 7,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_three,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
  {
    index: 8,
    text: "I've had the privilege of working closely with Ian for over three years, and his support has been nothing short of essential. Ian's quick and decisive actions have pulled us out of critical situations, such as when someone infiltrated our network, gaining control of a clinic workstation. Thanks to Ian's expertise, he swiftly identified and blocked the threat,  preventing any major disruptions to our operations. His dedication to the security and efficiency of our IT infrastructure has proven invaluable. I wholeheartedly recommend Ian and ModalityIT to any business owner seeking reliable and results-driven IT support.",
    img: person_four,
    source: "Dmitry Zaslavsky,  Prime Care Walk-In Clinic",
  },
];

const Testimonials = () => {
  return (
    <section className="mx-auto mt-48 gap-y-24 text-white lg:max-w-[1060px] 2xl:max-w-[1364px]">
      <div className="flex flex-col items-center gap-y-16">
        <SectionHeader title="testimonials" />
        <Banner />
      </div>
      <TestimonialsCarousel items={testimonialItems} />
    </section>
  );
};

export default Testimonials;
