import { ADD_POST, GET_POSTS, SET_POSTS_LOADING, DELETE_POST, GET_POST } from "../actions/types";

const initialState={
    posts:[],
    post:{},
    loading:false
};

const PostsReducer=(state=initialState,action)=>{

    switch(action.type){
        case SET_POSTS_LOADING:
        return{
            ...state,
            loading:true
        }
        case ADD_POST:
        return {
            ...state,
            posts:[action.payload, ...state.posts]
        }
        case GET_POST:
        return {
            ...state,
            post:action.payload,
            loading:false
        }
        case GET_POSTS:
        return {
            ...state,
            posts:action.payload,
            loading:false
        }
        case DELETE_POST:
        return {
            ...state,
            posts:state.posts.filter(post=>post._id!==action.payload)
        }
        default:
        return state;
    }

}

export default PostsReducer;