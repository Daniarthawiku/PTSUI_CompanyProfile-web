import React from 'react';

export default function MapView() {
    return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-neutral-border">
        <iframe
        title="Lokasi Pabrik PT. Sahabat Utama Industri"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3823859260774!2d110.01504767504419!3d-6.964137793036396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7041000dae283f%3A0x53282450b72fabcb!2sPT%20SAHABAT%20UTAMA%20INDUSTRI!5e0!3m2!1sid!2sid!4v1785468798637!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    );
}