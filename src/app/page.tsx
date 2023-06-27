import Slider from "../../components/Slider";
import HeroSection from "../../components/sections/HeroSection";
import { Header } from "../../components/Header";
import VideoSection from "../../components/sections/VideoSection";
import FeatureSection from "../../components/sections/FeatureSection";
import Footer from "../../components/Footer";
import FAQSection from "../../components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Header blogsection={false} />
      <main className="h-full w-full">
        <section
          id="hero-section-md"
          className="md:w-screen md:h-screen hidden md:table"
        >
          <HeroSection isMobile={false} />
        </section>
        <section id="hero-section-mobile" className="w-screen md:hidden">
          <HeroSection isMobile={true} />
        </section>
        <div
          id="quick-stats"
          className="w-full flex-col h-14 items-center justify-center -mt-4 hidden md:flex"
        >
          <div className="flex flex-row w-full h-14 items-center justify-center space-x-6">
            {" "}
            <a
              href="https://intelowl.readthedocs.io/en/latest/Usage.html#analyzers"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3 text-center justify-center">
                150+
              </span>{" "}
              {/* link to prolly the docs where analyzers are explained */}
              <span className="text-sm font-normal font-SpaceGrotesk ">
                Analyzers
              </span>
            </a>
            <a
              href="https://intelowl.readthedocs.io/en/latest/Usage.html#connectors"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                5+
              </span>{" "}
              <span className="text-sm font-SpaceGrotesk font-normal">
                Connectors
              </span>
            </a>
            <a
              href="https://intelowl.readthedocs.io/en/latest/Usage.html#playbooks"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                5+
              </span>{" "}
              <span className="text-sm font-SpaceGrotesk font-normal">
                Playbooks
              </span>
            </a>
            <a
              href="https://intelowl.readthedocs.io/en/latest/Usage.html#visualizers"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                5+
              </span>{" "}
              <span className="text-sm font-SpaceGrotesk font-normal">
                Visualizers
              </span>
            </a>
          </div>
        </div>
        <section
          id="video-section"
          className="flex flex-col items-center justify-center md:h-screen md:w-screen mt-14"
        >
          <VideoSection />
        </section>
        <section
          id="feature-section"
          className=" w-screen flex flex-col mt-14 md:mt-0 items-center justify-start xl:mt-14 mb-24"
        >
          <h2 className="text-center text-2xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            What do we provide?
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            this is what we provide, compared to others.
          </h3>
          <FeatureSection />
        </section>
        <section
          id="testimonials-section"
          className="md:h-screen w-screen flex flex-col items-center justify-start xl:mt-16"
        >
          <h2 className="text-center text-2xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            Testimonials
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            We love to work with the community to improve the project. This is what users and contributors say about IntelOwl.
          </h3>
          <Slider isTestimonial={true} />
        </section>
        <section
          id="faq-section"
          className="flex flex-col items-center justify-start w-screen md:h-screen"
        >
          <h2 className="text-center text-3xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            FAQs
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2 mb-14 ">
            Don&apos;t worry! We are here to help. In case you don&apos;t find the answer that you are looking for, feel free to contact us
          </h3>
          <FAQSection />
        </section>
        <section
          id="sponsor-section"
          className="h-screen md:w-screen flex flex-col items-center justify-start mt-16"
        >
          <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            Our Sponsors
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            As open source project maintainers, we strongly rely on external support to get the resources and time to work on keeping the project alive, with a constant release of new features, bug fixes and general improvements.
Because of this, we joined Open Collective to obtain non-profit equal level status which allows the organization to receive and manage donations transparently. Please support IntelOwl and all the community by choosing a plan (BRONZE, SILVER, etc).
<a href="https://opencollective.com/intelowl-project/donate" target="_blank">
  <img src="https://opencollective.com/intelowl-project/donate/button@2x.png?color=blue" width=200 />
</a>
This is the list of our sponsors.
          </h3>
          <Slider isTestimonial={false} />
        </section>
      </main>
      <Footer />
    </>
  );
}
