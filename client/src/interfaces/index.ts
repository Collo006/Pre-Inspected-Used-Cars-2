export * from "./cars";

export type Car = {
    id:string;
    model:string;
    location:string;
    image:string;
    price:string;
    unit_car: CarSpecification;
    specific_car_interior: Interior;
    specific_car_exterior: Exterior;
    specific_car_suspension: Suspension;
    specific_car_history: CarHistory;
    specific_car_accessory: Accessories;
    specific_car_tire: Tires;




};

export type CarsData={
    cars:Car[]
}

export type NewArrival = {
    id:string;
    model:string;
    location:string;
    image:string;
    price:string;
    mileage:string;
    year:string;
    engine_size:string;
    unit_car: CarSpecification;
    specific_car_interior: Interior;
    specific_car_exterior: Exterior;
    specific_car_suspension: Suspension;
    specific_car_history: CarHistory;
    specific_car_accessory: Accessories;
    specific_car_tire: Tires;
};

export type NewArrivalData = {
    newarrivals: NewArrival[]
}
export type SpecialCarDeal={
    id:string;
    model:string;
    year:string;
    price:string;
    mileage:string;
    image:string;
      unit_car: CarSpecification;
    specific_car_interior: Interior;
    specific_car_exterior: Exterior;
    specific_car_suspension: Suspension;
    specific_car_history: CarHistory;
    specific_car_accessory: Accessories;
    specific_car_tire: Tires;
}

export type SpecialCarDealData={
    special_car_deals: SpecialCarDeal[];
}

export type SUVPickup={
    id:string;
    model:string;
    year:string;
    price:string;
    mileage:string;
    image:string;
      unit_car: CarSpecification;
    specific_car_interior: Interior;
    specific_car_exterior: Exterior;
    specific_car_suspension: Suspension;
    specific_car_history: CarHistory;
    specific_car_accessory: Accessories;
    specific_car_tire: Tires;
}

export type SUVPickupData={
    suv_pickups: SUVPickup[];
}

export type Reviews={
    id:string;
    name:string;
    comment:string;
}

export type ReviewsData={
   review:Reviews[];
}


export type CarSpecification = {
  price: string;
    mileage: string;
    engine_size: string;
    engine_power: string;
    fuel: string;
    year: string;
    reg_no: string;
    color: string;
};

export type Interior = {
  id:string;
    seats:string;
    dashboard:string;
    roof:string;
    infotainment:string;
    air_conditioner:string;
    switches:string;
    mats:string;
    interior_1:string;
    interior_2:string;
    interior_3:string;
    interior_4:string;
    electrical_system:[string];
};

export type Exterior =  {
   id:string;
    doors:string;
    paint:string;
    wipers:string;
    windscreen:string;
    headlights:string;
    windows:string;
    bumper:string;
    side_mirrors:string;
    front:string;
    rear:string;
    left:string;
    right:string;
    transmission_engine:[string];
};
export type Suspension={
    id:string;
    ball_joints:string;
    arms_suspension:string;
    shock_absorbers:string;
    mounting:string;
    brake_pads:string;
    axels:string;
    bushes:string;
    braking_system:[string];

}
export type CarHistory={
    id:string
    insurance_write_off:string
    not_scrapped:string
    not_stolen:string
    original_plate:string
    original_color:string
    latest_owner:string
    inspection_report:string
    log_book:string
 
}

export type Accessories={
    id:string
    jack_spanner:string
    spare_wheel:string
    
}
export type Tires={
    id:string
    left_front:string
    right_front:string
    left_rear:string
    right_rear:string

}

export type SpecificCarData = {
  specific_car: Car;
};

