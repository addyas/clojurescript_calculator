// Compiled by ClojureScript 1.9.946 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__3836__auto__ = elem.textContent;
if(cljs.core.truth_(or__3836__auto__)){
return or__3836__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__151 = arguments.length;
switch (G__151) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__154 = arguments.length;
switch (G__154) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__158 = arguments.length;
switch (G__158) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__156_SHARP_){
return !((p1__156_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___172 = arguments.length;
var i__4412__auto___173 = (0);
while(true){
if((i__4412__auto___173 < len__4411__auto___172)){
args__4414__auto__.push((arguments[i__4412__auto___173]));

var G__174 = (i__4412__auto___173 + (1));
i__4412__auto___173 = G__174;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((1) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4415__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__162_175 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__163_176 = null;
var count__164_177 = (0);
var i__165_178 = (0);
while(true){
if((i__165_178 < count__164_177)){
var vec__166_179 = cljs.core._nth.call(null,chunk__163_176,i__165_178);
var k_180 = cljs.core.nth.call(null,vec__166_179,(0),null);
var v_181 = cljs.core.nth.call(null,vec__166_179,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_180),v_181);

var G__182 = seq__162_175;
var G__183 = chunk__163_176;
var G__184 = count__164_177;
var G__185 = (i__165_178 + (1));
seq__162_175 = G__182;
chunk__163_176 = G__183;
count__164_177 = G__184;
i__165_178 = G__185;
continue;
} else {
var temp__4657__auto___186 = cljs.core.seq.call(null,seq__162_175);
if(temp__4657__auto___186){
var seq__162_187__$1 = temp__4657__auto___186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__162_187__$1)){
var c__4231__auto___188 = cljs.core.chunk_first.call(null,seq__162_187__$1);
var G__189 = cljs.core.chunk_rest.call(null,seq__162_187__$1);
var G__190 = c__4231__auto___188;
var G__191 = cljs.core.count.call(null,c__4231__auto___188);
var G__192 = (0);
seq__162_175 = G__189;
chunk__163_176 = G__190;
count__164_177 = G__191;
i__165_178 = G__192;
continue;
} else {
var vec__169_193 = cljs.core.first.call(null,seq__162_187__$1);
var k_194 = cljs.core.nth.call(null,vec__169_193,(0),null);
var v_195 = cljs.core.nth.call(null,vec__169_193,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_194),v_195);

var G__196 = cljs.core.next.call(null,seq__162_187__$1);
var G__197 = null;
var G__198 = (0);
var G__199 = (0);
seq__162_175 = G__196;
chunk__163_176 = G__197;
count__164_177 = G__198;
i__165_178 = G__199;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq160){
var G__161 = cljs.core.first.call(null,seq160);
var seq160__$1 = cljs.core.next.call(null,seq160);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__161,seq160__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___206 = arguments.length;
var i__4412__auto___207 = (0);
while(true){
if((i__4412__auto___207 < len__4411__auto___206)){
args__4414__auto__.push((arguments[i__4412__auto___207]));

var G__208 = (i__4412__auto___207 + (1));
i__4412__auto___207 = G__208;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((1) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4415__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__202_209 = cljs.core.seq.call(null,keywords);
var chunk__203_210 = null;
var count__204_211 = (0);
var i__205_212 = (0);
while(true){
if((i__205_212 < count__204_211)){
var kw_213 = cljs.core._nth.call(null,chunk__203_210,i__205_212);
style.removeProperty(dommy.utils.as_str.call(null,kw_213));

var G__214 = seq__202_209;
var G__215 = chunk__203_210;
var G__216 = count__204_211;
var G__217 = (i__205_212 + (1));
seq__202_209 = G__214;
chunk__203_210 = G__215;
count__204_211 = G__216;
i__205_212 = G__217;
continue;
} else {
var temp__4657__auto___218 = cljs.core.seq.call(null,seq__202_209);
if(temp__4657__auto___218){
var seq__202_219__$1 = temp__4657__auto___218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__202_219__$1)){
var c__4231__auto___220 = cljs.core.chunk_first.call(null,seq__202_219__$1);
var G__221 = cljs.core.chunk_rest.call(null,seq__202_219__$1);
var G__222 = c__4231__auto___220;
var G__223 = cljs.core.count.call(null,c__4231__auto___220);
var G__224 = (0);
seq__202_209 = G__221;
chunk__203_210 = G__222;
count__204_211 = G__223;
i__205_212 = G__224;
continue;
} else {
var kw_225 = cljs.core.first.call(null,seq__202_219__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_225));

var G__226 = cljs.core.next.call(null,seq__202_219__$1);
var G__227 = null;
var G__228 = (0);
var G__229 = (0);
seq__202_209 = G__226;
chunk__203_210 = G__227;
count__204_211 = G__228;
i__205_212 = G__229;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq200){
var G__201 = cljs.core.first.call(null,seq200);
var seq200__$1 = cljs.core.next.call(null,seq200);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__201,seq200__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___242 = arguments.length;
var i__4412__auto___243 = (0);
while(true){
if((i__4412__auto___243 < len__4411__auto___242)){
args__4414__auto__.push((arguments[i__4412__auto___243]));

var G__244 = (i__4412__auto___243 + (1));
i__4412__auto___243 = G__244;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((1) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4415__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__232_245 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__233_246 = null;
var count__234_247 = (0);
var i__235_248 = (0);
while(true){
if((i__235_248 < count__234_247)){
var vec__236_249 = cljs.core._nth.call(null,chunk__233_246,i__235_248);
var k_250 = cljs.core.nth.call(null,vec__236_249,(0),null);
var v_251 = cljs.core.nth.call(null,vec__236_249,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_250,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_251),"px"].join(''));

var G__252 = seq__232_245;
var G__253 = chunk__233_246;
var G__254 = count__234_247;
var G__255 = (i__235_248 + (1));
seq__232_245 = G__252;
chunk__233_246 = G__253;
count__234_247 = G__254;
i__235_248 = G__255;
continue;
} else {
var temp__4657__auto___256 = cljs.core.seq.call(null,seq__232_245);
if(temp__4657__auto___256){
var seq__232_257__$1 = temp__4657__auto___256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__232_257__$1)){
var c__4231__auto___258 = cljs.core.chunk_first.call(null,seq__232_257__$1);
var G__259 = cljs.core.chunk_rest.call(null,seq__232_257__$1);
var G__260 = c__4231__auto___258;
var G__261 = cljs.core.count.call(null,c__4231__auto___258);
var G__262 = (0);
seq__232_245 = G__259;
chunk__233_246 = G__260;
count__234_247 = G__261;
i__235_248 = G__262;
continue;
} else {
var vec__239_263 = cljs.core.first.call(null,seq__232_257__$1);
var k_264 = cljs.core.nth.call(null,vec__239_263,(0),null);
var v_265 = cljs.core.nth.call(null,vec__239_263,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_264,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_265),"px"].join(''));

var G__266 = cljs.core.next.call(null,seq__232_257__$1);
var G__267 = null;
var G__268 = (0);
var G__269 = (0);
seq__232_245 = G__266;
chunk__233_246 = G__267;
count__234_247 = G__268;
i__235_248 = G__269;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq230){
var G__231 = cljs.core.first.call(null,seq230);
var seq230__$1 = cljs.core.next.call(null,seq230);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__231,seq230__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__275 = arguments.length;
switch (G__275) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4426__auto__ = [];
var len__4411__auto___289 = arguments.length;
var i__4412__auto___290 = (0);
while(true){
if((i__4412__auto___290 < len__4411__auto___289)){
args_arr__4426__auto__.push((arguments[i__4412__auto___290]));

var G__291 = (i__4412__auto___290 + (1));
i__4412__auto___290 = G__291;
continue;
} else {
}
break;
}

var argseq__4427__auto__ = (new cljs.core.IndexedSeq(args_arr__4426__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4427__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__276 = elem;
(G__276[k__$1] = v);

return G__276;
} else {
var G__277 = elem;
G__277.setAttribute(k__$1,v);

return G__277;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__278_292 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__279_293 = null;
var count__280_294 = (0);
var i__281_295 = (0);
while(true){
if((i__281_295 < count__280_294)){
var vec__282_296 = cljs.core._nth.call(null,chunk__279_293,i__281_295);
var k_297__$1 = cljs.core.nth.call(null,vec__282_296,(0),null);
var v_298__$1 = cljs.core.nth.call(null,vec__282_296,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_297__$1,v_298__$1);

var G__299 = seq__278_292;
var G__300 = chunk__279_293;
var G__301 = count__280_294;
var G__302 = (i__281_295 + (1));
seq__278_292 = G__299;
chunk__279_293 = G__300;
count__280_294 = G__301;
i__281_295 = G__302;
continue;
} else {
var temp__4657__auto___303 = cljs.core.seq.call(null,seq__278_292);
if(temp__4657__auto___303){
var seq__278_304__$1 = temp__4657__auto___303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__278_304__$1)){
var c__4231__auto___305 = cljs.core.chunk_first.call(null,seq__278_304__$1);
var G__306 = cljs.core.chunk_rest.call(null,seq__278_304__$1);
var G__307 = c__4231__auto___305;
var G__308 = cljs.core.count.call(null,c__4231__auto___305);
var G__309 = (0);
seq__278_292 = G__306;
chunk__279_293 = G__307;
count__280_294 = G__308;
i__281_295 = G__309;
continue;
} else {
var vec__285_310 = cljs.core.first.call(null,seq__278_304__$1);
var k_311__$1 = cljs.core.nth.call(null,vec__285_310,(0),null);
var v_312__$1 = cljs.core.nth.call(null,vec__285_310,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_311__$1,v_312__$1);

var G__313 = cljs.core.next.call(null,seq__278_304__$1);
var G__314 = null;
var G__315 = (0);
var G__316 = (0);
seq__278_292 = G__313;
chunk__279_293 = G__314;
count__280_294 = G__315;
i__281_295 = G__316;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq271){
var G__272 = cljs.core.first.call(null,seq271);
var seq271__$1 = cljs.core.next.call(null,seq271);
var G__273 = cljs.core.first.call(null,seq271__$1);
var seq271__$2 = cljs.core.next.call(null,seq271__$1);
var G__274 = cljs.core.first.call(null,seq271__$2);
var seq271__$3 = cljs.core.next.call(null,seq271__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__272,G__273,G__274,seq271__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__321 = arguments.length;
switch (G__321) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4426__auto__ = [];
var len__4411__auto___327 = arguments.length;
var i__4412__auto___328 = (0);
while(true){
if((i__4412__auto___328 < len__4411__auto___327)){
args_arr__4426__auto__.push((arguments[i__4412__auto___328]));

var G__329 = (i__4412__auto___328 + (1));
i__4412__auto___328 = G__329;
continue;
} else {
}
break;
}

var argseq__4427__auto__ = (new cljs.core.IndexedSeq(args_arr__4426__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4427__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_330__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_330__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_330__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__322_331 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__323_332 = null;
var count__324_333 = (0);
var i__325_334 = (0);
while(true){
if((i__325_334 < count__324_333)){
var k_335__$1 = cljs.core._nth.call(null,chunk__323_332,i__325_334);
dommy.core.remove_attr_BANG_.call(null,elem,k_335__$1);

var G__336 = seq__322_331;
var G__337 = chunk__323_332;
var G__338 = count__324_333;
var G__339 = (i__325_334 + (1));
seq__322_331 = G__336;
chunk__323_332 = G__337;
count__324_333 = G__338;
i__325_334 = G__339;
continue;
} else {
var temp__4657__auto___340 = cljs.core.seq.call(null,seq__322_331);
if(temp__4657__auto___340){
var seq__322_341__$1 = temp__4657__auto___340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__322_341__$1)){
var c__4231__auto___342 = cljs.core.chunk_first.call(null,seq__322_341__$1);
var G__343 = cljs.core.chunk_rest.call(null,seq__322_341__$1);
var G__344 = c__4231__auto___342;
var G__345 = cljs.core.count.call(null,c__4231__auto___342);
var G__346 = (0);
seq__322_331 = G__343;
chunk__323_332 = G__344;
count__324_333 = G__345;
i__325_334 = G__346;
continue;
} else {
var k_347__$1 = cljs.core.first.call(null,seq__322_341__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_347__$1);

var G__348 = cljs.core.next.call(null,seq__322_341__$1);
var G__349 = null;
var G__350 = (0);
var G__351 = (0);
seq__322_331 = G__348;
chunk__323_332 = G__349;
count__324_333 = G__350;
i__325_334 = G__351;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq318){
var G__319 = cljs.core.first.call(null,seq318);
var seq318__$1 = cljs.core.next.call(null,seq318);
var G__320 = cljs.core.first.call(null,seq318__$1);
var seq318__$2 = cljs.core.next.call(null,seq318__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__319,G__320,seq318__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__353 = arguments.length;
switch (G__353) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__359 = arguments.length;
switch (G__359) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4426__auto__ = [];
var len__4411__auto___373 = arguments.length;
var i__4412__auto___374 = (0);
while(true){
if((i__4412__auto___374 < len__4411__auto___373)){
args_arr__4426__auto__.push((arguments[i__4412__auto___374]));

var G__375 = (i__4412__auto___374 + (1));
i__4412__auto___374 = G__375;
continue;
} else {
}
break;
}

var argseq__4427__auto__ = (new cljs.core.IndexedSeq(args_arr__4426__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4427__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___376 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___376)){
var class_list_377 = temp__4655__auto___376;
var seq__360_378 = cljs.core.seq.call(null,classes__$1);
var chunk__361_379 = null;
var count__362_380 = (0);
var i__363_381 = (0);
while(true){
if((i__363_381 < count__362_380)){
var c_382 = cljs.core._nth.call(null,chunk__361_379,i__363_381);
class_list_377.add(c_382);

var G__383 = seq__360_378;
var G__384 = chunk__361_379;
var G__385 = count__362_380;
var G__386 = (i__363_381 + (1));
seq__360_378 = G__383;
chunk__361_379 = G__384;
count__362_380 = G__385;
i__363_381 = G__386;
continue;
} else {
var temp__4657__auto___387 = cljs.core.seq.call(null,seq__360_378);
if(temp__4657__auto___387){
var seq__360_388__$1 = temp__4657__auto___387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__360_388__$1)){
var c__4231__auto___389 = cljs.core.chunk_first.call(null,seq__360_388__$1);
var G__390 = cljs.core.chunk_rest.call(null,seq__360_388__$1);
var G__391 = c__4231__auto___389;
var G__392 = cljs.core.count.call(null,c__4231__auto___389);
var G__393 = (0);
seq__360_378 = G__390;
chunk__361_379 = G__391;
count__362_380 = G__392;
i__363_381 = G__393;
continue;
} else {
var c_394 = cljs.core.first.call(null,seq__360_388__$1);
class_list_377.add(c_394);

var G__395 = cljs.core.next.call(null,seq__360_388__$1);
var G__396 = null;
var G__397 = (0);
var G__398 = (0);
seq__360_378 = G__395;
chunk__361_379 = G__396;
count__362_380 = G__397;
i__363_381 = G__398;
continue;
}
} else {
}
}
break;
}
} else {
var seq__364_399 = cljs.core.seq.call(null,classes__$1);
var chunk__365_400 = null;
var count__366_401 = (0);
var i__367_402 = (0);
while(true){
if((i__367_402 < count__366_401)){
var c_403 = cljs.core._nth.call(null,chunk__365_400,i__367_402);
var class_name_404 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_404,c_403))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_404 === ""))?c_403:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_404)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_403)].join('')));
}

var G__405 = seq__364_399;
var G__406 = chunk__365_400;
var G__407 = count__366_401;
var G__408 = (i__367_402 + (1));
seq__364_399 = G__405;
chunk__365_400 = G__406;
count__366_401 = G__407;
i__367_402 = G__408;
continue;
} else {
var temp__4657__auto___409 = cljs.core.seq.call(null,seq__364_399);
if(temp__4657__auto___409){
var seq__364_410__$1 = temp__4657__auto___409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364_410__$1)){
var c__4231__auto___411 = cljs.core.chunk_first.call(null,seq__364_410__$1);
var G__412 = cljs.core.chunk_rest.call(null,seq__364_410__$1);
var G__413 = c__4231__auto___411;
var G__414 = cljs.core.count.call(null,c__4231__auto___411);
var G__415 = (0);
seq__364_399 = G__412;
chunk__365_400 = G__413;
count__366_401 = G__414;
i__367_402 = G__415;
continue;
} else {
var c_416 = cljs.core.first.call(null,seq__364_410__$1);
var class_name_417 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_417,c_416))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_417 === ""))?c_416:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_417)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_416)].join('')));
}

var G__418 = cljs.core.next.call(null,seq__364_410__$1);
var G__419 = null;
var G__420 = (0);
var G__421 = (0);
seq__364_399 = G__418;
chunk__365_400 = G__419;
count__366_401 = G__420;
i__367_402 = G__421;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__368_422 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__369_423 = null;
var count__370_424 = (0);
var i__371_425 = (0);
while(true){
if((i__371_425 < count__370_424)){
var c_426 = cljs.core._nth.call(null,chunk__369_423,i__371_425);
dommy.core.add_class_BANG_.call(null,elem,c_426);

var G__427 = seq__368_422;
var G__428 = chunk__369_423;
var G__429 = count__370_424;
var G__430 = (i__371_425 + (1));
seq__368_422 = G__427;
chunk__369_423 = G__428;
count__370_424 = G__429;
i__371_425 = G__430;
continue;
} else {
var temp__4657__auto___431 = cljs.core.seq.call(null,seq__368_422);
if(temp__4657__auto___431){
var seq__368_432__$1 = temp__4657__auto___431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__368_432__$1)){
var c__4231__auto___433 = cljs.core.chunk_first.call(null,seq__368_432__$1);
var G__434 = cljs.core.chunk_rest.call(null,seq__368_432__$1);
var G__435 = c__4231__auto___433;
var G__436 = cljs.core.count.call(null,c__4231__auto___433);
var G__437 = (0);
seq__368_422 = G__434;
chunk__369_423 = G__435;
count__370_424 = G__436;
i__371_425 = G__437;
continue;
} else {
var c_438 = cljs.core.first.call(null,seq__368_432__$1);
dommy.core.add_class_BANG_.call(null,elem,c_438);

var G__439 = cljs.core.next.call(null,seq__368_432__$1);
var G__440 = null;
var G__441 = (0);
var G__442 = (0);
seq__368_422 = G__439;
chunk__369_423 = G__440;
count__370_424 = G__441;
i__371_425 = G__442;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq356){
var G__357 = cljs.core.first.call(null,seq356);
var seq356__$1 = cljs.core.next.call(null,seq356);
var G__358 = cljs.core.first.call(null,seq356__$1);
var seq356__$2 = cljs.core.next.call(null,seq356__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__357,G__358,seq356__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__447 = arguments.length;
switch (G__447) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4426__auto__ = [];
var len__4411__auto___453 = arguments.length;
var i__4412__auto___454 = (0);
while(true){
if((i__4412__auto___454 < len__4411__auto___453)){
args_arr__4426__auto__.push((arguments[i__4412__auto___454]));

var G__455 = (i__4412__auto___454 + (1));
i__4412__auto___454 = G__455;
continue;
} else {
}
break;
}

var argseq__4427__auto__ = (new cljs.core.IndexedSeq(args_arr__4426__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4427__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___456 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___456)){
var class_list_457 = temp__4655__auto___456;
class_list_457.remove(c__$1);
} else {
var class_name_458 = dommy.core.class$.call(null,elem);
var new_class_name_459 = dommy.utils.remove_class_str.call(null,class_name_458,c__$1);
if((class_name_458 === new_class_name_459)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_459);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__448 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__449 = null;
var count__450 = (0);
var i__451 = (0);
while(true){
if((i__451 < count__450)){
var c = cljs.core._nth.call(null,chunk__449,i__451);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__460 = seq__448;
var G__461 = chunk__449;
var G__462 = count__450;
var G__463 = (i__451 + (1));
seq__448 = G__460;
chunk__449 = G__461;
count__450 = G__462;
i__451 = G__463;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__448);
if(temp__4657__auto__){
var seq__448__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__448__$1)){
var c__4231__auto__ = cljs.core.chunk_first.call(null,seq__448__$1);
var G__464 = cljs.core.chunk_rest.call(null,seq__448__$1);
var G__465 = c__4231__auto__;
var G__466 = cljs.core.count.call(null,c__4231__auto__);
var G__467 = (0);
seq__448 = G__464;
chunk__449 = G__465;
count__450 = G__466;
i__451 = G__467;
continue;
} else {
var c = cljs.core.first.call(null,seq__448__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__468 = cljs.core.next.call(null,seq__448__$1);
var G__469 = null;
var G__470 = (0);
var G__471 = (0);
seq__448 = G__468;
chunk__449 = G__469;
count__450 = G__470;
i__451 = G__471;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq444){
var G__445 = cljs.core.first.call(null,seq444);
var seq444__$1 = cljs.core.next.call(null,seq444);
var G__446 = cljs.core.first.call(null,seq444__$1);
var seq444__$2 = cljs.core.next.call(null,seq444__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__445,G__446,seq444__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__473 = arguments.length;
switch (G__473) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___475 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___475)){
var class_list_476 = temp__4655__auto___475;
class_list_476.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__478 = arguments.length;
switch (G__478) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__481 = arguments.length;
switch (G__481) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__487 = arguments.length;
switch (G__487) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4426__auto__ = [];
var len__4411__auto___494 = arguments.length;
var i__4412__auto___495 = (0);
while(true){
if((i__4412__auto___495 < len__4411__auto___494)){
args_arr__4426__auto__.push((arguments[i__4412__auto___495]));

var G__496 = (i__4412__auto___495 + (1));
i__4412__auto___495 = G__496;
continue;
} else {
}
break;
}

var argseq__4427__auto__ = (new cljs.core.IndexedSeq(args_arr__4426__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4427__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__488 = parent;
G__488.appendChild(child);

return G__488;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__489_497 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__490_498 = null;
var count__491_499 = (0);
var i__492_500 = (0);
while(true){
if((i__492_500 < count__491_499)){
var c_501 = cljs.core._nth.call(null,chunk__490_498,i__492_500);
dommy.core.append_BANG_.call(null,parent,c_501);

var G__502 = seq__489_497;
var G__503 = chunk__490_498;
var G__504 = count__491_499;
var G__505 = (i__492_500 + (1));
seq__489_497 = G__502;
chunk__490_498 = G__503;
count__491_499 = G__504;
i__492_500 = G__505;
continue;
} else {
var temp__4657__auto___506 = cljs.core.seq.call(null,seq__489_497);
if(temp__4657__auto___506){
var seq__489_507__$1 = temp__4657__auto___506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__489_507__$1)){
var c__4231__auto___508 = cljs.core.chunk_first.call(null,seq__489_507__$1);
var G__509 = cljs.core.chunk_rest.call(null,seq__489_507__$1);
var G__510 = c__4231__auto___508;
var G__511 = cljs.core.count.call(null,c__4231__auto___508);
var G__512 = (0);
seq__489_497 = G__509;
chunk__490_498 = G__510;
count__491_499 = G__511;
i__492_500 = G__512;
continue;
} else {
var c_513 = cljs.core.first.call(null,seq__489_507__$1);
dommy.core.append_BANG_.call(null,parent,c_513);

var G__514 = cljs.core.next.call(null,seq__489_507__$1);
var G__515 = null;
var G__516 = (0);
var G__517 = (0);
seq__489_497 = G__514;
chunk__490_498 = G__515;
count__491_499 = G__516;
i__492_500 = G__517;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq484){
var G__485 = cljs.core.first.call(null,seq484);
var seq484__$1 = cljs.core.next.call(null,seq484);
var G__486 = cljs.core.first.call(null,seq484__$1);
var seq484__$2 = cljs.core.next.call(null,seq484__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__485,G__486,seq484__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__522 = arguments.length;
switch (G__522) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4426__auto__ = [];
var len__4411__auto___529 = arguments.length;
var i__4412__auto___530 = (0);
while(true){
if((i__4412__auto___530 < len__4411__auto___529)){
args_arr__4426__auto__.push((arguments[i__4412__auto___530]));

var G__531 = (i__4412__auto___530 + (1));
i__4412__auto___530 = G__531;
continue;
} else {
}
break;
}

var argseq__4427__auto__ = (new cljs.core.IndexedSeq(args_arr__4426__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4427__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__523 = parent;
G__523.insertBefore(child,parent.firstChild);

return G__523;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__524_532 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__525_533 = null;
var count__526_534 = (0);
var i__527_535 = (0);
while(true){
if((i__527_535 < count__526_534)){
var c_536 = cljs.core._nth.call(null,chunk__525_533,i__527_535);
dommy.core.prepend_BANG_.call(null,parent,c_536);

var G__537 = seq__524_532;
var G__538 = chunk__525_533;
var G__539 = count__526_534;
var G__540 = (i__527_535 + (1));
seq__524_532 = G__537;
chunk__525_533 = G__538;
count__526_534 = G__539;
i__527_535 = G__540;
continue;
} else {
var temp__4657__auto___541 = cljs.core.seq.call(null,seq__524_532);
if(temp__4657__auto___541){
var seq__524_542__$1 = temp__4657__auto___541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__524_542__$1)){
var c__4231__auto___543 = cljs.core.chunk_first.call(null,seq__524_542__$1);
var G__544 = cljs.core.chunk_rest.call(null,seq__524_542__$1);
var G__545 = c__4231__auto___543;
var G__546 = cljs.core.count.call(null,c__4231__auto___543);
var G__547 = (0);
seq__524_532 = G__544;
chunk__525_533 = G__545;
count__526_534 = G__546;
i__527_535 = G__547;
continue;
} else {
var c_548 = cljs.core.first.call(null,seq__524_542__$1);
dommy.core.prepend_BANG_.call(null,parent,c_548);

var G__549 = cljs.core.next.call(null,seq__524_542__$1);
var G__550 = null;
var G__551 = (0);
var G__552 = (0);
seq__524_532 = G__549;
chunk__525_533 = G__550;
count__526_534 = G__551;
i__527_535 = G__552;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq519){
var G__520 = cljs.core.first.call(null,seq519);
var seq519__$1 = cljs.core.next.call(null,seq519);
var G__521 = cljs.core.first.call(null,seq519__$1);
var seq519__$2 = cljs.core.next.call(null,seq519__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__520,G__521,seq519__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___553 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___553)){
var next_554 = temp__4655__auto___553;
dommy.core.insert_before_BANG_.call(null,elem,next_554);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__556 = arguments.length;
switch (G__556) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__557 = p;
G__557.removeChild(elem);

return G__557;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__559){
var vec__560 = p__559;
var special_mouse_event = cljs.core.nth.call(null,vec__560,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__560,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__560,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__560,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3836__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3836__auto__)){
return or__3836__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3828__auto__ = related_target;
if(cljs.core.truth_(and__3828__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3828__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__560,special_mouse_event,real_mouse_event))
});})(vec__560,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3828__auto__ = selected_target;
if(cljs.core.truth_(and__3828__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3828__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__3836__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3836__auto__)){
return or__3836__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___566 = arguments.length;
var i__4412__auto___567 = (0);
while(true){
if((i__4412__auto___567 < len__4411__auto___566)){
args__4414__auto__.push((arguments[i__4412__auto___567]));

var G__568 = (i__4412__auto___567 + (1));
i__4412__auto___567 = G__568;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((2) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4415__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq563){
var G__564 = cljs.core.first.call(null,seq563);
var seq563__$1 = cljs.core.next.call(null,seq563);
var G__565 = cljs.core.first.call(null,seq563__$1);
var seq563__$2 = cljs.core.next.call(null,seq563__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__564,G__565,seq563__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___608 = arguments.length;
var i__4412__auto___609 = (0);
while(true){
if((i__4412__auto___609 < len__4411__auto___608)){
args__4414__auto__.push((arguments[i__4412__auto___609]));

var G__610 = (i__4412__auto___609 + (1));
i__4412__auto___609 = G__610;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((1) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4415__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__571_611 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_612 = cljs.core.nth.call(null,vec__571_611,(0),null);
var selector_613 = cljs.core.nth.call(null,vec__571_611,(1),null);
var seq__574_614 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__581_615 = null;
var count__582_616 = (0);
var i__583_617 = (0);
while(true){
if((i__583_617 < count__582_616)){
var vec__590_618 = cljs.core._nth.call(null,chunk__581_615,i__583_617);
var orig_type_619 = cljs.core.nth.call(null,vec__590_618,(0),null);
var f_620 = cljs.core.nth.call(null,vec__590_618,(1),null);
var seq__584_621 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_619,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_619,cljs.core.identity])));
var chunk__586_622 = null;
var count__587_623 = (0);
var i__588_624 = (0);
while(true){
if((i__588_624 < count__587_623)){
var vec__593_625 = cljs.core._nth.call(null,chunk__586_622,i__588_624);
var actual_type_626 = cljs.core.nth.call(null,vec__593_625,(0),null);
var factory_627 = cljs.core.nth.call(null,vec__593_625,(1),null);
var canonical_f_628 = (cljs.core.truth_(selector_613)?cljs.core.partial.call(null,dommy.core.live_listener,elem_612,selector_613):cljs.core.identity).call(null,factory_627.call(null,f_620));
dommy.core.update_event_listeners_BANG_.call(null,elem_612,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_613,actual_type_626,f_620], null),canonical_f_628);

if(cljs.core.truth_(elem_612.addEventListener)){
elem_612.addEventListener(cljs.core.name.call(null,actual_type_626),canonical_f_628);
} else {
elem_612.attachEvent(cljs.core.name.call(null,actual_type_626),canonical_f_628);
}

var G__629 = seq__584_621;
var G__630 = chunk__586_622;
var G__631 = count__587_623;
var G__632 = (i__588_624 + (1));
seq__584_621 = G__629;
chunk__586_622 = G__630;
count__587_623 = G__631;
i__588_624 = G__632;
continue;
} else {
var temp__4657__auto___633 = cljs.core.seq.call(null,seq__584_621);
if(temp__4657__auto___633){
var seq__584_634__$1 = temp__4657__auto___633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__584_634__$1)){
var c__4231__auto___635 = cljs.core.chunk_first.call(null,seq__584_634__$1);
var G__636 = cljs.core.chunk_rest.call(null,seq__584_634__$1);
var G__637 = c__4231__auto___635;
var G__638 = cljs.core.count.call(null,c__4231__auto___635);
var G__639 = (0);
seq__584_621 = G__636;
chunk__586_622 = G__637;
count__587_623 = G__638;
i__588_624 = G__639;
continue;
} else {
var vec__596_640 = cljs.core.first.call(null,seq__584_634__$1);
var actual_type_641 = cljs.core.nth.call(null,vec__596_640,(0),null);
var factory_642 = cljs.core.nth.call(null,vec__596_640,(1),null);
var canonical_f_643 = (cljs.core.truth_(selector_613)?cljs.core.partial.call(null,dommy.core.live_listener,elem_612,selector_613):cljs.core.identity).call(null,factory_642.call(null,f_620));
dommy.core.update_event_listeners_BANG_.call(null,elem_612,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_613,actual_type_641,f_620], null),canonical_f_643);

if(cljs.core.truth_(elem_612.addEventListener)){
elem_612.addEventListener(cljs.core.name.call(null,actual_type_641),canonical_f_643);
} else {
elem_612.attachEvent(cljs.core.name.call(null,actual_type_641),canonical_f_643);
}

var G__644 = cljs.core.next.call(null,seq__584_634__$1);
var G__645 = null;
var G__646 = (0);
var G__647 = (0);
seq__584_621 = G__644;
chunk__586_622 = G__645;
count__587_623 = G__646;
i__588_624 = G__647;
continue;
}
} else {
}
}
break;
}

var G__648 = seq__574_614;
var G__649 = chunk__581_615;
var G__650 = count__582_616;
var G__651 = (i__583_617 + (1));
seq__574_614 = G__648;
chunk__581_615 = G__649;
count__582_616 = G__650;
i__583_617 = G__651;
continue;
} else {
var temp__4657__auto___652 = cljs.core.seq.call(null,seq__574_614);
if(temp__4657__auto___652){
var seq__574_653__$1 = temp__4657__auto___652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__574_653__$1)){
var c__4231__auto___654 = cljs.core.chunk_first.call(null,seq__574_653__$1);
var G__655 = cljs.core.chunk_rest.call(null,seq__574_653__$1);
var G__656 = c__4231__auto___654;
var G__657 = cljs.core.count.call(null,c__4231__auto___654);
var G__658 = (0);
seq__574_614 = G__655;
chunk__581_615 = G__656;
count__582_616 = G__657;
i__583_617 = G__658;
continue;
} else {
var vec__599_659 = cljs.core.first.call(null,seq__574_653__$1);
var orig_type_660 = cljs.core.nth.call(null,vec__599_659,(0),null);
var f_661 = cljs.core.nth.call(null,vec__599_659,(1),null);
var seq__575_662 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_660,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_660,cljs.core.identity])));
var chunk__577_663 = null;
var count__578_664 = (0);
var i__579_665 = (0);
while(true){
if((i__579_665 < count__578_664)){
var vec__602_666 = cljs.core._nth.call(null,chunk__577_663,i__579_665);
var actual_type_667 = cljs.core.nth.call(null,vec__602_666,(0),null);
var factory_668 = cljs.core.nth.call(null,vec__602_666,(1),null);
var canonical_f_669 = (cljs.core.truth_(selector_613)?cljs.core.partial.call(null,dommy.core.live_listener,elem_612,selector_613):cljs.core.identity).call(null,factory_668.call(null,f_661));
dommy.core.update_event_listeners_BANG_.call(null,elem_612,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_613,actual_type_667,f_661], null),canonical_f_669);

if(cljs.core.truth_(elem_612.addEventListener)){
elem_612.addEventListener(cljs.core.name.call(null,actual_type_667),canonical_f_669);
} else {
elem_612.attachEvent(cljs.core.name.call(null,actual_type_667),canonical_f_669);
}

var G__670 = seq__575_662;
var G__671 = chunk__577_663;
var G__672 = count__578_664;
var G__673 = (i__579_665 + (1));
seq__575_662 = G__670;
chunk__577_663 = G__671;
count__578_664 = G__672;
i__579_665 = G__673;
continue;
} else {
var temp__4657__auto___674__$1 = cljs.core.seq.call(null,seq__575_662);
if(temp__4657__auto___674__$1){
var seq__575_675__$1 = temp__4657__auto___674__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__575_675__$1)){
var c__4231__auto___676 = cljs.core.chunk_first.call(null,seq__575_675__$1);
var G__677 = cljs.core.chunk_rest.call(null,seq__575_675__$1);
var G__678 = c__4231__auto___676;
var G__679 = cljs.core.count.call(null,c__4231__auto___676);
var G__680 = (0);
seq__575_662 = G__677;
chunk__577_663 = G__678;
count__578_664 = G__679;
i__579_665 = G__680;
continue;
} else {
var vec__605_681 = cljs.core.first.call(null,seq__575_675__$1);
var actual_type_682 = cljs.core.nth.call(null,vec__605_681,(0),null);
var factory_683 = cljs.core.nth.call(null,vec__605_681,(1),null);
var canonical_f_684 = (cljs.core.truth_(selector_613)?cljs.core.partial.call(null,dommy.core.live_listener,elem_612,selector_613):cljs.core.identity).call(null,factory_683.call(null,f_661));
dommy.core.update_event_listeners_BANG_.call(null,elem_612,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_613,actual_type_682,f_661], null),canonical_f_684);

if(cljs.core.truth_(elem_612.addEventListener)){
elem_612.addEventListener(cljs.core.name.call(null,actual_type_682),canonical_f_684);
} else {
elem_612.attachEvent(cljs.core.name.call(null,actual_type_682),canonical_f_684);
}

var G__685 = cljs.core.next.call(null,seq__575_675__$1);
var G__686 = null;
var G__687 = (0);
var G__688 = (0);
seq__575_662 = G__685;
chunk__577_663 = G__686;
count__578_664 = G__687;
i__579_665 = G__688;
continue;
}
} else {
}
}
break;
}

var G__689 = cljs.core.next.call(null,seq__574_653__$1);
var G__690 = null;
var G__691 = (0);
var G__692 = (0);
seq__574_614 = G__689;
chunk__581_615 = G__690;
count__582_616 = G__691;
i__583_617 = G__692;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq569){
var G__570 = cljs.core.first.call(null,seq569);
var seq569__$1 = cljs.core.next.call(null,seq569);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__570,seq569__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___732 = arguments.length;
var i__4412__auto___733 = (0);
while(true){
if((i__4412__auto___733 < len__4411__auto___732)){
args__4414__auto__.push((arguments[i__4412__auto___733]));

var G__734 = (i__4412__auto___733 + (1));
i__4412__auto___733 = G__734;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((1) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4415__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__695_735 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_736 = cljs.core.nth.call(null,vec__695_735,(0),null);
var selector_737 = cljs.core.nth.call(null,vec__695_735,(1),null);
var seq__698_738 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__705_739 = null;
var count__706_740 = (0);
var i__707_741 = (0);
while(true){
if((i__707_741 < count__706_740)){
var vec__714_742 = cljs.core._nth.call(null,chunk__705_739,i__707_741);
var orig_type_743 = cljs.core.nth.call(null,vec__714_742,(0),null);
var f_744 = cljs.core.nth.call(null,vec__714_742,(1),null);
var seq__708_745 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_743,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_743,cljs.core.identity])));
var chunk__710_746 = null;
var count__711_747 = (0);
var i__712_748 = (0);
while(true){
if((i__712_748 < count__711_747)){
var vec__717_749 = cljs.core._nth.call(null,chunk__710_746,i__712_748);
var actual_type_750 = cljs.core.nth.call(null,vec__717_749,(0),null);
var __751 = cljs.core.nth.call(null,vec__717_749,(1),null);
var keys_752 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_737,actual_type_750,f_744], null);
var canonical_f_753 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_736),keys_752);
dommy.core.update_event_listeners_BANG_.call(null,elem_736,dommy.utils.dissoc_in,keys_752);

if(cljs.core.truth_(elem_736.removeEventListener)){
elem_736.removeEventListener(cljs.core.name.call(null,actual_type_750),canonical_f_753);
} else {
elem_736.detachEvent(cljs.core.name.call(null,actual_type_750),canonical_f_753);
}

var G__754 = seq__708_745;
var G__755 = chunk__710_746;
var G__756 = count__711_747;
var G__757 = (i__712_748 + (1));
seq__708_745 = G__754;
chunk__710_746 = G__755;
count__711_747 = G__756;
i__712_748 = G__757;
continue;
} else {
var temp__4657__auto___758 = cljs.core.seq.call(null,seq__708_745);
if(temp__4657__auto___758){
var seq__708_759__$1 = temp__4657__auto___758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__708_759__$1)){
var c__4231__auto___760 = cljs.core.chunk_first.call(null,seq__708_759__$1);
var G__761 = cljs.core.chunk_rest.call(null,seq__708_759__$1);
var G__762 = c__4231__auto___760;
var G__763 = cljs.core.count.call(null,c__4231__auto___760);
var G__764 = (0);
seq__708_745 = G__761;
chunk__710_746 = G__762;
count__711_747 = G__763;
i__712_748 = G__764;
continue;
} else {
var vec__720_765 = cljs.core.first.call(null,seq__708_759__$1);
var actual_type_766 = cljs.core.nth.call(null,vec__720_765,(0),null);
var __767 = cljs.core.nth.call(null,vec__720_765,(1),null);
var keys_768 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_737,actual_type_766,f_744], null);
var canonical_f_769 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_736),keys_768);
dommy.core.update_event_listeners_BANG_.call(null,elem_736,dommy.utils.dissoc_in,keys_768);

