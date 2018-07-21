import {Photo, Post} from "@randy.tarampi/js";

export default type => {
	switch (type) {
		case "Photo":
			return Photo;

		default:
		case "Post":
			return Post;
	}
};
