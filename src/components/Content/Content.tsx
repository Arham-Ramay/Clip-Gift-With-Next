"use client";

import { useEffect, useState } from "react";

const Content = () => {

 
  useEffect(() => {


    const handleScroll = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // Explicitly define the type

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => { // Explicitly define the type
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-48">
     
     

      {/* Sidebar */}
      <div className="lg:hidden md:hidden items-center text-center">
      <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Jump To
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right- w-full  0 mt-2 items-center  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#platform")}
          >
            What is Platform as a service (PaaS)?
          </button>

          {/* <p className="text-md md:px-12 mb-4">Platform as a Service defined</p> */}
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#defined")}
          >
            Platform as a Service defined
          </button>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#benefits")}
          >
            Benefits of PaaS
          </button>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#laas")}
          >
            Differences between IaaS, PaaS, and SaaS
          </button>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#related")}
          >
            Related products and services
          </button>
          </div>
        </div>
      )}
    </div>
      </div>
      <div className="w-full md:w-1/4 hidden md:block lg:block lg:w-3/12  md:order-1 fixed h-90 left-0 bg-white">
    
        <div className="p-4 overflow-y-auto" style={{ maxHeight: "425px" }}>
          <p className="text-lg font-semibold md:px-12 mb-4">
            What is Platform as a service (PaaS)?
          </p>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#platform")}
          >
            What is Platform as a service (PaaS)?
          </button>

          {/* <p className="text-md md:px-12 mb-4">Platform as a Service defined</p> */}
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#defined")}
          >
            Platform as a Service defined
          </button>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#benefits")}
          >
            Benefits of PaaS
          </button>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#laas")}
          >
            Differences between IaaS, PaaS, and SaaS
          </button>
          <button
            className="text-md md:px-12 mb-4 text-start"
            onClick={() => (window.location.hash = "#related")}
          >
            Related products and services
          </button>

          <p className="text-md md:px-12 mb-4">Take the next step</p>
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-9/12 md:px-12 bg-white md:order-2 ml-auto">
        <div className="p-4">
          {/* 1st */}
          <div className=" md:px-12">
            <p className="text-2xl font-semibold">
              What is Platform as a service (PaaS)?
            </p>
            <p className="text-lg">
              Platform as a Service, also known as PaaS, is a type of cloud
              computing service model that offers a flexible, scalable cloud
              platform to develop, deploy, run, and manage apps. PaaS provides
              everything developers need for application development without the
              headaches of updating the operating system and development tools
              or maintaining hardware. Instead, the entire PaaS environment—or
              platform—is delivered by a third-party service provider via the
              cloud. <br />
              <br />
              PaaS helps businesses avoid the hassle and cost of installing
              hardware or software to develop or host new custom applications.
              Development teams simply purchase pay-as-you-go access to
              everything they need to build custom apps, including
              infrastructure, development tools, operating systems, and more.{" "}
              <br />
              <br />
              The result is simpler, faster, and secure app development that
              gives developers the freedom to focus on their application code.
            </p>
          </div>
          {/*2 */}
          <div className=" md:px-12 mt-5" id="defined">
            <p className="text-2xl font-semibold">
              Platform as a Service defined
            </p>
            <p className="text-lg">
              Platform as a Service, also known as PaaS, is a type of cloud
              computing service model that offers a flexible, scalable cloud
              platform to develop, deploy, run, and manage apps. PaaS provides
              everything developers need for application development without the
              headaches of updating the operating system and development tools
              or maintaining hardware. Instead, the entire PaaS environment—or
              platform—is delivered by a third-party service provider via the
              cloud. <br />
              <br />
              PaaS helps businesses avoid the hassle and cost of installing
              hardware or software to develop or host new custom applications.
              Development teams simply purchase pay-as-you-go access to
              everything they need to build custom apps, including
              infrastructure, development tools, operating systems, and more.{" "}
              <br />
              <br />
              The result is simpler, faster, and secure app development that
              gives developers the freedom to focus on their application code.
            </p>
          </div>
          {/* 3 */}
          <div className=" md:px-12 mt-5" id="">
            <p className="text-2xl font-semibold">How does PaaS work?</p>
            <p className="text-lg">
              Platform as a Service, also known as PaaS, is a type of cloud
              computing service model that offers a flexible, scalable cloud
              platform to develop, deploy, run, and manage apps. PaaS provides
              everything developers need for application development without the
              headaches of updating the operating system and development tools
              or maintaining hardware. Instead, the entire PaaS environment—or
              platform—is delivered by a third-party service provider via the
              cloud. <br />
              <br />
              PaaS helps businesses avoid the hassle and cost of installing
              hardware or software to develop or host new custom applications.
              Development teams simply purchase pay-as-you-go access to
              everything they need to build custom apps, including
              infrastructure, development tools, operating systems, and more.{" "}
              <br />
              <br />
              The result is simpler, faster, and secure app development that
              gives developers the freedom to focus on their application code.
            </p>
          </div>
          {/* 4th */}
          <div className=" md:px-12 mt-5" id="benefits">
            <p className="text-2xl font-semibold">Benefits of PaaS</p>
            <p className="text-lg">
              Platform as a Service, also known as PaaS, is a type of cloud
              computing service model that offers a flexible, scalable cloud
              platform to develop, deploy, run, and manage apps. PaaS provides
              everything developers need for application development without the
              headaches of updating the operating system and development tools
              or maintaining hardware. Instead, the entire PaaS environment—or
              platform—is delivered by a third-party service provider via the
              cloud. <br />
              <br />
              PaaS helps businesses avoid the hassle and cost of installing
              hardware or software to develop or host new custom applications.
              Development teams simply purchase pay-as-you-go access to
              everything they need to build custom apps, including
              infrastructure, development tools, operating systems, and more.{" "}
              <br />
              <br />
              The result is simpler, faster, and secure app development that
              gives developers the freedom to focus on their application code.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Faster time to market
                  </div>
                  <p className="text-gray-700 text-base">
                    In-house application stacks come with headaches, especially
                    when it comes to upgrades. With PaaS, the provider is
                    responsible for keeping everything up-to-date—and none of
                    the maintenance pain is yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Low maintenance</div>
                  <p className="text-gray-700 text-base">
                    In-house application stacks come with headaches, especially
                    when it comes to upgrades. With PaaS, the provider is
                    responsible for keeping everything up-to-date—and none of
                    the maintenance pain is yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Cost-effective pricing
                  </div>
                  <p className="text-gray-700 text-base">
                    PaaS resources are on-demand, so you only pay for what you
                    actually use. A PaaS also provides access to advanced
                    development tools and capabilities that might be too
                    expensive to purchase outright.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* second row buttons */}
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Faster time to market
                  </div>
                  <p className="text-gray-700 text-base">
                    In-house application stacks come with headaches, especially
                    when it comes to upgrades. With PaaS, the provider is
                    responsible for keeping everything up-to-date—and none of
                    the maintenance pain is yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Low maintenance</div>
                  <p className="text-gray-700 text-base">
                    In-house application stacks come with headaches, especially
                    when it comes to upgrades. With PaaS, the provider is
                    responsible for keeping everything up-to-date—and none of
                    the maintenance pain is yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Cost-effective pricing
                  </div>
                  <p className="text-gray-700 text-base">
                    PaaS resources are on-demand, so you only pay for what you
                    actually use. A PaaS also provides access to advanced
                    development tools and capabilities that might be too
                    expensive to purchase outright.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className=" md:px-12 mt-5" id="laas">
            <p className="text-2xl font-semibold">
              Differences between IaaS, PaaS, and SaaS
            </p>
            <p className="text-lg">
              Platform as a Service, also known as PaaS, is a type of cloud
              computing service model that offers a flexible, scalable cloud
              platform to develop, deploy, run, and manage apps. PaaS provides
              everything developers need for application development without the
              headaches of updating the operating system and development tools
              or maintaining hardware. Instead, the entire PaaS environment—or
              platform—is delivered by a third-party service provider via the
              cloud. <br />
              <br />
              PaaS helps businesses avoid the hassle and cost of installing
              hardware or software to develop or host new custom applications.
              Development teams simply purchase pay-as-you-go access to
              everything they need to build custom apps, including
              infrastructure, development tools, operating systems, and more.{" "}
              <br />
              <br />
              The result is simpler, faster, and secure app development that
              gives developers the freedom to focus on their application code.
            </p>
          </div>
          {/* 6 */}
          <div className=" md:px-12 mt-5" id="related">
            <p className="text-2xl font-semibold">
              Related products and services
            </p>
            <p className="text-lg">
              Platform as a Service, also known as PaaS, is a type of cloud
              computing service model that offers a flexible, scalable cloud
              platform to develop, deploy, run, and manage apps. PaaS provides
              everything developers need for application development without the
              headaches of updating the operating system and development tools
              or maintaining hardware. Instead, the entire PaaS environment—or
              platform—is delivered by a third-party service provider via the
              cloud. <br />
              <br />
              PaaS helps businesses avoid the hassle and cost of installing
              hardware or software to develop or host new custom applications.
              Development teams simply purchase pay-as-you-go access to
              everything they need to build custom apps, including
              infrastructure, development tools, operating systems, and more.{" "}
              <br />
              <br />
              The result is simpler, faster, and secure app development that
              gives developers the freedom to focus on their application code.
            </p>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Content;
