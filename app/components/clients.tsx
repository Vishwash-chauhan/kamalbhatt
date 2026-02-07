'use client';

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Client 1',
      logo: 'https://via.placeholder.com/200x100?text=Client+1',
    },
    {
      id: 2,
      name: 'Client 2',
      logo: 'https://via.placeholder.com/200x100?text=Client+2',
    },
    {
      id: 3,
      name: 'Client 3',
      logo: 'https://via.placeholder.com/200x100?text=Client+3',
    },
    {
      id: 4,
      name: 'Client 4',
      logo: 'https://via.placeholder.com/200x100?text=Client+4',
    },
    {
      id: 5,
      name: 'Client 5',
      logo: 'https://via.placeholder.com/200x100?text=Client+5',
    },
    {
      id: 6,
      name: 'Client 6',
      logo: 'https://via.placeholder.com/200x100?text=Client+6',
    },
    {
      id: 7,
      name: 'Client 7',
      logo: 'https://via.placeholder.com/200x100?text=Client+7',
    },
    {
      id: 8,
      name: 'Client 8',
      logo: 'https://via.placeholder.com/200x100?text=Client+8',
    },
    {
      id: 9,
      name: 'Client 9',
      logo: 'https://via.placeholder.com/200x100?text=Client+9',
    },
    {
      id: 10,
      name: 'Client 10',
      logo: 'https://via.placeholder.com/200x100?text=Client+10',
    },
    {
      id: 11,
      name: 'Client 11',
      logo: 'https://via.placeholder.com/200x100?text=Client+11',
    },
    {
      id: 12,
      name: 'Client 12',
      logo: 'https://via.placeholder.com/200x100?text=Client+12',
    },
    {
        id: 13,
        name: 'Client 13',
        logo: 'https://via.placeholder.com/200x100?text=Client+13',
    },
    {
        id: 14,
        name: 'Client 14',
        logo: 'https://via.placeholder.com/200x100?text=Client+14',
    },
    {
        id: 15,
        name: 'Client 15',
        logo: 'https://via.placeholder.com/200x100?text=Client+15',
    }
  ];

  return (
    <section 
      id="clients" 
      className="py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Clients
          </h2>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-auto max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
