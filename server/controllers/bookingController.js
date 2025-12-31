const Booking = require('../models/Booking');
const Event = require('../models/Event');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
    const { eventId, ticketCount } = req.body;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Check availability without deducting yet
        if (event.availableTickets < ticketCount) {
            return res.status(400).json({ message: 'Not enough tickets available' });
        }


        const totalPrice = event.price * ticketCount;

        const booking = await Booking.create({
            user: req.user.id,
            event: eventId,
            ticketCount,
            totalPrice,
            status: 'pending',
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get user bookings
// @route   GET /api/bookings/my-bookings
// @access  Private
const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id, status: 'confirmed' }).populate('event');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBooking,
    getMyBookings,
};
