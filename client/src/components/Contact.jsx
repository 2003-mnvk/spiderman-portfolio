import { useState } from "react";
import axios from "axios";
import Reveal from "./Reveal";

function Contact() {
  // ================================
  // FORM STATE
  // ================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  // ================================
  // HANDLE CHANGE
  // ================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // ================================
  // HANDLE SUBMIT
  // ================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setStatus("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        formData
      );

      setStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      setStatus(
        error.response?.data?.message ||
        "Transmission failed. Try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <section
      id="contact"
      className="contact-section"
    >

      <Reveal>

        <div className="section-title">

          <p>CHAPTER 05</p>

          <h2>SEND A WEB</h2>

        </div>


        <p className="contact-intro">
          Got an idea, opportunity or mission?
          Send a transmission.
        </p>


        <div className="contact-container">

          {/* ================================ */}
          {/* CONTACT INFO */}
          {/* ================================ */}

          <div className="contact-info">

            <span className="contact-label">
              OPEN CHANNEL
            </span>


            <h3>
              LET'S BUILD
              <span> SOMETHING.</span>
            </h3>


            <p>
              Whether it's a project, opportunity or simply
              a conversation about technology, my inbox is open.
            </p>


            <div className="contact-details">

              <div className="contact-detail">

                <span>
                  EMAIL
                </span>

                <strong>
                  mnvkarthikeya@gmail.com
                </strong>

              </div>


              <div className="contact-detail">

                <span>
                  LOCATION
                </span>

                <strong>
                  HYDERABAD, INDIA
                </strong>

              </div>


              <div className="contact-detail">

                <span>
                  STATUS
                </span>

                <strong className="available">
                  ● AVAILABLE FOR OPPORTUNITIES
                </strong>

              </div>

            </div>

          </div>


          {/* ================================ */}
          {/* CONTACT FORM */}
          {/* ================================ */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-header">

              <span>
                TRANSMISSION
              </span>

              <span>
                SECURE CHANNEL
              </span>

            </div>


            <div className="form-body">

              {/* NAME */}

              <div className="form-group">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Peter Parker..."
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="What's the mission?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="send-button"
                disabled={loading}
              >

                {loading
                  ? "TRANSMITTING..."
                  : "SHOOT THE WEB"
                }

                {!loading && (
                  <span>→</span>
                )}

              </button>


              {/* STATUS */}

              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}

            </div>

          </form>

        </div>


        {/* FOOTER */}

        <div className="contact-bottom">

          <span>
            KM © 2026
          </span>

          <span>
            BUILT WITH CODE & COFFEE
          </span>

          <span>
            🕷️
          </span>

        </div>

      </Reveal>

    </section>
  );
}

export default Contact;