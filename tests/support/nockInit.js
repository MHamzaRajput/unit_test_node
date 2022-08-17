const jokesNock = nock('http://api.icndb.com');

const mockResponseRandom = {
	type: "success",
	value: {
		id: 268,
		joke: "He who lives by the sword, dies by the sword. He who lives by Chuck Norris, dies by the roundhouse kick.",
		categories: []
	}
}

jokesNock.get('/jokes/random').reply(200, mockResponseRandom);