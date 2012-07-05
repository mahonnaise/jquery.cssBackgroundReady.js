#jquery.cssBackgroundReady.js ([Demo](http://kaioa.com/k/test/cssBackgroundReady/demo/index.html))

*jquery.cssBackgroundReady.js* is a jQuery plugin which calls you back when the relevant background images are ready/preloaded.

The background images of descendants are not included. Use [`$.add`](http://api.jquery.com/add/) if you want to include them.

#Usage

<code>$(<var>selector</var>).cssBackgroundReady(<var>handler</var>);</code>

* `selector` &ndash; a jQuery [selector](http://api.jquery.com/category/selectors/)`
* `handler` &ndash; a function to execute after all background images were loaded

The `handler` callback is fired in the context of the jQuery collection. This means you can decide whether you want to perform one action, one action per element, or even both.

```javascript
$('.foo').cssBackgroundReady(function () {
	console.log('this line is executed just once');
	this.each(function () {
		console.log('this line executed for every element');
	});
});
```