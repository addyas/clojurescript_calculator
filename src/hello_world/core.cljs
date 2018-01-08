(ns hello-world.core
  (:import [goog.dom query]) ; super handy, not available by default in goog.dom
  (:require
   [clojure.string :refer [capitalize]]
   [cljs.test :refer-macros [deftest is testing run-tests]]
   [goog.dom :as gdom]
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


;; testing section
(deftest test-add
(is (= (add 2 4) (+ 2 4)))
(is (= (add 0 4) (+ 0 4)))
(is (= (add 0 0) (+ 0 0)))
(is (= (add 0 -5) (+ 0 -5)))
(is (= (add -5 -7) (+ -5 -7))))

(deftest test-subtract
(is (= (subtract 2 4) (- 2 4)))
(is (= (subtract 0 4) (- 0 4)))
(is (= (subtract 0 0) (- 0 0)))
(is (= (subtract 0 -5) (- 0 -5)))
(is (= (subtract -5 -7) (- -5 -7))))

(deftest test-multiply
(is (= (multiply 2 4) (* 2 4)))
(is (= (multiply 0 4) (* 0 4)))
(is (= (multiply 0 0) (* 0 0)))
(is (= (multiply 0 -5) (* 0 -5)))
(is (= (multiply -5 -7) (* -5 -7))))

(deftest test-division
(is (= (division 2 4) (/ 2 4)))
(is (= (division 0 4) (/ 0 4)))
(is (= (division 0 0) (/ 0 0)))
(is (= (division 0 -5) (/ 0 -5)))
(is (= (division -5 -7) (/ -5 -7))))
