/*! For license information please see f1bed9bd.9b716284.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[107644],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},966449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(827378);var a=n(603905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"configuring-plugin-databases",title:"Configuring Plugin Databases",description:"Guide on how to configure Backstage databases."},l=void 0,c={unversionedId:"tutorials/configuring-plugin-databases",id:"tutorials/configuring-plugin-databases",title:"Configuring Plugin Databases",description:"Guide on how to configure Backstage databases.",source:"@site/../docs/tutorials/configuring-plugin-databases.md",sourceDirName:"tutorials",slug:"/tutorials/configuring-plugin-databases",permalink:"/docs/tutorials/configuring-plugin-databases",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/configuring-plugin-databases.md",tags:[],version:"current",frontMatter:{id:"configuring-plugin-databases",title:"Configuring Plugin Databases",description:"Guide on how to configure Backstage databases."},sidebar:"docs",previous:{title:"Migrating away from @backstage/core",permalink:"/docs/tutorials/migrating-away-from-core"},next:{title:"Switching Backstage from SQLite to PostgreSQL",permalink:"/docs/tutorials/switching-sqlite-postgres"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Minimal In-Memory Configuration",id:"minimal-in-memory-configuration",level:3},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Custom Database Name Prefix",id:"custom-database-name-prefix",level:3},{value:"Connection Configuration Per Plugin",id:"connection-configuration-per-plugin",level:3},{value:"PostgreSQL and SQLite 3",id:"postgresql-and-sqlite-3",level:3},{value:"Check Your Databases",id:"check-your-databases",level:2},{value:"Privileges",id:"privileges",level:3}],d={toc:p};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide covers a variety of production persistence use cases which are\nsupported out of the box by Backstage. The database manager allows the developer\nto set the client and database connection details on a per plugin basis in\naddition to the base client and connection configuration. This means that you\ncan use a SQLite 3 in-memory database for a specific plugin whilst using\nPostgreSQL for everything else and so on."),(0,a.kt)("p",null,"By default, Backstage uses automatically created databases for each plugin whose\nnames follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage_plugin_<pluginId>")," pattern, e.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"backstage_plugin_auth"),". You can configure a different database name prefix for\nuse cases where you have multiple deployments running on a shared database\ninstance or cluster."),(0,a.kt)("p",null,"With infrastructure defined as code or data (Terraform, AWS CloudFormation,\netc.), you may have database credentials which lack permissions to create new\ndatabases or you do not have control over the database names. In these\ninstances, you can set the database connection configuration on a\n",(0,a.kt)("a",{parentName:"p",href:"#connection-configuration-per-plugin"},"per plugin basis"),"."),(0,a.kt)("p",null,"Backstage supports all of these use cases with the ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseManager")," provided by\n",(0,a.kt)("inlineCode",{parentName:"p"},"@backstage/backend-common"),". We will now cover how to use and configure\nBackstage's databases."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Please ensure the appropriate database drivers are installed in your ",(0,a.kt)("inlineCode",{parentName:"p"},"backend"),"\npackage. If you intend to use both PostgreSQL and SQLite, you can install\nboth of them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# From your Backstage root directory\n# install pg if you need PostgreSQL\nyarn add --cwd packages/backend pg\n\n# install SQLite 3 if you intend to set it as the client\nyarn add --cwd packages/backend better-sqlite3\n")),(0,a.kt)("p",null,"From an operational perspective, you only need to install drivers for clients\nthat are actively used."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You should set the base database client and connection information in your\n",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," (or equivalent) file. The base client and configuration is\nused as the default which is extended for each plugin with the same or unset\nclient type. If a client type is specified for a specific plugin which does not\nmatch the base client, the configuration set for the plugin will be used as is\nwithout extending the base configuration."),(0,a.kt)("p",null,"Client type and configuration for plugins need to be defined under\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"backend.database.plugin.<pluginId>")),". As an example, ",(0,a.kt)("inlineCode",{parentName:"p"},"catalog")," is the\n",(0,a.kt)("inlineCode",{parentName:"p"},"pluginId")," for the catalog plugin and any configuration defined under that block\nis specific to that plugin. We will now explore more detailed example\nconfigurations below."),(0,a.kt)("h3",{id:"minimal-in-memory-configuration"},"Minimal In-Memory Configuration"),(0,a.kt)("p",null,"In the example below, we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"better-sqlite3")," in-memory databases for all\nplugins. You may want to use this configuration for testing or other non-durable\nuse cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"backend:\n  database:\n    client: better-sqlite3\n    connection: ':memory:'\n")),(0,a.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,a.kt)("p",null,"The example below uses PostgreSQL (",(0,a.kt)("inlineCode",{parentName:"p"},"pg"),") as the database client for all plugins.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," plugin uses a user defined database name instead of the automatically\ngenerated one which would have been ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage_plugin_auth"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"backend:\n  database:\n    client: pg\n    connection:\n      host: some.example-pg-instance.tld\n      user: postgres\n      password: password\n      port: 5432\n    plugin:\n      auth:\n        connection:\n          database: pg_auth_set_by_user\n")),(0,a.kt)("h3",{id:"custom-database-name-prefix"},"Custom Database Name Prefix"),(0,a.kt)("p",null,"The configuration below uses ",(0,a.kt)("inlineCode",{parentName:"p"},"example_prefix_")," as the database name prefix\ninstead of ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage_plugin_"),". Plugins such as ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"catalog")," will use\ndatabases named ",(0,a.kt)("inlineCode",{parentName:"p"},"example_prefix_auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"example_prefix_catalog")," respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"backend:\n  database:\n    client: pg\n    connection:\n      host: some.example-pg-instance.tld\n      user: postgres\n      password: password\n      port: 5432\n    prefix: 'example_prefix_'\n")),(0,a.kt)("h3",{id:"connection-configuration-per-plugin"},"Connection Configuration Per Plugin"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"catalog")," use connection configuration with different\ncredentials and database names. This type of configuration can be useful for\nenvironments with infrastructure as code or data which may provide randomly\ngenerated credentials and/or database names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"backend:\n  database:\n    client: pg\n    connection: 'postgresql://some.example-pg-instance.tld:5432'\n    plugin:\n      auth:\n        connection: 'postgresql://fort:knox@some.example-pg-instance.tld:5432/unwitting_fox_jumps'\n      catalog:\n        connection: 'postgresql://bank:reserve@some.example-pg-instance.tld:5432/shuffle_ransack_playback'\n")),(0,a.kt)("h3",{id:"postgresql-and-sqlite-3"},"PostgreSQL and SQLite 3"),(0,a.kt)("p",null,"The example below uses PostgreSQL (",(0,a.kt)("inlineCode",{parentName:"p"},"pg"),") as the database client for all plugins\nexcept the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," plugin which uses ",(0,a.kt)("inlineCode",{parentName:"p"},"better-sqlite3"),". As the ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," plugin's client\ntype is different from the base client type, the connection configuration for\n",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," is used verbatim without extending the base configuration for PostgreSQL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"backend:\n  database:\n    client: pg\n    connection: 'postgresql://foo:bar@some.example-pg-instance.tld:5432'\n    plugin:\n      auth:\n        client: better-sqlite3\n        connection: ':memory:'\n")),(0,a.kt)("h2",{id:"check-your-databases"},"Check Your Databases"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseManager")," will attempt to create the databases if they do not exist.\nIf you have set credentials per plugin because the credentials in the base\nconfiguration do not have permissions to create databases, you must ensure they\nexist before starting the service. The service will not be able to create them,\nit can only use them."),(0,a.kt)("h3",{id:"privileges"},"Privileges"),(0,a.kt)("p",null,"As Backstage attempts to check if the database exists, you may need to grant\nprivileges to list or show databases for a given user. For PostgreSQL, you would\ngrant the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-postgres"},"GRANT SELECT ON pg_database TO some_user;\n")),(0,a.kt)("p",null,"MySQL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"GRANT SHOW DATABASES ON *.* TO some_user;\n")),(0,a.kt)("p",null,"The mechanisms in this guide should help you tackle different database\ndeployment situations. Good luck!"))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var i,s,l=r(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)a.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,n)=>{var a=n(862525),r=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;r=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function h(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var k=y.prototype=new h;k.constructor=y,a(k,b.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return i=i(l=e),e=""===a?"."+N(l,0):a,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+N(s=e[c],c);l+=x(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=x(s=s.value,t,n,u=a+N(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var a=[],r=0;return x(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var q={current:null};function T(){var e=q.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);