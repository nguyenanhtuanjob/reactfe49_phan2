import {
  LAY_DANH_SACH_PHIM,
  LAY_CHI_TIET_PHIM,
} from "../constans/QuanLyPhimContanst";

const stateDefault = {
  dsPhim: [],
  chiTietPhim: {},
};

const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_PHIM: {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }
    case LAY_CHI_TIET_PHIM: {
      console.log(action, " reducer");
      state.chiTietPhim = action.chiTietPhim;
      return { ...state };
    }
    default:
      return state;
  }
};
export default QuanLyPhimReducer;
