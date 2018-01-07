// Compiled by ClojureScript 1.9.946 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.safe');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello World");
hello_world.core.add = (function hello_world$core$add(a,b){
return (a + b);
});
hello_world.core.subtract = (function hello_world$core$subtract(a,b){
return (a - b);
});
hello_world.core.multiply = (function hello_world$core$multiply(a,b){
return (a * b);
});
hello_world.core.division = (function hello_world$core$division(a,b){
return (a / b);
});
hello_world.core.handle_enter = (function hello_world$core$handle_enter(e){
return cljs.core.println.call(null,"enter pressed!");
});
hello_world.core.handle_plus = (function hello_world$core$handle_plus(e){
cljs.core.println.call(null,"plus pressed!");

hello_world.core.v1 = parseInt(goog.dom.getElement("add-num-input-1").value);

hello_world.core.v2 = parseInt(goog.dom.getElement("add-num-input-2").value);

hello_world.core.sum = hello_world.core.add.call(null,hello_world.core.v1,hello_world.core.v2);

cljs.core.println.call(null,hello_world.core.sum);

return goog.dom.setTextContent(goog.dom.getElement("screen"),hello_world.core.sum);
});
hello_world.core.handle_minus = (function hello_world$core$handle_minus(e){
cljs.core.println.call(null,"minus pressed!");

hello_world.core.v1 = parseInt(goog.dom.getElement("sub-num-input-1").value);

hello_world.core.v2 = parseInt(goog.dom.getElement("sub-num-input-2").value);

hello_world.core.difference = hello_world.core.subtract.call(null,hello_world.core.v1,hello_world.core.v2);

cljs.core.println.call(null,hello_world.core.difference);

return goog.dom.setTextContent(goog.dom.getElement("screen"),hello_world.core.difference);
});
hello_world.core.handle_multiplication = (function hello_world$core$handle_multiplication(e){
cljs.core.println.call(null,"mult pressed!");

hello_world.core.v1 = parseInt(goog.dom.getElement("mult-num-input-1").value);

hello_world.core.v2 = parseInt(goog.dom.getElement("mult-num-input-2").value);

hello_world.core.product = hello_world.core.multiply.call(null,hello_world.core.v1,hello_world.core.v2);

cljs.core.println.call(null,hello_world.core.product);

return goog.dom.setTextContent(goog.dom.getElement("screen"),hello_world.core.product);
});
hello_world.core.handle_division = (function hello_world$core$handle_division(e){
cljs.core.println.call(null,"div pressed!");

hello_world.core.v1 = parseInt(goog.dom.getElement("div-num-input-1").value);

hello_world.core.v2 = parseInt(goog.dom.getElement("div-num-input-2").value);

hello_world.core.quotient = hello_world.core.division.call(null,hello_world.core.v1,hello_world.core.v2);

cljs.core.println.call(null,hello_world.core.quotient);

return goog.dom.setTextContent(goog.dom.getElement("screen"),hello_world.core.quotient);
});
goog.events.listen(goog.dom.getElement("enter"),goog.events.EventType.CLICK,hello_world.core.handle_enter);
goog.events.listen(goog.dom.getElement("plus"),goog.events.EventType.CLICK,hello_world.core.handle_plus);
goog.events.listen(goog.dom.getElement("minus"),goog.events.EventType.CLICK,hello_world.core.handle_minus);
goog.events.listen(goog.dom.getElement("multiplication"),goog.events.EventType.CLICK,hello_world.core.handle_multiplication);
goog.events.listen(goog.dom.getElement("division"),goog.events.EventType.CLICK,hello_world.core.handle_division);

//# sourceMappingURL=core.js.map
