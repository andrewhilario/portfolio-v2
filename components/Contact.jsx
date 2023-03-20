import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_acfkhlq",
        "template_95masph",
        form.current,
        "pDmfC5akb_XHTuydF"
      )
      .then(
        (result) => {
          toast.success("Successfully sent!");
          console.log(result.text);
        },
        (error) => {
          toast.error("This didn't work.");
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-[#292929] text-white px-10 lg:px-44">
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-extrabold w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl py-5 font-extrabold flex items-center w-full">
            <span className="w-full md:w-[150px] lg:w-[50px] h-2 bg-white block"></span>
            <span className="mx-4">Contact</span>
            <span className="w-full h-2 bg-white block"></span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between gap-5 md:gap-6 lg:gap-10 items-center py-10 md:py-14">
          <div className="w-full md:w-1/2 lg:w-2/3">
            <h1 className="text-5xl md:text-6xl lg:text-8xl">
              Let's make something amazing together. Get in touch!
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="md:w-1/3 flex flex-col gap-3 p-5 bg-white text-slate-900 rounded-lg"
          >
            <div className="flex flex-col gap-2 py-5">
              <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
                Feedback
              </h1>
              <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                I'm always ready for a new challenge. Let's work together!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="user_name"
                className="text-lg font-bold md:text-xl"
              >
                Email
              </label>
              <input
                type="email"
                name="user_name"
                id="user_name"
                className="border-2 border-slate-900 p-2 rounded-lg font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-bold md:text-xl">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="border-2 border-slate-900 p-2 rounded-lg md:h-[100px] lg:h-[150px] resize-none font-medium"
              />
            </div>

            <input
              type="submit"
              name="submit"
              id="submit"
              value="Send"
              className="bg-green-600 cursor-pointer p-2 rounded-lg font-bold text-lg text-white hover:bg-green-800 ease-in-out duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
