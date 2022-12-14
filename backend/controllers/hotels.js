import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//create hotel
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch(err) {

        next(err);

    }
};

//find by id
export const getHotel = async (req, res, next) => {
    try {

        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);

    } catch(err) {

        next(err);

    }
};

//find all hotel
export const getAllHotels = async (req, res, next) => {

    const {min, max, ...others} = req.query;

    try {

        const hotels = await Hotel.find({...others, price: {$gt: min || 1, $lt: max || 9999}}).limit(req.query.limit);
        res.status(200).json(hotels);

    } catch(err) {

        next(err);

    }
};

//find by city
export const byCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {

        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city});
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
};

//find by type
export const byType = async (req, res, next) => {
    try {

        const allHotels = await Hotel.countDocuments({type: "Hotel"});
        const allApartments = await Hotel.countDocuments({type: "Apartment"});
        const allResorts = await Hotel.countDocuments({type: "Resort"});
        const allVillas = await Hotel.countDocuments({type: "Villa"});
        const allCabins = await Hotel.countDocuments({type: "Cabin"});
        
        res.status(200).json([
            {type: "Hotel", count: allHotels},
            {type: "Apartment", count: allApartments},
            {type: "Resort", count: allResorts},
            {type: "Villa", count: allVillas},
            {type: "Cabin", count: allCabins}
        ]);

    } catch(err) {

        next(err);

    }
};

//find room by id
export const getHotelsRoom = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map(room => {
            return Room.findById(room);
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
}