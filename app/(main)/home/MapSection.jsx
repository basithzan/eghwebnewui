"use client";

const MapSection = () => {
  return (
    <section className="w-full">
      <div className="px-[5%] py-8 md:py-10">
        <h2 className="text-[2rem] lg:text-[2.5rem] font-semibold text-[#fb511e] uppercase">
          Contact Us
        </h2>
      </div>
      <iframe
        className="w-full h-[300px] md:h-[400px] lg:h-[450px] block"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.674584668498!2d55.22816!3d25.161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d1b2b8a5e7%3A0x4e1c7e5f3c8b9a0d!2sAl%20Quoz%20Industrial%20Area%203%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Elite Group Holding - Areas of Operation"
        style={{ border: 0 }}
      />
    </section>
  );
};

export default MapSection;
