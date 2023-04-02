import React from "react";

const ContentTab1 = () => {
  const ChooseUs = [
    {
      icon: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
      title: "Support 24",
      description:
        "Pellentesque mollis, metus nec fringilla aliquam. Donec consequat orci quis volutpat imperdiet.",
    },
    {
      icon: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
      title: "Fast",
      description:
        "Magna lacus iaculis elit, quis pharetra varius. Aenean lectus ex, placerat id tellus in eros.",
    },
    {
      icon: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
      title: "Shipping All Around The World",
      description:
        " Pellentesque varius ex vel consequat quis. Sed mauris ex, imperdiet sit amet nisl ac, ultrices.",
    },
    {
      icon: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
      title: "Easy Payment",
      description:
        "Vestibulum gravida iaculis nisl, vel lobortis eros. Praesent vulputate lacus bibendum augue.",
    },
  ];
  return (
    <div className="container my-7 px-6 mx-auto bg-white pt-10 xl:pt-0 rounded-xl xl:max-w-5xl max-w-sm">
      <section className="text-gray-800">
        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 px-3">
            <h2 className="text-3xl font-bold mb-2 xl:mb-6">
              Why choose <u className="text-blue-600">us?</u>
            </h2>
            <p className="text-gray-500 xl:mb-12">
              Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
              iaculis malesuada. Aenean gravida magna orci, non efficitur est
              porta id. Donec magna diam.
            </p>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 xl:mb-6 mb-md-0 px-3">
            <div className="flex flex-wrap">
              {ChooseUs.map((item) => (
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path fill="currentColor" d={item.icon}></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">{item.title}</p>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentTab1;
