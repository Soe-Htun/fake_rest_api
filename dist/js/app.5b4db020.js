(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},l=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="fake-rest-api/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},l=[],o=(a("034f"),a("2877")),i={},s=Object(o["a"])(i,n,l,!1,null,null,null),c=s.exports,u=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("el-table",{staticStyle:{width:"80%",position:"relative",left:"10%",overflow:"none"},attrs:{height:"750px",data:e.tableData.filter((function(t){return!e.search||t.firstname.toLowerCase().includes(e.search.toLowerCase())})),border:""}},[a("el-table-column",{attrs:{prop:"firstname",sortable:"",label:"FirstName"}}),a("el-table-column",{attrs:{prop:"lastname",label:"LastName"}}),a("el-table-column",{attrs:{prop:"city",label:"City"}}),a("el-table-column",{attrs:{prop:"phone_no",label:"Phone Number"}}),a("el-table-column",{attrs:{prop:"email",label:"Email"}}),a("el-table-column",{attrs:{prop:"companyName",label:"CompanyName"}}),a("el-table-column",{attrs:{prop:"userImage",label:"Image"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("div",[a("img",{attrs:{id:"imageShow",src:e.row.userImage,alt:""}})])]}}])}),a("el-table-column",{attrs:{width:"180px"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-input",{attrs:{placeholder:"Type to search"},on:{click:function(a){return e.search(t.$index,t.row)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(t){return[a("el-button",{staticStyle:{width:"75px",display:"inline"},attrs:{type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,e.tableData)}}},[e._v("Edit")]),a("el-button",{staticStyle:{"margin-left":"5px",width:"75px"},attrs:{type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1),a("el-pagination",{staticStyle:{float:"center"},attrs:{background:"",layout:"prev, pager, next",data:e.tableData,total:100,"page-size":"5"}}),a("el-dialog",{attrs:{visible:e.dialogVisible,center:!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{staticStyle:{"text-align":"center"},attrs:{model:e.rulesForm,inline:!0}},[a("el-form-item",{attrs:{label:"First Name"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.rulesForm.firstname,callback:function(t){e.$set(e.rulesForm,"firstname",t)},expression:"rulesForm.firstname"}})],1),a("br"),a("el-form-item",{attrs:{label:"Last Name"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.rulesForm.lastname,callback:function(t){e.$set(e.rulesForm,"lastname",t)},expression:"rulesForm.lastname"}})],1),a("br"),a("el-form-item",{attrs:{label:"City"}},[a("el-input",{staticStyle:{"margin-left":"9.5%"},attrs:{placeholder:""},model:{value:e.rulesForm.city,callback:function(t){e.$set(e.rulesForm,"city",t)},expression:"rulesForm.city"}})],1),a("br"),a("el-form-item",{attrs:{label:"Phone_no"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.rulesForm.phone_no,callback:function(t){e.$set(e.rulesForm,"phone_no",t)},expression:"rulesForm.phone_no"}})],1),a("br"),a("el-form-item",{attrs:{label:"Email"}},[a("el-input",{staticStyle:{"margin-left":"6%"},attrs:{placeholder:""},model:{value:e.rulesForm.email,callback:function(t){e.$set(e.rulesForm,"email",t)},expression:"rulesForm.email"}})],1),a("br"),a("el-form-item",{staticStyle:{"margin-right":"3.5%"},attrs:{label:"Companyame"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.rulesForm.companyName,callback:function(t){e.$set(e.rulesForm,"companyName",t)},expression:"rulesForm.companyName"}})],1),a("br"),a("el-form-item",{staticStyle:{"margin-left":"6%"}},[a("el-button",{staticStyle:{width:"85px","margin-right":"25px"},attrs:{type:"primary"}},[e._v("Save")]),a("el-button",{staticStyle:{width:"85px"},attrs:{type:"primary"},on:{click:function(t){return e.clear()}}},[e._v("Clear")])],1)],1)],1)],1)},p=[],f=(a("a434"),a("bc3a")),d=a.n(f),h="http://localhost:3000/fakeapi",b={name:"Home",data:function(){return{dialogVisible:!1,tableData:[],editItem:[],search:"",firstname:"",lastname:"",city:"",phone_no:"",email:"",companyName:"",userImage:"",url:[],rulesForm:{firstname:"",lastname:"",city:"",phone_no:"",email:"",companyName:""}}},methods:{getData:function(){var e=this;d.a.get(h).then((function(t){for(var a=0;a<t.data.length;a++)e.tableData.push({firstname:t.data[a].FirstName,lastname:t.data[a].LastName,city:t.data[a].City,phone_no:t.data[a].Phone_no,email:t.data[a].Email,companyName:t.data[a].CompanyName,userImage:t.data[a].UserImage}),console.log(t.data)}))},handleEdit:function(e,t){this.dialogVisible=!0,this.editItem=t[e],this.rulesForm.firstname=this.editItem.firstname,this.rulesForm.lastname=this.editItem.lastname,this.rulesForm.city=this.editItem.city,this.rulesForm.phone_no=this.editItem.phone_no,this.rulesForm.email=this.editItem.email,this.rulesForm.companyName=this.editItem.companyName},handleDelete:function(e,t){var a=this;this.$confirm("Are you sure to delete this item?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(r){d.a.post(h,{firstname:t.FirstName}).then((function(t){a.tableData.splice(e,1),a.$message({type:"success",message:"Delete Successful"}),console.log(t.data)})).catch((function(e){a.$message({type:"error",message:e.message})})),console.log(r.data),console.log(t)}))},save:function(){},clear:function(){this.rulesForm.firstname="",this.rulesForm.lastname="",this.rulesForm.city="",this.rulesForm.phone_no="",this.rulesForm.email="",this.rulesForm.companyName=""}},created:function(){this.getData()}},y=b,g=(a("f53f"),Object(o["a"])(y,m,p,!1,null,"7cb335e3",null)),v=g.exports;r["default"].use(u["a"]);var F=[{path:"/",name:"Home",component:v}],x=new u["a"]({mode:"history",base:"fake-rest-api/",routes:F}),_=x,w=a("5c96"),k=a.n(w);a("0fae");r["default"].config.productionTip=!1,r["default"].use(k.a),new r["default"]({router:_,render:function(e){return e(c)}}).$mount("#app")},7013:function(e,t,a){},"85ec":function(e,t,a){},f53f:function(e,t,a){"use strict";var r=a("7013"),n=a.n(r);n.a}});
//# sourceMappingURL=app.5b4db020.js.map