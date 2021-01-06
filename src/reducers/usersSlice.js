import { createSlice, isAsyncThunkAction, nanoid } from "@reduxjs/toolkit";

export const initialUsers = [
	{
		id: nanoid(),
		gender: "male",
		name: {
			first: "Niten",
			last: "Solanki",
		},
		picture:
			"https://avatars2.githubusercontent.com/u/74289995?s=400&u=e9bd55375afc49fdef776308c7e3c3f05f64a9a7&v=4",
	},
	{
		id: nanoid(),
		gender: "male",
		name: {
			first: "Gökhan",
			last: "Baykam",
		},
		picture: "https://randomuser.me/api/portraits/men/84.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Lilly",
			last: "Kumar",
		},
		picture: "https://randomuser.me/api/portraits/women/84.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Julie",
			last: "Barnett",
		},
		picture: "https://randomuser.me/api/portraits/women/11.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Sharron",
			last: "Obrien",
		},
		picture: "https://randomuser.me/api/portraits/women/12.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Dana",
			last: "Jacobs",
		},
		picture: "https://randomuser.me/api/portraits/women/0.jpg",
	},
	{
		id: nanoid(),
		gender: "male",
		name: {
			first: "Allen",
			last: "Perkins",
		},
		picture: "https://randomuser.me/api/portraits/men/19.jpg",
	},
	{
		id: nanoid(),
		gender: "male",
		name: {
			first: "Walter",
			last: "Cunningham",
		},
		picture: "https://randomuser.me/api/portraits/men/19.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Jeanne",
			last: "Abraham",
		},
		picture: "https://randomuser.me/api/portraits/women/63.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Anna",
			last: "Caballero",
		},
		picture: "https://randomuser.me/api/portraits/women/47.jpg",
	},
	{
		id: nanoid(),
		gender: "female",
		name: {
			first: "Giuliana",
			last: "Colin",
		},
		picture: "https://randomuser.me/api/portraits/women/28.jpg",
	},
];

// const initialState = [
// 	{
// 		id: nanoid(),
// 		details: {
// 			firstName: "Niten",
// 			lastName: "Solanki",
// 			userName: "000NINTENDO",
// 			fullName: () => {
// 				return `${this.firstName} ${this.lastName}`;
// 			},
// 			avatarUrl:
// 				"https://avatars2.githubusercontent.com/u/74289995?s=400&u=e9bd55375afc49fdef776308c7e3c3f05f64a9a7&v=4",
// 		},
// 		posts: [
// 			{
// 				id: nanoid(),
// 				title: "Happiest Day Today",
// 				content:
// 					"Hello good morning to all my dear friend, hope you all fine at home and having good time with friends and family.",
// 				post_imageUrl: "",
// 				likes: 0,
// 				likesDetails: [
// 					{
// 						id: nanoid(),
// 						userName: "Harry Poter",
// 						avatarUrl:
// 							"https://avatars2.githubusercontent.com/u/74289995?s=400&u=e9bd55375afc49fdef776308c7e3c3f05f64a9a7&v=4",
// 						profilePath: "",
// 					},
// 				],
// 				comments: 0,
// 				commentsDetails: [
// 					{
// 						id: nanoid(),
// 						commentContent: "hi",
// 						userName: "David Wilson",
// 						avatarUrl:
// 							"https://avatars2.githubusercontent.com/u/74289995?s=400&u=e9bd55375afc49fdef776308c7e3c3f05f64a9a7&v=4",
// 						profilePath: "",
// 					},
// 				],
// 			},
// 		],
// 	},
// ];

const userSlice = createSlice({
	name: "users",
	initialState: initialUsers,
	reducers: {
		// addUser: (state, action) => {
		// 	const user = {
		// 		id: nanoid(),
		// 		details: {
		// 			firstName: action.payload.firstName,
		// 			userName: action.payload.userName,
		// 			lastName: action.payload.lastName,
		// 			avatarUrl: action.payload.url,
		// 			fullName: () => {
		// 				return `${this.firstName} ${this.lastName}`;
		// 			},
		// 			posts: [],
		// 		},
		// 	};
		// 	state.push(user);
		// },
		// addPost: (state, action) => {
		// 	const post = {
		// 		id: nanoid(),
		// 		title: action.payload.title,
		// 		content: action.payload.content,
		// 		post_imgUrl: action.payload.url,
		// 		likes: 0,
		// 		likesDetails: [],
		// 		comments: 0,
		// 		commentDetails: [],
		// 	};
		// 	state[action.payload.id].posts.push(post);
		// },
		// addLikes: (state, action) => {
		// 	state[action.payload.id].posts[action.payload.id].likes += 1;
		// },
		// removeLike: (state, action) => {
		// 	state[action.payload.id].posts[action.payload.id].likes -= 1;
		// },
		// addLikeDetails: (state, action) => {
		// 	const like = {
		// 		id: nanoid(),
		// 		userName: action.payload.userName,
		// 		avatarUrl: action.payload.url,
		// 		proifilePath: action.payload.profilePath,
		// 	};
		// 	state[action.payload.id].posts[action.payload.id].likesDetails.push(like);
		// },
		// addCommentDetails: (state, action) => {
		// 	const comment = {
		// 		id: nanoid(),
		// 		commentContent: action.payload.content,
		// 		userName: action.payload.userName,
		// 		avatarUrl: action.payload.avatarUrl,
		// 		profilePath: action.payload.profilePath,
		// 	};
		// 	state[action.payload.id].posts[action.payload.id].commentsDetails.push(
		// 		comment
		// 	);
		// 	state[action.payload.id].posts[action.payload.id].comments += 1;
		// },
	},
});

// export const {
// 	addPost,
// 	addUser,
// 	addLikes,
// 	removeLike,
// 	addCommentDetails,
// 	addLikeDetails,
// } = userSlice.actions;

export default userSlice.reducer;
