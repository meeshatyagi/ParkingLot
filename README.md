# ParkingLot
This is an Express server for multi-level parking lot. MongoDB is used to store data

- Park a vehicle : http://localhost:3000/park (i.e. /park)
- Unpark a vehicle : /vehicle/:registrationNumber/registrationNumber(i.e. http://localhost:3000/vehicle/5c5716264c1aaad94c318c3d/registrationNumber/)
 
   :registrationNumber can be seen in http://localhost:3000/park  
- Get all vehicles of a color : http://localhost:3000/vehicle/red  (i.e. /vehicle/:colorId)
- Get all vehicles by type (small, medium or large) : http://localhost:3000/vehicleBytype (i.e. /vehicleByType)
- Get all vehicles which entered during a given duration : http://localhost:3000/vehicleByTime?start=15:26&end=24:25 (i.e. /vehicleByTime)

  
