/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","@emotion/css"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"e",(function(){return p}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function u(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}l((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}Object.create;function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function s(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||t)}function p(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}Object.create},function(e,n){e.exports=t},,function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},,,,,,function(e,t,n){"use strict";n.r(t);var r,a,o=n(4),i=n(1),u=n(0),l=n.n(u),c=n(5),s=n(2),p=function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={timeRange:t.getTimeRange(n.props.timeRange,n.props.timeZone)},n}return Object(i.c)(t,e),t.getGraphDataFrame=function(e,t){return Object.entries(e).reduce((function(e,n,r){var a=Object(i.f)(n,2),u=a[0],l=a[1].reduce((function(e,n){var r=n.time,a=n.value,o=e.shouldBeHidden;return o&&t&&(o=0===a),{times:e.times.concat([r]),values:e.values.concat([a]),shouldBeHidden:o}}),{times:[],values:[],shouldBeHidden:t}),p=l.times,f=l.values;if(l.shouldBeHidden)return e;var d=s.colors[r%s.colors.length],m=Object(o.toDataFrame)({name:u,fields:[{type:o.FieldType.time,name:"time",values:p},{type:o.FieldType.number,name:" ",values:f,config:{unit:"µs",color:{fixedColor:d,mode:o.FieldColorModeId.Fixed}}}]});m.fields=m.fields.map((function(e){return Object(i.a)(Object(i.a)({},e),{display:Object(o.getDisplayProcessor)({field:e,theme:c.config.theme2})})}));for(var h=[],v=0;v<p.length;v++)h.push([p[v].valueOf(),f[v]]);return e.concat(m)}),[])},t.getTimeRange=function(e,t){var n=Object(o.dateTimeParse)(e.raw.from,{timeZone:t}),r=Object(o.dateTimeParse)(e.raw.to,{timeZone:t});return{from:n,to:r,raw:{from:e.raw.from,to:r}}},t.getDerivedStateFromProps=function(e){return{timeRange:t.getTimeRange(e.timeRange,e.timeZone)}},t.prototype.render=function(){var e=this,n=this.props,r=n.width,a=n.height,o=n.seriesMap,i=n.options,u=this.state.timeRange,c=t.getGraphDataFrame(o,i.hideZero);return c.length?l.a.createElement(s.TimeSeries,{frames:c,width:r,height:a,timeRange:u,legend:{displayMode:s.LegendDisplayMode.List,placement:"bottom",calcs:[]},timeZone:this.props.timeZone},(function(t,n){return l.a.createElement(s.TooltipPlugin,{config:t,data:n,mode:s.TooltipDisplayMode.Multi,timeZone:e.props.timeZone})})):l.a.createElement("div",null,"Gathering latency data...")},t}(u.PureComponent);!function(e){e.Command="Command",e.Calls="Calls",e.Duration="Usec",e.DurationPerCall="Usec_per_call",e.Latency="Latency"}(a||(a={}));var f,d=((r={})[a.Command]="Command",r[a.Calls]="Number of calls",r[a.Duration]="Total Duration",r[a.DurationPerCall]="Duration per call",r[a.Latency]="Latency",r);!function(e){e.Table="Table",e.Graph="Graph"}(f||(f={}));var m,h,v=[{label:"Table",value:f.Table},{label:"Graph",value:f.Graph}],b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={sortedFields:[{displayName:d[a.Latency],desc:!0}]},t.onChangeSort=function(e){t.setState({sortedFields:e})},t}return Object(i.c)(t,e),t.getTableDataFrame=function(e,t){var n,r=e.fields.find((function(e){return e.name===a.Command})),u=((null==r?void 0:r.values.toArray())||[]).map((function(e){var n=t[e];return n?n[n.length-1].value:0})),l=Object(i.h)(Object(i.h)([],Object(i.f)(e.fields.map((function(e){return Object(i.a)(Object(i.a)({},e),{config:Object(i.a)(Object(i.a)({},(null==e?void 0:e.config)||{}),{displayName:d[e.name]})})})))),[{name:a.Latency,type:o.FieldType.number,values:u,config:Object(i.a)(Object(i.a)({},(null===(n=e.fields.find((function(e){return e.name===a.Duration})))||void 0===n?void 0:n.config)||{}),{displayName:d[a.Latency]})}]),s=Object(o.toDataFrame)({name:"TableDataFrame",fields:l});return s.fields=s.fields.map((function(e){return Object(i.a)(Object(i.a)({},e),{display:Object(o.getDisplayProcessor)({field:e,theme:c.config.theme2})})})),s},t.prototype.render=function(){var e=this.props,n=e.width,r=e.height,a=e.dataFrame,o=e.seriesMap,i=this.state.sortedFields;return l.a.createElement(s.Table,{data:t.getTableDataFrame(a,o),initialSortBy:i,width:n,height:r,onSortByChange:this.onChangeSort})},t}(u.PureComponent),y=n(6),g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={seriesMap:{},formHeight:0},t.formRef=Object(u.createRef)(),t.onChangeViewMode=function(e){if(void 0!==e){var n=t.props,r=n.onOptionsChange,a=n.options;r(Object(i.a)(Object(i.a)({},a),{viewMode:e}))}},t.onChangeHideZero=function(e){var n=t.props,r=n.onOptionsChange,a=n.options;r(Object(i.a)(Object(i.a)({},a),{hideZero:e.target.checked}))},t}return Object(i.c)(t,e),t.getLatencyValue=function(e){var t=e.duration,n=e.prevDuration,r=e.calls,a=e.prevCalls;if(void 0===n||void 0===a)return t/r;var o=t-n,i=r-a;return i<=0||o<0?0:o/i},t.getValuesForCalculation=function(e){var t=e.fields.find((function(e){return e.name===a.Calls})),n=e.fields.find((function(e){return e.name===a.Duration})),r={calls:[],duration:[]};return t&&(r.calls=t.values.toArray().map((function(e){return e}))),n&&(r.duration=n.values.toArray().map((function(e){return e}))),r},t.getLatencyValues=function(e,n,r){for(var a=[],o=0;o<r;o++){var i=e.duration[o],u=n.duration[o],l=e.calls[o],c=n.calls[o];a.push(t.getLatencyValue({prevDuration:i,duration:u,prevCalls:l,calls:c}))}return a},t.getSeriesMap=function(e,t,n,r,o){void 0===o&&(o=1e3);var u=t.fields.find((function(e){return e.name===a.Command})),l=(null==u?void 0:u.values.toArray())||[],c=Object(i.a)({},e);return l.forEach((function(e,t){var a={time:r,value:n[t]};c[e]?c[e].length+1>o?c[e]=Object(i.h)(Object(i.h)([],Object(i.f)(c[e].slice(1,c[e].length))),[a]):c[e]=c[e].concat(a):c[e]=[a]})),c},t.prototype.componentDidMount=function(){this.updateData(),void 0!==this.props.options.interval&&this.setRequestDataInterval(),this.formRef.current&&this.setState({formHeight:this.formRef.current.getBoundingClientRect().height})},t.prototype.componentDidUpdate=function(e,t){e.options.interval!==this.props.options.interval&&this.setRequestDataInterval(),e.options===this.props.options&&e.width===this.props.width||this.formRef.current&&this.setState({formHeight:this.formRef.current.getBoundingClientRect().height})},t.prototype.componentWillUnmount=function(){this.clearRequestDataInterval()},t.prototype.makeQuery=function(){var e;return Object(i.b)(this,void 0,Promise,(function(){var t,n,r,a;return Object(i.d)(this,(function(o){switch(o.label){case 0:return t=null===(e=this.props.data.request)||void 0===e?void 0:e.targets,n="",t&&t.length&&t[0].datasource&&(n=t[0].datasource),n&&t?[4,Object(c.getDataSourceSrv)().get(n)]:[2,Promise.resolve(null)];case 1:return r=o.sent(),a=t.map((function(e){return Object(i.a)({command:"info",section:"commandstats",type:"command"},e)})),[2,r.query(Object(i.a)(Object(i.a)({},this.props.data.request),{targets:a})).toPromise()]}}))}))},t.prototype.updateData=function(){return Object(i.b)(this,void 0,void 0,(function(){var e,n,r,a,u,l,c,s,p;return Object(i.d)(this,(function(i){switch(i.label){case 0:return[4,this.makeQuery()];case 1:return null===(e=i.sent())?[2,Promise.resolve()]:(n=this.state,r=n.dataFrame,a=n.seriesMap,(u=e.data[0])?(l=t.getLatencyValues(t.getValuesForCalculation(r||u),t.getValuesForCalculation(u),u.length),c=Object(o.dateTime)(),s=this.props.options.maxItemsPerSeries||300,p=t.getSeriesMap(a,u,l,c,s),this.setState({dataFrame:u,seriesMap:p}),[2]):[2,Promise.resolve()])}}))}))},t.prototype.setRequestDataInterval=function(){var e=this;void 0!==this.requestDataTimer&&this.clearRequestDataInterval(),this.requestDataTimer=setInterval((function(){e.updateData()}),this.props.options.interval||1e3)},t.prototype.clearRequestDataInterval=function(){void 0!==this.requestDataTimer&&(clearTimeout(this.requestDataTimer),delete this.requestDataTimer)},t.prototype.render=function(){var e=this.props,t=e.options,n=e.height,r=this.state,a=r.dataFrame,o=r.seriesMap,u=null,c=n-r.formHeight;return a&&(t.viewMode===f.Table&&(u=l.a.createElement(b,Object(i.a)({},this.props,{height:c,dataFrame:a,seriesMap:o}))),t.viewMode===f.Graph&&(u=l.a.createElement(p,Object(i.a)({},this.props,{height:c,seriesMap:o})))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"gf-form-inline",style:{paddingBottom:12},ref:this.formRef},l.a.createElement(s.RadioButtonGroup,{value:t.viewMode,options:v,onChange:this.onChangeViewMode}),t.viewMode===f.Graph&&l.a.createElement("div",{className:Object(y.css)(m||(m=Object(i.e)(["\n                display: flex;\n                align-items: center;\n                margin: 4px 0 4px 8px;\n              "],["\n                display: flex;\n                align-items: center;\n                margin: 4px 0 4px 8px;\n              "])))},l.a.createElement(s.Switch,{css:"",value:t.hideZero,onChange:this.onChangeHideZero}),l.a.createElement(s.Label,{className:Object(y.css)(h||(h=Object(i.e)(["\n                  margin: 0 0 0 4px;\n                "],["\n                  margin: 0 0 0 4px;\n                "])))},"Hide commands which have only zero values"))),l.a.createElement("div",{style:{display:"flex",height:c}},u))},t}(u.PureComponent);n.d(t,"plugin",(function(){return O}));var O=new o.PanelPlugin(g).setPanelOptions((function(e){return e.addNumberInput({path:"interval",name:"Interval to run INFO command, ms",defaultValue:1e3}).addRadio({path:"viewMode",name:"View mode",defaultValue:f.Table,settings:{options:v}}).addNumberInput({path:"maxItemsPerSeries",name:"Number of Samples per command",defaultValue:300}).addBooleanSwitch({path:"hideZero",name:"Hide commands which have only zero values",defaultValue:!0,showIf:function(e){return e.viewMode===f.Graph}})}))}])}));
//# sourceMappingURL=module.js.map