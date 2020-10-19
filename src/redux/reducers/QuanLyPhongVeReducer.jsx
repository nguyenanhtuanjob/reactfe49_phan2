import { LAY_DANH_SACH_GHE } from "../constans/QuanLyPhongVeContanst";

const initialState = {
  dsGhe: [],
};

export const QuanLyPhongVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_GHE: {
      state.dsGhe = action.danhSachGhe;
      return { ...state };
    }
    case "TOGGLE_GHE":{
        const dsGhe = [...state.dsGhe]
        const index = dsGhe.findIndex((ghe)=> ghe.maGhe === action.ghe.maGhe);
        console.log(index);
        dsGhe[index] = {...dsGhe[index],dangChon : !dsGhe[index].dangChon }
        console.log(dsGhe[index]);
        return { ...state,dsGhe};
    }
    default:
      return state;
  }
};
