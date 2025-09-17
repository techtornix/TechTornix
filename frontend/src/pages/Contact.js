import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Removed framer-motion
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';
import toast from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'info@techtornix.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+92 910 132 9836',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: '2nd Floor, Paradise Workspace, Main Boulevard Road, Faisal Rasheed Rd, Opposite Chase Value, near McDonald\'s, Faisalabad, 38000',
      description: 'Come say hello at our office'
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Weekend support available'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'SaaS Development',
    'UI/UX Design',
    'Digital Marketing',
    'IoT Solutions',
    'Other'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.6, delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-scroll to anchor when navigated with a hash (e.g. /contact#contact-form)
  useEffect(() => {
    if (location && location.pathname === '/contact' && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // account for fixed header
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        // Small timeout to ensure layout/animations have finished
        setTimeout(() => {
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 50);
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_u8nkfq8';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_vg8yvg8';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'coqd8TXoL3rGNrfy_';

      // Prepare template parameters to match your EmailJS template exactly
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Not provided',
        message: `📩 New Contact Request

👤 Full Name: ${formData.name}
📧 Email Address: ${formData.email}
📞 Contact Number: ${formData.phone || 'Not provided'}
🏢 Company: ${formData.company || 'Not specified'}
🔧 Service Interested In: ${formData.service || 'Not specified'}

📝 Project Description:
${formData.message}

---
Sent via Contact form on your website.`
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '', email: '', phone: '', company: '',
          service: '', message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Techtornix | Get In Touch</title>
        <meta name="description" content="Contact Techtornix for your next project. Get in touch with our team for web development, mobile apps, AI solutions, and more." />
      </Helmet>

      <div
        ref={sectionRef}
        className="min-h-screen pt-8 anim-fade-in"
      >
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container-custom text-center">
            <div className="anim-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next project? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section id='contact_form' className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-card text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="contact-form" className="anim-fade-in-left">
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:opacity-50"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:opacity-50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:opacity-50"
                            placeholder="+92 910 132 9836"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:opacity-50"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div> */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          rows={5}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white disabled:opacity-50"
                          placeholder="Tell us about your project, requirements, timeline, etc."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#37b7c3] to-[#071952] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FiSend className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8 anim-fade-in-right">
                {/* Map */}
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Our Location
                  </h3>
                  <div className="rounded-lg overflow-hidden h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0123456789!2d73.0479!3d31.4504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242c2c2c2c2c2%3A0x1234567890abcdef!2sMain%20Boulevard%20Road%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Techtornix Office Location"
                    ></iframe>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-[#37b7c3] to-[#071952] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Immediate Help?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    For urgent inquiries or immediate assistance, don't hesitate to call us directly.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+929101329836"
                      className="flex items-center space-x-3 text-white hover:text-blue-100 transition-colors duration-200"
                    >
                      <FiPhone className="w-5 h-5" />
                      <span>+92 910 132 9836</span>
                    </a>
                    <a
                      href="mailto:info@techtornix.com"
                      className="flex items-center space-x-3 text-white hover:text-blue-100 transition-colors duration-200"
                    >
                      <FiMail className="w-5 h-5" />
                      <span>info@techtornix.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