if(cljs.core.truth_(elem_736.removeEventListener)){
elem_736.removeEventListener(cljs.core.name.call(null,actual_type_766),canonical_f_769);
} else {
elem_736.detachEvent(cljs.core.name.call(null,actual_type_766),canonical_f_769);
}

var G__770 = cljs.core.next.call(null,seq__708_759__$1);
var G__771 = null;
var G__772 = (0);
var G__773 = (0);
seq__708_745 = G__770;
chunk__710_746 = G__771;
count__711_747 = G__772;
i__712_748 = G__773;
continue;
}
} else {
}
}
break;
}

var G__774 = seq__698_738;
var G__775 = chunk__705_739;
var G__776 = count__706_740;
var G__777 = (i__707_741 + (1));
seq__698_738 = G__774;
chunk__705_739 = G__775;
count__706_740 = G__776;
i__707_741 = G__777;
continue;
} else {
var temp__4657__auto___778 = cljs.core.seq.call(null,seq__698_738);
if(temp__4657__auto___778){
var seq__698_779__$1 = temp__4657__auto___778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__698_779__$1)){
var c__4231__auto___780 = cljs.core.chunk_first.call(null,seq__698_779__$1);
var G__781 = cljs.core.chunk_rest.call(null,seq__698_779__$1);
var G__782 = c__4231__auto___780;
var G__783 = cljs.core.count.call(null,c__4231__auto___780);
var G__784 = (0);
seq__698_738 = G__781;
chunk__705_739 = G__782;
count__706_740 = G__783;
i__707_741 = G__784;
continue;
} else {
var vec__723_785 = cljs.core.first.call(null,seq__698_779__$1);
var orig_type_786 = cljs.core.nth.call(null,vec__723_785,(0),null);
var f_787 = cljs.core.nth.call(null,vec__723_785,(1),null);
var seq__699_788 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_786,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_786,cljs.core.identity])));
var chunk__701_789 = null;
var count__702_790 = (0);
var i__703_791 = (0);
while(true){
if((i__703_791 < count__702_790)){
var vec__726_792 = cljs.core._nth.call(null,chunk__701_789,i__703_791);
var actual_type_793 = cljs.core.nth.call(null,vec__726_792,(0),null);
var __794 = cljs.core.nth.call(null,vec__726_792,(1),null);
var keys_795 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_737,actual_type_793,f_787], null);
var canonical_f_796 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_736),keys_795);
dommy.core.update_event_listeners_BANG_.call(null,elem_736,dommy.utils.dissoc_in,keys_795);

