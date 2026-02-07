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

        {/* Location Badge */}
        <div className="flex items-center justify-center mb-8">
          <span className="inline-block bg-primary/30 backdrop-blur-md border border-secondary/50 text-white px-6 py-2 rounded-full text-sm font-semibold">
            📍 Serving Dehradun & Uttarakhand
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Grow Your Business <br />
          <span className="bg-secondary bg-clip-text text-transparent">
            Online Today
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Expert digital marketing services in Dehradun, Uttarakhand. SEO, social media, and content marketing to transform your brand.
        </p>


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
