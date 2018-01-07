// Compiled by ClojureScript 1.9.946 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello World");
hello_world.core.handle_click = (function hello_world$core$handle_click(e){
return cljs.core.println.call(null,"button pressed!");
});
goog.events.listen(goog.dom.getElement("enter"),goog.events.EventType.CLICK,hello_world.core.handle_click);

//# sourceMappingURL=core.js.map
