"use strict";define("todo-ember-redux/adapters/application",["exports","ember-data-fixture-adapter"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/app",["exports","ember","ember/resolver","ember/load-initializers","todo-ember-redux/config/environment"],function(e,t,r,o,n){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:r["default"]}),o["default"](d,n["default"].modulePrefix),e["default"]=d}),define("todo-ember-redux/components/app-version",["exports","ember-cli-app-version/components/app-version","todo-ember-redux/config/environment"],function(e,t,r){var o=r["default"].APP.name,n=r["default"].APP.version;e["default"]=t["default"].extend({version:n,name:o})}),define("todo-ember-redux/components/edit-todo",["exports","ember"],function(e,t){e["default"]=t["default"].TextField.extend({didInsertElement:function(){this.$().focus(),this.$().addClass("focus")}})}),define("todo-ember-redux/components/todo-item",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"li",classNameBindings:["todo.isCompleted:completed","isEditing:editing"],layout:t["default"].HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:2,column:4},end:{line:9,column:4}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=new Array(1);return o[0]=e.createMorphAt(t,1,1,r),o},statements:[["inline","edit-todo",[],["class","edit","value",["subexpr","@mut",[["get","todo.title",["loc",[null,[5,16],[5,26]]]]],[],[]],"focus-out",["subexpr","dispatch",["UPDATE_TODO"],["todo",["get","todo",["loc",[null,[6,49],[6,53]]]],"field","title"],["loc",[null,[6,20],[6,68]]]],"insert-newline",["subexpr","dispatch",["UPDATE_TODO"],["todo",["get","todo",["loc",[null,[7,54],[7,58]]]],"field","title"],["loc",[null,[7,25],[7,73]]]]],["loc",[null,[3,6],[8,8]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:9,column:4},end:{line:13,column:4}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createElement("input");e.setAttribute(r,"type","checkbox"),e.setAttribute(r,"class","toggle"),e.appendChild(t,r);var r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createElement("label"),o=e.createComment("");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createElement("button");e.setAttribute(r,"class","destroy"),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=e.childAt(t,[1]);this.cachedFragment&&e.repairClonedNode(o,[],!0);var n=e.childAt(t,[3]),d=e.childAt(t,[5]),a=new Array(5);return a[0]=e.createAttrMorph(o,"checked"),a[1]=e.createAttrMorph(o,"onchange"),a[2]=e.createAttrMorph(n,"ondblclick"),a[3]=e.createMorphAt(n,0,0),a[4]=e.createAttrMorph(d,"onclick"),a},statements:[["attribute","checked",["get","todo.isCompleted",["loc",[null,[10,39],[10,55]]]]],["attribute","onchange",["subexpr","dispatch",["TOGGLE_TODO"],["todo",["get","todo",["loc",[null,[10,112],[10,116]]]]],["loc",[null,[10,82],[10,118]]]]],["attribute","ondblclick",["subexpr","dispatch",["EDIT_TODO"],["todo",["get","todo",["loc",[null,[11,52],[11,56]]]]],["loc",[null,[11,24],[11,58]]]]],["content","todo.title",["loc",[null,[11,59],[11,73]]]],["attribute","onclick",["subexpr","dispatch",["REMOVE_TODO"],["todo",["get","todo",["loc",[null,[12,52],[12,56]]]]],["loc",[null,[12,22],[12,58]]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:14,column:2}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("  ");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=new Array(1);return o[0]=e.createMorphAt(t,1,1,r),o},statements:[["block","if",[["get","isEditing",["loc",[null,[2,10],[2,19]]]]],[],0,1,["loc",[null,[2,4],[13,11]]]]],locals:[],templates:[e,t]}}())})}),define("todo-ember-redux/components/todos-list",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({tagName:"ul",layout:t["default"].HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:2,column:4},end:{line:7,column:4}}},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=new Array(1);return o[0]=e.createMorphAt(t,1,1,r),o},statements:[["inline","todo-item",[],["todo",["subexpr","@mut",[["get","todo",["loc",[null,[4,13],[4,17]]]]],[],[]],"isEditing",["subexpr","get-state",[["subexpr","concat",["edit.",["get","todo.id",["loc",[null,[5,45],[5,52]]]]],[],["loc",[null,[5,29],[5,53]]]]],[],["loc",[null,[5,18],[5,54]]]]],["loc",[null,[3,6],[6,8]]]]],locals:["todo"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:8,column:2}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("  ");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=new Array(1);return o[0]=e.createMorphAt(t,1,1,r),o},statements:[["block","each",[["get","todos",["loc",[null,[2,12],[2,17]]]]],[],0,null,["loc",[null,[2,4],[7,13]]]]],locals:[],templates:[e]}}())})}),define("todo-ember-redux/components/todos-route",["exports","ember"],function(e,t){var r=t["default"].computed,o=t["default"].computed.filterBy,n=t["default"].get;e["default"]=t["default"].Component.extend({filtered:r("todos.@each.isCompleted","filter",function(){switch(n(this,"filter")){case"active":return n(this,"active");case"completed":return n(this,"completed");default:return n(this,"todos")}}),completed:o("todos","isCompleted",!0),active:o("todos","isCompleted",!1),allAreDone:r.empty("active"),inflection:r("active.length",function(){var e=n(this,"active.length");return 1===e?"item":"items"}).readOnly(),layout:t["default"].HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.5.1",loc:{source:null,start:{line:34,column:8},end:{line:38,column:8}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("          ");e.appendChild(t,r);var r=e.createElement("button");e.setAttribute(r,"class","clear-completed");var o=e.createTextNode("\n            Clear completed (");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode(")\n          ");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=e.childAt(t,[1]),n=new Array(2);return n[0]=e.createAttrMorph(o,"onclick"),n[1]=e.createMorphAt(o,1,1),n},statements:[["attribute","onclick",["subexpr","dispatch",["CLEAR_COMPLETED_TODOS"],[],["loc",[null,[35,50],[35,86]]]]],["content","completed.length",["loc",[null,[36,29],[36,49]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:46,column:2}}},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\n    ");e.appendChild(t,r);var r=e.createElement("section");e.setAttribute(r,"class","todoapp");var o=e.createTextNode("\n      ");e.appendChild(r,o);var o=e.createElement("header");e.setAttribute(o,"id","header");var n=e.createTextNode("\n        ");e.appendChild(o,n);var n=e.createElement("h1"),d=e.createTextNode("todos");e.appendChild(n,d),e.appendChild(o,n);var n=e.createTextNode("\n        ");e.appendChild(o,n);var n=e.createComment("");e.appendChild(o,n);var n=e.createTextNode("\n      ");e.appendChild(o,n),e.appendChild(r,o);var o=e.createTextNode("\n\n      ");e.appendChild(r,o);var o=e.createElement("section");e.setAttribute(o,"class","main");var n=e.createTextNode("\n        ");e.appendChild(o,n);var n=e.createComment("");e.appendChild(o,n);var n=e.createTextNode("\n\n        ");e.appendChild(o,n);var n=e.createElement("input");e.setAttribute(n,"type","checkbox"),e.setAttribute(n,"class","toggle-all"),e.appendChild(o,n);var n=e.createTextNode("\n      ");e.appendChild(o,n),e.appendChild(r,o);var o=e.createTextNode("\n\n      ");e.appendChild(r,o);var o=e.createElement("footer");e.setAttribute(o,"class","footer");var n=e.createTextNode("\n        ");e.appendChild(o,n);var n=e.createElement("span");e.setAttribute(n,"class","todo-count");var d=e.createTextNode("\n          ");e.appendChild(n,d);var d=e.createElement("strong"),a=e.createComment("");e.appendChild(d,a),e.appendChild(n,d);var d=e.createTextNode(" ");e.appendChild(n,d);var d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode(" left\n        ");e.appendChild(n,d),e.appendChild(o,n);var n=e.createTextNode("\n\n        ");e.appendChild(o,n);var n=e.createElement("ul");e.setAttribute(n,"class","filters");var d=e.createTextNode("\n          ");e.appendChild(n,d);var d=e.createElement("li"),a=e.createTextNode(" ");e.appendChild(d,a);var a=e.createComment("");e.appendChild(d,a);var a=e.createTextNode(" ");e.appendChild(d,a),e.appendChild(n,d);var d=e.createTextNode("\n          ");e.appendChild(n,d);var d=e.createElement("li"),a=e.createTextNode(" ");e.appendChild(d,a);var a=e.createComment("");e.appendChild(d,a);var a=e.createTextNode(" ");e.appendChild(d,a),e.appendChild(n,d);var d=e.createTextNode("\n          ");e.appendChild(n,d);var d=e.createElement("li"),a=e.createTextNode(" ");e.appendChild(d,a);var a=e.createComment("");e.appendChild(d,a);var a=e.createTextNode(" ");e.appendChild(d,a),e.appendChild(n,d);var d=e.createTextNode("\n        ");e.appendChild(n,d),e.appendChild(o,n);var n=e.createTextNode("\n\n");e.appendChild(o,n);var n=e.createComment("");e.appendChild(o,n);var n=e.createTextNode("      ");e.appendChild(o,n),e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n\n    ");e.appendChild(t,r);var r=e.createElement("footer");e.setAttribute(r,"class","info");var o=e.createTextNode("\n      ");e.appendChild(r,o);var o=e.createElement("p"),n=e.createTextNode("Double-click to edit a todo");e.appendChild(o,n),e.appendChild(r,o);var o=e.createTextNode("\n      ");e.appendChild(r,o);var o=e.createElement("p"),n=e.createTextNode("Created by ");e.appendChild(o,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/jkusa");var d=e.createTextNode("@jkusa");e.appendChild(n,d),e.appendChild(o,n),e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n  ");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=e.childAt(t,[1]),n=e.childAt(o,[3]),d=e.childAt(n,[3]);this.cachedFragment&&e.repairClonedNode(d,[],!0);var a=e.childAt(o,[5]),l=e.childAt(a,[1]),i=e.childAt(a,[3]),u=new Array(10);return u[0]=e.createMorphAt(e.childAt(o,[1]),3,3),u[1]=e.createMorphAt(n,1,1),u[2]=e.createAttrMorph(d,"checked"),u[3]=e.createAttrMorph(d,"onchange"),u[4]=e.createMorphAt(e.childAt(l,[1]),0,0),u[5]=e.createMorphAt(l,3,3),u[6]=e.createMorphAt(e.childAt(i,[1]),1,1),u[7]=e.createMorphAt(e.childAt(i,[3]),1,1),u[8]=e.createMorphAt(e.childAt(i,[5]),1,1),u[9]=e.createMorphAt(a,5,5),u},statements:[["inline","input",[],["type","text","class","new-todo","placeholder","What needs to be done?","value",["subexpr","get-state",["title"],[],["loc",[null,[9,16],[9,35]]]],"enter",["subexpr","dispatch",["ADD_TODO"],["title",["get","value",["loc",[null,[10,43],[10,48]]]]],["loc",[null,[10,16],[10,49]]]]],["loc",[null,[5,8],[11,10]]]],["inline","todos-list",[],["todos",["subexpr","@mut",[["get","filtered",["loc",[null,[15,27],[15,35]]]]],[],[]],"class","todo-list"],["loc",[null,[15,8],[15,55]]]],["attribute","checked",["get","allAreDone",["loc",[null,[19,26],[19,36]]]]],["attribute","onchange",["subexpr","dispatch",["TOGGLE_ALL_TODOS"],[],["loc",[null,[20,25],[20,56]]]]],["content","active.length",["loc",[null,[25,18],[25,35]]]],["content","inflection",["loc",[null,[25,45],[25,59]]]],["inline","link-to",["All","index",["subexpr","query-params",[],["state","all"],["loc",[null,[29,45],[29,71]]]]],["activeClass","selected"],["loc",[null,[29,15],[29,102]]]],["inline","link-to",["Active","index",["subexpr","query-params",[],["state","active"],["loc",[null,[30,45],[30,74]]]]],["activeClass","selected"],["loc",[null,[30,15],[30,102]]]],["inline","link-to",["Completed","index",["subexpr","query-params",[],["state","completed"],["loc",[null,[31,45],[31,77]]]]],["activeClass","selected"],["loc",[null,[31,15],[31,102]]]],["block","if",[["get","completed",["loc",[null,[34,14],[34,23]]]]],[],0,null,["loc",[null,[34,8],[38,15]]]]],locals:[],templates:[e]}}())})}),define("todo-ember-redux/controllers/application",["exports","ember"],function(e,t){var r=t["default"].get;e["default"]=t["default"].Controller.extend({redux:t["default"].inject.service(),queryParams:["state"],state:"all",stateDidUpdate:t["default"].observer("state",function(){r(this,"redux").dispatch({type:"SET_FILTER",filter:r(this,"state")})})})}),define("todo-ember-redux/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("todo-ember-redux/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("todo-ember-redux/enhancers/index",["exports"],function(e){e["default"]=window.devToolsExtension?window.devToolsExtension():function(e){return e}}),define("todo-ember-redux/helpers/append",["exports","ember-composable-helpers/helpers/append"],function(e,t){e["default"]=t["default"],e.append=t.append}),define("todo-ember-redux/helpers/array",["exports","ember-composable-helpers/helpers/array"],function(e,t){e["default"]=t["default"],e.array=t.array}),define("todo-ember-redux/helpers/camelize",["exports","ember-composable-helpers/helpers/camelize"],function(e,t){e["default"]=t["default"],e.camelize=t.camelize}),define("todo-ember-redux/helpers/capitalize",["exports","ember-composable-helpers/helpers/capitalize"],function(e,t){e["default"]=t["default"],e.capitalize=t.capitalize}),define("todo-ember-redux/helpers/chunk",["exports","ember-composable-helpers/helpers/chunk"],function(e,t){e["default"]=t["default"],e.chunk=t.chunk}),define("todo-ember-redux/helpers/classify",["exports","ember-composable-helpers/helpers/classify"],function(e,t){e["default"]=t["default"],e.classify=t.classify}),define("todo-ember-redux/helpers/compact",["exports","ember-composable-helpers/helpers/compact"],function(e,t){e["default"]=t["default"],e.compact=t.compact}),define("todo-ember-redux/helpers/compute",["exports","ember-composable-helpers/helpers/compute"],function(e,t){e["default"]=t["default"],e.compute=t.compute}),define("todo-ember-redux/helpers/contains",["exports","ember-composable-helpers/helpers/contains"],function(e,t){e["default"]=t["default"],e.contains=t.contains}),define("todo-ember-redux/helpers/dasherize",["exports","ember-composable-helpers/helpers/dasherize"],function(e,t){e["default"]=t["default"],e.dasherize=t.dasherize}),define("todo-ember-redux/helpers/dec",["exports","ember-composable-helpers/helpers/dec"],function(e,t){e["default"]=t["default"],e.dec=t.dec}),define("todo-ember-redux/helpers/dispatch",["exports","ember-redux-helpers/helpers/dispatch"],function(e,t){e["default"]=t["default"],e.dispatch=t.dispatch}),define("todo-ember-redux/helpers/drop",["exports","ember-composable-helpers/helpers/drop"],function(e,t){e["default"]=t["default"],e.drop=t.drop}),define("todo-ember-redux/helpers/filter-by",["exports","ember-composable-helpers/helpers/filter-by"],function(e,t){e["default"]=t["default"],e.filterBy=t.filterBy}),define("todo-ember-redux/helpers/find-by",["exports","ember-composable-helpers/helpers/find-by"],function(e,t){e["default"]=t["default"],e.findBy=t.findBy}),define("todo-ember-redux/helpers/get-state",["exports","ember-redux-helpers/helpers/get-state"],function(e,t){e["default"]=t["default"],e.getState=t.getState}),define("todo-ember-redux/helpers/group-by",["exports","ember-composable-helpers/helpers/group-by"],function(e,t){e["default"]=t["default"],e.groupBy=t.groupBy}),define("todo-ember-redux/helpers/inc",["exports","ember-composable-helpers/helpers/inc"],function(e,t){e["default"]=t["default"],e.inc=t.inc}),define("todo-ember-redux/helpers/intersect",["exports","ember-composable-helpers/helpers/intersect"],function(e,t){e["default"]=t["default"],e.intersect=t.intersect}),define("todo-ember-redux/helpers/invoke",["exports","ember-composable-helpers/helpers/invoke"],function(e,t){e["default"]=t["default"],e.invoke=t.invoke}),define("todo-ember-redux/helpers/join",["exports","ember-composable-helpers/helpers/join"],function(e,t){e["default"]=t["default"],e.join=t.join}),define("todo-ember-redux/helpers/map-by",["exports","ember-composable-helpers/helpers/map-by"],function(e,t){e["default"]=t["default"],e.mapBy=t.mapBy}),define("todo-ember-redux/helpers/moment-calendar",["exports","ember","todo-ember-redux/config/environment","ember-moment/helpers/moment-calendar"],function(e,t,r,o){e["default"]=o["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("todo-ember-redux/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/helpers/moment-format",["exports","ember","todo-ember-redux/config/environment","ember-moment/helpers/moment-format"],function(e,t,r,o){e["default"]=o["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("todo-ember-redux/helpers/moment-from-now",["exports","ember","todo-ember-redux/config/environment","ember-moment/helpers/moment-from-now"],function(e,t,r,o){e["default"]=o["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("todo-ember-redux/helpers/moment-to-now",["exports","ember","todo-ember-redux/config/environment","ember-moment/helpers/moment-to-now"],function(e,t,r,o){e["default"]=o["default"].extend({globalAllowEmpty:!!t["default"].get(r["default"],"moment.allowEmpty")})}),define("todo-ember-redux/helpers/now",["exports","ember-moment/helpers/now"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/helpers/pipe-action",["exports","ember-composable-helpers/helpers/pipe-action"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/helpers/pipe",["exports","ember-composable-helpers/helpers/pipe"],function(e,t){e["default"]=t["default"],e.pipe=t.pipe}),define("todo-ember-redux/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/helpers/range",["exports","ember-composable-helpers/helpers/range"],function(e,t){e["default"]=t["default"],e.range=t.range}),define("todo-ember-redux/helpers/reject-by",["exports","ember-composable-helpers/helpers/reject-by"],function(e,t){e["default"]=t["default"],e.rejectBy=t.rejectBy}),define("todo-ember-redux/helpers/repeat",["exports","ember-composable-helpers/helpers/repeat"],function(e,t){e["default"]=t["default"],e.repeat=t.repeat}),define("todo-ember-redux/helpers/reverse",["exports","ember-composable-helpers/helpers/reverse"],function(e,t){e["default"]=t["default"],e.reverse=t.reverse}),define("todo-ember-redux/helpers/shuffle",["exports","ember-composable-helpers/helpers/shuffle"],function(e,t){e["default"]=t["default"],e.shuffle=t.shuffle}),define("todo-ember-redux/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/helpers/sort-by",["exports","ember-composable-helpers/helpers/sort-by"],function(e,t){e["default"]=t["default"],e.sortBy=t.sortBy}),define("todo-ember-redux/helpers/take",["exports","ember-composable-helpers/helpers/take"],function(e,t){e["default"]=t["default"],e.take=t.take}),define("todo-ember-redux/helpers/toggle-action",["exports","ember-composable-helpers/helpers/toggle-action"],function(e,t){e["default"]=t["default"]}),define("todo-ember-redux/helpers/toggle",["exports","ember-composable-helpers/helpers/toggle"],function(e,t){e["default"]=t["default"],e.toggle=t.toggle}),define("todo-ember-redux/helpers/truncate",["exports","ember-composable-helpers/helpers/truncate"],function(e,t){e["default"]=t["default"],e.truncate=t.truncate}),define("todo-ember-redux/helpers/underscore",["exports","ember-composable-helpers/helpers/underscore"],function(e,t){e["default"]=t["default"],e.underscore=t.underscore}),define("todo-ember-redux/helpers/union",["exports","ember-composable-helpers/helpers/union"],function(e,t){e["default"]=t["default"],e.union=t.union}),define("todo-ember-redux/helpers/w",["exports","ember-composable-helpers/helpers/w"],function(e,t){e["default"]=t["default"],e.w=t.w}),define("todo-ember-redux/helpers/without",["exports","ember-composable-helpers/helpers/without"],function(e,t){e["default"]=t["default"],e.without=t.without}),define("todo-ember-redux/index",["exports","ember-uuid"],function(e,t){e.v4=t.v4,e.v1=t.v1,e.parse=t.parse,e.unparse=t.unparse}),define("todo-ember-redux/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","todo-ember-redux/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:t["default"](r["default"].APP.name,r["default"].APP.version)}}),define("todo-ember-redux/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("todo-ember-redux/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("todo-ember-redux/initializers/export-application-global",["exports","ember","todo-ember-redux/config/environment"],function(e,t,r){function o(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var o,n=r["default"].exportApplicationGlobal;o="string"==typeof n?n:t["default"].String.classify(r["default"].modulePrefix),window[o]||(window[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[o]}}))}}e.initialize=o,e["default"]={name:"export-application-global",initialize:o}}),define("todo-ember-redux/initializers/inject-store",["exports","todo-ember-redux/reducers/todos"],function(e,t){function r(e){t.container.store=e.__container__.lookup("service:store")}e.initialize=r,e["default"]={after:"ember-data",name:"inject-store",initialize:r}}),define("todo-ember-redux/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("todo-ember-redux/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("todo-ember-redux/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("todo-ember-redux/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("todo-ember-redux/middleware/index",["exports","npm:redux-thunk"],function(e,t){var r=t["default"]["default"]?t["default"]["default"]:t["default"];e["default"]=[r]}),define("todo-ember-redux/models/todo",["exports","ember-data","ember-uuid"],function(e,t,r){var o=t["default"].attr,n=t["default"].Model.extend({title:o("string"),isCompleted:o("boolean",{defaultValue:!1})});e["default"]=n.reopenClass({FIXTURES:[{id:r.v4(),title:"install ember-redux",isCompleted:!0},{id:r.v4(),title:"install ember-redux-helpers",isCompleted:!0},{id:r.v4(),title:"be awesome",isCompleted:!1}]})}),define("todo-ember-redux/reducers/edit",["exports"],function(e){function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e["default"]=function(e,r){if(void 0===e&&(e={}),"EDIT_TODO"===r.type){var o=r.todo.id;e=Object.assign({},e,t({},o,!0))}if("UPDATE_TODO"===r.type){var o=r.todo.id;e=Object.assign({},e,t({},o,!1))}return e}}),define("todo-ember-redux/reducers/filter",["exports"],function(e){e["default"]=function(e,t){return void 0===e&&(e=null),"SET_FILTER"===t.type&&(e=t.filter),e}}),define("todo-ember-redux/reducers/index",["exports","todo-ember-redux/reducers/todos","todo-ember-redux/reducers/input","todo-ember-redux/reducers/edit","todo-ember-redux/reducers/filter"],function(e,t,r,o,n){e["default"]={todos:t["default"],input:r["default"],edit:o["default"],filter:n["default"]}}),define("todo-ember-redux/reducers/input",["exports"],function(e){e["default"]=function(e,t){return void 0===e&&(e=""),"ADD_TODO"===t.type&&(e=""),e}}),define("todo-ember-redux/reducers/optional",["exports"],function(e){e["default"]=function(e){return function(t,r){return e(t,r)}}}),define("todo-ember-redux/reducers/todos",["exports","ember","ember-uuid"],function(e,t,r){function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t,r,n){var a=d.store.peekRecord("todo",t.id);return a.set(r,n),a.save(),[].concat(o(e.rejectBy("id",t.id)),[a.toJSON({includeId:!0})])}var d={};e["default"]=function(e,a){if(void 0===e&&(e=[]),"ADD_TODO"===a.type){var l=a.invocationArgs;a.title&&!a.title.trim()&&(e=e);var i=d.store.createRecord("todo",{title:l,id:r.v4()});i.save(),e=[].concat(o(e),[i.toJSON({includeId:!0})])}if("REMOVE_TODO"===a.type){var u=d.store.peekRecord("todo",a.todo.id);u.destroyRecord(),u.save(),e=[].concat(o(e)).removeObject(a.todo)}if("SET_TODOS"===a.type&&(e=[].concat(o(a.todos))),"UPDATE_TODO"===a.type){var p=a.todo,s=a.field,c=a.invocationArgs;e=n(e,p,s,c[0])}if("TOGGLE_TODO"===a.type){var p=a.todo,c=a.invocationArgs;e=n(e,p,"isCompleted",c[0].target.checked)}if("CLEAR_COMPLETED_TODOS"===a.type){var m=d.store.peekAll("todo").toArray(),f=m.filterBy("isCompleted");f.invoke("destroyRecord"),f.invoke("save"),e=d.store.peekAll("todo").toArray().filterBy("isDeleted",!1).map(function(e){return e.toJSON({includeId:!0})})}if("TOGGLE_ALL_TODOS"===a.type){var m=d.store.peekAll("todo").toArray(),h=m.filterBy("isCompleted",!1);h.length?(h.setEach("isCompleted",!0),h.invoke("save")):(m.setEach("isCompleted",!1),m.invoke("save")),e=d.store.peekAll("todo").toArray().map(function(e){return e.toJSON({includeId:!0})})}return t["default"].A(e)},e.container=d}),define("todo-ember-redux/router",["exports","ember","todo-ember-redux/config/environment"],function(e,t,r){var o=t["default"].Router.extend({location:r["default"].locationType});o.map(function(){}),e["default"]=o}),define("todo-ember-redux/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({redux:t["default"].inject.service(),model:function(){var e=this;return this.store.findAll("todo").then(function(t){e.get("redux").dispatch({type:"SET_TODOS",todos:t.toArray().map(function(e){return e.toJSON({includeId:!0})})})})}})}),define("todo-ember-redux/services/moment",["exports","ember","todo-ember-redux/config/environment","ember-moment/services/moment"],function(e,t,r,o){e["default"]=o["default"].extend({defaultFormat:t["default"].get(r["default"],"moment.outputFormat")})}),define("todo-ember-redux/services/redux",["exports","ember","npm:redux","todo-ember-redux/reducers/index","todo-ember-redux/enhancers/index","todo-ember-redux/reducers/optional","todo-ember-redux/middleware/index"],function(e,t,r,o,n,d,a){function l(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var i=r["default"].createStore,u=r["default"].applyMiddleware,p=r["default"].combineReducers,s=r["default"].compose,c=s(u.apply(void 0,l(a["default"])),n["default"])(i);e["default"]=t["default"].Service.extend({init:function(){this.store=c(d["default"](p(o["default"]))),this._super.apply(this,arguments)},getState:function(){return this.store.getState()},dispatch:function(e){return this.store.dispatch(e)},subscribe:function(e){return this.store.subscribe(e)}})}),define("todo-ember-redux/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.5.1",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"todo-ember-redux/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var o=new Array(1);return o[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),o},statements:[["inline","todos-route",[],["todos",["subexpr","get-state",["todos"],[],["loc",[null,[2,8],[2,27]]]],"filter",["subexpr","get-state",["filter"],[],["loc",[null,[3,9],[3,29]]]]],["loc",[null,[1,0],[4,2]]]]],locals:[],templates:[]}}())}),define("todo-ember-redux/utils/uuid-generator",["exports","ember-uuid/utils/uuid-generator"],function(e,t){e["default"]=t["default"],e.v4=t.v4,e.v1=t.v1,e.parse=t.parse,e.unparse=t.unparse}),define("todo-ember-redux/config/environment",["ember"],function(e){var t="todo-ember-redux";try{var r=t+"/config/environment",o=e["default"].$('meta[name="'+r+'"]').attr("content"),n=JSON.parse(unescape(o));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests?require("todo-ember-redux/tests/test-helper"):require("todo-ember-redux/app")["default"].create({name:"todo-ember-redux",version:"0.0.1+483ef997"});