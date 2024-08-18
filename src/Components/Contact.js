import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ theme }) => {
  // -----Form submition email send-----
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const fName_input = document.getElementById("fName_input");
    const lName_input = document.getElementById("lName_input");
    const email_input = document.getElementById("email_input");
    const message_input = document.getElementById("message_input");

    if (
      fName_input.value !== "" &&
      lName_input.value !== "" &&
      email_input.value !== "" &&
      message_input.value !== ""
    ) {
      emailjs
        .sendForm(
          "service_pk4asxc",
          "template_7xrzrda",
          e.target,
          "c_cerBrsyLHJ-Hpbw"
        )
        .then(
          () => {
            toast.success("Message sent", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          () => {
            toast.warn("Something wrong!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );
    } else {
      toast.warn("Something wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    e.target.reset();
  };

  return (
    <div className="container mx-auto max-w-[1172px] px-4 py-8 " id="contact">
      {/* -----Heading----- */}
      <div>
        <h1 className="text-center bg-gradient-to-r from-start-blue to-end-blue bg-clip-text head">
          Contact me
        </h1>
        <p className="text-center text-3xl capitalize text-light-h dark:text-dark-h">
          get in touch...
        </p>
      </div>
      {/* -----Form section----- */}
      <div className="text-center mt-8 text-light-p dark:text-dark-p">
        {theme === "dark" ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center">
            <div className="flex justify-between max-md:flex-col max-md:w-full">
              <input
                className="w-[292px] p-2 m-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0"
                type="text"
                placeholder="First name"
                name="user_name"
                id="fName_input"
              />
              <input
                className="w-[292px] p-2 m-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0"
                type="text"
                placeholder="last name"
                name="user_last_name"
                id="lName_input"
              />
            </div>
            <input
              className="w-[600px] p-2 my-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full"
              type="email"
              placeholder="Email"
              name="user_email"
              id="email_input"
            />
            <textarea
              className="w-[600px] p-2 my-2 dark-blue-border border-solid border-transparent rounded-md border-2 max-md:w-full"
              placeholder="Your project"
              rows={7}
              name="message"
              id="message_input"
            />
            <button type="submit" className="btn dark-blue-btn mt-4">
              Send your massage
            </button>
          </form>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center">
            <div className="flex justify-between max-md:flex-col max-md:w-full">
              <input
                className="w-[292px] p-2 m-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0"
                type="text"
                placeholder="First name"
                name="user_name"
                id="fName_input"
              />
              <input
                className="w-[292px] p-2 m-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full max-md:mx-0"
                type="text"
                placeholder="last name"
                name="user_last_name"
                id="lName_input"
              />
            </div>
            <input
              className="w-[600px] p-2 my-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full"
              type="email"
              placeholder="Email"
              name="user_email"
              id="email_input"
            />
            <textarea
              className="w-[600px] p-2 my-2 blue-border border-solid border-transparent rounded-md border-2 max-md:w-full"
              placeholder="Your project"
              rows={7}
              name="message"
              id="message_input"
            />
            <button type="submit" className="btn blue-btn mt-4">
              Send your massage
            </button>
          </form>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Contact;