if(cljs.core.truth_(elem_736.removeEventListener)){
elem_736.removeEventListener(cljs.core.name.call(null,actual_type_793),canonical_f_796);
} else {
elem_736.detachEvent(cljs.core.name.call(null,actual_type_793),canonical_f_796);
}

var G__797 = seq__699_788;
var G__798 = chunk__701_789;
var G__799 = count__702_790;
var G__800 = (i__703_791 + (1));
seq__699_788 = G__797;
chunk__701_789 = G__798;
count__702_790 = G__799;
i__703_791 = G__800;
continue;
} else {
var temp__4657__auto___801__$1 = cljs.core.seq.call(null,seq__699_788);
if(temp__4657__auto___801__$1){
var seq__699_802__$1 = temp__4657__auto___801__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__699_802__$1)){
var c__4231__auto___803 = cljs.core.chunk_first.call(null,seq__699_802__$1);
var G__804 = cljs.core.chunk_rest.call(null,seq__699_802__$1);
var G__805 = c__4231__auto___803;
var G__806 = cljs.core.count.call(null,c__4231__auto___803);
var G__807 = (0);
seq__699_788 = G__804;
chunk__701_789 = G__805;
count__702_790 = G__806;
i__703_791 = G__807;
continue;
} else {
var vec__729_808 = cljs.core.first.call(null,seq__699_802__$1);
var actual_type_809 = cljs.core.nth.call(null,vec__729_808,(0),null);
var __810 = cljs.core.nth.call(null,vec__729_808,(1),null);
var keys_811 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_737,actual_type_809,f_787], null);
var canonical_f_812 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_736),keys_811);
dommy.core.update_event_listeners_BANG_.call(null,elem_736,dommy.utils.dissoc_in,keys_811);

