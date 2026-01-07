import {_db} from "./_db"

export const resolvers ={
    Query:{
        cars(){
            return _db.cars
        },
        newarrivals(){
           return _db.newarrivals
        },
        special_car_deals(){
            return _db.special_car_deals
        },
        suv_pickups(){
            return _db.suv_pickups
        },
        carspecifications(){
            return _db.carspecifications
        },
        carshistory(){
            return _db.carshistory
        },
        interiors(){
            return _db.interiors
        },
        exteriors(){
            return _db.exteriors
        },
        suspensions(){
            return _db.suspensions
        },
        accessory(){
            return _db.accessory
        },
        tire(){
            return _db.tire
        },
        review(){
            return _db.review
        },
        specific_car(_: unknown, args: { id: string }){
            return _db.cars.find((car)=>car.id === args.id)
        },
        new_car_arrival(_: unknown, args: { id: string }){
            return _db.newarrivals.find((car)=> car.id===args.id)
        },
        special_car(_: unknown, args: { id: string }){
            return _db.special_car_deals.find((car)=> car.id===args.id)
        },
        suv_and_pickup(_: unknown, args: { id: string }){
            return _db.suv_pickups.find((car)=> car.id===args.id)
        },
        unit_car(_: unknown, args: { id: string }){
            return _db.carspecifications.find((car)=> car.id=== args.id)
        },
        specific_car_history(_: unknown, args: { id: string }){
            return _db.carshistory.find((car)=> car.id=== args.id)
        },
        specific_car_interior(_: unknown, args: { id: string }){
            return _db.interiors.find((car)=> car.id===args.id)
        },
        specific_car_exterior(_: unknown, args: { id: string }){
            return _db.exteriors.find((car)=> car.id===args.id)
        },
        specific_car_suspension(_: unknown, args: { id: string }){
            return _db.suspensions.find((car)=> car.id===args.id)
        },
        specific_car_accessory(_: unknown, args: { id: string }){
            return _db.accessory.find((car)=> car.id===args.id)
        },
        specific_car_tire(_: unknown, args: { id: string }){
            return _db.tire.find((car)=> car.id===args.id)
        },
        specific_person_review(_: unknown, args: { id: string }){
            return _db.review.find((car)=> car.id===args.id)
        }
       
     },
     CarSpecification:{
        cars(parent: { id: string }){
            return _db.cars.filter((car)=> car.unitcar_id===parent.id)
        },
        newarrivals(parent: { id: string }){
            return _db.newarrivals.filter((car)=> car.unitcar_id===parent.id)
        },
         special_car_deals(parent: { id: string }){
            return _db.special_car_deals.filter((car)=> car.unitcar_id===parent.id)
         },
        suv_pickups(parent: { id: string }){
            return _db.suv_pickups.filter((car)=> car.unitcar_id===parent.id)
        }    
     },
     CarHistory:{
        cars(parent: { id: string }){
            return _db.cars.filter((car)=> car.specificCarHistory_id===parent.id)
        },
        newarrivals(parent: { id: string }){
            return _db.newarrivals.filter((car)=> car.specificCarHistory_id===parent.id)
        },
        special_car_deals(parent: { id: string }){
            return _db.special_car_deals.filter((car)=> car.specificCarHistory_id===parent.id)
        },
        suv_pickups(parent: { id: string }){
            return _db.suv_pickups.filter((car)=> car.specificCarHistory_id===parent.id)
        }
     },
     Interior:{
        cars(parent: { id: string }){
            return _db.cars.filter((car)=>car.specificCarInterior_id===parent.id)
        },
        newarrivals(parent: { id: string }){
            return _db.newarrivals.filter((car)=> car.specificCarInterior_id===parent.id)
        },
        special_car_deals(parent: { id: string }){
            return _db.special_car_deals.filter((car)=> car.specificCarInterior_id===parent.id)  
        },
        suv_pickups(parent: { id: string }){
            return _db.suv_pickups.filter((car)=> car.specificCarInterior_id===parent.id)
        }
     },
     Exterior:{
        cars(parent: { id: string }){
            return _db.cars.filter((car)=>car.specificCarExterior_id===parent.id)
        },
        newarrivals(parent:{ id: string }){
            return _db.newarrivals.filter((car)=> car.specificCarExterior_id===parent.id)
        },
        special_car_deals(parent:{ id: string }){ 
            return _db.special_car_deals.filter((car)=> car.specificCarExterior_id===parent.id)
        },
        suv_pickups(parent:{ id: string }){
            return _db.suv_pickups.filter((car)=> car.specificCarExterior_id===parent.id)
        }
     },
     Suspension:{
        cars(parent:{ id: string }){
            return _db.cars.filter((car)=>car.specificCarSuspension_id===parent.id)
        },
        newarrivals(parent:{ id: string }){
            return _db.newarrivals.filter((car)=> car.specificCarSuspension_id===parent.id)
        },
        special_car_deals(parent:{ id: string }){
            return _db.special_car_deals.filter((car)=> car.specificCarSuspension_id===parent.id)
        },
        suv_pickups(parent:{ id: string }){
            return _db.suv_pickups.filter((car)=> car.specificCarSuspension_id===parent.id)
        }
     },
     Accessories:{
        cars(parent:{ id: string }){
            return _db.cars.filter((car)=>car.specificCarAccessory_id===parent.id)
        },
        newarrivals(parent:{ id: string }){
            return _db.newarrivals.filter((car)=> car.specificCarAccessory_id===parent.id)
        },
        special_car_deals(parent:{ id: string }){
            return _db.special_car_deals.filter((car)=> car.specificCarAccessory_id===parent.id)
        },
        suv_pickups(parent:{ id: string }){
            return _db.suv_pickups.filter((car)=> car.specificCarAccessory_id===parent.id)
        }
     },
     Tires:{
        cars(parent:{ id: string }){
            return _db.cars.filter((car)=>car.specificCarTire_id===parent.id)
        },
        newarrivals(parent:{ id: string }){
            return _db.newarrivals.filter((car)=> car.specificCarTire_id===parent.id)
        },
        special_car_deals(parent:{ id: string }){
            return _db.special_car_deals.filter((car)=> car.specificCarTire_id===parent.id)
        },
        suv_pickups(parent:{ id: string }){
            return _db.suv_pickups.filter((car)=> car.specificCarTire_id===parent.id)
        }    
     },
     Car:{
        unit_car(parent:{ unitcar_id: string }){
            return _db.carspecifications.find((car)=> car.id===parent.unitcar_id)
        },
        specific_car_history(parent:{specificCarHistory_id: string }){
            return _db.carshistory.find((car)=> car.id===parent.specificCarHistory_id)
        },
        specific_car_interior(parent:{specificCarInterior_id: string }){
            return _db.interiors.find((car)=>car.id===parent.specificCarInterior_id)
        },
        specific_car_exterior(parent:{specificCarExterior_id: string }){
            return _db.exteriors.find((car)=>car.id===parent.specificCarExterior_id)
        },
        specific_car_suspension(parent:{specificCarSuspension_id: string }){
            return _db.suspensions.find((car)=>car.id===parent.specificCarSuspension_id)
        },
        specific_car_accessory(parent:{specificCarAccessory_id: string }){
            return _db.accessory.find((car)=>car.id===parent.specificCarAccessory_id)
        },
        specific_car_tire(parent:{specificCarTire_id: string }){
            return _db.tire.find((car)=>car.id===parent.specificCarTire_id)
        }
        
     },
     NewArrival:{
        unit_car(parent:{ unitcar_id: string }){
            return _db.carspecifications.find((car)=> car.id===parent.unitcar_id)
        },
        specific_car_history(parent:{ specificCarHistory_id: string }){
            return _db.carshistory.find((car)=> car.id===parent.specificCarHistory_id)
        },
        specific_car_interior(parent:{ specificCarInterior_id: string }){
            return _db.interiors.find((car)=>car.id===parent.specificCarInterior_id)
        },
        specific_car_exterior(parent:{ specificCarExterior_id: string }){
            return _db.exteriors.find((car)=>car.id===parent.specificCarExterior_id)
        },
        specific_car_suspension(parent:{ specificCarSuspension_id: string }){
            return _db.suspensions.find((car)=>car.id===parent.specificCarSuspension_id)
        },
        specific_car_accessory(parent:{ specificCarAccessory_id: string }){
            return _db.accessory.find((car)=>car.id===parent.specificCarAccessory_id)
        },
        specific_car_tire(parent:{ specificCarTire_id: string }){
            return _db.tire.find((car)=>car.id===parent.specificCarTire_id)
        }
     },
      SpecialCarDeal:{
        unit_car(parent:{ unitcar_id: string }){
            return _db.carspecifications.find((car)=> car.id===parent.unitcar_id)
        },
        specific_car_history(parent:{ specificCarHistory_id: string }){
            return _db.carshistory.find((car)=> car.id===parent.specificCarHistory_id)
        },
        specific_car_interior(parent:{ specificCarInterior_id: string }){
            return _db.interiors.find((car)=>car.id===parent.specificCarInterior_id)
        },
        specific_car_exterior(parent:{ specificCarExterior_id: string }){
            return _db.exteriors.find((car)=>car.id===parent.specificCarExterior_id)
        },
        specific_car_suspension(parent:{ specificCarSuspension_id: string }){
            return _db.suspensions.find((car)=>car.id===parent.specificCarSuspension_id)
        },
        specific_car_accessory(parent:{ specificCarAccessory_id: string }){
            return _db.accessory.find((car)=>car.id===parent.specificCarAccessory_id)
        },
        specific_car_tire(parent:{ specificCarTire_id: string }){
            return _db.tire.find((car)=>car.id===parent.specificCarTire_id)
        }
     },
 SUVPickup:{
        unit_car(parent:{ unitcar_id: string }){
            return _db.carspecifications.find((car)=> car.id===parent.unitcar_id)
        },
        specific_car_history(parent:{ specificCarHistory_id: string }){
            return _db.carshistory.find((car)=> car.id===parent.specificCarHistory_id)
        },
        specific_car_interior(parent:{ specificCarInterior_id: string }){
            return _db.interiors.find((car)=>car.id===parent.specificCarInterior_id)
        },
        specific_car_exterior(parent:{ specificCarExterior_id: string }){
            return _db.exteriors.find((car)=>car.id===parent.specificCarExterior_id)
        },
        specific_car_suspension(parent:{ specificCarSuspension_id: string }){
            return _db.suspensions.find((car)=>car.id===parent.specificCarSuspension_id)
        },
        specific_car_accessory(parent:{ specificCarAccessory_id: string }){
            return _db.accessory.find((car)=>car.id===parent.specificCarAccessory_id)
        },
        specific_car_tire(parent:{ specificCarTire_id: string }){
            return _db.tire.find((car)=>car.id===parent.specificCarTire_id)
        }
     }
     
     

}
