'use client';

export default function TrackRecord() {
  const stats = [
    {
      number: '2015',
      label: 'Founded Meegan Media',
      detail: 'Dehradun',
    },
    {
      number: '100+',
      label: 'Successful Campaigns',
      detail: 'Managed',
    },
    {
      number: '7X',
      label: 'Average ROAS',
      detail: 'Across all clients',
    },
    {
      number: '300%',
      label: 'Organic Traffic Growth',
      detail: 'Average increase',
    },
    {
      number: '98%',
      label: 'Client Retention Rate',
      detail: 'Year-over-year',
    },
    {
      number: '100+',
      label: 'Industries Served',
      detail: 'Startups to enterprises',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Track Record
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Results that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 hover:bg-white/15 transition duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-white/70">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
