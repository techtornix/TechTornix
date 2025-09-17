import React, { useEffect, useRef } from 'react';
// Removed framer-motion
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiZap, 
  FiPenTool, 
  FiCode, 
  FiTrendingUp, 
  FiHeadphones,
  FiArrowRight 
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const WorkingMethodologySection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const steps = [
    {
      icon: FiZap,
      title: 'Plan',
      description: 'We start by understanding your vision, analyzing requirements, and creating a comprehensive project roadmap.',
      details: ['Requirements Analysis', 'Market Research', 'Technical Planning', 'Timeline Creation'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiPenTool,
      title: 'Design',
      description: 'Our design team creates intuitive and visually appealing interfaces that enhance user experience.',
      details: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Design System'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: FiCode,
      title: 'Develop',
      description: 'We bring designs to life using cutting-edge technologies and best development practices.',
      details: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Deploy',
      description: 'We ensure smooth deployment with proper testing, optimization, and performance monitoring.',
      details: ['Quality Testing', 'Performance Optimization', 'Cloud Deployment', 'Go-Live Support'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiHeadphones,
      title: 'Support',
      description: 'Our commitment continues with ongoing maintenance, updates, and technical support.',
      details: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Feature Enhancements'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.timeline-line',
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );

      // Animate step cards
      gsap.utils.toArray('.methodology-step').forEach((step, index) => {
        gsap.fromTo(step,
          {
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Find the 'Develop' phase step
  const developStep = steps.find((step) => step.title === 'Develop');
  const DevelopIcon = developStep.icon;

  return (
    <section 
      ref={sectionRef} 
      className="container-custom"
      style={{ 
        isolation: 'isolate',
        position: 'relative',
        zIndex: 1,
        display: 'block !important',
        visibility: 'visible !important',
        opacity: '1 !important'
      }}
    >
      <div className="text-center mb-16 anim-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Working <span className="gradient-text">Methodologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology that ensures successful project delivery, 
            from initial concept to ongoing support.
          </p>
        </div>


      {/* Show Develop phase icon here */}
      <div className="flex justify-center mb-12">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
          <DevelopIcon className="w-20 h-20 text-white" />
        </div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 timeline-line origin-top hidden lg:block"></div>

        <div className="space-y-12 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.title}
                className={`methodology-step flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 hidden lg:block">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-48 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-20 h-20 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 anim-fade-in-up animation-delay-400"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss your project and see how our proven methodology can bring your vision to life.
          </p>
          <a
            href="/contact#contact-form"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
            <FiArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkingMethodologySection;
