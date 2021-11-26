import { connect } from "react-redux";
import { likeOrUnlike } from "../redux/actions";

const mapStateToProps = (state) => ({
  likedSongs: state.likes.content,
  likedLength: state.likes.content.length,
});

const mapDispatchToProps = (dispatch) => ({
  setLike: (element, dispatchName) => {
    dispatch(likeOrUnlike(element, dispatchName));
  },
});

const Liked = ({ likedSongs, setLike }) => {
  const toggleLike = (element) => {
    if (likedSongs.filter((el) => el.id === element.id).length < 1) {
      setLike(element, "LIKE");
    } else {
      setLike(element, "REMOVE_LIKE");
    }
  };

  return (
    <ul id="scrollable-section">
      {likedSongs.map((liked) => (
        <li className="pt-2">
          <a href="">{liked.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Liked);
