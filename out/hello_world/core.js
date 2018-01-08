// Compiled by ClojureScript 1.9.946 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('goog.dom');
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
hello_world.core.test_add = (function hello_world$core$test_add(){
return cljs.test.test_var.call(null,hello_world.core.test_add.cljs$lang$var);
});
hello_world.core.test_add.cljs$lang$test = (function (){
try{var values__7367__auto___699 = (function (){var x__4242__auto__ = hello_world.core.add.call(null,(2),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((2) + (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___700 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___699);
if(cljs.core.truth_(result__7368__auto___700)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___699),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___699);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e694){var t__7398__auto___701 = e694;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___701,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___702 = (function (){var x__4242__auto__ = hello_world.core.add.call(null,(0),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) + (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___703 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___702);
if(cljs.core.truth_(result__7368__auto___703)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___702),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___702);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e695){var t__7398__auto___704 = e695;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___704,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___705 = (function (){var x__4242__auto__ = hello_world.core.add.call(null,(0),(0));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) + (0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___706 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___705);
if(cljs.core.truth_(result__7368__auto___706)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___705),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___705);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e696){var t__7398__auto___707 = e696;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___707,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___708 = (function (){var x__4242__auto__ = hello_world.core.add.call(null,(0),(-5));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) + (-5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___709 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___708);
if(cljs.core.truth_(result__7368__auto___709)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___708),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___708);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e697){var t__7398__auto___710 = e697;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___710,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto__ = (function (){var x__4242__auto__ = hello_world.core.add.call(null,(-5),(-7));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((-5) + (-7));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto__);
if(cljs.core.truth_(result__7368__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__7368__auto__;
}catch (e698){var t__7398__auto__ = e698;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"add","add",1875819266,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

hello_world.core.test_add.cljs$lang$var = new cljs.core.Var(function(){return hello_world.core.test_add;},new cljs.core.Symbol("hello-world.core","test-add","hello-world.core/test-add",-1608746417,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world.core","hello-world.core",1982735462,null),new cljs.core.Symbol(null,"test-add","test-add",-627888415,null),"src\\hello_world\\core.cljs",18,1,95,95,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world.core.test_add)?hello_world.core.test_add.cljs$lang$test:null)]));
hello_world.core.test_subtract = (function hello_world$core$test_subtract(){
return cljs.test.test_var.call(null,hello_world.core.test_subtract.cljs$lang$var);
});
hello_world.core.test_subtract.cljs$lang$test = (function (){
try{var values__7367__auto___716 = (function (){var x__4242__auto__ = hello_world.core.subtract.call(null,(2),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((2) - (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___717 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___716);
if(cljs.core.truth_(result__7368__auto___717)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___716),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___716);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e711){var t__7398__auto___718 = e711;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___718,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___719 = (function (){var x__4242__auto__ = hello_world.core.subtract.call(null,(0),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) - (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___720 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___719);
if(cljs.core.truth_(result__7368__auto___720)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___719),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___719);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e712){var t__7398__auto___721 = e712;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___721,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___722 = (function (){var x__4242__auto__ = hello_world.core.subtract.call(null,(0),(0));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) - (0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___723 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___722);
if(cljs.core.truth_(result__7368__auto___723)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___722),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___722);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e713){var t__7398__auto___724 = e713;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___724,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___725 = (function (){var x__4242__auto__ = hello_world.core.subtract.call(null,(0),(-5));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) - (-5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___726 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___725);
if(cljs.core.truth_(result__7368__auto___726)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___725),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___725);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e714){var t__7398__auto___727 = e714;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___727,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto__ = (function (){var x__4242__auto__ = hello_world.core.subtract.call(null,(-5),(-7));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((-5) - (-7));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto__);
if(cljs.core.truth_(result__7368__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__7368__auto__;
}catch (e715){var t__7398__auto__ = e715;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"subtract","subtract",-517447134,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

hello_world.core.test_subtract.cljs$lang$var = new cljs.core.Var(function(){return hello_world.core.test_subtract;},new cljs.core.Symbol("hello-world.core","test-subtract","hello-world.core/test-subtract",863453097,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world.core","hello-world.core",1982735462,null),new cljs.core.Symbol(null,"test-subtract","test-subtract",-586353805,null),"src\\hello_world\\core.cljs",23,1,102,102,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world.core.test_subtract)?hello_world.core.test_subtract.cljs$lang$test:null)]));
hello_world.core.test_multiply = (function hello_world$core$test_multiply(){
return cljs.test.test_var.call(null,hello_world.core.test_multiply.cljs$lang$var);
});
hello_world.core.test_multiply.cljs$lang$test = (function (){
try{var values__7367__auto___733 = (function (){var x__4242__auto__ = hello_world.core.multiply.call(null,(2),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((2) * (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___734 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___733);
if(cljs.core.truth_(result__7368__auto___734)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___733),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___733);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e728){var t__7398__auto___735 = e728;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___735,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___736 = (function (){var x__4242__auto__ = hello_world.core.multiply.call(null,(0),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) * (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___737 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___736);
if(cljs.core.truth_(result__7368__auto___737)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___736),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___736);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e729){var t__7398__auto___738 = e729;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___738,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___739 = (function (){var x__4242__auto__ = hello_world.core.multiply.call(null,(0),(0));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) * (0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___740 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___739);
if(cljs.core.truth_(result__7368__auto___740)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___739),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___739);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e730){var t__7398__auto___741 = e730;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___741,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___742 = (function (){var x__4242__auto__ = hello_world.core.multiply.call(null,(0),(-5));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) * (-5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___743 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___742);
if(cljs.core.truth_(result__7368__auto___743)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___742),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___742);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e731){var t__7398__auto___744 = e731;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___744,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto__ = (function (){var x__4242__auto__ = hello_world.core.multiply.call(null,(-5),(-7));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((-5) * (-7));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto__);
if(cljs.core.truth_(result__7368__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__7368__auto__;
}catch (e732){var t__7398__auto__ = e732;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiply","multiply",603624479,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

hello_world.core.test_multiply.cljs$lang$var = new cljs.core.Var(function(){return hello_world.core.test_multiply;},new cljs.core.Symbol("hello-world.core","test-multiply","hello-world.core/test-multiply",-518264393,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world.core","hello-world.core",1982735462,null),new cljs.core.Symbol(null,"test-multiply","test-multiply",-2019347875,null),"src\\hello_world\\core.cljs",23,1,109,109,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world.core.test_multiply)?hello_world.core.test_multiply.cljs$lang$test:null)]));
hello_world.core.test_division = (function hello_world$core$test_division(){
return cljs.test.test_var.call(null,hello_world.core.test_division.cljs$lang$var);
});
hello_world.core.test_division.cljs$lang$test = (function (){
try{var values__7367__auto___750 = (function (){var x__4242__auto__ = hello_world.core.division.call(null,(2),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((2) / (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___751 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___750);
if(cljs.core.truth_(result__7368__auto___751)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___750),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___750);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e745){var t__7398__auto___752 = e745;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(2),(4)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(2),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___752,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___753 = (function (){var x__4242__auto__ = hello_world.core.division.call(null,(0),(4));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) / (4));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___754 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___753);
if(cljs.core.truth_(result__7368__auto___754)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___753),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___753);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e746){var t__7398__auto___755 = e746;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(4)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(4))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___755,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___756 = (function (){var x__4242__auto__ = hello_world.core.division.call(null,(0),(0));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) / (0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___757 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___756);
if(cljs.core.truth_(result__7368__auto___757)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___756),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___756);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e747){var t__7398__auto___758 = e747;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(0)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___758,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto___759 = (function (){var x__4242__auto__ = hello_world.core.division.call(null,(0),(-5));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((0) / (-5));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto___760 = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto___759);
if(cljs.core.truth_(result__7368__auto___760)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto___759),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto___759);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e748){var t__7398__auto___761 = e748;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(0),(-5)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(0),(-5))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto___761,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__7367__auto__ = (function (){var x__4242__auto__ = hello_world.core.division.call(null,(-5),(-7));
return cljs.core._conj.call(null,(function (){var x__4242__auto____$1 = ((-5) / (-7));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto____$1);
})(),x__4242__auto__);
})();
var result__7368__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__7367__auto__);
if(cljs.core.truth_(result__7368__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__7367__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__4242__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__7367__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__4242__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__7368__auto__;
}catch (e749){var t__7398__auto__ = e749;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"division","division",1899901453,null),(-5),(-7)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),(-5),(-7))),new cljs.core.Keyword(null,"actual","actual",107306363),t__7398__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

hello_world.core.test_division.cljs$lang$var = new cljs.core.Var(function(){return hello_world.core.test_division;},new cljs.core.Symbol("hello-world.core","test-division","hello-world.core/test-division",-640950964,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hello-world.core","hello-world.core",1982735462,null),new cljs.core.Symbol(null,"test-division","test-division",-1219286790,null),"src\\hello_world\\core.cljs",23,1,116,116,cljs.core.List.EMPTY,null,(cljs.core.truth_(hello_world.core.test_division)?hello_world.core.test_division.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map
