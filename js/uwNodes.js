var zInterval = -200,

		// imgRoot = '\/\/localhost/htdocs/egan-img';
		imgRoot = '\/\/res.cloudinary.com\/egan\/image\/upload';
		bgImgRoot = '\/\/res.cloudinary.com\/egan\/image\/upload';

var uwNodes = [
	{ 'tier': 1,
		'nodes': [
			{
				'slug':'home',
				'label': '',
				'objects': [

					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Anna watched the sea. There was a feeling she had, standing at it&rsquo;s edge: an electric mix of attraction and dread. What would be exposed if all the water were suddenly to vanish?<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>A landscape of lost objects: sunken ships, hidden treasure, gold and gems and the charm bracelet that had fallen from her wrist into a storm drain.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Dead bodies, her father always added, with a laugh. To him, the ocean was a wasteland.<\/p>',
					}
				]
			},
			{
				'slug':'books/manhattan-beach',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He&rsquo;d been about to get back in his car when he found himself staring into the dark of the Upper Bay, where boats and waterfront were blacked out.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He&rsquo;d perceived a new, dynamic density in the darkness. All at once his eyes had organized the mystery and he&rsquo;d seen it.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>A procession of immense ships slipping from the harbor at regular intervals like beasts or ghosts. A convoy headed out to sea. There was something profound, unearthly, even, in its muted passage.<\/p>',
					}
				]
			},
			{
				'slug':'books/a-visit-from-the-goon-squad',
				'label': '',
				'objects': [

					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Anna leaned her head against her sister&rsquo;s and watched a long wave form, stretching until it achieved translucence, then somersaulting forward and collapsing into creamy suds that eked toward them over the sand. <\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Then another wave gathered, reaching, stretching, a streak of silver dashing along its surface where the weak sunlight touched it. The strange, violent, beautiful sea. this was what she had wanted Lydia to see.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>It touched every part of the world, a glittering curtain drawn across a mystery.<\/p>',
					}
				]
			},
			{
				'slug':'books/the-keep',
				'label': '',
				'objects': [
					{
						'class':'image floating',
						'posx':-17,
						'posy':0,
						'posz':0,
						'roty':4,
						'rotx':3,
						'rotz':-15,
						'image': imgRoot + '\/v1\/floating\/phone.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/look-at-me',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He&rsquo;d looked out and noticed the sea as if it were entirely new. An infinite hypnotic expanse that could look like scales, wax, hammered silver, wrinkled flesh. It had structure and layers you couldn&rsquo;t see from land.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Fixing his eyes upon this unfamiliar sea, he&rsquo;d learned to float in a semi-conscious state, alert but not fully awake.<\/p>',
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Blood broke in golden flashes against his eyeballs. A humming emptiness filled his mind. Not to think, not to feel—simply to be, without pain.<\/p>',
					}
				]
			},
			{
				'slug':'books/the-invisible-circus',
				'label': '',
				'objects': [
					{
						'class':'image floating',
						'posx':15,
						'posy':2,
						'posz':0,
						'roty':3,
						'rotx':2,
						'rotz':15,
						'image': imgRoot + '\/v1\/floating\/sockets.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/emerald-city-and-other-stories',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>She descended the ladder backward, then held the descending line and let the harbor swallow her.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>The current was tremendous, a pull with the force of the ocean behind it. Here, there was no difference between opening her eyes and closing them.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>This made for an eerie dislocation, as if she were sliding toward nothing or floating in a void.<\/p>',
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>When at last she reached the bottom, she clutched the line and blinked into the dark, wondering if she&rsquo;d come down too quickly.<\/p>',
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>Anna shut her eyes and immediately felt calmer. Here was a blindness she could tolerate.<\/p>',
					}
				]
			},
			{
				'slug':'non-fiction',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He was alone at the bottom of the sea. The extremity of his position mesmerized him.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He&rsquo;d always liked the dark, but night was the only version of it he&rsquo;d known until now. This was the primeval dark of nightmares. It covered secrets too atrocious to be exposed. drowned children, sunken ships.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He let go the line and took a few steps away, imagining himself cut off and alone in this forsaken place. Something long and smooth slid along the envelope of his diving suit—an eel. A fish. He felt the possibility of panic.<\/p>',
					}
				]
			},
			{
				'slug':'category/news',
				'label': '',
				'objects': [
					{
						'class':'image floating',
						'posx':20,
						'posy':5,
						'posz':0,
						'roty':-15,
						'rotx':10,
						'rotz':0,
						'image': imgRoot + '\/v2\/floating\/gears-3.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'about',
				'label': '',
					'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>The night was cool and clear, a rolling sea just visible under a paring of moon.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>He couldn&rsquo;t see the ships around them, but he perceived their density, five hundred feet away fore and aft, a thousand feet abeam, all nosing together through the swells like a spectral herd.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>The Southern Cross hung near the horizon. He preferred the southern sky; it was brighter, denser with planets.<\/p>',
					}
				]
			},
			{
				'slug':'contact',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>In their new life, the wind was high, the water heavy and black. There was no buffer from the elements—wind, sun, and rain groped and clawed them at will.<\/p>'
					},
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>The stars and moon seemed proximate and unguarded, like bits of shell or sparkling rock that he could crawl among when he chose. They saw night rainbows.<\/p>'
					}
				]
			}
		]
	},
	{ 'tier': 2,
		'nodes': [
			{
				'slug':'home',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>The Jeremiah O&rsquo;Brien, berthed at Pier 45 in San Francisco, is one of two functional Liberty ships that remain in use in the United States. She participated in D-Day, and is structurally unaltered and historically accurate. Among her treasures are the Mariner docents who volunteer their time and memories to those who visit. These photos were taken over several visits and one short cruise.<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/1Exterior\/1The-Jeremiah-OBrien-From-Pier-39.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>The Jeremiah O&rsquo;Brien<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/1Exterior\/2JOB-Bow.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/1Exterior\/3Gangway-to-JOB.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Gangway<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/1Exterior\/4Booms-and-Raft.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Booms and Raft<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/1Exterior\/5Alley.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/1Exterior\/6.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/manhattan-beach',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/7View-Forward-From-Flying-Bridge.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>View of Forward Main Deck from Flying Bridge<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/8View-Aft-From-Flying-Bridge.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>View Aft From Flying Bridge<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/3Mast-and-Vent.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Mast and Vent<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/4Boom-Cables.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Boom Cables<\/p>'
					}
				]
			},
			{
				'slug':'books/a-visit-from-the-goon-squad',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/6Stack-With-Smoke.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Stack With Smoke<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/10Gun-On-Flying-Bridge.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Gun On Flying Bridge<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/2Deckphotos\/11Gun-Sight.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Gun Sight<\/p>'
					}
				]
			},
			{
				'slug':'books/the-keep',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/1Porthole.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Porthole<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/2SeamanQuarters.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Seaman Quarters<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/3FirstMateStateroom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>First Mate Stateroom<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/4GunnersBunks.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Gunners Bunks<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/5MessHall.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Mess Hall<\/p>'
					}
				]
			},
			{
				'slug':'books/look-at-me',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/6NavigationChartRoom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Navigation Chart Room<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/8OfficersSaloon.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p> Officers&rsquo; Saloon<\/p>'
						},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/9RadioShack.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Radio Shack<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/10SparksStateroom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Sparks&rsquo; Stateroom<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/3OfficesCabins\/11ThirdMateStateroom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Third Mate Stateroom<\/p>'
					}
				]
			},
			{
				'slug':'books/the-invisible-circus',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'video',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/Engine-Room.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Engine Room<\/p>',
						'orientation': 'landscape',
						'video':'<iframe src="https://player.vimeo.com/video/238235611" width="640" height="360" frameborder="0"></iframe>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/2View-Down-Into-Engine-Room.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>View Down Into Engine Room<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/4.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'video',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/Pistons-Turning.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Pistons Turning<\/p>',
						'orientation': 'portrait',
						'video':'<iframe src="https://player.vimeo.com/video/238235702" width="640" height="1137" frameborder="0"></iframe>'
					},
				]
			},
			{
				'slug':'books/emerald-city-and-other-stories',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/9engineroomtelegraph.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Engine Room Telegraph<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/10Pistons.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Connecting Rod<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/4EngineRoom\/12Speaking-Tubes.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Speaking Tubes<\/p>'
					}
				]
			},
			{
				'slug':'non-fiction',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/5BoatsandRafts\/1Starboard-Lifeboats.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Starboard Lifeboats<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/5BoatsandRafts\/3Boat-and-Falls.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Boat and Falls<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/5BoatsandRafts\/4Lifeboat-Number-1.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Lifeboat Number 1<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/5BoatsandRafts\/5Life-Raft.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Life Raft<\/p>'
					}
				]
			},
			{
				'slug':'category/news',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/6Equipment\/1Flying-Bridge-Compass.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Flying Bridge Compass<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/6Equipment\/2Flying-Bridge-Wheel.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Wheel<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/6Equipment\/4Flying-Bridge-Engine-Room-Telegraph.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Engine Room Telegraph<\/p>'
					}
				]
			},
			{
				'slug':'about',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/6Equipment\/8.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Steering Engine<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/6Equipment\/10Voice-Activated-Telephone.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Voice Activated Telephone<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/6Equipment\/11Stored-Signal-Flags.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Stored Signal Flags<\/p>'
					}
				]
			},
			{
				'slug':'contact',
				'label': 'The Jeremiah O&rsquo;Brien',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/7Mapsanddiagrams\/4Convoy-Diagram.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Convoy Diagram<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/LibertyShipJeremiahOBrien\/7Mapsanddiagrams\/6Knots.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Knots<\/p>'
					}
				]
			}
		]
	},
	{ 'tier': 3,
		'nodes': [
			{
				'slug':'home',
				'label': 'Mr. Gratzky',
				'objects': [
					{
						'class':'scrollbar text closed no-click',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<h3>Mr. Gratzky - Cut Scene</h3><p>To Anna&rsquo;s knowledge, wounded Mr. Gratzky had never emerged from his room off the kitchen. Visitors would pass the door on their way to the front room, where Mrs. Gratzky conducted her sewing business. The door was always ajar, presumably for air—rooms off the kitchen usually faced the shaft. When Anna came to deliver parcels of finished costumes and receive new pieces to bring home, she occasionally heard a cough from behind that door, a ballgame muttering faintly on a radio.</p><p>When Mrs. Gratzky wasn&rsquo;t home, visitors left their packages on the kitchen table. At these times, Anna would occasionally move closer to the door, trying to see into the gloom beyond it. Perhaps, on that day, she&rsquo;d stood even closer than usual. Perhaps she&rsquo;d crossed the threshold by some fraction of an inch. Whatever it was, he saw, or sensed, her there.</p><p>&ldquo;Who&rsquo;s that? Come in where I can see you.&rdquo;</p><p>His voice was surprisingly forceful. Heart bucking, Anna pushed open the door and stepped inside the dark room. &ldquo;Good afternoon,&rdquo; she said. &ldquo;My name is Anna Kerrigan. My mother does sewing for Mrs. Gratzky.&rdquo;</p><p>The room smelled of mothballs and old newspaper. The window facing the shaft was closed, covered with a lace curtain whose festive red trim Anna recognized from tunics her mother had worked on. The only light came from the kitchen.</p><p>&ldquo;Come closer,&rdquo; he said. &ldquo;You&rsquo;re in silhouette.&rdquo;</p><p>She was surprised by how large a man he was: long and big-shouldered, a giant column covered to the neck with blankets and a white coverlet. His head was propped nearly at a right angle to the rest of him, tilting a lean, ravaged face at the room. &ldquo;Are you sick?&rdquo; she asked.</p><p>His laugh made a sound like dice being shaken in a cup. &ldquo;Don&rsquo;t play dumb, missy. Everyone knows what&rsquo;s the matter with me.&rdquo;</p><p>Anna felt herself flush, relieved that he couldn&rsquo;t see her clearly. &ldquo;You were hurt in the war,&rdquo; she said.</p><p>&ldquo;What war?&rdquo; he shot back. &ldquo;No one remembers it.&rdquo;</p><p>&ldquo;I do.&rdquo;</p><p>&ldquo;You&rsquo;re what, ten?&rdquo;</p><p>&ldquo;Twelve,&rdquo; she said, offended. In fact, she was almost twelve; her birthday was the next week.</p><p>&ldquo;Hard to tell, lying here like a log. Now what do you remember, missy, about the Great War.&rdquo;</p><p>Lessons swirled and scattered in Anna&rsquo;s mind: the archduke, trench warfare, machine guns. &ldquo;You&rsquo;ve a hole in you that won&rsquo;t heal,&rdquo; she said at last.</p><p>&ldquo;That happens to be true,&rdquo; he said. &ldquo;They&rsquo;ve tried sewing it, taping it, grafting it—nothing sticks.&rdquo;</p><p>&ldquo;Can you stand up?&rdquo;</p><p>&ldquo;Yes, but I tire pretty fast.&rdquo;</p><p>&ldquo;Could part of you…fall out?&rdquo;</p><p>&ldquo;Now that&rsquo;s a good question,&rdquo; he said. &ldquo;A very reasonable question. But no. It turns out you can live pretty well, for a while, with a hole in you. The problem is not what might come out of the hole but what might go in. Germs, you understand. Infections. So when you have a hole, like I have—and I&rsquo;m not the only one, by the way, there are men living with holes in their heads, believe it or not, you can look right inside and see their brains…but we…people with holes…we have to be… careful.&rdquo; She could barely hear the end of the sentence.</p><p>&ldquo;And stay in bed?&rdquo;</p><p>&ldquo;…And stay in bed.&rdquo;</p><p>A spectral handsomeness haunted the wreckage of Mr. Gratzky&rsquo;s face: shelves of cheekbone, white teeth, rowdy black eyes. His body seemed nearly to overpower the bed, but in fact he occupied only half. The other half was empty, a night table and a drinking glass beside it: presumably where Mrs. Gratzky slept.</p><p>When Anna looked back at him, she found his bright gaze resting on her. &ldquo;You&rsquo;re a nosy one,&rdquo; he said. &ldquo;I can tell. You want to see it.&rdquo;</p><p>She did, of course. But she was afraid.</p><p>&ldquo;It&rsquo;s probably not as bad as you think.&rdquo;</p><p>The coverlet smelled of roses and soap. Mrs. Gratzky took impeccable care of this big man, a fact that seemed, to Anna, embarrassingly private.</p><p>&ldquo;You must promise not to scream.&rdquo;</p><p>&ldquo;I never scream,&rdquo; she said.</p><p>He pulled back the coverlet to reveal fresh striped pajamas with expensive-looking piping. He began to unbutton the top. As Anna watched his bare torso materialize, less bony than her father&rsquo;s, covered with sparse black hair that lay flat against the skin, she had a first intimation of having moved alongside him into unfamiliar territory. His large brown nipples with their fringe of black hair reminded her of the feathered pasties Aunt Brianne wore in her Vanities stills. When the pajama top was fully unbuttoned, he pulled its two halves aside. Below his ribcage on the right, lay a square of gauze stained faintly pink, as if with tomato water. It wasn&rsquo;t taped, it merely rested there. He lifted it, and she saw a hole in his flesh the size of a quarter, its edges red and wet as a baby&rsquo;s mouth. In the scant light, she could barely discern a viscous landscape within it.</p><p>&ldquo;There it is,&rdquo; he said. &ldquo;What do you say?&rdquo;</p><p>Anna brought her eye nearer the wound. It was like nothing she had seen, and the fascination she felt in its presence was almost transporting. &ldquo;Does it hurt?&rdquo; she asked.</p><p>&ldquo;When I lie like this, no. But when I stand, it aches.&rdquo;</p><p>Anna moved closer. She wanted to shine a bright light directly into the hole, to peer around its edges into Mr. Gratzky&rsquo;s interior. She wanted to put her finger inside the wound and feel it close around her. &ldquo;Where does it hurt?&rdquo; she asked. &ldquo;Right where the hole is, or somewhere else?&rdquo;</p><p>He didn&rsquo;t answer. He seemed to be thinking. Abruptly he flipped the gauze back over the wound, barely giving Anna time to withdraw her face. &ldquo;You get the picture,&rdquo; he said. &ldquo;Now scram.&rdquo; As she fumbled toward the door, he added, &ldquo;Turn up that radio, would you?&rdquo;</p><p>Anna stood, disoriented, in the kitchen. A moment later she heard heels on the stairs, followed by Pearl Gratzky&rsquo;s asthmatic breathing. Quickly she restored the door to its usual position. As Mrs. Gratzky entered, Anna curled her fingers around the string on her package as though in the act of setting it down. Mr. Gratzky must have heard his wife&rsquo;s steps, she realized now, or known the timing of her arrival. Anna followed her into the front room, where she unwrapped the parcel and applied her usual fierce scrutiny to each of thirty-two sequined bowlers. This was a tense process; Mrs. Gratzky sometimes demanded alterations on the spot, or sent things back to be redone. This time, Anna was aware of her shared intelligence with Mr. Gratzky, as if she were still beside his bed in the back room. Having a secret from Mrs. Gratzky with her husband was something she had not foreseen. It felt wrong. Yet it seemed beyond Anna&rsquo;s power, now, to undo the collusion.</p><p>By suppertime, the weight of her new secret had become uncomfortable. Anna no longer wanted to keep it, but she was afraid to tell it. Her father, she knew, would blame her for going into Mr. Gratzky&rsquo;s bedroom and being curious. Even worse was the thought of his blaming Mr. Gratzky, having a confrontation that might jeopardize her mother&rsquo;s sewing work. She was not to tell; that was part of the secret between her and Mr. Gratzky. Telling would make it more wrong, not less. But how had it become a secret in the first place?</p><a class="open-handle">&hellip;</a>'
					}
				]
			},
			{
				'slug':'books/manhattan-beach',
				'label': 'The Brooklyn Navy Yard',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>The Brooklyn Navy Yard was the largest builder and repairer of Allied ships during WWII. It built 17 battleships and repaired 5000.<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/1Building77\/1Bldg77.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Building 77 is where the Captain of the Yard&rsquo;s office was located. These images, taken in 2005, show Bldg 77 untouched since the War. It has since been fully renovated and is now in industrial use.<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/1Building77\/2Railroad-Terminal-Map-Bldg-77.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Railroad Terminal Map Bldg 77<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/1Building77\/3Ghost-Maps.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Ghost Maps<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/1Building77\/8Mail-Room.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/1Building77\/9Old-Safe.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Old Safe<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/1Building77\/11Clock-Guide.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Clock Guide<\/p>'
					},
				]
			},
			{
				'slug':'books/a-visit-from-the-goon-squad',
				'label': 'The Brooklyn Navy Yard',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/2OutdoorViews\/4View-From-Bldg-772.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>View from Bldg 77, 2005<\/p>'
					}
				]
			},
			{
				'slug':'books/the-keep',
				'label': 'The Brooklyn Navy Yard',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/3Artifacts\/1Washroom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Artifacts of WWII: washroom<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/2bny2005\/3Artifacts\/4Molds.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Wood shipfitting molds<\/p>'
					}
				]
			},
			{
				'slug':'books/look-at-me',
				'label': '',
				'objects': [
					{
						'class':'image floating',
						'posx':-20,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':-5,
						'rotz':8,
						'image': imgRoot + '\/floating\/hat.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p><\/p>'
					}
				]
			},
			{
				'slug':'books/the-invisible-circus',
				'label': 'the Mark V',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>I was honored and lucky to be invited to the 2009 reunion of the United States Army Divers Association. There, my friends Jim Heimbach (dark sweatshirt) and Frenchy Leville (tan shirt) acted as my tenders and dressed me in the Mark V.<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2467_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2468_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2469_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2470_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2472_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2475_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2477_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2479_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2480_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/1JennyinDress\/thumb_100_2481_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/emerald-city-and-other-stories',
				'label': 'the Mark V',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2482_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2484_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2485_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2486_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2487_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2489_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2490_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2491_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/2JennyInDress\/thumb_100_2492_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'non-fiction',
				'label': 'the Mark V',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2493_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2494_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2497_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2501_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2502_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2504_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2505_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/3JennyInHat\/thumb_100_2506_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'category/news',
				'label': 'the Mark V',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/4JennyDisrobing\/thumb_100_2513_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/4JennyDisrobing\/thumb_100_2514_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/4JennyDisrobing\/thumb_100_2515_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/4JennyDisrobing\/thumb_100_2516_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'about',
				'label': 'the Mark V',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/5ArmyDiversinTank\/thumb_100_2509_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Present-Day Divers Using in the old Mark V Dress<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/5ArmyDiversinTank\/thumb_100_2510_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'contact',
				'label': 'the Mark V',
				'objects': [					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/5ArmyDiversinTank\/thumb_100_2518_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/MarkV-Present-Day\/5ArmyDiversinTank\/thumb_100_2519_1024.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			}
		]
	},
	{ 'tier': 4,
		'nodes': [
			{
				'slug':'home',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>These photos of the Brooklyn Navy Yard in the 1930s and 1940s were taken of images at the National Archives.<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/1ViewsFromAbove\/2Bldg-77-View-From-Jan-6-1941.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 77 View From, Jan 6, 1941<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/1ViewsFromAbove\/4Bldg-77-View-North-Sept-29-1941.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 77 View North Sept 29, 1941<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/1ViewsFromAbove\/5Bldg-77-View-North-from-Oct-18-1941.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 77 View North from Oct 18, 1941<\/p>'
					}
				]
			},
			{
				'slug':'books/manhattan-beach',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/1ViewsFromAbove\/7Night-View-from-Bldg-77-1942.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Night View from Bldg 77, 1942<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/1ViewsFromAbove\/8Night-View-2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/a-visit-from-the-goon-squad',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/2Buildings\/1Bldg-4-the-Structural-Shop-1937.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 4, the Structural Shop, 1937<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/2Buildings\/3Bldg-128-Entrance.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 128, the Machine Shop<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/2Buildings\/6Bldg-128.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 128<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/2Buildings\/7Bldg-128.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bldg 128<\/p>'
					}
				]
			},
			{
				'slug':'books/the-keep',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/1SandsStreetGate1937.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Sands Street Gate 1937<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/2Building-Ways-in-Distance.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Building Ways in Distance<\/p>'
					}
				]
			},
			{
				'slug':'books/look-at-me',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/4Building-Ways-1930.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Building Ways 1930<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/5BuildingWays2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Building Ways<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/6CocoaFactoryFlushing-Avenue.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Cocoa Factory Flushing Avenue<\/p>'
					}
				]
			},
			{
				'slug':'books/the-invisible-circus',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/7CommandantsHouse-2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Commandant&rsquo;s House<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/9CommandantsHouse1936.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Commandant&rsquo;s House 1936<\/p>'
					}
				]
			},
			{
				'slug':'books/emerald-city-and-other-stories',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/12Hammerhead-CraneinDistance.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Dredging barge and hammerhead crane in distance<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/3OutdoorViews\/13HammerheadCrane.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Hammerhead Crane<\/p>'
					}
				]
			},
			{
				'slug':'books/the-invisible-circus',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/4RepairsandConstruction\/1Bricklayers.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Bricklayers<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/4RepairsandConstruction\/5Dry-Docks-5-_-6-Construction-1941.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Dry Docks 5 & 6 Construction, 1941<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/4RepairsandConstruction\/7Dry-Docks-5_6-Construction-1941.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Dry Docks 5&6 Construction, 1941<\/p>'
					}
				]
			},
			{
				'slug':'non-fiction',
				'label': 'the Brooklyn Navy Yard: 1930s and 1940s',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/5Artifacts\/1Ticket-to-Launch.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Ticket to Ship Launch<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/5Artifacts\/2Ticket-to-Officers-Mess.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Ticket to Officers Mess<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/1bny1930sand1940s\/5Artifacts\/Urinals-and-Sinks.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Washroom: Urinals and Sinks<\/p>'
					}
				]
			},
			{
				'slug':'category/news',
				'label': '',
				'objects': [
					{
						'class':'image floating',
						'posx':30,
						'posy':-8,
						'posz':0,
						'roty':-10,
						'rotx':0,
						'rotz':-12,
						'image': imgRoot + '\/v1\/floating\/suit.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'about',
				'label': 'The Brooklyn Navy Yard: 2015',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/1Railroad-Transom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Naval Yard Railroad Transom, 2015<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/2Railroad-Transom-4.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Railroad Transom<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/3Old-Tracks.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Old Tracks<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/4Ruined-Tracks-and-Pier-Bricks.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Ruined Tracks and Pier Bricks<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/5Hospital-Columns.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Hospital Columns<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/6Hospital-Columns2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Hospital Facade<\/p>'
					},
				]
			},
			{
				'slug':'contact',
				'label': 'The Brooklyn Navy Yard: 2015',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/7Hospital-Monument.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Hospital Monument<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/8Surgeons-Residence.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Surgeon&rsquo;s Residence<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/9The-Splendid-Daniella-Romano.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>The Splendid Daniella Romano<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/10Submerging-Pier.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Submerging Pier<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/BrooklynNavyYard\/3BNY2015\/11Goose-Crossing2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Goose Crossing<\/p>'
					}
				]
			}
		]
	},
	{ 'tier': 5,
		'nodes': [
			{
				'slug':'home',
				'label': 'drag to reveal',
				'objects': [
					{
						'class':'skull spin no-click',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':-30,
						'rotx':-5,
						'rotz':0,
						'content':'<div class="layer-1"><img alt="" src="' + imgRoot + '\/noah_scalin\/skull-1.png"><\/div><div class="layer-2"><img alt="" src="' + imgRoot + '\/noah_scalin\/skull-2.png"><\/div><div class="layer-3"><img alt="" src="' + imgRoot + '\/noah_scalin\/skull-3.png"><\/div><div class="layer-4"><img alt="" src="' + imgRoot + '\/noah_scalin\/skull-4.png"><\/div>'
					}
				]
			},
			{
				'slug':'books/manhattan-beach',
				'label': '',
				'objects': [
					{
						'class':'image floating',
						'posx':-27,
						'posy':0,
						'posz':0,
						'roty':4,
						'rotx':13,
						'rotz':-15,
						'image': imgRoot + '\/v1\/floating\/dial.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/a-visit-from-the-goon-squad',
				'label': 'Diving Dress &amp; Equipment',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<p>These photos were taken in the San Francisco Maritime National Historical Park and Museum<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/1MaritimeModel\/1Mark-V-InSFMaritimeMuseum.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>At the Visitors&rsquo; Center at Fisherman&rsquo;s Wharf<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/1MaritimeModel\/3.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/1MaritimeModel\/4.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div>'
					}
				]
			},
			{
				'slug':'books/the-keep',
				'label': 'Diving Dress &amp; Equipment',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/2Canvas\/1DressArtifactsfromSFMaritimeMuseum.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Dress Artifacts from SF Maritime Museum<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/2Canvas\/2OldDivingDress.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Old Diving Dress<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/2Canvas\/4KneeDetail.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Knee Patches<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/2Canvas\/5LegLaces.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Leg Laces<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/2Canvas\/6FootDetail.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Foot Detail<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/2Canvas\/7RubberCollarDetail.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Rubber Collar Detail<\/p>'
					}
				]
			},
			{
				'slug':'books/look-at-me',
				'label': 'Diving Dress &amp; Equipment',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/3Hats\/2HatLeftSide.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Hat Left Side<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/3Hats\/3HatRear.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Hat Rear<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/3Hats\/5Vent.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Vent<\/p>'
					}
				]
			},
			{
				'slug':'books/the-invisible-circus',
				'label': 'Diving Dress &amp; Equipment',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/1AirCompressor.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Air Compressor<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/2Flywheel.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Compressor Flywheel<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/3FlyWheelHandle.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Fly Wheel Handle<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/4OpenCompressor.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Open Compressor<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/5Interior.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Interior<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/61_2Divers.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>1 &amp; 2 Divers<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/8Gauges.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Gauges<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/4Compressors\/9AirCompressorGuages.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Air Compressor Guages<\/p>'
					}
				]
			},
			{
				'slug':'books/emerald-city-and-other-stories',
				'label': 'Diving Dress &amp; Equipment',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/1DDCollar.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Collar<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/4EganInPussyCushion.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Pussy Cushion<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/5DDLeadBelt2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Lead Belt<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/7DDLeadBeltDetail.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>DD Lead Belt Detail<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/9DDShoeFront2.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Shoe Front<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/10DDShoeSide.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Shoe Side<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/11DDShoeBottom.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Shoe Bottom<\/p>'
					},
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/DivingDressEquipment\/5DressElements\/13DDAirHoseCovers.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Air Hose Covers<\/p>'
					}
				]
			},
			{
				'slug':'non-fiction',
				'label': 'Reading Lucy',
				'objects': [
					{
						'class':'image',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'image': imgRoot + '\/lucy.png',
						'content':'<div class="imgwrap"><div class="imgloader"><img src="http:\/\/res.cloudinary.com\/egan\/image\/upload\/floating\/gears-load.png" \/><\/div><div class="imgbox"><\/div><\/div><p>Lucille Kolkin and pals.<\/p>'
					},
					{
						'class':'scrollbar text closed no-click',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':'<h3>Reading Lucy</h3><p>Last spring I formed a brief, powerful friendship with a woman named Lucille Kolkin. She was a Brooklynite, like me. For two months, Lucy and I spent a couple of hours together at the Brooklyn Historical Society every Wednesday and Friday, while my son was at preschool in the neighborhood. I say two months, but in Lucy&rsquo;s life it was actually five&mdash;from April to September 1944, when she moved to California and we lost touch.</p><p>Wet met for professional reasons. I was researching a novel I&rsquo;m writing about a woman who worked at the Brooklyn Navy Yard during World War II, and Lucy actually <em>worked</em> at the Navy Yard for almost two years, as a mechanic in the shipfitting shop. When she started, in the fall of 1942, she was Lucille Gewirtz, but within a year she&rsquo;d met Alfred Kolkin, from the mechanical shop, and married him after a brief courtship she once jokingly referred to as &ldquo;Maidenhood to Marriage in Three Easy Months.&rdquo; The speed doesn&rsquo;t surprise me; Lucy was passionate. It&rsquo;s one of the things I love about her.</p><p>By the time I got to know her personally, I&rsquo;d already spent time with the lecture notes she took at Navy Yard shipfitting school. She wrote in blue pen in a small loose-leaf binder, defining countless acronyms (WL=waterline. AE=after end. FE=Forward end) and neatly diagramming ships in cross-section. Since I, too, was trying to learn the basics of battleships, I began copying down much of what Lucy had copied, including details like: &ldquo;Construction is started at midship and continued on both sides of it. Balances weight.&rdquo; But I also encountered flashes of the life attached to the notes I was cribbing from:</p><p>Buy&mdash; Bag	</p><p style="padding-left:5em">Shoes</p><p style="padding-left:5em">Bras</p><p style="padding-left:5em"><del>Stock</del>. <del>Dye</del></p><p>Fix - <del>suit</del></p><p style="padding-left:5em">gray dress</p><p style="padding-left:5em">blue suit</p><p style="padding-left:5em">stocks</p><p>From cleaners - coat</p><p>Who was this woman whose to-do lists looked so much like mine? I knew that the Historical Society had a collection of correspondence between Lucy and her husband, beginning in April 1944, when he joined the Navy. I requested the first group of letters she&rsquo;d written to Alfred when he left for boot camp in Sampson, New York. That was when our friendship began.</p><p>Lucy wrote to Alfred almost daily&mdash;often on the streetcar she took from 20th Avenue in Bensonhurst, where she ate supper at her mother&rsquo;s house before beginning her night shift at the Navy Yard. &ldquo;We&rsquo;re approaching Pacific St. again&mdash;(wish I had a longer ride)&rdquo; was a typical sign-off, accompanied by endearments: &ldquo;Oodles of love and about 7 little kisses,&rdquo; or &ldquo;So I&rsquo;ll throw in another kiss and just an inchy winchy pinch on the aft end.&rdquo; She was wildly in love with her husband. &ldquo;You&rsquo;re a huge success, fella,&rdquo; she wrote to him on May 4th, 1944. &ldquo;Not only I&mdash;but the other thousand girls in the yard think you&rsquo;re handsome. See, I&rsquo;ve been sporting a new picture of you and in my characteristically &lsquo;proud of my husband&rsquo; feeling, no one can escape seeing it.&rdquo;</p><p>On an undated letter in May, she kissed the paper she was writing on in a spectacular shade of pink lipstick. It was shocking to see the impression of her lips, every crease still visible after sixty-two years, as if she&rsquo;d left it ten minutes before.</p><p>Lucy described herself as a shipfitter 3/c, meaning 3rd class, &ldquo;(buzz: soon, to be 2/c I think,&rdquo; she told Alfred in June), and she often seemed to have the aid of a &ldquo;helper,&rdquo; also female. A shipfitter fabricates and lays out the metal structural parts of a ship&mdash;a job that it would have been laughable to think of a woman performing, before the war. But as male employees at the Yard were drafted or enlisted, someone had to replace them; the Brooklyn Navy Yard was the largest shipbuilding facility in the world during World War II. It built 17 battleships and repaired 5000, including allied ships from all over the world. And by January 1945, there were 4,657 women at the yard, working in nearly every phase of shipbuilding and repair.</p><p>I was hungry for detailed descriptions of Lucy&rsquo;s shipfitting work, but as is often the case when someone talks to a fellow &ldquo;insider,&rdquo; her remarks about work were mostly in passing: &ldquo;stenciled 120 pieces for a job&rdquo; or &ldquo;I was put back on the flow this afternoon&mdash;and I didn&rsquo;t like it nohow.&rdquo; She liked being the timekeeper, which apparently happened every two weeks and allowed her to stay in the office and write letters to Alfred. She complained often of sore feet (later mitigated by a pair of rubber-soled shoes) and described her hands as &ldquo;kind of scratched.&rdquo; In one of her longest descriptions of actual work, from July 17th, she wrote: &ldquo;First it&rsquo;s 4, then it&rsquo;s 1, then it&rsquo;s 6. No, I ain&rsquo;t talking about babies&mdash;or even the time. You see, I&rsquo;m a shipfitter and I&rsquo;m making up some more kingposts and booms. &lsquo;Make up 4.&rsquo; So I start making up the fittings for four ships. &lsquo;Cancel 3, they&rsquo;re duplications.&rsquo; So I put some fittings for three ships away in case I get the job again. Then I make up the rest of the fittings&mdash;enough for 1 ship. &lsquo;New order. Make up six.&rsquo; So I start pc&num;1, pc &num;2 all over again. It&rsquo;s not a bad job otherwise.&rdquo; She included a diagram of a kingpost, with an arrow indicating a &ldquo;5 x 5 H Beam about 9&rsquo; lg.&rdquo;</p><p>When it came to life in the Navy Yard around the job itself, Lucy was superb. &ldquo;I just learned of a wonderful way to lose friends&mdash;and get a lot of laughs&mdash;or do you already know the funnel trick?&rdquo; she wrote in an undated letter. &ldquo;Near closing time this morning, the boys said that for 10c a try a fellow could put a half dollar on his fore&mdash;head, a funnel in his pants and if he got the 50c piece into the funnel by bending his head it was his. Well of course when he put his head back to balance the coin, a container of water was poured into the funnel. Some level of humor!&rdquo;</p><p>She had a particular interest in union organizing (she referred occasionally to &ldquo;union friends&rdquo;), and also in the plight of &ldquo;negroes,&rdquo; whom she viewed with great sympathy. Here&rsquo;s an anecdote from her letter of May 3:</p><p>&ldquo;Yesterday, Minnie, a negro tacker who has been in the yard as long as I and interested in becoming a fitter, became disgusted and signed up for welding school. Another victory for Haack [Lucy&rsquo;s supervisor] and his ilk. Poor gal&mdash;she hates welding and is all upset. She knows she&rsquo;s not doing the right thing by giving up the fight but she insists there&rsquo;s nothing else to do. A couple of negro girls and I were trying to talk her out of it. But she persists in the idea that not only does she have to fight as a woman, but as a negro. She was practically in tears&hellip;She&rsquo;s a former teacher and math genius&mdash;and Gee! Butch, it&rsquo;s such a God damn shame.&rdquo;</p><p>Four days later, she wrote: &ldquo;Just learned Minnie (remember?) is not quitting shipfitting. Our little talk with her took effect.&rdquo;</p><p>Amidst the news, anecdotes, and political and cultural observations that Lucy somehow managed to pack into these daily missives, I learned the basics of her life: she and Alfred were Jewish. Lucy had gone to college&mdash;at Hunter&mdash;while Alfred had not, which occasioned from his wife occasional pep talks about how little college really mattered: &ldquo;I went to college. So what. I look for a job and people say, &ldquo;Yes, yes but what can you do?&rdquo; &ldquo;Nuttin&rdquo; say I.&rdquo; She also had a habit of footnoting words whose meanings Alfred might not know&mdash;like &ldquo;querulous&rdquo;&mdash;and providing definitions. In one letter she included a lengthy tutorial on how to read music.  The instruction apparently went both ways; in another letter, she asked Alfred for directions on how to wire a room.</p><p>I found these letters deeply absorbing; not only did hours pass without my noticing, so that I often found myself huffing, flustered, to pick up my son, but often it felt like sixty-two years had passed without my noticing&mdash;such was the ringing immediacy of Lucy&rsquo;s voice. In some ways our worlds felt close together: we walked the same streets (I live in Fort Greene, a few blocks from the Navy Yard); we both worked hard and struggled to find time for practical necessities like cleaning and shopping. Like me, Lucy hated buying clothes; &ldquo;I&rsquo;ll brand myself, I&rsquo;ll go before a firing squad&mdash;anything,&rdquo; she wrote to Alfred in April. &ldquo;Only I won&rsquo;t try on another dress.&rdquo;  She loved movies and live performances, which in her case meant Duke Ellington, Paul Draper, Danny Kaye&rsquo;s &ldquo;Up in Arms,&rdquo; and countless other movies. And she often reported on her avid reading: Dorothy Parker, Howard Fast, Nikolai Kuznetsov&rsquo;s The Last Days of Sevastapol.</p><p>Of course, Lucy was much younger than I am&mdash;in her mid-twenties, in the early phase of her adult life. Part of the pleasure of reading her letters was wondering how her life would turn out; would Alfred return to Brooklyn, or would they put a down payment on a house in San Francisco, as Lucy fantasized? Would she continue to work, or leave that behind for motherhood? Would she have children? Would her love for Alfred remain as heedless as it was in this first year? I mused with an odd sense that these answers couldn&rsquo;t be known&mdash;as if Lucy&rsquo;s life, like mine, were still a thing in motion, with many outcomes uncertain. That&rsquo;s how close she seemed.</p><p>Sometimes, while crossing the street or jogging over the Brooklyn Bridge, I would have the thought that I might actually see Lucy, not as she was now&mdash;however that might be&mdash;but the Lucy of 1944:  wisecracking, a talker, drinking a strawberry malted. I was dying to hear her speaking voice (I imagined it deep and a little crackly), and to see what she looked like beyond that fuchsia print of her lips. All of Brooklyn seemed full of her.</p><p>On May 7th, Lucy wrote, &ldquo;Butchie - guess what! I had a dream last night about  our having a baby&mdash;a couple of months old&mdash;cute + blond&mdash;and dressed in a regular basque shirt + shorts. You were diapering him and I suggested it was about time you taught me how to diaper him, etc, etc. I should know better than to disclose my dreams, but it was too nice to keep to myself. Anyway, I guess the dream belonged to you too.&rdquo;</p><p>After reading that sentence, I stood up suddenly, walked to one of the Historical Society computers and typed &ldquo;Lucille Kolkin&rdquo; into Google. Within a second or two, I was reading her obituary. She&rsquo;d died suddenly, in 1997, at age 78. She&rsquo;d had two daughters, two grandchildren, and lived in New York. After 53 years of marriage, Alfred had survived her.</p><p>I returned to my seat, shaken. It was one of those moments when technology crushingly outpaces cognitive reach; I couldn&rsquo;t seem to make the transition from the handwritten pages in front of me, full of blindness and hope, to the obituary on the screen. It was several minutes before I resumed reading Lucy&rsquo;s letters, and when I did, it was at a slightly treacherous remove, as if I were withholding information from her&mdash;like faking surprise at an outcome you already know.</p><p>After that, I found Lucy&rsquo;s letters poignant in a way that they hadn&rsquo;t seemed before. As she prattled to Alfred about bicycling in Prospect Park or rubbing bicarbonate of soda on the sunburn she&rsquo;d gotten on a trip to Coney Island with her girlfriends, it would cross my mind that I knew the time and place of the death that awaited her. And I felt a corollary awareness as I walked the Brooklyn streets, holding my little sons&rsquo; hands; how old would they be when I died? Would they have had children of their own? How would they remember me? Lying in bed with my husband, the big tree swaying outside, I thought about Lucy&rsquo;s words to Alfred: &ldquo;the glorious blossoms on the tree facing our window&mdash;that is the tree in Brooklyn. The last thing I say good&mdash;morning to before sleeping.&rdquo; It made me eerily conscious of a point of view from which our lives would look quaint, and a long time ago.</p><p>Meanwhile, in 1944, events in Lucy&rsquo;s life were rapidly unfolding: Alfred began radio technician training in Chicago, and Lucy gave up the little apartment they had shared and moved in with her mother. There was much speculation about where Alfred might be stationed next, and the news came in August, 1944: he was moving to a Naval base in Del Monte, California. &ldquo;The news of your new destination is not too bad,&rdquo; Lucy wrote to him. &ldquo;I understand the climate there is very much like heaven&hellip;Perhaps I can go to the Yard in that state&mdash;altho it&rsquo;s about 150 miles from where you&rsquo;ll be. They work on 8 hour shifts there&mdash;and I imagine I&rsquo;ll be able to see you every week-end.&rdquo;</p><p>Two days later, she deemed the California Navy Yard &ldquo;no good&mdash;too far away,&rdquo; but shortly after that, she revived the idea of a transfer. &ldquo;I&rsquo;m pretty certain I could get a transfer to the Calif. Navy Yard,&rdquo; she wrote on August 6th. &ldquo;If you can&rsquo;t sleep out and the Yard is within a 150 mile radius&mdash;I almost think it pays to get a transfer. The Yard is near San Fran.&mdash;a nice place to live&mdash;and 150 miles is really not too far to travel. What do you think?&rdquo;</p><p>The reaction from Alfred must have been cool, because six days later, Lucy wrote, &ldquo;Butch, do you really object if I feel like you? After all, you wanted to enlist even tho it meant leaving me. Well, I feel I have an important job too. And I don&rsquo;t feel like dropping everything and working in Del Monte just now&mdash;especially since I&rsquo;ll hardly be able to see you anyway. But if I work in San Fran. I can continue the work I&rsquo;m doing and be able to see you besides.</p><p>I already knew the outcome of this debate from the biographical note accompanying the letters: Lucy would follow Alfred to Del Monte and work as a waitress. There would be no letters for almost a year, although they would begin again when Alfred shipped out in 1945, Still, as I read, I found myself mentally exhorting her the other way, as if the decision still hung in the balance, as if I could yank her, physically, from her time into mine. Go to the Yard, I imagined telling her. Savor this fluke of independence before the clamp of 1950&rsquo;s domesticity closes around you. Bank some more skills to capitalize on when the sexual revolution hits in twenty years. Please, Lucy, get the transfer. Go to San Francisco. I grew up there; it&rsquo;s gorgeous.</p><p>The resolution came three days later:</p><p>&ldquo;&hellip;went to see my doctor&mdash;first time in about 5 weeks,&rdquo; she wrote, apparently referring to a therapist. &ldquo;I was discussing my confused ideas about going to Calif. And thru association we discovered why I was confused&mdash;but my sub-conscious seems bent on going. Ain&rsquo;t this silly talk? But I like it. And so I&rsquo;m still going. I plan to leave about the middle of September. Are you happy?&rdquo;</p><p>The remainder of this section of Lucy&rsquo;s correspondence (a later portion contains letters she began writing to Alfred in the summer of 1945, when he went to sea) were mostly consumed with the details of her departure: packing with her girlfriends, the decision of whether to go by Pullman (expensive) or coach; the goodbye presents she was given by the women she worked with at the Navy Yard (books); the composition of her luggage. She mentioned a referral from the Navy Yard that she could present to the San Francisco Navy Yard, should she choose to. On September 5th, on her way to Chicago&mdash;the first leg of her cross-country train trip&mdash;she wrote: &ldquo;I showed some of your pictures to one of the girls on the train. She&rsquo;s seventeen and thought, &lsquo;you&rsquo;re a dream.&rsquo; Yeah? Not for long, Butch. Soon you&rsquo;ll be a reality and then we&rsquo;ll both be happy.&rdquo;</p><p>Then, the letters stop.  In the first days without her raucous writing voice and her panoramic gaze, I felt a little lost. I found myself contemplating tracking down some of her living relatives&mdash;her two daughters and maybe Alfred, if he was still alive&mdash;so I could talk to them about the rest of her life: the time between age twenty-six, where I&rsquo;d left her, and seventy-eight. But that seemed a strange expenditure of time and energy, given that I was supposed to be researching the Brooklyn Navy Yard. In the end I settled on reading some of Alfred&rsquo;s letters to Lucy, beginning at the same time that hers had begun, in April of 1944. And as soon as I began reading, I felt relief: Alfred was a hoot. He had all of Lucy&rsquo;s humor and intelligence; his riotous account of learning to swim in Navy boot camp made me laugh out loud. I&rsquo;d conjured Alfred as a faceless 1950&rsquo;s drone, but I should have trusted Lucy&mdash;she would never have picked a guy like that. Soon after beginning Alfred&rsquo;s letters, I felt myself begin letting go, preparing to leave these two extraordinary people to live out their lives together.</p><p>The last letter I read of Alfred&rsquo;s involved plans for his furlough to Brooklyn in early May:</p><p>&ldquo;I&rsquo;m looking forward to those five days together Lucy,&rdquo; he wrote. &ldquo;I want us to cram a lot of things into it. It&rsquo;ll be easy if we plan it a little bit&hellip;</p><p>&ldquo;I&rsquo;ll take you swimming in Hotel St. George Pool and you can see what progress I&rsquo;ve made. I&rsquo;ll show you how a sailor rows a boat. I&rsquo;ll show you what a &lsquo;boot&rsquo; can do to a good home-cooked meal. And you&rsquo;ll see that I can dance as flatfootedly as ever.</p><p>You&rsquo;ll see!&rdquo;</p><a class="open-handle">&hellip;</a>'
					}
				]
			},
			{
				'slug':'category/news',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':''
					}
				]
			},
			{
				'slug':'about',
				'label': 'drag to reveal',
				'objects': [
					{
						'class':'jenny spin no-click',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':-30,
						'rotx':-5,
						'rotz':0,
						'content':'<div class="layer-1"><img alt="" src="' + imgRoot + '\/noah_scalin\/jenny-1.png"><\/div><div class="layer-2"><img alt="" src="' + imgRoot + '\/noah_scalin\/jenny-2.png"><\/div><div class="layer-3"><img alt="" src="' + imgRoot + '\/noah_scalin\/jenny-3.png"><\/div><div class="layer-4"><img alt="" src="' + imgRoot + '\/noah_scalin\/jenny-4.png"><\/div>'
					}
				]
			},
			{
				'slug':'contact',
				'label': '',
				'objects': [
					{
						'class':'text',
						'posx':0,
						'posy':0,
						'posz':0,
						'roty':0,
						'rotx':0,
						'rotz':0,
						'content':''
					}
				]
			}
		]
	}
];

