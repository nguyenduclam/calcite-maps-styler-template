/*global define,document */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define([
  "dojo/Evented",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/json",
  "dojo/_base/array",

  "dojo/Deferred",
  "dojo/promise/all",

  "dojo/on",
  "dojo/dom",
  "dojo/dom-class",

  "esri/arcgis/utils",

  "dojo/domReady!"
], function (
  Evented,
  declare, lang, dojoJson, array,
  Deferred, all, on,
  dom, domClass,
  arcgisUtils
) {
  return declare([Evented], {
    config: {},
    startup: function (config) {
      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;
        promise = this._createWebMap(itemInfo);
      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
        var def = new Deferred();
        def.reject(error);
        promise = def.promise;
      }
      return promise;
    },
    reportError: function (error) {
      // remove loading class from body
      domClass.remove(document.body, "app-loading");
      domClass.add(document.body, "app-error");
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        if (this.config && this.config.i18n) {
          node.innerHTML = this.config.i18n.map.error + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create map: " + error.message;
        }
      }
      return error;
    },

    // create a map based on the input web map id
    _createWebMap: function (itemInfo) {
      // set extent from config/url
      itemInfo = this._setExtent(itemInfo);
      // Optionally define additional map config here for example you can
      // turn the slider off, display info windows, disable wraparound 180, slider position and more.
      var mapOptions = {};
      // set zoom level from config/url
      mapOptions = this._setLevel(mapOptions);
      // set map center from config/url
      mapOptions = this._setCenter(mapOptions);

      mapOptions.slider = this.config.slider || false;
      mapOptions.logo = this.config.logo || false;
      mapOptions.showAttribution = this.config.attr || false;

      var layerMixins = [];
      if(this.config.layerMixins){
        array.forEach(dojoJson.fromJson(this.config.layerMixins), lang.hitch(this, function(layer){
          layerMixins.push({
            url: layer.url,
            mixin: {
              "url": layer.url + "?token=" + layer.token
            }
          });
        }));
      }

      // create webmap from item
      return arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: mapOptions,
        usePopupManager: true,
        layerMixins: layerMixins,
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function (response) {

        this.map = response.map;
        on.once(this.map, "update-end", lang.hitch(this, function(){
            // Lets make sure all layers are loaded
            var layerIds = [], allLayersLoaded= false, layers = [];
            for(i=0; i < this.map.layerIds.length; i++){
              layers.push(this._isLayerLoaded(this.map.layerIds[i]));
            }
            for(j=0; j < this.map.graphicsLayerIds.length; j++){
              layers.push(this._isLayerLoaded(this.map.graphicsLayerIds[j]));
            }
            all(layers).then(lang.hitch(this, function(response){
              this.emit("ready",response);
            }));
        }));
        // remove loading class from body
        domClass.remove(document.body, "app-loading");

        // return for promise
        return response;
        // map has been created. You can start using it.
        // If you need map to be loaded, listen for it's load event.
      }), this.reportError);
    },
    _isLayerLoaded: function(id){
      var layer = this.map.getLayer(id);
      if(layer.loaded){
        var def = new Deferred();
        def.resolve(id);
        return def.promise;
      }else{
        return layer.on("load");
      }
    },
    _setLevel: function (options) {
      var level = this.config.level;
      //specify center and zoom if provided as url params 
      if (level) {
        options.zoom = level;
      }
      return options;
    },

    _setCenter: function (options) {
      var center = this.config.center;
      if (center) {
        var points = center.split(",");
        if (points && points.length === 2) {
          options.center = [parseFloat(points[0]), parseFloat(points[1])];
        }
      }
      return options;
    },

    _setExtent: function (info) {
      var e = this.config.extent;
      //If a custom extent is set as a url parameter handle that before creating the map
      if (e) {
        var extArray = e.split(",");
        var extLength = extArray.length;
        if (extLength === 4) {
          info.item.extent = [[parseFloat(extArray[0]), parseFloat(extArray[1])], [parseFloat(extArray[2]), parseFloat(extArray[3])]];
        }
      }
      return info;
    }

  });
});