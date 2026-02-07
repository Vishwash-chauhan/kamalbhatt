'use client';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Local video file */}
        <source
          src="/videos/Home Hero Digital Marketing Video.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support HTML5 video.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Grow Your Business <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Online Today
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, and content marketing to transform your brand.
        </p>

        {/* Location Badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="inline-block bg-blue-600/30 backdrop-blur-md border border-blue-400/50 text-blue-100 px-6 py-2 rounded-full text-sm font-semibold">
            📍 Serving Dehradun & Uttarakhand
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 duration-300">
            Start Your Journey
          </button>
          <button className="bg-white/20 hover:bg-white/30 border border-white/50 text-white font-semibold px-8 py-4 rounded-lg backdrop-blur-md transition transform hover:scale-105 duration-300">
            Learn More
          </button>
        </div>

        {/* Features/Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
