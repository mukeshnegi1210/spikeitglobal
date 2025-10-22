"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitLoading(true);

    const payload = {
      access_key: "0ec376bf-99e3-442b-853e-a9da5e87e8b0",
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
        setSuccessMessage("✅ Your message has been sent successfully!");
        reset();
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setSuccessMessage("❌ Submission failed. Please try again later.");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <Layout
      breadcrumbTitle="Contact Us"
      bgImg="/assets/images/page/contact-us.jpg"
    >
      <section className="contact-us-page pt-130 pb-130">
        <div className="tf-container">
          <div className="row">
            {/* Left Column — Contact Info */}
            <div className="col-md-6">
              <div className="contact-us-page-content">
                <div className="heading-title">
                  <span className="sub-title texts-blue font-man">
                    Get In Touch
                  </span>
                  <h2 className="title">
                    Let’s Build Something <br /> Great Together
                  </h2>
                  <p className="des">
                    Have a question or a project in mind? Our team is ready to
                    assist you with reliable and customized IT solutions.
                  </p>
                </div>

                <div className="contact-item-wrap">
                  <div className="contact-item">
                    <div className="flex item-contact">
                      <div className="icon">
                        <i className="icon-maps" />
                      </div>
                      <div className="content">
                        <h4>Location</h4>
                        <p>
                          SpikeIT Global Solutions, Inc 100 Horizon Center Blvd,
                          Hamilton, NJ 08691
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="flex item-contact">
                      <div className="icon">
                        <i className="icon-phones" />
                      </div>
                      <div className="content">
                        <h4>Phone</h4>
                        <p>+1 732-820-0276</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="flex item-contact">
                      <div className="icon">
                        <i className="icon-envelopes" />
                      </div>
                      <div className="content">
                        <h4>Email</h4>
                        <p>info@spikeitglobal.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="flex item-contact">
                      <div className="icon">
                        <i className="icon-share-nodes" />
                      </div>
                      <div className="content">
                        <h4>Social</h4>
                        <ul className="social-footer flex-three">
                          <li>
                            <Link
                              href="https://www.facebook.com/SpikeITGlobalSolutions"
                              target="_blank"
                              className="flex-five"
                            >
                              <i className="icon-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://x.com/SpikeIT_Global"
                              target="_blank"
                              className="flex-five"
                            >
                              <i className="icon-twiter" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.linkedin.com/company/spikeit-global-solutions-inc"
                              target="_blank"
                              className="flex-five"
                            >
                              <i className="icon-ins" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="/assets/images/page/feature-h1.jpg"
                  className="contact-us-img"
                  alt="image"
                />
              </div>
            </div>

            {/* Right Column — Form */}
            <div className="col-md-6">
              <div className="contact-us-page-form bg-2">
                <h3 className="title">Send Us a Message</h3>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-us-form"
                >
                  <fieldset className="mb-18">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                    />
                    {errors.fullName && (
                      <p className="text-danger">{errors.fullName.message}</p>
                    )}
                  </fieldset>

                  <fieldset className="mb-18">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </fieldset>

                  <fieldset className="mb-18">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers allowed",
                        },
                        minLength: {
                          value: 10,
                          message: "At least 10 digits required",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-danger">{errors.phone.message}</p>
                    )}
                  </fieldset>

                  <fieldset className="mb-18">
                    <label>Message</label>
                    <textarea
                      rows={5}
                      cols={50}
                      placeholder="Write your message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="text-danger">{errors.message.message}</p>
                    )}
                  </fieldset>

                  <fieldset>
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
                        <>
                          Send <i className="icon-right-icon" />
                        </>
                      )}
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
    </Layout>
  );
}
