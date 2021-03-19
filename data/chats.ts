export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Kacperr',
		imageUri: 'https://www.vhv.rs/dpng/d/416/4164987_my1i687esymoageisk-yfee-oor-ympnictkeysceeent--mo.rnty-png-transparent-png.png'
	}, {
		id: 'u2',
		name: 'Morty',
		imageUri: 'https://www.vhv.rs/dpng/d/416-4164987_my-images-for-mickeycee-morty-png-transparent-png.png',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Morty!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Kacperr',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Morty',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Morty',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Kacperr',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Kacperr',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Morty',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Kacperr',
		},
	}]
}