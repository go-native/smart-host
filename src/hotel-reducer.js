import { CALC_OPTIMIZATION } from "./actions";
import dummyData from './smarthost_hotel_guests.json';

const USER_LIST = dummyData.sort((a, b) => a < b);

const initialState = {
  occupiedPremium: 0,
  totalPriceForPremium: 0,
  occupiedEconomy: 0,
  totalPriceForEconomy: 0
}

export const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALC_OPTIMIZATION:
      return {
        ...calOptimization(action.payload.premium, action.payload.economy)
      }
    default:
      return state
  }
}

function calOptimization(premiumRooms, economyRooms) {
  let biggerThan100 = USER_LIST.filter(d => d >= 100);
  let smallerThan100 = USER_LIST.filter(d => d < 100);
  let occupiedPremium = 0, totalPriceForPremium = 0;
  let occupiedEconomy = 0, totalPriceForEconomy = 0;
  for (let i = 0; i < biggerThan100.length; i++) {
    let currentNumber = i + 1;
    if (currentNumber <= premiumRooms) {
      occupiedPremium = currentNumber;
      totalPriceForPremium += biggerThan100[i];
    } else {
      break;
    }
  }
  let availablePremium = premiumRooms - occupiedPremium;
  for (let i = 0; i < smallerThan100.length; i++) {
    let currentNumber = i + 1;
    if (currentNumber <= availablePremium) {
      occupiedPremium++;
      totalPriceForPremium += smallerThan100[i];
    }
    else if (currentNumber <= economyRooms) {
      occupiedEconomy = currentNumber;
      totalPriceForEconomy += smallerThan100[i];
    } else {
      break;
    }
  }
  return { totalPriceForPremium, occupiedPremium, totalPriceForEconomy, occupiedEconomy }
}