if(cljs.core.truth_(elem_736.removeEventListener)){
elem_736.removeEventListener(cljs.core.name.call(null,actual_type_809),canonical_f_812);
} else {
elem_736.detachEvent(cljs.core.name.call(null,actual_type_809),canonical_f_812);
}

var G__813 = cljs.core.next.call(null,seq__699_802__$1);
var G__814 = null;
var G__815 = (0);
var G__816 = (0);
seq__699_788 = G__813;
chunk__701_789 = G__814;
count__702_790 = G__815;
i__703_791 = G__816;
continue;
}
} else {
}
}
break;
}

var G__817 = cljs.core.next.call(null,seq__698_779__$1);
var G__818 = null;
var G__819 = (0);
var G__820 = (0);
seq__698_738 = G__817;
chunk__705_739 = G__818;
count__706_740 = G__819;
i__707_741 = G__820;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq693){
var G__694 = cljs.core.first.call(null,seq693);
var seq693__$1 = cljs.core.next.call(null,seq693);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__694,seq693__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4414__auto__ = [];
var len__4411__auto___836 = arguments.length;
var i__4412__auto___837 = (0);
while(true){
if((i__4412__auto___837 < len__4411__auto___836)){
args__4414__auto__.push((arguments[i__4412__auto___837]));

var G__838 = (i__4412__auto___837 + (1));
i__4412__auto___837 = G__838;
continue;
} else {
}
break;
}

var argseq__4415__auto__ = ((((1) < args__4414__auto__.length))?(new cljs.core.IndexedSeq(args__4414__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4415__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__823_839 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_840 = cljs.core.nth.call(null,vec__823_839,(0),null);
var selector_841 = cljs.core.nth.call(null,vec__823_839,(1),null);
var seq__826_842 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__827_843 = null;
var count__828_844 = (0);
var i__829_845 = (0);
while(true){
if((i__829_845 < count__828_844)){
var vec__830_846 = cljs.core._nth.call(null,chunk__827_843,i__829_845);
var type_847 = cljs.core.nth.call(null,vec__830_846,(0),null);
var f_848 = cljs.core.nth.call(null,vec__830_846,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_847,((function (seq__826_842,chunk__827_843,count__828_844,i__829_845,vec__830_846,type_847,f_848,vec__823_839,elem_840,selector_841){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_847,dommy$core$this_fn);

return f_848.call(null,e);
});})(seq__826_842,chunk__827_843,count__828_844,i__829_845,vec__830_846,type_847,f_848,vec__823_839,elem_840,selector_841))
);

var G__849 = seq__826_842;
var G__850 = chunk__827_843;
var G__851 = count__828_844;
var G__852 = (i__829_845 + (1));
seq__826_842 = G__849;
chunk__827_843 = G__850;
count__828_844 = G__851;
i__829_845 = G__852;
continue;
} else {
var temp__4657__auto___853 = cljs.core.seq.call(null,seq__826_842);
if(temp__4657__auto___853){
var seq__826_854__$1 = temp__4657__auto___853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__826_854__$1)){
var c__4231__auto___855 = cljs.core.chunk_first.call(null,seq__826_854__$1);
var G__856 = cljs.core.chunk_rest.call(null,seq__826_854__$1);
var G__857 = c__4231__auto___855;
var G__858 = cljs.core.count.call(null,c__4231__auto___855);
var G__859 = (0);
seq__826_842 = G__856;
chunk__827_843 = G__857;
count__828_844 = G__858;
i__829_845 = G__859;
continue;
} else {
var vec__833_860 = cljs.core.first.call(null,seq__826_854__$1);
var type_861 = cljs.core.nth.call(null,vec__833_860,(0),null);
var f_862 = cljs.core.nth.call(null,vec__833_860,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_861,((function (seq__826_842,chunk__827_843,count__828_844,i__829_845,vec__833_860,type_861,f_862,seq__826_854__$1,temp__4657__auto___853,vec__823_839,elem_840,selector_841){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_861,dommy$core$this_fn);

return f_862.call(null,e);
});})(seq__826_842,chunk__827_843,count__828_844,i__829_845,vec__833_860,type_861,f_862,seq__826_854__$1,temp__4657__auto___853,vec__823_839,elem_840,selector_841))
);

var G__863 = cljs.core.next.call(null,seq__826_854__$1);
var G__864 = null;
var G__865 = (0);
var G__866 = (0);
seq__826_842 = G__863;
chunk__827_843 = G__864;
count__828_844 = G__865;
i__829_845 = G__866;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq821){
var G__822 = cljs.core.first.call(null,seq821);
var seq821__$1 = cljs.core.next.call(null,seq821);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__822,seq821__$1);
});


//# sourceMappingURL=core.js.map
