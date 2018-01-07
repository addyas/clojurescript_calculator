(ns hello-world.core
  (:import [goog.dom query]) ; super handy, not available by default in goog.dom
  (:require
   [clojure.string :refer [capitalize]]
   [goog.dom :as gdom]
   [goog.events :as gevents]))

(enable-console-print!)

(println "Hello World")


(fn add [a b] (+ a b))

(fn subtract [a b] (- a b))

(fn multiply [a b] (* a b))

(fn divide [a b] (/ a b))

(defn handle-click [e](println "button pressed!"))

(gevents/listen
  (gdom/getElement "enter")
  (.-CLICK gevents/EventType)
   handle-click)
