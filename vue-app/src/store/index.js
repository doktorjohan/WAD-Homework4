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
                }
            }
        )
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
