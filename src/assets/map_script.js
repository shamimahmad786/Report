

	  function loadmap(){
      var map;
      require([
        "esri/map", "esri/layers/FeatureLayer", "esri/InfoTemplate",
        "esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol",
        "esri/renderers/UniqueValueRenderer", "esri/Color",
        "dojo/domReady!"
      ], function(
        Map, FeatureLayer, InfoTemplate,
        SimpleLineSymbol, SimpleFillSymbol,
        UniqueValueRenderer, Color
      ) {
	    map = new Map("map", {
          basemap: "gray-vector",
		  center: [ 80.20127, 22.12355 ],
           zoom: 4
           
        });
    
      });
	  console.log("Map" + map);
	 }
