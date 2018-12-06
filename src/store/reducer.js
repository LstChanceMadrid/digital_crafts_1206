
const initialState = {
    passengerNumber : 0,
    travelClass : 'Economy Class',
    ticketPrice : 100,
    totalPrice : 0
}


const reducer = (state = initialState, action) => {

    // Number of passengers
    if (action.type === "INC_PASSENGER") {
        return {
            ...state,
            passengerNumber : state.passengerNumber + 1
        }
    }

    if (action.type === "DEC_PASSENGER") {
        return {
            ...state,
            passengerNumber : state.passengerNumber - 1
        }
    }


    // Travel class
    if (action.type === "ECONOMY_CLASS") {
        return {
            ...state,
            travelClass : 'Economy Class',
            ticketPrice : 100
        }
    }

    if (action.type === "PREMIUM_ECONOMY") {
        return {
            ...state,
            travelClass : 'Premium Economy',
            ticketPrice : 100 * 1.25
        }
    }

    if (action.type === "BUSINESS_CLASS") {
        return {
            ...state,
            travelClass : 'Business Class',
            ticketPrice : 100 * 2
        }
    }

    if (action.type === "FIRST_CLASS") {
        return {
            ...state,
            travelClass : 'First Class',
            ticketPrice : 100 * 3
        }
    }




    return state
}

export default reducer