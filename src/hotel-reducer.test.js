import { hotelReducer } from "../src/hotel-reducer";
import { OPTIMIZE_GUESTS } from "./actions";

describe('hotel reducer', () => {
  
  it('should return the initial state', () => {
    expect(hotelReducer(undefined, {})).toEqual(
      {
        occupiedPremium: 0,
        totalPriceForPremium: 0,
        occupiedEconomy: 0,
        totalPriceForEconomy: 0
      }
    )
  });

  it('should return the optimized values for guests case #1', () => {
    expect(hotelReducer(undefined, {
      type: OPTIMIZE_GUESTS,
      payload: {
        premium: 3,
        economy: 3
      }
    })).toEqual(
      {
        occupiedPremium: 3,
        totalPriceForPremium: 738,
        occupiedEconomy: 3,
        totalPriceForEconomy: 167
      }
    )
  });

  it('should return the optimized values for guests case #2', () => {
    expect(hotelReducer(undefined, {
      type: OPTIMIZE_GUESTS,
      payload: {
        premium: 7,
        economy: 5
      }
    })).toEqual(
      {
        occupiedPremium: 7,
        totalPriceForPremium: 1153,
        occupiedEconomy: 3,
        totalPriceForEconomy: 90
      }
    )
  });

  it('should return the optimized values for guests case #3', () => {
    expect(hotelReducer(undefined, {
      type: OPTIMIZE_GUESTS,
      payload: {
        premium: 2,
        economy: 7
      }
    })).toEqual(
      {
        occupiedPremium: 2,
        totalPriceForPremium: 583,
        occupiedEconomy: 4,
        totalPriceForEconomy: 189
      }
    )
  });

})