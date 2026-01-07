const cars = [
    { id: '1', model: 'Mazda CX-5', location: 'Makuyu',image: "/images/car1.jpg",price:"500,00", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    { id: '2', model: 'Mazda CX-4', location: 'Makuya',image: "/images/car2.jpg",price:"500,00", unitcar_id:"2",specificCarHistory_id:"2",specificCarInterior_id:"2",specificCarExterior_id:"2",specificCarSuspension_id:"2",specificCarAccessory_id:"2",specificCarTire_id:"2"},
    { id: '3', model: 'Mazda CX-04', location: 'Makuyaa',image: "/images/car3.jpg",price:"500,00", unitcar_id:"3",specificCarHistory_id:"3",specificCarInterior_id:"3",specificCarExterior_id:"3",specificCarSuspension_id:"3",specificCarAccessory_id:"3",specificCarTire_id:"3"},
    { id: '4', model: 'Mazda CX-3', location: 'Makuyi',image: "/images/car4.jpg",price:"500,00", unitcar_id:"4",specificCarHistory_id:"4",specificCarInterior_id:"4",specificCarExterior_id:"4",specificCarSuspension_id:"4",specificCarAccessory_id:"4",specificCarTire_id:"4"},
    { id: '5', model: 'Mazda CX-2', location: 'Makulu',image: "/images/car5.jpg",price:"500,00", unitcar_id:"5",specificCarHistory_id:"5",specificCarInterior_id:"5",specificCarExterior_id:"5",specificCarSuspension_id:"5",specificCarAccessory_id:"5",specificCarTire_id:"5"},
    { id: '6', model: 'Mazda CX-10', location: 'Makuyus',image: "/images/car6.jpg",price:"500,00", unitcar_id:"6",specificCarHistory_id:"6",specificCarInterior_id:"6",specificCarExterior_id:"6",specificCarSuspension_id:"6",specificCarAccessory_id:"6",specificCarTire_id:"6"}
];
const newarrivals=[
    {id:"1",model:"audi Q6",location:"Kikuyu",image:"/images/car7.jpg",price:"500,000",mileage:"1000",year:"2003", engine_size:"500cc", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"2",model:"BMW M5",location:"Langata",image:"/images/car8.jpg",price:"329,000",mileage:"500",year:"2009", engine_size:"400cc", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"3",model:"Toyota auris",location:"Kericho",image:"/images/car9.jpg",price:"129,219",mileage:"1500",year:"2010", engine_size:"298cc", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"4",model:"VW golf",location:"Ngong",image:"/images/car10.jpg",price:"981,721",mileage:"2000",year:"2019", engine_size:"280cc", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"5",model:"Ford F150",location:"BuruBuru",image:"/images/car11.jpg",price:"817,345",mileage:"2500",year:"2022", engine_size:"250cc", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"6",model:"Toyota Prado",location:"Karen",image:"/images/car12.jpg",price:"371,983",mileage:"2400",year:"2005", engine_size:"700cc", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"}
]
const special_car_deals=[
    {id:"1",model:"BMW M3", year:"2009",price:"900,000",mileage:"888",image:"/images/car7.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"2",model:"AUDI SQ7", year:"2016",price:"452,719",mileage:"817",image:"/images/car1.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"3",model:"GOLF GTR", year:"2017",price:"780,000",mileage:"201",image:"/images/car3.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"4",model:"TOYOTA AURIS", year:"2020",price:"389,012",mileage:"2019",image:"/images/car6.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"5",model:"MAZDA AXELA", year:"2021",price:"681,716",mileage:"3000",image:"/images/car4.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"6",model:"SUZUKI SWIFT", year:"2018",price:"457,819",mileage:"2671",image:"/images/car10.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"7",model:"BMW M3", year:"2009",price:"900,000",mileage:"888",image:"/images/car7.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"8",model:"AUDI SQ7", year:"2016",price:"452,719",mileage:"817",image:"/images/car1.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"9",model:"GOLF GTR", year:"2017",price:"780,000",mileage:"201",image:"/images/car3.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"10",model:"TOYOTA AURIS", year:"2020",price:"389,012",mileage:"2019",image:"/images/car6.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"11",model:"MAZDA AXELA", year:"2021",price:"681,716",mileage:"3000",image:"/images/car4.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"12",model:"SUZUKI SWIFT", year:"2018",price:"457,819",mileage:"2671",image:"/images/car10.jpg"}
]
const suv_pickups=[
       {id:"1",model:"BMW M3", year:"2009",price:"900,000",mileage:"888",image:"/images/car7.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"2",model:"AUDI SQ7", year:"2016",price:"452,719",mileage:"817",image:"/images/car1.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"3",model:"GOLF GTR", year:"2017",price:"780,000",mileage:"201",image:"/images/car3.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"4",model:"TOYOTA AURIS", year:"2020",price:"389,012",mileage:"2019",image:"/images/car6.jpg"},
    {id:"5",model:"MAZDA AXELA", year:"2021",price:"681,716",mileage:"3000",image:"/images/car4.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"6",model:"SUZUKI SWIFT", year:"2018",price:"457,819",mileage:"2671",image:"/images/car10.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"7",model:"BMW M3", year:"2009",price:"900,000",mileage:"888",image:"/images/car7.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"8",model:"AUDI SQ7", year:"2016",price:"452,719",mileage:"817",image:"/images/car1.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"9",model:"GOLF GTR", year:"2017",price:"780,000",mileage:"201",image:"/images/car3.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"10",model:"TOYOTA AURIS", year:"2020",price:"389,012",mileage:"2019",image:"/images/car6.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"11",model:"MAZDA AXELA", year:"2021",price:"681,716",mileage:"3000",image:"/images/car4.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"},
    {id:"12",model:"SUZUKI SWIFT", year:"2018",price:"457,819",mileage:"2671",image:"/images/car10.jpg", unitcar_id:"1",specificCarHistory_id:"1",specificCarInterior_id:"1",specificCarExterior_id:"1",specificCarSuspension_id:"1",specificCarAccessory_id:"1",specificCarTire_id:"1"}
 
]
const carspecifications = [
    { id: '1', price: "200,00", mileage: "300", engine_size: "300cc",
        engine_power: "422 Hp", fuel: "20 km per Liter", year: "2009", reg_no: "KDB 892U",
        color: "yellow"  },
    { id: '2', price: "300,00", mileage: "400", engine_size: "500cc",
        engine_power: "412 Hp", fuel: "5 km per Liter", year: "2018", reg_no: "KCB 892U",
        color: "black" },
    { id: '3', price: "320,00", mileage: "190", engine_size: "200cc",
        engine_power: "223 Hp", fuel: "10 km per Liter", year: "2005", reg_no: "KDN 789S",
        color: "white" },
    { id: '4', price: "590,00", mileage: "50", engine_size: "390cc",
        engine_power: "181 Hp", fuel: "20 km per Liter", year: "2009", reg_no: "KCS 157H",
        color: "blue" },
    { id: '5', price: "181,00", mileage: "600", engine_size: "400cc",
        engine_power: "500 Hp", fuel: "20 km per Liter", year: "2012", reg_no: "KBJ 529J",
        color: "silver" },
    { id: '6', price: "195,00", mileage: "300", engine_size: "300cc",
        engine_power: "422 Hp", fuel: "20 km per Liter", year: "2009", reg_no: "KAP 621A",
        color: "maroon" }
];
const carshistory = [
    { id: "1",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color:"yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book:"one owner" 
    },
    {
        id: "2",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color:"yes",
        latest_owner: "yes",
        inspection_report: "yes",
         log_book:"one owner"
    },
    {
        id: "3",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color:"yes",
        latest_owner: "yes",
        inspection_report: "yes",
         log_book:"one owner"
    },
    {
        id: "4",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color:"yes",
        latest_owner: "yes",
        inspection_report: "yes",
         log_book:"one owner"
    },
    {
        id: "5",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color:"yes",
        latest_owner: "yes",
        inspection_report: "yes",
         log_book:"one owner"
    },
    {
        id: "6",
        insurance_write_off: "yes",
        not_scrapped: "yes",
        not_stolen: "no",
        original_plate: "yes",
        original_color:"yes",
        latest_owner: "yes",
        inspection_report: "yes",
        log_book:"one owner"
    }
];
const interiors= [
    {id:"1", seats: "good condition", dashboard:" functional", roof:"good condition", infotainment:"functional", air_conditioner:"functional", switches:"functional", mats:"good condition", electrical_system: ["functional", "very good"], interior_1:"/images/interior-1 1.png", interior_2:"/images/interior-2 1.png", interior_3:"/images/interior-4 1.png", interior_4:"/images/interior-4 1.png"},
    {id:"2", seats: "good condition", dashboard:" functional", roof:"good condition", infotainment:"functional", air_conditioner:"functional", switches:"functional", mats:"good condition", electrical_system: ["functional", "very good"],interior_1:"/images/interior-1 1.png", interior_2:"/images/interior-2 1.png", interior_3:"/images/interior-4 1.png", interior_4:"/images/interior-4 1.png"},
    {id:"3", seats: "good condition", dashboard:" functional", roof:"good condition", infotainment:"functional", air_conditioner:"functional", switches:"functional", mats:"good condition", electrical_system: ["functional", "very good"],interior_1:"/images/interior-1 1.png", interior_2:"/images/interior-2 1.png", interior_3:"/images/interior-4 1.png", interior_4:"/images/interior-4 1.png"},
    {id:"4", seats: "good condition", dashboard:" functional", roof:"good condition", infotainment:"functional", air_conditioner:"functional", switches:"functional", mats:"good condition", electrical_system: ["functional", "very good"],interior_1:"/images/interior-1 1.png", interior_2:"/images/interior-2 1.png", interior_3:"/images/interior-4 1.png", interior_4:"/images/interior-4 1.png"},
    {id:"5", seats: "good condition", dashboard:" functional", roof:"good condition", infotainment:"functional", air_conditioner:"functional", switches:"functional", mats:"good condition", electrical_system: ["functional", "very good"],interior_1:"/images/interior-1 1.png", interior_2:"/images/interior-2 1.png", interior_3:"/images/interior-4 1.png", interior_4:"/images/interior-4 1.png"},
    {id:"6", seats: "good condition", dashboard:" functional", roof:"good condition", infotainment:"functional", air_conditioner:"functional", switches:"functional", mats:"good condition", electrical_system: ["functional", "very good"],interior_1:"/images/interior-1 1.png", interior_2:"/images/interior-2 1.png", interior_3:"/images/interior-4 1.png", interior_4:"/images/interior-4 1.png"}
];
const exteriors= [
    {id:"1", doors:"functional", paint:"good condition", windscreen:"good condition",headlights:"functional",windows:"functional",bumper:"good condition",side_mirrors:"good condition", transmission_engine:["good condition","very good"],wipers:"functional", front:"/images/amg-1 1.png", rear:"/images/amg-2 1.png", left:"/images/amg-3.jpg", right:"/images/amg-4 1.png"},
    {id:"2", doors:"functional", paint:"good condition", windscreen:"good condition",headlights:"functional",windows:"functional",bumper:"good condition",side_mirrors:"good condition", transmission_engine:["good condition","very good"],wipers:"functional", front:"/images/amg-1 1.png", rear:"/images/amg-2 1.png", left:"/images/amg-3.jpg", right:"/images/amg-4 1.png"},
    {id:"3", doors:"functional", paint:"good condition", windscreen:"good condition",headlights:"functional",windows:"functional",bumper:"good condition",side_mirrors:"good condition", transmission_engine:["good condition","very good"],wipers:"functional", front:"/images/amg-1 1.png", rear:"/images/amg-2 1.png", left:"/images/amg-3.jpg", right:"/images/amg-4 1.png"},
    {id:"4", doors:"functional", paint:"good condition", windscreen:"good condition",headlights:"functional",windows:"functional",bumper:"good condition",side_mirrors:"good condition", transmission_engine:["very good"],wipers:"functional", front:"/images/amg-1 1.png", rear:"/images/amg-2 1.png", left:"/images/amg-3.jpg", right:"/images/amg-4 1.png"},
    {id:"5", doors:"functional", paint:"good condition", windscreen:"good condition",headlights:"functional",windows:"functional",bumper:"good condition",side_mirrors:"good condition", transmission_engine:["good condition","very good"],wipers:"functional", front:"/images/amg-1 1.png", rear:"/images/amg-2 1.png", left:"/images/amg-3.jpg", right:"/images/amg-4 1.png"},
    {id:"6", doors:"functional", paint:"good condition", windscreen:"good condition",headlights:"functional",windows:"functional",bumper:"good condition",side_mirrors:"good condition", transmission_engine:["good condition","very good"],wipers:"functional", front:"/images/amg-1 1.png", rear:"/images/amg-2 1.png", left:"/images/amg-3.jpg", right:"/images/amg-4 1.png"}
];
const suspensions=[
    {id:"1",ball_joints:"good condition",arms_suspension:"good condition",shock_absorbers:"good condition",mounting:"good condition",brake_pads:"good condition",axels:"good condition",bushes:"good condition",braking_system:["good condition","no errors"]},
    {id:"2",ball_joints:"good condition",arms_suspension:"good condition",shock_absorbers:"good condition",mounting:"good condition",brake_pads:"good condition",axels:"good condition",bushes:"good condition",braking_system:["good condition","no errors"]},
    {id:"3",ball_joints:"good condition",arms_suspension:"good condition",shock_absorbers:"good condition",mounting:"good condition",brake_pads:"good condition",axels:"good condition",bushes:"good condition",braking_system:["good condition","no errors"]},
    {id:"4",ball_joints:"good condition",arms_suspension:"good condition",shock_absorbers:"good condition",mounting:"good condition",brake_pads:"good condition",axels:"good condition",bushes:"good condition",braking_system:["good condition","no errors"]},
    {id:"5",ball_joints:"good condition",arms_suspension:"good condition",shock_absorbers:"good condition",mounting:"good condition",brake_pads:"good condition",axels:"good condition",bushes:"good condition",braking_system:["good condition","no errors"]},
    {id:"6",ball_joints:"good condition",arms_suspension:"good condition",shock_absorbers:"good condition",mounting:"good condition",brake_pads:"good condition",axels:"good condition",bushes:"good condition",braking_system:["good condition","no errors"]}
];
const accessory=[
    {id:"1",jack_spanner:"available", spare_wheel:"available"},
    {id:"2",jack_spanner:"available", spare_wheel:"available"},
    {id:"3",jack_spanner:"available", spare_wheel:"available"},
    {id:"4",jack_spanner:"available", spare_wheel:"available"},
    {id:"5",jack_spanner:"available", spare_wheel:"available"},
    {id:"6",jack_spanner:"available", spare_wheel:"available"},
];
const tire=[
    {id:"1",left_front:"good condition", right_front:"good condition", left_rear:"bad condition", right_rear:"bad condtion"},
    {id:"2",left_front:"good condition", right_front:"good condition", left_rear:"bad condition", right_rear:"bad condtion"},
    {id:"3",left_front:"good condition", right_front:"good condition", left_rear:"bad condition", right_rear:"bad condtion"},
    {id:"4",left_front:"good condition", right_front:"good condition", left_rear:"bad condition", right_rear:"bad condtion"},
    {id:"5",left_front:"good condition", right_front:"good condition", left_rear:"bad condition", right_rear:"bad condtion"},
    {id:"6",left_front:"good condition", right_front:"good condition", left_rear:"bad condition", right_rear:"bad condtion"},
];

const review=[
    {id:"1", name:"Collins", comment:"PINUC seriously helped me with my car deal. Anyone looking to get a car should just use it"},
    {id:"2", name:"Jane", comment:"PINUC seriously helped me with my car deal. Anyone looking to get a car should just use it"},
    {id:"3", name:"Dorris", comment:"PINUC seriously helped me with my car deal. Anyone looking to get a car should just use it"},
    {id:"4", name:"Daisy", comment:"PINUC seriously helped me with my car deal. Anyone looking to get a car should just use it"},
    {id:"5", name:"James", comment:"PINUC seriously helped me with my car deal. Anyone looking to get a car should just use it"},
    {id:"6", name:"Mike", comment:"PINUC seriously helped me with my car deal. Anyone looking to get a car should just use it"},
]

export const _db =  { cars, carspecifications, carshistory, interiors, exteriors, suspensions, accessory, tire, newarrivals, special_car_deals, suv_pickups, review };
