(this["webpackJsonpflow-forms"]=this["webpackJsonpflow-forms"]||[]).push([[0],[,,,function(e,t,n){e.exports={logo:"Header_logo__1_msB",logoIcon:"Header_logoIcon__c47Hc",title:"Header_title__2VpMf",headerPanel:"Header_headerPanel__3TNwh",itemsContainer:"Header_itemsContainer__Wdp3U",headerItemLabel:"Header_headerItemLabel__1jLLQ",headerItem:"Header_headerItem__23q8M"}},function(e,t,n){e.exports={sidePanel:"Sidepanel_sidePanel__3a658",sidePanelLabel:"Sidepanel_sidePanelLabel__1ZEtV",sidePanelTextInput:"Sidepanel_sidePanelTextInput__2HnYh",panelBtn:"Sidepanel_panelBtn__3H8fA",deleteBtn:"Sidepanel_deleteBtn__e2VaB Sidepanel_panelBtn__3H8fA",iconBtn:"Sidepanel_iconBtn___qr-z",answerWrapper:"Sidepanel_answerWrapper__2a6EB",answerHeader:"Sidepanel_answerHeader__QkmT8"}},,,function(e,t,n){e.exports={formWrapper:"Form_formWrapper__2N2X-",questionWrapper:"Form_questionWrapper__1qGAg",questionText:"Form_questionText__16sDA",answer:"Form_answer__2uEds",selected:"Form_selected__Q6STM",endWrapper:"Form_endWrapper__1VwxS",endTitle:"Form_endTitle__sS77_",endResult:"Form_endResult__1iDh0"}},,function(e,t,n){e.exports={app:"App_app__1kX79",flowWrapper:"App_flowWrapper__39H7h",fileInput:"App_fileInput__OeFCF",backdrop:"App_backdrop__1J_fz",backdropElementWrapper:"App_backdropElementWrapper__Jj-rr",backdropRemoveBtn:"App_backdropRemoveBtn__2m8Ct",backdropHeader:"App_backdropHeader__28V_f",backdropMain:"App_backdropMain__2R1nr"}},function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,s){function c(e){try{i(a.next(e))}catch(t){s(t)}}function o(e){try{i(a.throw(e))}catch(t){s(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,o)}i((a=a.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,a,r,s,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,a&&(r=2&s[0]?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,a=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){c=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){c.label=s[1];break}if(6===s[0]&&c.label<r[1]){c.label=r[1],r=s;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(s);break}r[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(o){s=[6,o],a=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};t.__esModule=!0;var s=n(5);t.vectorAdd=function(e,t){return{x:e.x+t.x,y:e.y+t.y}},t.parseToGraph=function(e){for(var t=null,n={startId:"",nodeMap:{}},a=0,r=e;a<r.length;a++){var c=r[a];s.isNode(c)&&("input"===c.type?t=c.id:"question"===c.type?n.nodeMap[c.id]={type:"question",question:c.data.question,answers:c.data.answers.map((function(e){return{text:e.text,nextId:null}}))}:"end"===c.type&&(n.nodeMap[c.id]={type:"end",result:c.data.result}))}null===t&&console.log("There is no start node");for(var o=0,i=e;o<i.length;o++){c=i[o];s.isEdge(c)&&(c.source===t?n.startId=c.target:n.nodeMap[c.source].answers[parseInt(c.sourceHandle,10)].nextId=c.target)}return n},t.download=function(e,t,n){var a=document.createElement("a"),r=new Blob([e],{type:n});a.href=URL.createObjectURL(r),a.download=t,a.click()},t.fileToJSON=function(e){return a(this,void 0,void 0,(function(){return r(this,(function(t){return[2,new Promise((function(t,n){var a=new FileReader;a.onload=function(e){return t(JSON.parse(e.target.result))},a.onerror=function(e){return n(e)},a.readAsText(e)}))]}))}))}},function(e,t,n){e.exports={questionNodeWrapper:"Questionnode_questionNodeWrapper__1H-8v",selected:"Questionnode_selected___BzoX",questionWrapper:"Questionnode_questionWrapper__2MD59",questionHandle:"Questionnode_questionHandle__2gcb5",questionNodeText:"Questionnode_questionNodeText__1Z2Rj",answerWrapper:"Questionnode_answerWrapper__M-V40",answerHandle:"Questionnode_answerHandle__2RhsD",answerText:"Questionnode_answerText__2NCQw",answerList:"Questionnode_answerList__1vg8X"}},,,,function(e,t,n){e.exports={wrapper:"Endnode_wrapper__2tmgF",selected:"Endnode_selected__2hW_g",resultText:"Endnode_resultText__DyQCT"}},,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(13),c=n.n(s),o=(n(22),n(21)),i=n(8),d=n.n(i),l=n(19),u=n(6),p=n(5),j=n(9),b=n.n(j),f=n(2);function x(e){var t=e.id,n=e.sourceX,r=e.sourceY,s=e.targetX,c=e.targetY,o=e.sourcePosition,i=e.targetPosition,d=e.style,l=void 0===d?{}:d,j=(e.data,e.arrowHeadType),b=e.markerEndId,x=Object(a.useContext)(M),h=Object(p.getBezierPath)({sourceX:n,sourceY:r,sourcePosition:o,targetX:s,targetY:c,targetPosition:i}),_=Object(p.getMarkerEnd)(j,b),m=Object(p.getEdgeCenter)({sourceX:n,sourceY:r,targetX:s,targetY:c}),v=Object(u.a)(m,2),O=v[0],N=v[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("path",{id:t,style:l,className:"react-flow__edge-path",d:h,markerEnd:_}),Object(f.jsx)("foreignObject",{width:40,height:40,x:O-20,y:N-20,className:"edgebutton-foreignobject",requiredExtensions:"http://www.w3.org/1999/xhtml",children:Object(f.jsx)("button",{className:"edgebutton",onClick:function(e){return function(e,t){e.stopPropagation(),console.log("remove ".concat(t)),x(t)}(e,t)},children:"X"})})]})}var h,_=n(3),m=n.n(_),v=n(12),O=n(23),N=function(e){return Object(f.jsxs)("div",{className:m.a.headerPanel,children:[Object(f.jsxs)("div",{className:m.a.logo,children:[Object(f.jsx)(O.a,{className:m.a.logoIcon}),Object(f.jsx)("input",{onChange:function(t){e.setTitle(t.target.value)},value:e.title,className:m.a.title})]}),Object(f.jsxs)("div",{className:m.a.itemsContainer,children:[Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.createNode(h.Start)},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"Start Node"}),Object(f.jsx)(v.d,{})]}),Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.createNode(h.Question)},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"Question Node"}),Object(f.jsx)(v.e,{})]}),Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.createNode(h.End)},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"End Node"}),Object(f.jsx)(v.c,{})]}),Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.onExport()},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"Export"}),Object(f.jsx)(v.b,{})]}),Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.onSave()},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"Save"}),Object(f.jsx)(v.g,{})]}),Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.onLoadSave()},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"Upload Save"}),Object(f.jsx)(v.a,{})]}),Object(f.jsxs)("div",{className:m.a.headerItem,onClick:function(){return e.onTestForm()},children:[Object(f.jsx)("div",{className:m.a.headerItemLabel,children:"Test Form"}),Object(f.jsx)(v.f,{})]})]})]})},w=n(10),g=n(11),y=n.n(g),k=function(e){var t=Object(a.useContext)(Q),n="".concat(y.a.questionNodeWrapper);t===e.id&&(n="".concat(y.a.questionNodeWrapper," ").concat(y.a.selected));var r=function(t){var n=100/(e.data.answers.length+1);return n*(t+1)+.5*n};return Object(f.jsxs)("div",{className:n,children:[Object(f.jsxs)("div",{className:y.a.questionWrapper,children:[Object(f.jsx)(p.Handle,{style:{position:"absolute"},type:"target",position:p.Position.Left}),Object(f.jsx)("div",{className:y.a.questionNodeText,children:e.data.question})]}),Object(f.jsx)("div",{className:y.a.answerList,children:e.data.answers.map((function(e,t){return Object(f.jsxs)("div",{className:y.a.answerWrapper,children:[Object(f.jsx)("div",{className:y.a.answerText,children:e.text}),Object(f.jsx)(p.Handle,{id:"".concat(t),style:{position:"absolute",top:"".concat(r(t).toString(),"%")},type:"source",position:p.Position.Right})]},t)}))})]})},S=n(17),I=n(4),T=n.n(I),C=function(e){var t;return null==e.nodeData?Object(f.jsx)("div",{className:T.a.sidePanel,children:"Click a node to edit it."}):"question"===e.nodeData.type?Object(f.jsxs)("div",{className:T.a.sidePanel,children:[Object(f.jsx)("div",{className:T.a.sidePanelLabel,children:"Question"}),Object(f.jsx)("textarea",{rows:7,className:T.a.sidePanelTextInput,onChange:function(t){return function(t){var n=e.nodeData;n.data.question=t,e.setNodeData(n)}(t.target.value)},value:e.nodeData.data.question}),(t=e.nodeData.data.answers,t.map((function(t,n){return Object(f.jsxs)("div",{className:T.a.answerWrapper,children:[Object(f.jsxs)("div",{className:T.a.answerHeader,children:[Object(f.jsx)("div",{className:T.a.sidePanelLabel,children:"Answer ".concat(n+1)}),Object(f.jsx)(S.a,{onClick:function(){return function(t){var n=e.nodeData;n.data.answers.splice(t,1),e.setNodeData(n)}(n)},className:T.a.iconBtn})]}),Object(f.jsx)("textarea",{rows:7,className:T.a.sidePanelTextInput,value:t.text,onChange:function(t){return function(t,n){var a=e.nodeData;a.data.answers[n].text=t,e.setNodeData(a)}(t.target.value,n)}})]},n)}))),Object(f.jsx)("button",{onClick:function(){var t=e.nodeData;t.data.answers.push({text:"My answer",nextId:null}),e.setNodeData(t)},className:T.a.panelBtn,children:"Add Answer"}),Object(f.jsx)("button",{onClick:function(t){return e.deleteNode()},className:T.a.deleteBtn,children:"Delete Node"})]}):"end"===e.nodeData.type?Object(f.jsxs)("div",{className:T.a.sidePanel,children:[Object(f.jsx)("div",{className:T.a.sidePanelLabel,children:"Result"}),Object(f.jsx)("textarea",{rows:7,className:T.a.sidePanelTextInput,onChange:function(t){return function(t){var n=e.nodeData;n.data.result=t,e.setNodeData(n)}(t.target.value)},value:e.nodeData.data.result}),Object(f.jsx)("button",{onClick:function(t){return e.deleteNode()},className:T.a.deleteBtn,children:"Delete Node"})]}):"input"===e.nodeData.type?Object(f.jsxs)("div",{className:T.a.sidePanel,children:[Object(f.jsx)("div",{className:T.a.sidePanelLabel,children:"Start node"}),Object(f.jsx)("button",{onClick:function(t){return e.deleteNode()},className:T.a.deleteBtn,children:"Delete Node"})]}):Object(f.jsx)("div",{className:T.a.sidePanel,children:JSON.stringify(e.nodeData,null,1)})},D=n(15),q=n.n(D),P=function(e){var t=Object(a.useContext)(Q),n="".concat(q.a.wrapper);return t===e.id&&(n="".concat(q.a.wrapper," ").concat(q.a.selected)),Object(f.jsxs)("div",{className:n,children:[Object(f.jsx)(p.Handle,{style:{position:"absolute"},type:"target",position:p.Position.Left}),Object(f.jsx)("div",{className:q.a.resultText,children:e.data.result})]})},A=n(16),E=n(7),W=n.n(E),L=function(e){return Object(f.jsxs)("div",{className:W.a.questionWrapper,children:[Object(f.jsx)("div",{className:W.a.questionText,children:e.question}),e.answers.map((function(t,n){return Object(f.jsx)(H,{text:t.text,index:n,selectedAns:e.selectedAns,setSelectedAns:e.setSelectedAns},n)}))]})},H=function(e){var t=function(){e.selectedAns===e.index?e.setSelectedAns(null):e.setSelectedAns(e.index)};return e.selectedAns===e.index?Object(f.jsx)("div",{onClick:t,className:"".concat(W.a.answer," ").concat(W.a.selected),children:e.text}):Object(f.jsx)("div",{onClick:t,className:W.a.answer,children:e.text})},B=function(e){var t,n=Object(a.useState)([]),r=Object(u.a)(n,2),s=r[0],c=r[1],o=Object(a.useState)({}),i=Object(u.a)(o,2),d=i[0],l=i[1];if(!(e.formData.startId in e.formData.nodeMap))return Object(f.jsx)("div",{className:W.a.formWrapper,children:"Your form must have a valid start node"});0===s.length&&(t=e.formData.startId,c(s.concat([t])));return Object(f.jsx)("div",{className:W.a.formWrapper,children:s.map((function(t,n){var a,r=e.formData.nodeMap[t];return"question"===r.type?Object(f.jsx)(L,{question:"".concat(n+1,") ").concat(r.question),answers:r.answers,selectedAns:null!==(a=d[t])&&void 0!==a?a:null,setSelectedAns:function(n){return function(t,n){var a=Object.assign({},d);a[t]=n;var r,o=[],i=!1,u=Object(A.a)(s);try{for(u.s();!(r=u.n()).done;){var p=r.value;i?a[p]=null:o.push(p),t===p&&(i=!0)}}catch(j){u.e(j)}finally{u.f()}null!==n&&o.push(e.formData.nodeMap[t].answers[n].nextId),c(o),l(a)}(t,n)}},n):"end"===r.type?Object(f.jsxs)("div",{className:W.a.endWrapper,children:[Object(f.jsx)("div",{className:W.a.endTitle,children:"Results"}),Object(f.jsx)("div",{className:W.a.endResult,children:r.result})]},n):null}))})};!function(e){e[e.Start=0]="Start",e[e.Question=1]="Question",e[e.End=2]="End"}(h||(h={}));var M=r.a.createContext((function(e){})),Q=r.a.createContext("");var F=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("My Calculator"),c=Object(u.a)(s,2),i=c[0],j=c[1],_=Object(a.useState)({x:0,y:0}),m=Object(u.a)(_,2),v=m[0],O=m[1],g=Object(a.useState)(!1),y=Object(u.a)(g,2),I=y[0],T=y[1],D=Object(a.useRef)(null),q=Object(a.useState)(""),A=Object(u.a)(q,2),E=A[0],W=A[1],L=Object(a.useState)([]),H=Object(u.a)(L,2),F=H[0],R=H[1],X=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=D.current)||void 0===t||t.click(),t.onchange=Object(l.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.fileToJSON)(t.files[0]);case 2:n=e.sent,R(n.elements);case 4:case"end":return e.stop()}}),e)})));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify(n.toObject()),Object(w.download)(t,"".concat(i.replace(" ","_"),".json"),"text/plain");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:b.a.app,children:[Object(f.jsx)("input",{type:"file",accept:"application/JSON",className:b.a.fileInput,ref:D}),I?Object(f.jsx)("div",{className:b.a.backdrop,children:Object(f.jsxs)("div",{className:b.a.backdropElementWrapper,children:[Object(f.jsx)("div",{className:b.a.backdropHeader,children:Object(f.jsx)(S.b,{className:b.a.backdropRemoveBtn,onClick:function(){return T(!1)}})}),Object(f.jsx)("div",{className:b.a.backdropMain,children:Object(f.jsx)(B,{formData:Object(w.parseToGraph)(F)})})]})}):null,Object(f.jsx)(N,{onTestForm:function(){T(!0)},onLoadSave:X,onSave:J,onExport:function(){console.log(Object(w.parseToGraph)(F))},createNode:function(e){switch(e){case h.Start:!function(){var e={id:Date.now().toString(),type:"input",data:{label:"Start Node"},position:v,sourcePosition:"right",className:"startNode"};R(F.concat([e])),O(Object(w.vectorAdd)(e.position,{x:100,y:100}))}();break;case h.Question:!function(){var e={id:Date.now().toString(),type:"question",data:{label:"Question node",question:"My question",answers:[{text:"My Answer"}]},position:v};R(F.concat([e])),O(Object(w.vectorAdd)(e.position,{x:100,y:100}))}();break;case h.End:!function(){var e={id:Date.now().toString(),type:"end",data:{label:"End Node",result:"My Result"},position:v};R(F.concat([e])),O(Object(w.vectorAdd)(e.position,{x:100,y:100}))}();break;default:throw new Error("Invalid type of ".concat(e))}},title:i,setTitle:j}),Object(f.jsx)(C,{deleteNode:function(){return function(e){var t=F.filter((function(t){return t.id!==e}));t.length!==F.length&&R(t)}(E)},nodeData:function(){var e=F.filter((function(e){return e.id===E}));return 0===e.length?null:e[0]}(),setNodeData:function(e){return function(e,t){var n=F.filter((function(t){return t.id!==e}));n.length!==F.length&&R(n.concat([t]))}(E,e)}}),Object(f.jsx)("div",{className:b.a.flowWrapper,children:Object(f.jsx)(M.Provider,{value:function(e){R(F.filter((function(t){return t.id!==e})))},children:Object(f.jsx)(Q.Provider,{value:E,children:Object(f.jsx)(p.default,{nodeTypes:{question:k,end:P},edgeTypes:{buttonedge:x},elements:F,onElementClick:function(e,t){O(Object(w.vectorAdd)(t.position,{x:100,y:100})),W(t.id)},onEdgeUpdate:function(e,t){R(Object(p.updateEdge)(e,t,F))},onConnect:function(e){R(Object(p.addEdge)(Object(o.a)(Object(o.a)({},e),{},{type:"buttonedge"}),F))},onLoad:function(e){return r(e)},children:Object(f.jsx)(p.Background,{variant:p.BackgroundVariant.Dots,gap:24,size:1})})})})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root")),R()}],[[30,1,2]]]);
//# sourceMappingURL=main.2841cad6.chunk.js.map