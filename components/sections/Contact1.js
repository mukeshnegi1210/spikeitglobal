"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact1({ hasYellowBg }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitLoading(true);

    const payload = {
      access_key: "a940fba0-2b98-4a6d-aaa9-172abc43cd50",
      ...data,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Your query has been sent successfully! ✅");
        reset();
      } else {
        throw new Error(result.message || "Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setSuccessMessage("❌ Submission failed. Please try again later.");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <section
      className={`section-contact bg-1 pt-130 pb-130 ${
        hasYellowBg ? "contact-service-details bg-5" : ""
      }`}
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <div className="heading-title mb-40">
                <span
                  className="sub-title text-white font-man wow fadeInUpSmall"
                  data-wow-delay=".2s"
                >
                  Work Inquiry
                </span>
                <h2
                  className="title text-white wow fadeInUpSmall"
                  data-wow-delay=".3s"
                >
                  Ready to Transform Your Business?
                </h2>
                <p
                  className="des font-man text-white wow fadeInUpSmall"
                  data-wow-delay=".4s"
                >
                  Let’s collaborate on your next project and unlock the power of
                  digital transformation together.
                </p>
              </div>

              <div
                className="contact-wrap flex-three mb-40 wow fadeInUpSmall"
                data-wow-delay=".4s"
              >
                <div className="icon text-white">
                  <i className="icon-phones" />
                </div>
                <div className="contact-content">
                  <span className="font-man text-white">Call For Inquiry</span>
                  <p>+1 732-820-0276</p>
                </div>
              </div>

              <div
                className="contact-wrap flex-three wow fadeInUpSmall"
                data-wow-delay=".5s"
              >
                <div className="icon text-white">
                  <i className="icon-envelopes" />
                </div>
                <div className="contact-content">
                  <span className="font-man text-white">Send Us Email</span>
                  <p>info@spikeitglobal.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-contact-home1">
              <div className="inner-title-form center mb-30">
                <h3 className="title-form">Need Help For Project!</h3>
                <p>
                  We are ready to help with your next projects — let’s work
                  together.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="form-contact-home"
              >
                <div className="mb-20">
                  <fieldset className="relative">
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className="form-control"
                      placeholder="Full Name"
                    />
                    <i className="icon-user" />
                  </fieldset>
                  {errors.fullName && (
                    <p className="text-danger">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="input-group flex-one">
                  <div className="mb-20">
                    <fieldset className="relative ">
                      <input
                        type="email"
                        className="form-control"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        placeholder="Email"
                      />
                      <i className="icon-envelopes" />
                    </fieldset>
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>

                 <div className="mb-20">
                   <fieldset className="relative ">
                    <input
                      type="text"
                      className="form-control"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers allowed",
                        },
                        minLength: {
                          value: 10,
                          message: "At least 10 digits required",
                        },
                      })}
                      placeholder="Phone"
                    />
                    <i className="icon-phone" />
                  </fieldset>
                  {errors.phone && (
                    <p className="text-danger">{errors.phone.message}</p>
                  )}
                 </div>
                </div>

              <div  className="mb-15">
                  <fieldset>
                  <textarea
                    rows={4}
                    cols={50}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Your Message"
                  />
                </fieldset>
                {errors.message && (
                  <p className="text-danger">{errors.message.message}</p>
                )}
              </div>

                <fieldset className="">
                  <button
                    className="btn-submit"
                    type="submit"
                    disabled={isSubmitLoading}
                  >
                    {isSubmitLoading ? (
                      <strong
                        className="spinner-border text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </strong>
                    ) : (
                      <span>Send</span>
                    )}
                    <i className="icon-right-icon" />
                  </button>
                </fieldset>

                {successMessage && (
                  <p className="success-message mt-3 text-center">
                    {successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
