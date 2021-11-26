import { connect } from "react-redux";
import { likeOrUnlike } from "../redux/actions";


const mapStateToProps = (state) => ({
    likedSongs: state.likes.content,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setLike: (element, dispatchName) => {
      dispatch(likeOrUnlike(element, dispatchName));
    },
  });

const Liked = ({likedSongs, setLike }) => {

    const toggleLike = (element) => {
        if (likedSongs.filter((el) => el.id === element.id).length < 1) {
          setLike(element, "LIKE");
        } else {
          setLike(element, "REMOVE_LIKE");
        }
      };



return(
    <>

    </>
)

}

export default connect(mapStateToProps, mapDispatchToProps)(Liked)
