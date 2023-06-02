import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm(process.env.formKey);
  if (state.succeeded) {
    return (
      <>
        <div>
          <h3 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
            contact{" "}
            <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
              {" "}
              us{" "}
            </span>
          </h3>
          <div className="doodle flex justify-center">
            <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
          </div>

          <div className="grid grid-cols-2">
            <span className="text-5xl tracking-wide text-center font-bold uppercase bg-play-green p-5 rounded-xl text-white my-20 leading-loose">
              message sent succesfully! ✅
            </span>
            <div className="">
              <img
                src="/images/lasergun3d.webp"
                alt="3D character with laser guns"
                className="w-2/5 absolute right-11 updown-animation"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div id="contact-us">
        <h3 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          contact{" "}
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            {" "}
            us{" "}
          </span>
        </h3>
        <div className="doodle flex justify-center">
          <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
        </div>

        <div className="form-container grid md:grid-cols-5 md:my-20 mx-6 md:mx-0">
          <div className="col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid md:grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="name" className="text-lg">
                    <span className="py-5 ">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="p-4 tracking-widest my-5 rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="company" className="text-lg">
                    <span className="py-5 ">Company Name</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="p-4 tracking-widest my-5 rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="email" className="text-lg">
                    <span className="py-5 ">Email Address</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="p-4 tracking-widest my-5 rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="phone" className="text-lg">
                    <span className="py-5 ">Contact Number</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="p-4 tracking-widest my-5 rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
              </div>
              <label htmlFor="message" className="text-lg">
                <span className="py-5 ">Ask us a question</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4 tracking-widest my-5 rounded-xl bg-input-field border w-full text-xl"
                rows={6}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="privacy grid grid-cols-4 items-center lg:justify-items-center">
                <label
                  htmlFor="_optin"
                  className="block text-base font-thin col-span-4 lg:col-span-3"
                >
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this{" "}
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.freeprivacypolicy.com/live/cee1bdb0-99a4-434e-8878-9ba657c383b6"
                  >
                    Privacy Policy
                  </a>{" "}
                  .
                </label>
                <input
                  type="checkbox"
                  className="col-span-4 md:col-span-1 my-5 p-3 bg-green-100 border-green-300 text-green-500 focus:ring-green-200"
                  name="_optin"
                  id="_optin"
                  required
                />
                <ValidationError
                  prefix="Privacy"
                  field="_optin"
                  errors={state.errors}
                />
              </div>
              <div className="flex justify-center lg:justify-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="p-6 my-6 max-h-3 text-3xl w-32 tracking-wider rounded-md bg-hero-pattern bg-cover uppercase text-white font-semibold flex flex-col items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/contact3d.webp"
              alt="3D hands from phones reaching out"
              className="w-2/5 absolute right-11 updown-animation"
            />
          </div>
        </div>
        <div className=" md:hidden">
          <img
            src="/images/contact3d.webp"
            alt="3D hands from phones reaching out"
            className=" updown-animation"
          />
        </div>
      </div>
    </>
  );
}
