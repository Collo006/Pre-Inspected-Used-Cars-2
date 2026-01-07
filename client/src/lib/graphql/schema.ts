
export const typeDefs = `#graphql
type Car{
    id:ID!
    model: String!
    location:String!
    image: String!
    price:String!
    unit_car: CarSpecification!
    specific_car_history: CarHistory!
    specific_car_interior: Interior!
    specific_car_exterior: Exterior!
    specific_car_suspension: Suspension!
    specific_car_accessory: Accessories!
    specific_car_tire: Tires!


}
type NewArrival{
    id:ID!
    model:String!
    location:String!
    image:String!
    price:String!
    mileage:String!
    year:String!
    engine_size:String!
     unit_car: CarSpecification!
    specific_car_history: CarHistory!
    specific_car_interior: Interior!
    specific_car_exterior: Exterior!
    specific_car_suspension: Suspension!
    specific_car_accessory: Accessories!
    specific_car_tire: Tires!
 
}
type SpecialCarDeal{
    id:ID!
    model:String!
    year:String!
    price:String!
    mileage:String!
    image:String!
     unit_car: CarSpecification!
    specific_car_history: CarHistory!
    specific_car_interior: Interior!
    specific_car_exterior: Exterior!
    specific_car_suspension: Suspension!
    specific_car_accessory: Accessories!
    specific_car_tire: Tires!
}
type SUVPickup{
    id:ID!
    model:String!
    year:String!
    price:String!
    mileage:String!
    image:String!
     unit_car: CarSpecification!
    specific_car_history: CarHistory!
    specific_car_interior: Interior!
    specific_car_exterior: Exterior!
    specific_car_suspension: Suspension!
    specific_car_accessory: Accessories!
    specific_car_tire: Tires!
 
}
type CarSpecification{
    id:ID!
    price:String!
    mileage:String!
    engine_size:String!
    engine_power:String!
    fuel:String!
    year:String!
    reg_no:String!
    color:String!
    import:String!
    cars:[Car]
     newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}
type CarHistory{
    id:String!
    insurance_write_off:String!
    not_scrapped:String!
    not_stolen:String!
    original_plate:String!
    original_color:String!
    latest_owner:String!
    inspection_report:String!
    log_book:String!
    cars:[Car]
     newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}
type Interior{
    id:String!
    seats:String!
    dashboard:String!
    roof:String!
    infotainment:String!
    air_conditioner:String!
    switches:String!
    mats:String!
    interior_1:String!
    interior_2:String!
    interior_3:String!
    interior_4:String!
    electrical_system:[String]!
    cars:[Car]
     newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}
type Exterior{
    id:String!
    doors:String!
    paint:String!
    wipers:String!
    windscreen:String!
    headlights:String!
    windows:String!
    bumper:String!
    side_mirrors:String!
    front:String!
    rear:String!
    left:String!
    right:String!
    transmission_engine:[String]!
    cars:[Car]
     newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}
type Suspension{
    id:String!
    ball_joints:String!
    arms_suspension:String!
    shock_absorbers:String!
    mounting:String!
    brake_pads:String!
    axels:String!
    bushes:String!
    braking_system:[String]!
    cars:[Car]
    newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}

type Accessories{
    id:String!
    jack_spanner:String!
    spare_wheel:String!
    cars:[Car]
     newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}
type Tires{
    id:String!
    left_front:String!
    right_front:String!
    left_rear:String!
    right_rear:String!
    cars:[Car]
    newarrivals:[NewArrival]
    special_car_deals:[SpecialCarDeal]
    suv_pickups:[SUVPickup]
}
type Reviews{
    id:String!
    name: String!
    comment:String!
}
type Query{
    cars:[Car]
    specific_car(id:ID!):Car
    newarrivals:[NewArrival]
    new_car_arrival(id:ID!):NewArrival
    special_car_deals:[SpecialCarDeal]
    special_car(id:ID!):SpecialCarDeal
    suv_pickups:[SUVPickup]
    suv_and_pickup(id:ID!):SUVPickup
    carspecifications: [CarSpecification]
    unit_car(id:ID!):CarSpecification
    carshistory:[CarHistory]
    specific_car_history(id:ID!):CarHistory
    interiors:[Interior]
    specific_car_interior(id:ID!):Interior
    exteriors:[Exterior]
    specific_car_exterior(id:ID!):Exterior
    suspensions:[Suspension]
    specific_car_suspension(id:ID!):Suspension
    accessory:[Accessories]
    specific_car_accessory(id:ID!):Accessories
    tire:[Tires]
    specific_car_tire(id:ID!):Tires
    review:[Reviews]
    specific_person_review(id:ID!):Reviews

    
}
`