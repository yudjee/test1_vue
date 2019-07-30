import { DELETE_PRODUCT, 
		 CHANGE_TO_HIDDEN, 
		 CHANGE_TO_UNHIDDEN, 
		 OPEN_POPUP,
		 CLOSE_POPUP,
		 DELETE_ORDER } from "./mutation-types";

export default {
	[DELETE_PRODUCT](state, id) {
		const index = state.products.findIndex(product => product.id === id);
		state.products.splice(index, 1);
	},
	[CHANGE_TO_HIDDEN](state) {
		state.isHidden = true
	},
	[CHANGE_TO_UNHIDDEN](state) {
		state.isHidden = false
	},
	[OPEN_POPUP](state) {
		state.isPopup = true
	},
	[CLOSE_POPUP](state) {
		state.isPopup = false
	},
	[DELETE_ORDER](state, id) {
		const index = state.orders.findIndex(order => order.id === id);
		state.orders.splice(index, 1);
	}
}
