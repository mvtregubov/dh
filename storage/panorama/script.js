pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
    //    "author": "Matthew Petroff",
        "sceneFadeDuration": 1000,
		             "autoLoad": true

    },

    "scenes": {
		
        "circle": {
            "title": "Сцена 1",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "1.jpg",
            "autoRotate": -1,
			"hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "circletwo"
                }
            ]
        },

		
        "circletwo": {
            "title": "Сцена 2",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "2.jpg",
            "autoRotate": -1,
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "circletree"
                }
            ]
        },

        "circletree": {
            "title": "Сцена 3",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "3.jpg",
            "autoRotate": -1,
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },
				
		
        "house": {
            "title": "Сцена 4",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "4.jpg",
            "autoRotate": -1,
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});