import {createStore} from 'vuex'
import {getAllPosts} from '@/apiWrappers'

export default createStore({
    state: {
        //postsList: []
        postsList: [
        ],
        usernames: []
    },
    getters: {

    },
    mutations: {
        setPostsData(state, postsData) {
            state.postsList = postsData.map(post => {
                return {
                    userId: post.user_id,
                    userName: post.username,
                    postId: post.id,
                    post: post.post,
                    image: post.image_link,
                    createTime: post.created_at,
                    likes: post.likes
                }
            }
        )
        },
        resetLikes: state => {
            state.postsList.forEach(post => {
                post.likes = 0;
            })
        },
        increaseLike: (state, givenId) => {
            state.postsList.forEach(post => {
                if (post.id === givenId){
                    post.likes +=1;
                    increasePostLikes(givenId)
                }
            })
        }
    },
    actions: {
        async fetchPosts({commit}) {
            const posts = await getAllPosts()
            console.log(posts)
            commit("setPostsData", posts)
            return posts
        }
    },

    modules: {}
})
