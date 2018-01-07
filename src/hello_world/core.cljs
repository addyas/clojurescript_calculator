(ns hello-world.core
  (:import [goog.dom query]) ; super handy, not available by default in goog.dom
  (:require
   [clojure.string :refer [capitalize]]
   [goog.dom :as gdom]
   [goog.dom.safe :as safe]
   [goog.events :as gevents]))

(enable-console-print!)

(println "Hello World")


(defn add [a b] (+ a b))

(defn subtract [a b] (- a b))

(defn multiply [a b] (* a b))

(defn division [a b] (/ a b))

(defn handle-enter [e](println "enter pressed!"))

(defn handle-plus [e](println "plus pressed!")
(def v1 (js/parseInt (.-value (gdom/getElement "add-num-input-1"))))
(def v2 (js/parseInt (.-value (gdom/getElement "add-num-input-2"))))


(def sum (add v1 v2))
(println sum)
;(set! (.-value (gdom/getElement "screen")) sum)
(gdom/setTextContent (gdom/getElement "screen") sum)
)

(defn handle-minus [e](println "minus pressed!")
(set! v1 (js/parseInt (.-value (gdom/getElement "sub-num-input-1"))))
(set! v2 (js/parseInt (.-value (gdom/getElement "sub-num-input-2"))))


(def difference (subtract v1 v2))
(println difference)
;(set! (.-value (gdom/getElement "screen")) sum)
(gdom/setTextContent (gdom/getElement "screen") difference)
)

(defn handle-multiplication [e](println "mult pressed!")
(set! v1 (js/parseInt (.-value (gdom/getElement "mult-num-input-1"))))
(set! v2 (js/parseInt (.-value (gdom/getElement "mult-num-input-2"))))


(def product (multiply v1 v2))
(println product)
;(set! (.-value (gdom/getElement "screen")) sum)
(gdom/setTextContent (gdom/getElement "screen") product)
)

(defn handle-division [e](println "div pressed!")
(set! v1 (js/parseInt (.-value (gdom/getElement "div-num-input-1"))))
(set! v2 (js/parseInt (.-value (gdom/getElement "div-num-input-2"))))


(def quotient (division v1 v2))
(println quotient)
;(set! (.-value (gdom/getElement "screen")) sum)
(gdom/setTextContent (gdom/getElement "screen") quotient))

(gevents/listen
  (gdom/getElement "enter")
  (.-CLICK gevents/EventType)
   handle-enter)

(gevents/listen
 (gdom/getElement "plus")
 (.-CLICK gevents/EventType)
  handle-plus)

(gevents/listen
  (gdom/getElement "minus")
  (.-CLICK gevents/EventType)
   handle-minus)

(gevents/listen
  (gdom/getElement "multiplication")
  (.-CLICK gevents/EventType)
    handle-multiplication)


(gevents/listen
  (gdom/getElement "division")
  (.-CLICK gevents/EventType)
    handle-division)
