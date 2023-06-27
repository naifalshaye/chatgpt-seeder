(()=>{"use strict";var e,t={205:(e,t,r)=>{const o=Vue;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var l={class:"bg-white dark:bg-gray-800 rounded-lg shadow"},n={class:"flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700"},d=(0,o.createElementVNode)("div",{class:"px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5"},[(0,o.createElementVNode)("label",{class:"inline-block leading-tight space-x-1",for:"content_type"},[(0,o.createElementVNode)("span",null,"Data Type"),(0,o.createElementVNode)("span",{class:"text-red-500 text-sm"},"*")])],-1),c={class:"mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5"},s={class:"space-y-1"},i=[(0,o.createElementVNode)("option",{value:""},"Select Data Type",-1),(0,o.createElementVNode)("option",{value:"real"},"Real Data",-1),(0,o.createElementVNode)("option",{value:"fake"},"Fake Data",-1)],m={class:"flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700"},u=(0,o.createElementVNode)("div",{class:"px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5"},[(0,o.createElementVNode)("label",{class:"inline-block leading-tight space-x-1",for:"database_table"},[(0,o.createElementVNode)("span",null,"Database Table"),(0,o.createElementVNode)("span",{class:"text-red-500 text-sm"},"*")])],-1),p={class:"mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5"},y={class:"space-y-1"},b=(0,o.createElementVNode)("option",{value:""},"Select Table",-1),g=["value"],f={class:"flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700"},h=(0,o.createElementVNode)("div",{class:"px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5"},[(0,o.createElementVNode)("label",{class:"inline-block leading-tight space-x-1",for:"number_of_records"},[(0,o.createElementVNode)("span",null,"Number of Records"),(0,o.createElementVNode)("span",{class:"text-red-500 text-sm"},"*")])],-1),k={class:"mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5"},x={class:"space-y-1"},v={class:"flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700"},E=(0,o.createElementVNode)("div",{class:"px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5"},[(0,o.createElementVNode)("label",{class:"inline-block leading-tight space-x-1",for:"data_required"},[(0,o.createElementVNode)("span",null,"Data Description"),(0,o.createElementVNode)("span",{class:"text-red-500 text-sm"},"*")])],-1),N={class:"mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5"},V={class:"space-y-1"},_={class:"flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700",id:"available_columns",ref:"columns"},w=(0,o.createElementVNode)("div",{class:"px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5 py-6"},[(0,o.createElementVNode)("label",{class:"inline-block leading-tight space-x-1",for:"collumns"},[(0,o.createElementVNode)("span",null,"Available Columns:"),(0,o.createElementVNode)("span",{class:"text-red-500 text-sm"},"*")])],-1),B={class:"mt-2 pb-5 px-2 md:px-2 md:w-3/5 w-full md:py-5 flex justify-center"},C={key:0,class:"space-y-1"},D={class:"container mx-auto"},S={class:"table-auto md:w-1/3"},M=(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",{class:"text-xs"},[(0,o.createElementVNode)("th",{class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3"}," Select "),(0,o.createElementVNode)("th",{class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3"}," Name "),(0,o.createElementVNode)("th",{class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3"}," Type "),(0,o.createElementVNode)("th",{class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3"}," Length "),(0,o.createElementVNode)("th",{class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3"}," Nullable "),(0,o.createElementVNode)("th",{class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3"}," Default ")])],-1),j={class:"text-center"},F={class:"border border-gray-100 dark:border-gray-700 px-4 py-1"},L=["value"],O=["checked"],T={class:"border border-gray-100 dark:border-gray-700 px-4 py-1"},q={class:"border border-gray-100 dark:border-gray-700 px-4 py-1"},R={class:"border border-gray-100 dark:border-gray-700 px-4 py-1"},G={class:"border border-gray-100 dark:border-gray-700 px-4 py-1"},P={class:"border border-gray-100 dark:border-gray-700 px-4 py-1"},U={key:0,class:"mt-4 flex justify-center"},z=[(0,o.createElementVNode)("img",{src:"/vendor/chatgpt-seeder/images/loading-spinner.gif",alt:"Loading",width:"46",class:"flex justify-center bg-opacity-80 z-50"},null,-1)],H={key:1,class:"text-green-500 font-bold mt-4 flex justify-center"},Z={key:2,class:"text-red-500 font-bold mt-4 flex justify-center"},A={class:"flex flex-col md:flex-row md:items-center justify-center md:justify space-y-2 md:space-y-0 space-x-3"},I=(0,o.createElementVNode)("button",{type:"submit",class:"shadow relative bg-primary-500 hover:bg-primary-900 text-white dark:text-gray-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900"},[(0,o.createElementVNode)("span",{class:""},"Generate Data")],-1),J=(0,o.createElementVNode)("div",{class:"fixed inset-0 bg-black opacity-50"},null,-1),K={class:"flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-600"},Q=(0,o.createElementVNode)("h2",{class:"text-md font-bold"},"Sample Data",-1),W=[(0,o.createElementVNode)("svg",{class:"w-6 h-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,o.createElementVNode)("path",{d:"M6 18L18 6M6 6l12 12"})],-1)],X={class:"px-6 py-4"},Y={class:"flex justify-center"},$={class:"table-auto min-w-[20rem]"},ee={class:"flex justify-center mt-8"};const te={data:function(){return{tables:[],columns:[],form:{data_type:"",database_table:"",number_of_records:"",selected_columns:[],seed_data:[]},keys:[],sample_data:[],generate_retry:3,retry_count:0,showModal:!1,isLoading:!1,message:"",error:""}},mounted:function(){this.getTables(),this.getGenerateRetry()},methods:{getGenerateRetry:function(){var e=this;Nova.request().get("/nova-vendor/chatgpt-seeder/get-generate-retry",{}).then((function(t){var r=t.data;e.generate_retry=r.generate_retry}))},getTables:function(){var e=this;Nova.request().get("/nova-vendor/chatgpt-seeder/tables",{}).then((function(t){var r=t.data;e.tables=r.tables}))},getColumns:function(e){var t=this;this.columns=[],this.form.selected_columns=[],this.database_table=e.target.value,Nova.request().get("/nova-vendor/chatgpt-seeder/columns/"+e.target.value,{}).then((function(e){var r=e.data;t.columns=r.columns}))},submitForm:function(){this.clearError(),this.resetRetry(),this.generate()},generate:function(){var e=this;this.message="",this.isLoading=!0,this.retry_count<=this.generate_retry?(this.form.columns=this.columns,Nova.request().post("/nova-vendor/chatgpt-seeder/generate",this.form).then((function(t){var r=t.data;r.data?(e.content=r.data,(r=r.data.slice(0,5)).length>1?(e.sample_data=r,e.keys=Object.keys(r[0]),e.isLoading=!1,e.openModal()):(e.retry_count++,e.generate())):(e.retry_count++,e.generate())}))):(this.isLoading=!1,this.error="Retry limit exceeded! Please refine your data description for more accurate results!")},proceed:function(){var e=this;this.form.seed_data=this.content,Nova.request().post("/nova-vendor/chatgpt-seeder/proceed",this.form).then((function(t){t.data.succeed&&(e.isLoading=!1,e.message="Data inserted successfully!")}))},reGenerate:function(){this.resetRetry(),this.submitForm()},resetRetry:function(){this.retry_count=0},clearForm:function(){this.columns=[],this.selected_columns=[],this.form.data_type=null,this.form.database_table=null,this.form.number_of_records=null,this.form.data_required=null,this.form.seed_data=[],this.keys=[],this.sample_data=[],this.resetRetry(),this.clearError(),this.message="",this.isLoading=!1},clearError:function(){this.error=""},openModal:function(){this.showModal=!0},closeModal:function(){this.showModal=!1,this.message=""},handleOutsideClick:function(){this.closeModal()}}};const re=(0,r(744).Z)(te,[["render",function(e,t,r,te,re,oe){var ae=this,le=(0,o.resolveComponent)("Head"),ne=(0,o.resolveComponent)("Heading"),de=(0,o.resolveComponent)("diver");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",null,[(0,o.createVNode)(le,{title:"ChatGPT Seeder"}),(0,o.createVNode)(ne,{class:"mb-4"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)("ChatGPT Seeder")]})),_:1}),(0,o.createElementVNode)("form",{onSubmit:t[7]||(t[7]=(0,o.withModifiers)((function(){return oe.submitForm&&oe.submitForm.apply(oe,arguments)}),["prevent"])),ref:"form",method:"post",class:"space-y-8"},[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",n,[d,(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.withDirectives)((0,o.createElementVNode)("select",{class:"w-full form-control form-input form-input-bordered","onUpdate:modelValue":t[0]||(t[0]=function(e){return re.form.data_type=e}),required:""},i,512),[[o.vModelSelect,re.form.data_type]])])])]),(0,o.createElementVNode)("div",m,[u,(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("div",y,[(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return re.form.database_table=e}),class:"w-full form-control form-input form-input-bordered",id:"database_table",onChange:t[2]||(t[2]=function(e){return oe.getColumns(e)}),required:""},[b,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(this.tables,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.Tables_in_nova4,key:e.Tables_in_nova4},(0,o.toDisplayString)(e.Tables_in_nova4),9,g)})),128))],544),[[o.vModelSelect,re.form.database_table]])])])]),(0,o.createElementVNode)("div",f,[h,(0,o.createElementVNode)("div",k,[(0,o.createElementVNode)("div",x,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"w-full form-control form-input form-input-bordered","onUpdate:modelValue":t[3]||(t[3]=function(e){return re.form.number_of_records=e}),required:""},null,512),[[o.vModelText,re.form.number_of_records]])])])]),(0,o.createElementVNode)("div",v,[E,(0,o.createElementVNode)("div",N,[(0,o.createElementVNode)("div",V,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text",class:"w-full form-control form-input form-input-bordered",placeholder:"Describe the data you are looking for..","onUpdate:modelValue":t[4]||(t[4]=function(e){return re.form.data_required=e}),required:""},null,512),[[o.vModelText,re.form.data_required]])])])]),(0,o.createElementVNode)("div",_,[w,(0,o.createElementVNode)("div",B,[this.columns.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",C,[(0,o.createElementVNode)("div",D,[(0,o.createElementVNode)("table",S,[M,(0,o.createElementVNode)("tbody",j,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(this.columns,(function(e,r){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:r,class:"hover:bg-gray-100 dark:hover:bg-gray-600"},[(0,o.createElementVNode)("td",F,[e.column_not_nullable?(0,o.createCommentVNode)("",!0):(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:0,type:"checkbox",class:"w-4 form-control form-input-bordered",value:e.column_name,"onUpdate:modelValue":t[5]||(t[5]=function(e){return re.form.selected_columns=e})},null,8,L)),[[o.vModelCheckbox,re.form.selected_columns]]),e.column_not_nullable?((0,o.openBlock)(),(0,o.createElementBlock)("input",{key:1,type:"checkbox",class:"w-4 form-control form-input-bordered",checked:e.column_not_nullable,disabled:!0},null,8,O)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("td",T,(0,o.toDisplayString)(e.column_name),1),(0,o.createElementVNode)("td",q,(0,o.toDisplayString)(e.column_type),1),(0,o.createElementVNode)("td",R,(0,o.toDisplayString)(e.column_length),1),(0,o.createElementVNode)("td",G,(0,o.toDisplayString)(!e.column_not_nullable),1),(0,o.createElementVNode)("td",P,(0,o.toDisplayString)(e.column_default),1)])})),128))])])])])):(0,o.createCommentVNode)("",!0)])],512)]),re.isLoading?((0,o.openBlock)(),(0,o.createElementBlock)("div",U,z)):(0,o.createCommentVNode)("",!0),this.message?((0,o.openBlock)(),(0,o.createElementBlock)("div",H,(0,o.toDisplayString)(this.message),1)):(0,o.createCommentVNode)("",!0),this.error?((0,o.openBlock)(),(0,o.createElementBlock)("div",Z,(0,o.toDisplayString)(this.error),1)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",A,[(0,o.createElementVNode)("button",{type:"button",class:"bg-gray-700 text-white font-bold py-2 px-4 rounded",onClick:t[6]||(t[6]=function(){return oe.clearForm&&oe.clearForm.apply(oe,arguments)})}," Clear "),I])],544)]),re.showModal?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:0,class:"modal fixed inset-0 flex items-center justify-center z-40",onClick:t[12]||(t[12]=function(){return oe.handleOutsideClick&&oe.handleOutsideClick.apply(oe,arguments)})},[J,(0,o.createVNode)(de,{class:"relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full mx-4 overflow-y-auto border border-gray-200 dark:border-gray-600"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",K,[Q,(0,o.createElementVNode)("button",{onClick:t[8]||(t[8]=function(){return oe.closeModal&&oe.closeModal.apply(oe,arguments)}),class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"},W)]),(0,o.createElementVNode)("div",X,[(0,o.createElementVNode)("div",Y,[(0,o.createElementVNode)("table",$,[(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(ae.keys,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("th",{key:e,class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-2"},(0,o.toDisplayString)(e),1)})),128))])]),(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(ae.sample_data,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:e,class:"hover:bg-gray-400 dark:hover:bg-gray-700"},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(ae.keys,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("td",{key:t,class:"border border-gray-200 dark:border-gray-600 px-4 py-1 text-center"},["object"===a(e[t])?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:0},(0,o.renderList)(e[t],(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("span",{key:t},(0,o.toDisplayString)(t)+": "+(0,o.toDisplayString)(e),1)})),128)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[(0,o.createTextVNode)((0,o.toDisplayString)(e[t]),1)],64))])})),128))])})),128))])])]),(0,o.createElementVNode)("div",ee,[(0,o.createElementVNode)("button",{class:"px-4 py-2 bg-green-500 text-white rounded-md mr-2 rounded",onClick:t[9]||(t[9]=function(){return oe.proceed&&oe.proceed.apply(oe,arguments)})},"Proceed "),(0,o.createElementVNode)("button",{class:"bg-primary-500 text-white font-bold py-2 px-4 border-b-4 border-primary-500 hover:border-blue-500 rounded mr-2",onClick:t[10]||(t[10]=function(){return oe.reGenerate&&oe.reGenerate.apply(oe,arguments)})}," Regenerate "),(0,o.createElementVNode)("button",{class:"px-4 py-2 bg-red-500 text-white rounded-md rounded",onClick:t[11]||(t[11]=function(){return oe.closeModal&&oe.closeModal.apply(oe,arguments)})},"Close ")])])]})),_:1})])):(0,o.createCommentVNode)("",!0)],64)}]]);Nova.booting((function(e,t){Nova.inertia("ChatgptSeeder",re)}))},762:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,a,l)=>{if(!r){var n=1/0;for(i=0;i<e.length;i++){for(var[r,a,l]=e[i],d=!0,c=0;c<r.length;c++)(!1&l||n>=l)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(d=!1,l<n&&(n=l));if(d){e.splice(i--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[r,a,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,[n,d,c]=r,s=0;if(n.some((t=>0!==e[t]))){for(a in d)o.o(d,a)&&(o.m[a]=d[a]);if(c)var i=c(o)}for(t&&t(r);s<n.length;s++)l=n[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(i)},r=self.webpackChunknaif_chatgpt_seeder=self.webpackChunknaif_chatgpt_seeder||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.O(void 0,[990],(()=>o(205)));var a=o.O(void 0,[990],(()=>o(762)));a=o.O(a)})();