export interface HousingLocation {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
  }

  //we create the component, then the interface, then the service.
  //The service passes through the interface into the component
  //Housing-location.ts is the interface, 
  //housing-location.component.ts is the component
  //apparently, components are included in the imports array
  // but interfaces are not
