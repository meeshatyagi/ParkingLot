const express = require('express');
const bodyParser = require('body-parser');
const Vehicles = require('../modules/Vehicles');
const {sortByColor} = require('../library/VehicleInfo');
const {vehicleByType} = require('../library/VehicleInfo');
const {vehicleByTime} = require('../library/VehicleInfo');
const util = require('util');
const vehicleRouter = express.Router();
vehicleRouter.use(bodyParser.json());

vehicleRouter.route('/park')
.get((req,res,next) => {
    Vehicles.find({})
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})
.post((req,res,next) => {
    Vehicles.create(req.body)
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})
.put((req,res,next) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /vehicles`);    
})
.delete((req,res,next) => {
    Vehicles.remove({})
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})

vehicleRouter.route('/unpark/:unparkId')
.get((req,res,next) => {
    Vehicles.findById(req.params.unparkId)
    .then((result) => {
        console.log(result + "data");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(result)
    })
    .catch((err) => {console.log(err.message)});
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`);
})
.put((req,res,next) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /vehicle`);    
})
.delete((req,res,next) => {
    Vehicles.findByIdAndRemove(req.params.unparkId)
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})

vehicleRouter.route('/vehicle/:colorId')
.get((req,res,next) => {
    Vehicles.find({})
    .then((result) => {
        return sortByColor(result, req.params.colorId);
    })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`);
})
.put((req,res,next) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /vehicle`);    
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`); 
})

vehicleRouter.route('/vehicleByType')
.get((req,res,next) => {
    Vehicles.find({})
    .then((result) => {
        return vehicleByType(result);
    })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`);
})
.put((req,res,next) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /vehicle`);    
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`); 
})

vehicleRouter.route('/vehicle/:registrationNumber/registrationNumber')
.get((req,res,next) => {
    Vehicles.findById(req.params.registrationNumber)
    .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(result)
    })
    .catch((err) => {console.log(err.message)});
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`);
})
.put((req,res,next) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /vehicle`);    
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`); 
})

vehicleRouter.route('/vehicleByTime')
.get((req,res,next) => {
    Vehicles.find({})
    .then((result) => {
       // console.log(util.inspect(req.query, false, null, true)) ;
        return vehicleByTime(result, req.query.start, req.query.end);
    })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {console.log(err.message)});
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`);
})
.put((req,res,next) => {
        res.statusCode = 403;
        res.end(`${req.method} operation not supported on /vehicle`);    
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end(`${req.method} operation not supported on /vehicle`); 
})

module.exports = vehicleRouter;