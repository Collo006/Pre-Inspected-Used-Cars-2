import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query CarsQuery {
    cars {
      id
      model
      location
      image
      price
    }
  }
`;

export const GET_CAR_BY_ID = gql`
  query SpecificCar($id: ID!) {
    specific_car(id: $id) {
      id
      model
      location
      image
      price

      unit_car {
       price
    mileage
    engine_size
    engine_power
    fuel
    year
    reg_no
    color
      }

      specific_car_interior {
         id
    seats
    dashboard
    roof
    infotainment
    air_conditioner
    switches
    mats
    interior_1
    interior_2
    interior_3
    interior_4
    electrical_system
      }

      specific_car_exterior {
         id
    doors
    paint
    wipers
    windscreen
    headlights
    windows
    bumper
    side_mirrors
    front
    rear
    left
    right
    transmission_engine
      }
      specific_car_suspension {
     id
    ball_joints
    arms_suspension
    shock_absorbers
    mounting
    brake_pads
    axels
    bushes
    braking_system
      }
      specific_car_history {
           id
    insurance_write_off
    not_scrapped
    not_stolen
    original_plate
    original_color
    latest_owner
    inspection_report
    log_book
      }
      specific_car_accessory {
         id
    jack_spanner
    spare_wheel
      }
      specific_car_tire {
        id
    left_front
    right_front
    left_rear
    right_rear

      }
    }
  }
`;





export const GET_NEW_CARS = gql`
  query CarsQuery {
    newarrivals {
      id
      model
      location
      image
      price
    }
  }
`;

export const GET_NEW_CAR_BY_ID = gql`
  query SpecificCar($id: ID!) {
    specific_car(id: $id) {
      id
      model
      location
      image
      price

      unit_car {
       price
    mileage
    engine_size
    engine_power
    fuel
    year
    reg_no
    color
      }

      specific_car_interior {
         id
    seats
    dashboard
    roof
    infotainment
    air_conditioner
    switches
    mats
    interior_1
    interior_2
    interior_3
    interior_4
    electrical_system
      }

      specific_car_exterior {
         id
    doors
    paint
    wipers
    windscreen
    headlights
    windows
    bumper
    side_mirrors
    front
    rear
    left
    right
    transmission_engine
      }
      specific_car_suspension {
     id
    ball_joints
    arms_suspension
    shock_absorbers
    mounting
    brake_pads
    axels
    bushes
    braking_system
      }
      specific_car_history {
           id
    insurance_write_off
    not_scrapped
    not_stolen
    original_plate
    original_color
    latest_owner
    inspection_report
    log_book
      }
      specific_car_accessory {
         id
    jack_spanner
    spare_wheel
      }
      specific_car_tire {
        id
    left_front
    right_front
    left_rear
    right_rear

      }
    }
  }
`;


export const GET_SPECIAL_CARS = gql`
  query CarsQuery {
    special_car_deals {
      id
      model
      location
      image
      price
    }
  }
`;

export const GET_SPECIAL_CAR_BY_ID = gql`
  query SpecificCar($id: ID!) {
    specific_car(id: $id) {
      id
      model
      location
      image
      price

      unit_car {
       price
    mileage
    engine_size
    engine_power
    fuel
    year
    reg_no
    color
      }

      specific_car_interior {
         id
    seats
    dashboard
    roof
    infotainment
    air_conditioner
    switches
    mats
    interior_1
    interior_2
    interior_3
    interior_4
    electrical_system
      }

      specific_car_exterior {
         id
    doors
    paint
    wipers
    windscreen
    headlights
    windows
    bumper
    side_mirrors
    front
    rear
    left
    right
    transmission_engine
      }
      specific_car_suspension {
     id
    ball_joints
    arms_suspension
    shock_absorbers
    mounting
    brake_pads
    axels
    bushes
    braking_system
      }
      specific_car_history {
           id
    insurance_write_off
    not_scrapped
    not_stolen
    original_plate
    original_color
    latest_owner
    inspection_report
    log_book
      }
      specific_car_accessory {
         id
    jack_spanner
    spare_wheel
      }
      specific_car_tire {
        id
    left_front
    right_front
    left_rear
    right_rear

      }
    }
  }
`;


export const GET_SUV_PICKUP = gql`
  query CarsQuery {
    newarrivals {
      id
      model
      location
      image
      price
    }
  }
`;

export const GET_SUV_PICKUP_BY_ID = gql`
  query SpecificCar($id: ID!) {
    specific_car(id: $id) {
      id
      model
      location
      image
      price

      unit_car {
       price
    mileage
    engine_size
    engine_power
    fuel
    year
    reg_no
    color
      }

      specific_car_interior {
         id
    seats
    dashboard
    roof
    infotainment
    air_conditioner
    switches
    mats
    interior_1
    interior_2
    interior_3
    interior_4
    electrical_system
      }

      specific_car_exterior {
         id
    doors
    paint
    wipers
    windscreen
    headlights
    windows
    bumper
    side_mirrors
    front
    rear
    left
    right
    transmission_engine
      }
      specific_car_suspension {
     id
    ball_joints
    arms_suspension
    shock_absorbers
    mounting
    brake_pads
    axels
    bushes
    braking_system
      }
      specific_car_history {
           id
    insurance_write_off
    not_scrapped
    not_stolen
    original_plate
    original_color
    latest_owner
    inspection_report
    log_book
      }
      specific_car_accessory {
         id
    jack_spanner
    spare_wheel
      }
      specific_car_tire {
        id
    left_front
    right_front
    left_rear
    right_rear

      }
    }
  }
`;
