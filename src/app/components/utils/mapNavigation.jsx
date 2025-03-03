import { Route } from "lucide-react";

export const MapNavigation = ({ lat, lng }) => {
    const geoUrl = `geo:${lat},${lng}?q=${lat},${lng}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

    return (
        <a
            href={window.navigator.userAgent.match(/Android|iPhone|iPad/i) ? geoUrl : googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 flex text-xs items-center gap-1"
        >
            <Route width={17} />
            مسیریابی
        </a>
    );
};