export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance">
              Improving Public Healthcare Systems with AI
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 text-pretty leading-relaxed">
              We have developed and deployed IRB-backed field experiments, reproductive health management software, and work with local nonprofit partners to contribute to public health. Our work resulted in partnerships with Cohere AI, the Indian Council of Medical Research, awards from MIT, BRICS, UNDP, and an invitation to apply for funding to the Gates Foundation. 
            </p>
          
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="/ai_image_2.jpg"
              alt="Pioneering AI Healthcare Solutions"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
