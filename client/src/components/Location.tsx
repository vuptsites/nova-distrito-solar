import { useRef, useEffect } from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/constants/company';
import { MapView } from './Map';

export default function Location() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // Add marker for Nova Distrito location
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: COMPANY.location.coordinates,
      title: COMPANY.name,
    });

    // Create info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 12px; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${COMPANY.name}</h3>
          <p style="margin: 0 0 4px 0; font-size: 14px;">${COMPANY.location.address}</p>
          <p style="margin: 0 0 4px 0; font-size: 14px;">${COMPANY.location.neighborhood}, ${COMPANY.location.city} - ${COMPANY.location.state}</p>
          <p style="margin: 0; font-size: 14px; color: #0D47A1; font-weight: bold;">${COMPANY.location.zipCode}</p>
        </div>
      `,
    });

    // Open info window on marker click
    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Open info window by default
    infoWindow.open(map, marker);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Atendemos Brasília e Região
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visite nossa sede ou entre em contato para agendar uma visita técnica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slideInLeft">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-700 font-medium">{COMPANY.location.address}</p>
                  <p className="text-gray-700">{COMPANY.location.neighborhood}</p>
                  <p className="text-gray-700">{COMPANY.location.city} – {COMPANY.location.state}</p>
                  <p className="text-gray-700 font-semibold">CEP: {COMPANY.location.zipCode}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <a
                    href={COMPANY.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold text-lg hover:text-green-700 transition-colors"
                  >
                    {COMPANY.contact.whatsapp}
                  </a>
                  <p className="text-gray-700 text-sm mt-2">Atendimento rápido e direto</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-600">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🕐</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-700">Sábado: 9h às 13h</p>
                  <p className="text-gray-700 text-sm text-yellow-700 font-semibold mt-2">Agendamento de visita técnica disponível</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={COMPANY.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>Agendar Visita Técnica</span>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg animate-slideInRight h-96 lg:h-auto">
            <MapView
              initialCenter={COMPANY.location.coordinates}
              initialZoom={16}
              onMapReady={handleMapReady}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
