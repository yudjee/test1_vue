import { DELETE_PRODUCT, 
		 CHANGE_TO_HIDDEN, 
		 CHANGE_TO_UNHIDDEN,
		 OPEN_POPUP,
		 CLOSE_POPUP,
		 DELETE_ORDER } from "./mutation-types";

export default {
	deleteProduct({ commit }, id) {
		commit(DELETE_PRODUCT, id)
	},
	changeToHidden({ commit }) {
		commit(CHANGE_TO_HIDDEN)
	},
	changeToUnhidden({ commit }) {
		commit(CHANGE_TO_UNHIDDEN)
	},
	openPopup({ commit }) {
		commit(OPEN_POPUP)
	},
	closePopup({ commit }) {
		commit(CLOSE_POPUP)
	},
	deleteOrder({ commit }, id) {
		commit(DELETE_ORDER, id)
	},
}
