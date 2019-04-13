"use strict"
define("web-miniproject/adapters/application",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default.RESTAdapter.extend({namespace:"api",host:"https://web-miniproject-server.herokuapp.com"})
e.default=i}),define("web-miniproject/app",["exports","web-miniproject/resolver","ember-load-initializers","web-miniproject/config/environment"],function(e,t,i,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,i.default)(r,n.default.modulePrefix)
var a=r
e.default=a}),define("web-miniproject/helpers/app-version",["exports","web-miniproject/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.default.APP.version,a=n.versionOnly||n.hideSha,o=n.shaOnly||n.hideVersion,l=null
return a&&(n.showExtended&&(l=r.match(i.versionExtendedRegExp)),l||(l=r.match(i.versionRegExp))),o&&(l=r.match(i.shaRegExp)),l?l[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var r=Ember.Helper.helper(n)
e.default=r}),define("web-miniproject/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("web-miniproject/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("web-miniproject/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","web-miniproject/config/environment"],function(e,t,i){var n,r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(n=i.default.APP.name,r=i.default.APP.version)
var a={name:"App Version",initialize:(0,t.default)(n,r)}
e.default=a}),define("web-miniproject/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("web-miniproject/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("web-miniproject/initializers/export-application-global",["exports","web-miniproject/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var n,r=t.default.exportApplicationGlobal
n="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),i[n]||(i[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var n={name:"export-application-global",initialize:i}
e.default=n}),define("web-miniproject/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("web-miniproject/models/post",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default.Model.extend({title:t.default.attr("string"),image:t.default.attr("string"),text:t.default.attr("string")})
e.default=i}),define("web-miniproject/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("web-miniproject/router",["exports","web-miniproject/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){})
var n=i
e.default=n}),define("web-miniproject/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.store.findAll("post")}})
e.default=t}),define("web-miniproject/serializers/application",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default.RESTSerializer.extend({primaryKey:"_id",serializeId:function(e){return e.toString()}})
e.default=i}),define("web-miniproject/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("web-miniproject/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Y/9Z8sYC",block:'{"symbols":["post"],"statements":[[0,"Posts! "],[7,"br"],[9],[10],[0,"\\n\\n"],[7,"div"],[11,"class","timeline"],[9],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"\\t\\t"],[7,"div"],[11,"class","postCont"],[9],[0,"\\n\\t\\t\\t"],[7,"p"],[9],[0,"Id: "],[1,[22,1,["id"]],false],[10],[0,"\\n\\t\\t\\t"],[7,"h1"],[9],[1,[22,1,["title"]],false],[10],[0,"\\n\\t\\t\\t\\n\\t\\t\\t"],[1,[22,1,["image"]],false],[0," \\n\\t\\t\\t"],[7,"h3"],[9],[1,[22,1,["text"]],false],[10],[0," "],[7,"br"],[9],[10],[0,"\\n\\t\\t"],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"web-miniproject/templates/application.hbs"}})
e.default=t}),define("web-miniproject/config/environment",[],function(){try{var e="web-miniproject/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("web-miniproject/app").default.create({name:"web-miniproject",version:"0.0.0+2f4f4b7e"})
