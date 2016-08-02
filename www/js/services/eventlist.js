var mod = angular.module('response.services.eventService', []);


mod.service('EventsService', function () {
	var self = {
		getEvent: function (eventid) {
			return _.find(self.events, {"eventid": eventid});
		},
		events: [
			{
				"eventid": 28416,
				"link": "http://tvrage.com/2_Broke_Girls",
				"name": "Bombing at school",
				"classification": "iraq-car-bomb",
				"description": "A bomb was placed nearby an elementary school killing 11 children last friday.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"g1"
				],
				"network": "enough",
                                "location" :"U.S"
			},
			{
				"eventid": 38584,
				"link": "http://tvrage.com/american-crime-2014",
				"name": "street carbomb",
				"classification": "iraq-car-bomb",
				"description": "A street car bombing at a checkpoint destroyed 3 cars and injured check point security guards.",
				"image": "http://images.tvrage.com/shows/39/38584.jpg",
				"genres": [
					"gone",
					"g2"
				],
				"network": "stop",
                                "location" :"U.S"
			},
			{
				"eventid": 38262,
				"link": "http://tvrage.com/shows/id-38262",
				"name": "Bomb near checkpoint",
				"classification": "iraq-car-bomb",
				"description": "The dousing rods didn't work, yet again and another security checkpoint has been destroyed.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"man",
					"this",
					"sucks"
				],
				"network": "not",
                                "location" :"U.S"
			},{
				"eventid": 28416,
				"link": "http://tvrage.com/2_Broke_Girls",
				"name": "Bombing at school",
				"classification": "iraq-car-bomb",
				"description": "A bomb was placed nearby an elementary school killing 11 children last friday.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"g1"
				],
				"network": "enough",
                                "location" :"U.S"
			},
			{
				"eventid": 38584,
				"link": "http://tvrage.com/american-crime-2014",
				"name": "street carbomb",
				"classification": "iraq-car-bomb",
				"description": "A street car bombing at a checkpoint destroyed 3 cars and injured check point security guards.",
				"image": "http://images.tvrage.com/shows/39/38584.jpg",
				"genres": [
					"gone",
					"g2"
				],
				"network": "stop",
                                "location" :"U.S"
			},
			{
				"eventid": 38262,
				"link": "http://tvrage.com/shows/id-38262",
				"name": "Bomb near checkpoint",
				"classification": "iraq-car-bomb",
				"description": "The dousing rods didn't work, yet again and another security checkpoint has been destroyed.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"man",
					"this",
					"sucks"
				],
				"network": "not",
                                "location" :"U.S"
			}
		],
                
                activity: [
			{
				"eventid": 28416,
				"link": "http://tvrage.com/2_Broke_Girls",
				"name": "Bombing at school",
				"classification": "iraq-car-bomb",
				"description": "A bomb was placed nearby an elementary school killing 11 children last friday.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"g1"
				],
				"network": "enough",
                                "location" :"U.S"
			},
			{
				"eventid": 38584,
				"link": "http://tvrage.com/american-crime-2014",
				"name": "street carbomb",
				"classification": "iraq-car-bomb",
				"description": "A street car bombing at a checkpoint destroyed 3 cars and injured check point security guards.",
				"image": "http://images.tvrage.com/shows/39/38584.jpg",
				"genres": [
					"gone",
					"g2"
				],
				"network": "stop",
                                "location" :"U.S"
			},
			{
				"eventid": 38262,
				"link": "http://tvrage.com/shows/id-38262",
				"name": "Bomb near checkpoint",
				"classification": "iraq-car-bomb",
				"description": "The dousing rods didn't work, yet again and another security checkpoint has been destroyed.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"man",
					"this",
					"sucks"
				],
				"network": "not",
                                "location" :"U.S"
			},{
				"eventid": 28416,
				"link": "http://tvrage.com/2_Broke_Girls",
				"name": "Bombing at school",
				"classification": "iraq-car-bomb",
				"description": "A bomb was placed nearby an elementary school killing 11 children last friday.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"g1"
				],
				"network": "enough",
                                "location" :"U.S"
			},
			{
				"eventid": 38584,
				"link": "http://tvrage.com/american-crime-2014",
				"name": "street carbomb",
				"classification": "iraq-car-bomb",
				"description": "A street car bombing at a checkpoint destroyed 3 cars and injured check point security guards.",
				"image": "http://images.tvrage.com/shows/39/38584.jpg",
				"genres": [
					"gone",
					"g2"
				],
				"network": "stop",
                                "location" :"U.S"
			},
			{
				"eventid": 38262,
				"link": "http://tvrage.com/shows/id-38262",
				"name": "Bomb near checkpoint",
				"classification": "iraq-car-bomb",
				"description": "The dousing rods didn't work, yet again and another security checkpoint has been destroyed.",
				"image": "http://images.tvrage.com/shows/29/28416.jpg",
				"genres": [
					"man",
					"this",
					"sucks"
				],
				"network": "not",
                                "location" :"U.S"
			}
		]
	};
	return self;
});
