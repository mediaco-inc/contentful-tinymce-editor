(this["webpackJsonpcontentful-tinymce-editor"]=this["webpackJsonpcontentful-tinymce-editor"]||[]).push([[0],{24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),o=n.n(r),i=n(6),s=n(8),c=(n(22),n(23),n(24),n(7)),l=n(4),u=n.n(l),p=n(5),d=n(10),h=n(11),m=n(16),g=n(13),f=n(3),b=n(12),x=["#BFEDD2","Light Green","#FBEEB8","Light Yellow","#F8CAC6","Light Red","#ECCAFA","Light Purple","#C2E0F4","Light Blue","#2DC26B","Green","#F1C40F","Yellow","#E03E2D","Red","#B96AD9","Purple","#3598DB","Blue","#169179","Dark Turquoise","#E67E23","Orange","#BA372A","Dark Red","#843FA1","Dark Purple","#236FA1","Dark Blue","#ECF0F1","Light Gray","#CED4D9","Medium Gray","#95A5A6","Gray","#7E8C8D","Dark Gray","#34495E","Navy Blue","#000000","Black","#ffffff","White"],j={apiKey:"",plugins:"preview advlist autolink lists link image charmap anchor searchreplace visualblocks visualchars code fullscreen insertdatetime media table wordcount autoresize nonbreaking quickbars emoticons",toolbar:"undo redo | styleselect | bold italic underline formatgroup | bullist numlist | table assetgroup link | insertgroup | extragroup",formatgroup:"strikethrough superscript subscript | alignleft aligncenter alignright | indent outdent | forecolor backcolor | removeformat",insertgroup:"media emoticons charmap emoji hr anchor insertdatetime nonbreaking",assetgroup:"existingasset newasset",extragroup:"paste pastetext | visualchars visualblocks preview wordcount | searchreplace | code",quickbarsSelectionToolbar:"bold italic underline | formatselect | quicklink blockquote",menubar:!1,customcolors:!1,custompalette:!1,colormap:x,resizing:"fit=fill&w=1024&q=80",customContentStyle:"img { max-width: 100% !important; max-height: 400px; object-fit: cover; }"},C=function(e){Object(m.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onConfigure=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state.parameters.colormap.filter((function(e,t){return t%2===0&&!a.validateHexColor(e)})),a.state.parameters.apiKey||t.push("apiKey"),!t.length){e.next=5;break}return a.props.sdk.notifier.error("Please fix all validation errors before saving"),e.abrupt("return",!1);case 5:return e.next=7,a.props.sdk.app.getCurrentState();case 7:return n=e.sent,e.abrupt("return",{parameters:a.state.parameters,targetState:n});case 9:case"end":return e.stop()}}),e)}))),a.validateHexColor=function(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)},a.onInputChange=function(e){var t=e.target,n=t.name,r=t.value,o=Object(c.a)({},a.state.parameters);o[n]=r,a.setState({parameters:o})},a.onSwitchChange=function(e,t){var n=Object(c.a)({},a.state.parameters);n[e]=t,a.setState({parameters:n})},a.onColorChange=function(e,t){var n=e.target.value,r=Object(c.a)({},a.state.parameters);r.colormap[t]=n,a.setState({parameters:r})},a.onColorLabelChange=function(e,t){var n=e.target.value,r=Object(c.a)({},a.state.parameters);r.colormap[t]=n,a.setState({parameters:r})},a.state={parameters:j},e.sdk.app.onConfigure((function(){return a.onConfigure()})),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sdk.app.getParameters();case 2:(t=e.sent)&&!(null===t||void 0===t?void 0:t.colormap)&&(t.colormap=x),this.setState(t?{parameters:t}:this.state,(function(){n.props.sdk.app.setReady()}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsx)(f.o,{className:Object(b.a)({margin:"80px"}),children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(f.c,{children:"TinyMCE Editor"}),Object(a.jsx)(f.e,{children:"This App provides the TinyMCE editor as an alternative to use a WYSIWYG editor in Contentful."}),Object(a.jsx)(f.m,{name:"apiKey",id:"apiKey",labelText:"TinyMCE API Key",required:!0,value:this.state.parameters.apiKey,onChange:this.onInputChange,textLinkProps:{icon:"ExternalLink",text:"Get a tinyMCE API key",onClick:function(){return window.open("https://www.tiny.cloud/my-account/dashboard")}}}),Object(a.jsx)(f.e,{style:{marginTop:"2em"},children:"The below defaults can be changed, check tiny documentation for all available options:"}),Object(a.jsx)(f.m,{name:"plugins",id:"plugins",labelText:"Plugins",required:!0,value:this.state.parameters.plugins,onChange:this.onInputChange,textLinkProps:{icon:"ExternalLink",text:"Plugins",onClick:function(){return window.open("https://www.tiny.cloud/docs/plugins/")}}}),Object(a.jsx)(f.m,{name:"toolbar",id:"toolbar",labelText:"Toolbar",required:!0,value:this.state.parameters.toolbar,helpText:"Use '|' as a toolbar divider. There are 4 toolbar groups: 'formatgroup', 'assetgroup', 'insertgroup' and 'extragroup'.",onChange:this.onInputChange,textLinkProps:{icon:"ExternalLink",text:"Toolbar buttons",onClick:function(){return window.open("https://www.tiny.cloud/docs/advanced/available-toolbar-buttons/")}}}),this.state.parameters.plugins.includes("quickbars")?Object(a.jsx)(f.m,{name:"quickbarsSelectionToolbar",id:"quickbarsSelectionToolbar",labelText:"Quickbars Selection Toolbar",value:this.state.parameters.quickbarsSelectionToolbar,onChange:this.onInputChange,textLinkProps:{icon:"ExternalLink",text:"Quickbars documentation",onClick:function(){return window.open("https://www.tiny.cloud/docs/plugins/quickbars/")}}}):null,Object(a.jsx)(f.m,{name:"formatgroup",id:"formatgroup",labelText:"Toolbar Format Group",helpText:"Referenced using key 'formatgroup' in the toolbar field",value:this.state.parameters.formatgroup,onChange:this.onInputChange}),Object(a.jsx)(f.m,{name:"assetgroup",id:"assetgroup",labelText:"Toolbar Asset Group",helpText:"Handles Contentful assets using `existingasset` for inserting an existing Asset or `newasset` for creating a new Asset. Referenced using key 'assetgroup' in the toolbar field.",value:this.state.parameters.assetgroup,onChange:this.onInputChange}),Object(a.jsx)(f.m,{name:"insertgroup",id:"insertgroup",labelText:"Toolbar Insert Group",helpText:"Referenced using key 'insertgroup' in the toolbar field",value:this.state.parameters.insertgroup,onChange:this.onInputChange}),Object(a.jsx)(f.m,{name:"extragroup",id:"extragroup",labelText:"Toolbar Extra Group",helpText:"Referenced using key 'extragroup' in the toolbar field",value:this.state.parameters.extragroup,onChange:this.onInputChange}),Object(a.jsx)(f.g,{id:"menubar",isChecked:this.state.parameters.menubar,labelText:"Show the menubar",onToggle:function(t){return e.onSwitchChange("menubar",t)}}),Object(a.jsx)(f.m,{name:"resizing",id:"resizing",labelText:"Resizing behaviour for Contentful media assets",helpText:"Set an optional resizing behaviour to all images inserted from Contentful",value:this.state.parameters.resizing,onChange:this.onInputChange,textLinkProps:{icon:"ExternalLink",text:"Contentful images api resizing documentation",onClick:function(){return window.open("https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping")}}}),Object(a.jsx)(f.m,{name:"customContentStyle",id:"customContentStyle",textarea:!0,labelText:"Custom Content Styling",helpText:"Override default editor styles.",value:this.state.parameters.customContentStyle,onChange:this.onInputChange,textInputProps:{rows:10},textLinkProps:{icon:"ExternalLink",text:"TinyMCE content_style documentation",onClick:function(){return window.open("https://www.tiny.cloud/docs/configure/content-appearance/#exampleapplyingonecssstyleusingcontent_style")}}}),Object(a.jsx)(f.g,{id:"customcolors",isChecked:this.state.parameters.customcolors,labelText:"Show Custom Colors Palette Picker",onToggle:function(t){return e.onSwitchChange("customcolors",t)}}),Object(a.jsx)(f.g,{id:"custompalette",isChecked:this.state.parameters.custompalette,labelText:"Customize default TinyMCE color palette",onToggle:function(t){return e.onSwitchChange("custompalette",t)}}),this.state.parameters.custompalette?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.b,{htmlFor:"colormap",children:"Default color palette"}),Object(a.jsxs)(f.h,{className:"colormap",children:[Object(a.jsx)(f.k,{children:Object(a.jsxs)(f.l,{children:[Object(a.jsx)(f.j,{children:"Color Value"}),Object(a.jsx)(f.j,{children:"Color Label"}),Object(a.jsx)(f.j,{style:{minWidth:"200px"}})]})}),Object(a.jsx)(f.i,{children:this.state.parameters.colormap.map((function(t,n){return n%2!==0?null:Object(a.jsxs)(f.l,{children:[Object(a.jsx)(f.j,{style:{backgroundColor:e.state.parameters.colormap[n]},children:Object(a.jsx)(f.m,{name:"color-".concat(n),id:"color-".concat(n),value:e.state.parameters.colormap[n],onChange:function(t){return e.onColorChange(t,n)},labelText:""})}),Object(a.jsx)(f.j,{style:{backgroundColor:e.state.parameters.colormap[n]},children:Object(a.jsx)(f.m,{name:"color-label-".concat(n),id:"color-label-".concat(n),value:e.state.parameters.colormap[n+1],onChange:function(t){return e.onColorLabelChange(t,n+1)},labelText:""})}),Object(a.jsx)(f.j,{children:e.validateHexColor(e.state.parameters.colormap[n])?null:Object(a.jsx)(f.n,{children:"Invalid Hex Color value"})})]},"color-".concat(n))}))})]}),Object(a.jsxs)(f.d,{children:["Only used if keywords ",Object(a.jsx)("em",{children:"forecolor"})," or ",Object(a.jsx)("em",{children:"backcolor"})," ","are defined in the toolbar)."]})]}):null]})})}}]),n}(r.Component),v=n(14),k=n(15),w=function(e){var t=e.sdk,n=t.parameters.installation.apiKey,r=o.a.useState(null),i=Object(v.a)(r,2),s=i[0],c=i[1],l=!1;o.a.useEffect((function(){t.window.startAutoResizer()}),[t.window]),o.a.useEffect((function(){var e=t.parameters.installation,n=e.formatgroup,a=e.insertgroup,r=e.assetgroup,o=e.extragroup,i=e.plugins,s=e.menubar,l=e.toolbar,d=e.customcolors,h=e.custompalette,m=e.colormap,g=e.quickbarsSelectionToolbar,f=e.resizing,b=e.customContentStyle,x=function(e){var t=e.assetType,n=e.id,a=e.title,r=e.url,o=e.width,i=e.height;return"image"===t?function(e){var t=e.id,n=e.url,a=e.width,r=e.height,o=e.title,i=void 0===o?"":o;return'<img\n        src="'.concat(n,"?").concat(f,'"\n        width="').concat(a,'"\n        height="').concat(r,'"\n        alt="').concat(i,'"\n        data-contentful-id="').concat(t,'"\n        data-original-width="').concat(a,'"\n        data-original-height="').concat(r,'"\n      />')}({id:n,url:r,width:o,height:i,title:a}):function(e){var t=e.id,n=e.url,a=e.title;return'<a href="'.concat(n,'" data-contentful-id="').concat(t,'">').concat(a,"</a>")}({id:n,url:r,title:a})},j=function(e){var n,a;if((null===e||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.file)&&(null===e||void 0===e||null===(a=e.fields)||void 0===a?void 0:a.file[t.field.locale])){var r=/^image\/(.*)$/.test(e.fields.file[t.field.locale].contentType)?"image":"file",o={assetType:r,id:e.sys.id,url:e.fields.file[t.field.locale].url,title:e.fields.title[t.field.locale]};return"image"===r&&(o.width=e.fields.file[t.field.locale].details.image.width,o.height=e.fields.file[t.field.locale].details.image.height),o}},C=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.dialogs.selectSingleAsset().then((function(e){return j(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.navigator.openNewAsset({slideIn:{waitForClose:!0}}).then((function(e){var t=e.entity;return j(t)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.navigator.openAsset(n,{slideIn:{waitForClose:!0}}).then((function(e){var t=e.entity;return j(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={height:500,menubar:s,plugins:i,toolbar:l,image_caption:!0,custom_colors:d,toolbar_groups:{},quickbars_selection_toolbar:g,quickbars_insert_toolbar:!1,content_style:b,setup:function(e){return function(e){e.ui.registry.addButton("existingasset",{text:"Link existing",icon:"edit-image",tooltip:"Insert existing Contentful Media Asset",onAction:function(){var t=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C().then((function(t){t&&e.insertContent(x(t))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}),e.ui.registry.addButton("newasset",{text:"Add new and link",icon:"image",tooltip:"Create and Insert Contentful Media Asset",onAction:function(){var t=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v().then((function(t){t&&e.insertContent(x(t))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}),e.ui.registry.addButton("editasset",{text:"Edit media asset",icon:"image",tooltip:"Edit Contentful Media Asset",onAction:function(){var n=Object(p.a)(u.a.mark((function n(){var a,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.selection.getNode(),r=a.getAttribute("src").replace(/(http:|https:)?\/\/.*\.ctfassets\.net\//,"").replace("".concat(t.ids.space,"/"),"").split("/"),n.next=4,k(r[0]).then((function(t){t&&e.insertContent(x(t))}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}),e.ui.registry.addContextToolbar("editasset",{predicate:function(e){return"img"===e.nodeName.toLowerCase()&&e.getAttribute("src").includes("ctfassets.net/".concat(t.ids.space,"/"))},items:"editasset",position:"node",scope:"node"})}(e)}};h&&(w.color_map=m),n&&(w.toolbar_groups.formatgroup={icon:"format",tooltip:"Formatting",items:n}),r&&(w.toolbar_groups.assetgroup={icon:"gallery",tooltip:"Contentful Assets",items:r}),a&&(w.toolbar_groups.insertgroup={icon:"plus",tooltip:"Insert",items:a}),o&&(w.toolbar_groups.extragroup={icon:"more-drawer",tooltip:"More",items:o}),c(w)}),[t]);return s?Object(a.jsx)(k.a,{initialValue:t.field.getValue(),apiKey:n,init:s,onEditorChange:function(e){l&&clearInterval(l),l=setTimeout((function(){t.field.setValue(e)}),500)}}):Object(a.jsxs)("div",{children:["Loading editor ",Object(a.jsx)(f.f,{})]})};Object(s.init)((function(e){var t=document.getElementById("root");[{location:s.locations.LOCATION_APP_CONFIG,component:Object(a.jsx)(C,{sdk:e})},{location:s.locations.LOCATION_ENTRY_FIELD,component:Object(a.jsx)(w,{sdk:e})}].forEach((function(n){e.location.is(n.location)&&Object(i.render)(n.component,t)}))}))}},[[29,1,2]]]);
//# sourceMappingURL=main.d155609d.chunk.js.map