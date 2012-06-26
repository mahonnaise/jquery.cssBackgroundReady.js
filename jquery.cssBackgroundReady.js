/*! github.com/mahonnaise/jquery.cssBackgroundReady.js */

/*jslint browser:true, regexp:false, plusplus:false*/
/*global $*/

(function ($) {
	var urlRe = /^\s*url\("?([^"]*)"?\)$/;
	$.fn.cssBackgroundReady = function (handler) {
		var urls, collection, toLoad, loaded;

		collection = this;

		// get all URLs
		urls = (function () {
			var urlObj = {}, urls = [], url;
			collection.each(function () {
				var css = $(this).css('background-image'), parts, i;
				parts = css.split(',');
				for (i = parts.length; i--;) {
					if (urlRe.test(parts[i])) {
						urlObj[parts[i].match(urlRe)[1]] = true;
					}
				}
			});
			for (url in urlObj) {
				if (urlObj.hasOwnProperty(url)) {
					urls.push(url);
				}
			}
			return urls;
		}());

		// invokes the callback once every image was loaded
		loaded = function () {
			toLoad--;
			if (!toLoad && handler) {
				//collection.each(handler);
				handler.call(collection);
			}
		};

		toLoad = urls.length;

		// load all images
		(function () {
			var i, image;
			for (i = toLoad; i--;) {
				image = new Image();
				image.onload = loaded;
				image.src = urls[i];
			}
		}());

		return collection;
	};
}(jQuery));