// JavaScript Document Junior Test Andrea Moi 26/07017
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background;
	var logo;
	var hed;
	var product1;
	var product2;

	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "logo", src:"images/logo.png"},
		{id: "product1", src:"images/productSam.png"},
		{id: "product2", src:"images/productMS.png"},
		{id: "advert", src:"images/add.png"},
		{id: "shadow", src:"images/shadow.png"},
		{id: "find", src:"images/findOut.png"},
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		// logo placeholder 
		logo = new createjs.Bitmap( loader.getResult("logo"));
		// set the background bitmap alpha to zero.
		background.alpha = 0;
		// logo placeholder 
		logo.alpha = 0; 
		// add background to the display list.
		stage.addChild( background );
		// logo placeholder 
		stage.addChild(logo);
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );
		// logo placeholder 
		createjs.Tween.get(logo).to({alpha:1}, 1000);
		
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.
		
		
		
		
		//Starting with the display of both products
		
	 	product1 = new createjs.Bitmap(loader.getResult("product1"));
		product1.alpha =0
		stage.addChild(product1);
		
		createjs.Tween.get(product1)
		.to({alpha:1}, 1000)
		.wait(4000)
		.to({alpha:0}, 1000);
		
		product2 = new createjs.Bitmap(loader.getResult("product2"));
		product2.alpha =0
		stage.addChild(product2);
		
		createjs.Tween.get(product2).
		to({alpha:1}, 1000)
		.wait(4000)
		.to({alpha:0},1000);
		
		
		
		
		// creating the first heading	
	 	hed = new createjs.Text("Choose your reward", "bold 22px SkyText-Bold", "#f07c01");

    var width = hed.getBounds().width;
		//setting properties for the text
		hed.set({
			textAlign: "center",
			x:152,
			y:20,
		});
 
 		stage.addChild(hed);
		
		 hed.alpha = 0;
    	 createjs.Tween.get(hed)
         .wait(500)
         .to({alpha:1, visible:true}, 2000)
         .wait(1800)
         .to({aplha:1, visible:false}, 1000);
  		// end heading 1    
  
  		//start heading 2 
  		
  	 	hed2 = new createjs.Text("when you switch to twelve months \n free Sky Broadband Unlimited", "lighter 14px SkyText-Regular", "#284698");
		hed2.set({
			textAlign: "center",
			x:152,
			y:50,
			H_OFFSETS: {start: 0, left: 0, center: -0.5, end: -1, right: -1},
		});
	    stage.addChild(hed2);
  		 hed2.alpha = 0;
    	 createjs.Tween.get(hed2)
         .wait(1500)
         .to({alpha:1, visible:true}, 2000)
         .wait(900)
         .to({aplha:1, visible:false}, 1000);   
		//end heading 2

		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 3000);
		stage.update();
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.
		
		//adding the new heading on frame 2
		
		 hed = new createjs.Text("When you join Sky with ", "21px SkyText-Regular", "#f07c01");
		 hed.set({
			textAlign: "center",
			x:152,
			y:30,
		});
	
 		stage.addChild(hed);
 		
 		// setting opacity to 0 and delay
		  hed.alpha = 0;
    	  createjs.Tween.get(hed)
         .wait(3000)
         .to({alpha:1, visible:true}, 1000)
         .wait(1800)
         .to({aplha:1, visible:false}, 1000);
         
      	//end frame 2 heading  
      	
      	//Start second heading
      	
      	 hedBot = new createjs.Text("Sky Line rental at £16.40pm apllies ", "11px SkyText", "#7c7c7c");
		 hedBot.set({
			textAlign: "right",
			x:300,
			y:220,
			
		});
	
 		stage.addChild(hedBot);
 		
	
		hedBot.alpha = 0;
    	createjs.Tween.get(hedBot)
         .wait(4000)
         .to({alpha:1, visible:true}, 1000)
         .wait(1000)
         .to({aplha:1, visible:false}, 1000);
      	// end heading 2
      	
      	//adding the 'shadow-base' for advert
      	
     	shadow = new createjs.Bitmap(loader.getResult("shadow"));
		shadow.alpha =0
		stage.addChild(shadow);
		
		createjs.Tween.get(shadow)
		.wait(4000)
		.to({alpha:1}, 1000)
		.wait(500)
		.to({alpha:0}, 1000);
	

      	
      	//Start new animation with ease effect 
       	
      	advert = new createjs.Bitmap(loader.getResult("advert"));
		advert.alpha =0
		stage.addChild(advert);
		
		createjs.Tween.get(advert)
		
		// setting the object outside the frame (on y)
		.to({y:-400}, 3000, createjs.Ease.quadOut)
		.to({alpha:1}, 1000)
		.to({y:1}, 1500, createjs.Ease.bounceOut)
		//.to({y:-60},1000)
		.wait(1000)
		.to({alpha:0}, 800);	
		//end ease effect
		
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 3000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.
		
		
		//start of last frame
		find = new createjs.Bitmap(loader.getResult("find"));
		find.alpha =0
		
		
		
		
		stage.addChild(find);
		
		createjs.Tween.get(find)
		.wait(5000)
		.to({alpha:1}, 1000)

		
		
		
		 hed3 = new createjs.Text("1 year free unlimited music with \n Deezer or £100 M&S Voucher", "21px SkyText-Regular", "#f07c01");
		 hed3.set({
			textAlign: "center",
			x:152,
			y:40,
			textBaseline:"bottom",
		});
	
 		stage.addChild(hed3);
 		
		
		  hed3.alpha = 0;
    	  createjs.Tween.get(hed3)
         .wait(6000)
         .to({alpha:1, visible:true}, 1000)

	
		
		 hed4 = new createjs.Text("when you join online with 12 months \n free Sky Broadband Unlimited", "14px SkyText-Regular", "#284698");
		 hed4.set({
		textAlign: "center",
			x:152,
			y:75,
			H_OFFSETS: {start: 0, left: 0, center: -0.5, end: -1, right: -1},
		});
	
 		stage.addChild(hed4);
 		
		//createjs.Tween.get( hed).to( {alpha:0}, 4000 );
		  hed4.alpha = 0;
    	  createjs.Tween.get(hed4)
         .wait(7000)
         .to({alpha:1, visible:true}, 1000)

         
      
         hed5 = new createjs.Text("Limited time offer", "lighter 20px SkyText-Bold", "#f07c01");
		 hed5.set({
		textAlign: "center",
			x:152,
			y:125,
			H_OFFSETS: {start: 0, left: 0, center: -0.5, end: -1, right: -1},
		});
	
 		stage.addChild(hed5);
 		
		//createjs.Tween.get( hed).to( {alpha:0}, 4000 );
		  hed5.alpha = 0;
    	  createjs.Tween.get(hed5)
         .wait(8000)
         .to({alpha:1, visible:true}, 1000)

         
         
         
          hedBot = new createjs.Text("Sky Line rental at £16.40pm apllies ", "11px SkyText", "#7c7c7c");
		 hedBot.set({
			textAlign: "center",
			x:152,
			y:180,
			
		});
	
 		stage.addChild(hedBot);
 		
		//createjs.Tween.get( hed).to( {alpha:0}, 4000 );
		hedBot.alpha = 0;
    	createjs.Tween.get(hedBot)
         .wait(9000)
         .to({alpha:1, visible:true}, 2000)

         
          find.shadow = new createjs.Shadow("rgba(0,0,0,0.2)",200,200,15);
	
	}
	
	
	
};