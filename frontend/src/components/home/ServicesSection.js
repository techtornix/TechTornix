import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'We build high-performance mobile apps for iOS and Android, focusing on custom mobile application development and user engagement.',
      image: '/images/services/ios.webp',
      color: '#00D4FF',
      link: '/services/mobile-development'
    },
    {
      id: 'web-development',
      title: 'Website Development',
      description: 'Custom web application development services designed for speed, security & SEO optimization, ensuring maximum online visibility & performance.',
      image: '/images/services/web.webp',
      color: '#61DAFB',
      link: '/services/web-development'
    },
    {
      id: 'ai-solutions',
      title: 'AI Based Solutions',
      description: 'Leverage enterprise AI solutions to fully automate business processes, improve decision-making & enhance customers interactions with cutting-edge systems.',
      image: '/images/services/AI.webp',
      color: '#FF6B6B',
      link: '/services/ai-solutions'
    },
    {
      id: 'iot-solutions',
      title: 'IoT-Based Solutions',
      description: 'Integrate IoT-based solutions into your business operations to automate data collection & remote device control for optimized performance.',
      image: '/images/services/iot.webp',
      color: '#4ECDC4',
      link: '/services/iot-solutions'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user experiences with modern design principles that convert visitors into customers.',
      image: '/images/services/uxui.webp',
      color: '#FFE66D',
      link: '/services/ui-ux-design'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive measurable business growth.',
      image: '/images/services/dm.webp',
      color: '#FF8E53',
      link: '/services/digital-marketing'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions for modern businesses with enterprise-grade security and performance.',
      image: '/images/services/cloud.webp',
      color: '#A8E6CF',
      link: '/services/cloud-services'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and customer analytics.',
      image: '/images/services/webdev.webp',
      color: '#DDA0DD',
      link: '/services/ecommerce'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Why Choose</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Techtornix
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored Services For Every Vision
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="project-card group cursor-pointer h-full"
              onClick={() => {}}
              whileHover={{ y: -10 }}
            >
              <Link to={service.link} className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative min-h-[12rem] overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white font-medium">View Details</div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium capitalize">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1 min-h-[4.5rem]">
                      {service.description.length > 120
                        ? `${service.description.substring(0, 120)}...`
                        : service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;