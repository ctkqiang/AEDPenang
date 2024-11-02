export interface AED {
  id: number;                         // Id of the location
  name: string;                       // name of the location
  address: string;                    // Full Address of the location
  coordinates: [string, string];      // Coordinates; the Lat and long of the location
  images_url: string[];               // Images of the AED location
  poi: string[];                      // Point of interest
}