var uwBackgrounds = [
 {
 	'slug': 'home',
 	'posx': 400,
 	'posy': 0,
 	'posz': -1600,
 	'scale': 70,
 	'content': bgImgRoot + '/background/final-building.png'
 },
 {
 	'slug': 'books/manhattan-beach',
 	'posx': -120,
 	'posy': 0,
 	'posz': -1000,
 	'scale': 80,
 	'content': bgImgRoot + '/background/final-small-ship.png'
 },
 {
 	'slug': 'books/a-visit-from-the-goon-squad',
 	'posx': 350,
 	'posy': 0,
 	'posz': -1600,
 	'scale': 100,
 	'content': bgImgRoot + '/background/final-mountain.png'
 },
 {
 	'slug': 'books/the-keep',
 	'posx': 0,
 	'posy': 0,
 	'posz': -1000,
 	'scale': 100,
 	'content': bgImgRoot + '/background/final-mountain.png'
 },
 {
 	'slug': 'books/look-at-me',
 	'posx': 800,
 	'posy': 0,
 	'posz': -2000,
 	'scale': 80,
 	'content': bgImgRoot + '/background/final-big-ship.png'
 },
 {
 	'slug': 'books/the-invisible-circus',
 	'posx': 400,
 	'posy': 0,
 	'posz': -1600,
 	'scale': 70,
 	'content': bgImgRoot + '/background/final-building.png'
 },
 {
 	'slug': 'books/emerald-city-and-other-stories',
 	'posx': 350,
 	'posy': 0,
 	'posz': -1600,
 	'scale': 100,
 	'content': bgImgRoot + '/background/final-mountain.png'
 },
 {
 	'slug': 'non-fiction',
 	'posx': -120,
 	'posy': 0,
 	'posz': -1000,
 	'scale': 80,
 	'content': bgImgRoot + '/background/final-small-ship.png'
 },
 {
 	'slug': 'category/news',
 	'posx': -10,
 	'posy': 0,
 	'posz': 0,
 	'scale': 0,
 	'content': bgImgRoot + '/background/final-mountain.png'
 },
 {
 	'slug': 'about',
 	'posx': 800,
 	'posy': 0,
 	'posz': -2000,
 	'scale': 80,
 	'content': bgImgRoot + '/background/final-big-ship.png'
 },
 {
 	'slug': 'contact',
 	'posx': 350,
 	'posy': 0,
 	'posz': -1600,
 	'scale': 100,
 	'content': bgImgRoot + '/background/final-mountain.png'
 }
];