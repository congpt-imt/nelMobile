import {LayoutProvider} from 'recyclerlistview';
import {Constants} from "../constants";

const ViewTypes = {
    FULL: 0,
    HALF: 1
};

export class LayoutRecyclerListView {
    static getLayoutProvider() {
        index => {
            if (index % 2 !== 0) {
                return ViewTypes.FULL;
            } else {
                return ViewTypes.HALF;
            }
        },

        return new LayoutProvider(
            (type, dim) => {
                switch (type) {
                    case ViewTypes.HALF:
                        dim.width = Constants.SIZE_WINDOW.width / 2;
                        dim.height = Constants.SIZE_WINDOW.width / 2;
                        break;
                    case ViewTypes.FULL:
                        dim.width = Constants.SIZE_WINDOW.width;
                        dim.height = Constants.SIZE_WINDOW.width / 2;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );
    }
}
