import React from "react";
import { createSlice, nanoid, unwrapResult } from "@reduxjs/toolkit";
import { initialUsers } from "./usersSlice";

const users = initialUsers;
console.log("users", users);

const initialPosts = {
	[users[0].id]: [
		{
			id: nanoid(),
			title: "to provide or to reject the blind are welcome option to find",
			content:
				"And it takes  nsuscipit follow accepted lightly with  nreprehenderit discomfort may be the entire  nnostrum of the things that happens is that they are extremely",
			url:
				"https://images.unsplash.com/photo-1608118961436-4aa6eb97cc43?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[1].id]: [
		{
			id: nanoid(),
			title: "that was",
			content:
				"is existed at the time of life  'Blessed are the pain of her pains, nor condemn nseq they are nothing  nfugiat or not at all the blandishments of pleasure, and the discomfort may rejecting some  nWho, not being due, we may be able to open the man who did not, but there is no",
			url:
				"https://images.unsplash.com/photo-1609780919523-87c2d6dc0be2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[2].id]: [
		{
			id: nanoid(),
			title: "And it is because they gave",
			content:
				"selected for rejecting annoying blind does not happen that small pleasure  naccusamus for him to be happy,  river or pleasures that are beneficial to the incident  nut of convenience",
			url:
				"https://images.unsplash.com/photo-1609003080284-d158cbdfbc44?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],

	[users[3].id]: [
		{
			id: nanoid(),
			title: "it will be blinded",
			content:
				"rejects any and often experience pleasure  mansit lot of things to take to provide fault  nquir here the opportunity to do the right bound pain  nFor the pleasure of the outdoor",
			url:
				"https://images.unsplash.com/photo-1609769621098-e4879adc4885?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[4].id]: [
		{
			id: nanoid(),
			title: "do you hate",
			content:
				"I look for things, but rejected  nal or to avoid it, but it is  nvoluptatis all the pleasures of what we can  nest bound or no pain",
			url:
				"https://images.unsplash.com/photo-1607413130274-e858701702d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[5].id]: [
		{
			id: nanoid(),
			title: "great pain to open for them",
			content:
				"in order to follow the rejects of the body, provide in any one of these there is nothing  nmollitia us dare to give annoyance  nperspiciatis of denouncing, and the things which I condemn no one from the  nvoluptatis The sorrows of pain and discomfort he wishes to",
			url:
				"https://images.unsplash.com/photo-1607817981676-7ea18ca576bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[6].id]: [
		{
			id: nanoid(),
			title: "large and easy",
			content:
				"let it be shown some of the pain of life, please  in which a man who has no one, either, for who is often nmagni  nQuidam repel excepturi that, because I  nsunt do who comes after them, but the things which they call",
			url:
				"https://images.unsplash.com/photo-1609337042550-875d94879f58?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[7].id]: [
		{
			id: nanoid(),
			title: "pain is the pain",
			content:
				"I will open the sorrow which was worthy of him,  nfacilis some cases we may be able, when they are to be in character, they receive the  nquaerat welcome the ancestors of the great  nips so that the advantage of this kind of pleasure, or the pain of life",
			url:
				"https://images.unsplash.com/photo-1608312346040-fd448913e462?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[8].id]: [
		{
			id: nanoid(),
			title: "do the right pain all the time and denouncing",
			content:
				"do not know the right of the main pain  Nenior for the  nvenire will be more than either of us  net or which provide pleasure or the pleasure",
			url:
				"https://images.unsplash.com/photo-1607775170524-a4f819375a21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
	[users[9].id]: [
		{
			id: nanoid(),
			title: "That option is troublesome because it",
			content:
				"I like the armed services or the big  ndoloribus who reject  nVero but it  nquo I denounce it, but the truth mistake",
			url:
				"https://images.unsplash.com/photo-1607789377672-f6934b34c7d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
		},
	],
};
console.log("initialPosts", initialPosts);
// users.map((user) => {
// 	initialPosts.map((post) => {
// 		if (users.indexOf(user) === initialPosts.indexOf(post)) {
// 			post.userId = user.id;
// 		}
// 		return;
// 	});
// });

const postsSlice = createSlice({
	name: "Posts",
	initialState: initialPosts,
	reducers: {},
});

const postsReducer = postsSlice.reducer;
export default postsReducer;

export { initialPosts };
