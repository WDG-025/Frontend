import { createContext, use, useReducer } from 'react';

const BookingContext = createContext(undefined);

const initalState = {
  destinations: [],
  premium: false,
};

function reducer(bookingState, action) {
  //   console.log({ bookingState, action });

  switch (action.type) {
    case 'ADD_BOOKING': {
      const newDestination = [...bookingState.destinations, action.payload];
      const premium = newDestination.length >= 3;
      return {
        ...bookingState,
        destinations: newDestination,
        premium,
      };
    }
    case 'REMOVE_DESTINATION': {
      const destinations = bookingState.destinations.filter((d) => d !== action.payload);
      const premium = destinations.length >= 3;
      return { ...BookingContext, destinations, premium };
    }
    default:
      throw new Error('Unkown action: ', action.type);
  }
}

export default function BookingContextProvider({ children }) {
  const [bookingState, dispatch] = useReducer(reducer, initalState);
  console.log(bookingState);

  function addDestination(destination) {
    dispatch({
      type: 'ADD_BOOKING',
      payload: destination,
    });
  }

  function removeDestination(destinationSlug) {
    dispatch({
      type: 'REMOVE_DESTINATION',
      payload: destinationSlug,
    });
  }

  //   dispatch({ type: 'ADD_BOOKING', payload: 'berlin' });
  return (
    <BookingContext value={{ bookingState, addDestination, removeDestination }}>
      {children}
    </BookingContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBooking() {
  return use(BookingContext);
}
