"use strict";(self["webpackChunkdatabasir"]=self["webpackChunkdatabasir"]||[]).push([[63],{6299:function(e,t,a){a.d(t,{ew:function(){return n},wu:function(){return s},r6:function(){return u},ns:function(){return i},OE:function(){return m},Zu:function(){return p},RE:function(){return d}});var o=a(3872);const r="/api/v1.0/database_types",l="/api/v1.0/simple_database_types",n=e=>o.Z["delete"](r+"/"+e),s=e=>o.Z.post(r,e),u=e=>o.Z.patch(r,e),i=()=>o.Z.get(l),m=e=>o.Z.get(r,{params:e}),p=e=>o.Z.post(r+"/driver_class_name",e),d=e=>o.Z.post("/api/v1.0/database_types/upload_driver",e,{headers:{"Content-Type":"multipart/form-data"}})},8337:function(e,t,a){a.d(t,{Wq:function(){return l},ex:function(){return n},vB:function(){return s},iE:function(){return m},yF:function(){return p},E2:function(){return d},_j:function(){return c},q9:function(){return g}});var o=a(3872);const r="/api/v1.0/groups",l=e=>o.Z.get(r,{params:e}),n=e=>o.Z.get(r+"/"+e),s=e=>e.id&&null!=e.id?i(e):u(e),u=e=>o.Z.post(r,e),i=e=>o.Z.patch(r,e),m=e=>o.Z["delete"](r+"/"+e),p=(e,t)=>o.Z.get(r+"/"+e+"/members",{params:t}),d=(e,t)=>o.Z.post(r+"/"+e+"/members",t),c=(e,t)=>o.Z["delete"](r+"/"+e+"/members/"+t),g=(e,t,a)=>{const l={role:a};return o.Z.patch(r+"/"+e+"/members/"+t,l)}},5430:function(e,t,a){a.d(t,{v:function(){return l}});var o=a(3872);const r="/api/v1.0/operation_logs",l=e=>o.Z.get(r,{params:e})},9324:function(e,t,a){a.d(t,{hW:function(){return l},Rp:function(){return n},Iu:function(){return s},M7:function(){return i},Dg:function(){return m},lN:function(){return p},jI:function(){return g}});var o=a(3872);const r="/api/v1.0/projects",l=e=>o.Z.get(r,{params:e}),n=e=>o.Z.get(r+"/"+e),s=e=>e.id?c(e):u(e),u=e=>o.Z.post(r,e),i=e=>o.Z.post(r+"/test_connection",e),m=(e,t)=>o.Z.post(r+"/"+e+"/list_manual_tasks",t),p=(e,t)=>o.Z.patch(r+"/"+e+"/tasks/"+t+"/cancel"),d="/api/v1.0/groups",c=e=>o.Z.patch(d+"/"+e.groupId+"/projects",e),g=(e,t)=>o.Z["delete"](d+"/"+e+"/projects/"+t)},3110:function(e,t,a){a.d(t,{yw:function(){return l},Dx:function(){return n},B9:function(){return s},__:function(){return u},IJ:function(){return i},r4:function(){return m},oD:function(){return p},_:function(){return d},Uz:function(){return c},gQ:function(){return g},Gz:function(){return h}});var o=a(3872);const r="/api/v1.0/users",l=e=>o.Z.get(r,{params:e}),n=e=>o.Z.post(r+"/"+e+"/enable"),s=e=>o.Z.post(r+"/"+e+"/disable"),u=e=>o.Z.get(r+"/"+e),i=e=>o.Z["delete"](r+"/"+e),m=e=>o.Z.post(r,e),p=e=>o.Z.post(r+"/"+e+"/renew_password"),d=e=>o.Z.post(r+"/"+e+"/sys_owners"),c=e=>o.Z["delete"](r+"/"+e+"/sys_owners"),g=(e,t)=>o.Z.post(r+"/"+e+"/password",t),h=(e,t)=>o.Z.post(r+"/"+e+"/nickname",t)},9080:function(e,t,a){a.d(t,{V$:function(){return l},Ni:function(){return n},a3:function(){return s}});var o=a(3872);const r="/api/v1.0/user_projects/favorites",l=e=>o.Z.get(r,{params:e}),n=e=>o.Z["delete"](r+"/"+e),s=e=>o.Z.post(r+"/"+e)},7063:function(e,t,a){a.r(t),a.d(t,{default:function(){return le}});var o=a(6252),r=a(3577);const l=(0,o.Uk)("新建"),n={key:1},s=(0,o.Uk)(" 更多 "),u=(0,o.Uk)("编辑项目"),i=(0,o.Uk)("查看文档"),m=(0,o.Uk)(" 关注项目 "),p=(0,o.Uk)(" 取消关注 "),d=(0,o.Uk)("查看日志"),c=(0,o.Uk)("删除项目"),g=(0,o._)("h3",null,"基础信息",-1),h=(0,o._)("h3",null,"连接配置",-1),w=(0,o.Uk)("- 删除"),b=(0,o.Uk)("+ 添加"),f=(0,o.Uk)("+ 添加"),y=(0,o.Uk)(" 测试连接 "),j=(0,o._)("h2",null,"同步规则",-1),C=(0,o.Uk)("- 删除"),_=(0,o.Uk)("+ 添加"),W=(0,o.Uk)("+ 添加"),k=(0,o.Uk)("- 删除"),P=(0,o.Uk)("+ 添加"),S=(0,o.Uk)("+ 添加"),F=(0,o.Uk)("保存"),R=(0,o.Uk)("取消"),U={key:0},D=(0,o.Uk)("成功"),z={key:1},x=(0,o.Uk)("失败"),N={key:0},V={key:1},M=(0,o.Uk)("添加成员"),O=(0,o.Uk)("移除"),v=(0,o.Uk)("升为组长"),T=(0,o.Uk)("设为组员"),I={key:0},E=(0,o.Uk)("启用中"),G={key:1},Z=(0,o.Uk)("已禁用"),L={key:0},$=(0,o.Uk)("移除"),A={key:1},Q=(0,o.Uk)("+ 添加组员"),q=(0,o.Uk)("+ 添加组长");function B(e,t,a,B,Y,K){const H=(0,o.up)("el-button"),J=(0,o.up)("el-tooltip"),X=(0,o.up)("el-col"),ee=(0,o.up)("el-input"),te=(0,o.up)("el-option"),ae=(0,o.up)("el-select"),oe=(0,o.up)("el-row"),re=(0,o.up)("el-table-column"),le=(0,o.up)("star-filled"),ne=(0,o.up)("el-icon"),se=(0,o.up)("el-link"),ue=(0,o.up)("database-icon"),ie=(0,o.up)("el-tag"),me=(0,o.up)("arrow-down"),pe=(0,o.up)("el-dropdown-item"),de=(0,o.up)("el-dropdown-menu"),ce=(0,o.up)("el-dropdown"),ge=(0,o.up)("el-table"),he=(0,o.up)("el-pagination"),we=(0,o.up)("el-form-item"),be=(0,o.up)("el-descriptions-item"),fe=(0,o.up)("el-descriptions"),ye=(0,o.up)("check"),je=(0,o.up)("close"),Ce=(0,o.up)("el-tab-pane"),_e=(0,o.up)("el-switch"),We=(0,o.up)("el-space"),ke=(0,o.up)("el-tabs"),Pe=(0,o.up)("el-divider"),Se=(0,o.up)("el-form"),Fe=(0,o.up)("el-dialog"),Re=(0,o.up)("el-drawer"),Ue=(0,o.up)("el-affix"),De=(0,o.Q2)("require-roles");return(0,o.wg)(),(0,o.j4)(ke,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Ce,{label:"项目列表"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe,{gutter:12},{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(X,{xs:24,sm:6,md:4,lg:2,style:{"margin-bottom":"12px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(J,{content:"新建一个新项目",placement:"top"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"primary",style:{width:"100%"},icon:"plus",onClick:K.toCreateProject},{default:(0,o.w5)((()=>[l])),_:1},8,["onClick"])])),_:1})])),_:1})),[[De,["SYS_OWNER","GROUP_OWNER?groupId="+Y.groupId,"GROUP_MEMBER?groupId="+Y.groupId]]]),(0,o.Wm)(X,{xs:24,sm:8,md:5,lg:6,style:{"margin-bottom":"12px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{onChange:K.onProjectQuery,modelValue:Y.projectFilter.nameContains,"onUpdate:modelValue":t[0]||(t[0]=e=>Y.projectFilter.nameContains=e),label:"项目名",placeholder:"项目名称搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])])),_:1}),(0,o.Wm)(X,{xs:24,sm:8,md:5,lg:6,style:{"margin-bottom":"12px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{onChange:K.onProjectQuery,modelValue:Y.projectFilter.databaseNameContains,"onUpdate:modelValue":t[1]||(t[1]=e=>Y.projectFilter.databaseNameContains=e),label:"数据库名",placeholder:"数据库名称搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])])),_:1}),(0,o.Wm)(X,{xs:24,sm:8,md:5,lg:6,style:{"margin-bottom":"12px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{onChange:K.onProjectQuery,modelValue:Y.projectFilter.schemaNameContains,"onUpdate:modelValue":t[2]||(t[2]=e=>Y.projectFilter.schemaNameContains=e),label:"Schema",placeholder:"Schema 名称搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])])),_:1}),(0,o.Wm)(X,{xs:24,sm:8,md:5,lg:4,style:{"margin-bottom":"12px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ae,{onChange:K.onProjectQuery,onClear:t[3]||(t[3]=e=>K.onProjectDatabaseTypeClear()),modelValue:Y.projectFilter.databaseType,"onUpdate:modelValue":t[4]||(t[4]=e=>Y.projectFilter.databaseType=e),placeholder:"选择数据库类型",clearable:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Y.databaseTypes,((e,t)=>((0,o.wg)(),(0,o.j4)(te,{key:t,label:e.databaseType,value:e.databaseType},null,8,["label","value"])))),128))])),_:1},8,["onChange","modelValue"])])),_:1})])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ge,{data:Y.projectPageData.data},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{prop:"id",label:"ID","min-width":"60"}),(0,o.Wm)(re,{label:"项目名称","min-width":"120",resizable:""},{default:(0,o.w5)((e=>[(0,o.Wm)(se,{underline:!1},{default:(0,o.w5)((()=>[e.row.isFavorite?((0,o.wg)(),(0,o.j4)(ne,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(le)])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(se,{underline:!0,onClick:t=>K.toDocumentPage(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.name),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:1}),(0,o.Wm)(re,{prop:"databaseName",label:"数据库",width:"200",resizable:""}),(0,o.Wm)(re,{prop:"schemaName",label:"Schema",width:"200",resizable:""}),(0,o.Wm)(re,{label:"数据库类型"},{default:(0,o.w5)((e=>[(0,o.Wm)(ue,{databaseType:e.row.databaseType,icon:K.databaseTypeIcon(e.row)},null,8,["databaseType","icon"])])),_:1}),(0,o.Wm)(re,{prop:"description",label:"说明","min-width":"160",resizable:""}),(0,o.Wm)(re,{label:"定时同步",align:"center"},{default:(0,o.w5)((e=>[e.row.isAutoSync?((0,o.wg)(),(0,o.j4)(ie,{key:0},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.row.autoSyncCron),1)])),_:2},1024)):((0,o.wg)(),(0,o.iD)("span",n," 无 "))])),_:1}),(0,o.Wm)(re,{prop:"createAt",label:"创建时间","min-width":"120",resizable:""}),(0,o.Wm)(re,{label:"操作","min-width":"180",align:"center",resizable:""},{default:(0,o.w5)((e=>[(0,o.Wm)(ce,null,{dropdown:(0,o.w5)((()=>[(0,o.Wm)(de,null,{default:(0,o.w5)((()=>[(0,o.Wm)(pe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"primary",plain:"",size:"small",onClick:t=>K.toEditProject(e.row),icon:"Edit"},{default:(0,o.w5)((()=>[u])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(pe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"primary",plain:"",size:"small",onClick:t=>K.toDocumentPage(e.row),icon:"View"},{default:(0,o.w5)((()=>[i])),_:2},1032,["onClick"])])),_:2},1024),(0,o.Wm)(pe,null,{default:(0,o.w5)((()=>[e.row.isFavorite?((0,o.wg)(),(0,o.j4)(H,{key:1,type:"primary",size:"small",onClick:t=>K.onRemoveProjectFavorite(e.row),icon:"StarFilled"},{default:(0,o.w5)((()=>[p])),_:2},1032,["onClick"])):((0,o.wg)(),(0,o.j4)(H,{key:0,type:"primary",plain:"",size:"small",onClick:t=>K.onAddProjectFavorite(e.row),icon:"Star"},{default:(0,o.w5)((()=>[m])),_:2},1032,["onClick"]))])),_:2},1024),(0,o.Wm)(pe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"primary",plain:"",size:"small",onClick:t=>K.toProjectOperationLogDrawer(e.row),icon:"Tickets"},{default:(0,o.w5)((()=>[d])),_:2},1032,["onClick"])])),_:2},1024),(0,o.wy)(((0,o.wg)(),(0,o.j4)(pe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"danger",plain:"",size:"small",onClick:t=>K.onProjectDelete(e.row.id),icon:"Remove"},{default:(0,o.w5)((()=>[c])),_:2},1032,["onClick"])])),_:2},1024)),[[De,["SYS_OWNER","GROUP_OWNER?groupId="+Y.groupId]]])])),_:2},1024)])),default:(0,o.w5)((()=>[(0,o._)("span",null,[s,(0,o.Wm)(ne,null,{default:(0,o.w5)((()=>[(0,o.Wm)(me)])),_:1})])])),_:2},1024)])),_:1})])),_:1},8,["data"])])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(he,{layout:"prev, pager, next","hide-on-single-page":!1,currentPage:Y.projectPageData.number,"page-size":Y.projectPageData.size,"page-count":Y.projectPageData.totalPages,onCurrentChange:K.onProjectListCurrentPageChange},null,8,["currentPage","page-size","page-count","onCurrentChange"])])),_:1})])),_:1}),(0,o.Wm)(Fe,{modelValue:Y.isShowProjectEditDialog,"onUpdate:modelValue":t[17]||(t[17]=e=>Y.isShowProjectEditDialog=e),width:"42%",center:"","destroy-on-close":""},{default:(0,o.w5)((()=>[(0,o.Wm)(Se,{model:Y.projectForm,"label-position":"top",rules:Y.projectFormRules,ref:"projectFormRulesRef"},{default:(0,o.w5)((()=>[(0,o.Wm)(ke,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Ce,{label:"基础配置"},{default:(0,o.w5)((()=>[g,(0,o.Wm)(oe,{gutter:33},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{xs:24,sm:24,md:12,lg:8},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"名称",prop:"name"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.name,"onUpdate:modelValue":t[5]||(t[5]=e=>Y.projectForm.name=e),placeholder:"项目名称"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(X,{xs:24,sm:24,md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"描述",prop:"description"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.description,"onUpdate:modelValue":t[6]||(t[6]=e=>Y.projectForm.description=e),type:"textarea",placeholder:"项目描述"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),h,(0,o.Wm)(oe,{gutter:33},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{xs:24,sm:24,md:12,lg:8},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"用户名",prop:"dataSource.username"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.dataSource.username,"onUpdate:modelValue":t[7]||(t[7]=e=>Y.projectForm.dataSource.username=e),placeholder:"root"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(X,{xs:24,sm:24,md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"密码",prop:"dataSource.password"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.dataSource.password,"onUpdate:modelValue":t[8]||(t[8]=e=>Y.projectForm.dataSource.password=e),placeholder:"**********",type:e.password,"show-password":""},null,8,["modelValue","type"])])),_:1})])),_:1}),(0,o.Wm)(X,{xs:24,sm:24,md:12,lg:8},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"地址",prop:"dataSource.url"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.dataSource.url,"onUpdate:modelValue":t[9]||(t[9]=e=>Y.projectForm.dataSource.url=e),placeholder:"127.0.0.1:3306"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(X,{xs:24,sm:24,md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"数据库类型",prop:"dataSource.databaseType"},{default:(0,o.w5)((()=>[(0,o.Wm)(ae,{modelValue:Y.projectForm.dataSource.databaseType,"onUpdate:modelValue":t[10]||(t[10]=e=>Y.projectForm.dataSource.databaseType=e),placeholder:"选择数据库类型",clearable:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Y.databaseTypes,((e,t)=>((0,o.wg)(),(0,o.j4)(te,{key:t,label:e.databaseType,value:e.databaseType},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(X,{xs:24,sm:24,md:12,lg:8},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"数据库名称",prop:"dataSource.databaseName"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.dataSource.databaseName,"onUpdate:modelValue":t[11]||(t[11]=e=>Y.projectForm.dataSource.databaseName=e),placeholder:"需要同步的数据库名称"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(X,{xs:24,sm:24,md:12},{default:(0,o.w5)((()=>[(0,o.Wm)(we,{label:"Schema 名称",prop:"dataSource.schemaName"},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.dataSource.schemaName,"onUpdate:modelValue":t[12]||(t[12]=e=>Y.projectForm.dataSource.schemaName=e),placeholder:"需要同步的 Schema 名称"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Y.projectForm.dataSource.properties,((e,t)=>((0,o.wg)(),(0,o.j4)(we,{label:t>0?"":"属性",key:t},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{xs:24,sm:8,md:6,style:{"margin-right":"18px","margin-bottom":"12px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:e.key,"onUpdate:modelValue":t=>e.key=t,modelModifiers:{trim:!0},placeholder:"Key"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,o.Wm)(X,{xs:24,sm:8,md:6,style:{"margin-right":"18px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,modelModifiers:{trim:!0},placeholder:"Value"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,o.Wm)(X,{xs:24,sm:12,md:8},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"text",size:"small",onClick:e=>K.removeDataSourceProperty(t),style:{color:"#F56C6C"}},{default:(0,o.w5)((()=>[w])),_:2},1032,["onClick"]),t+1==Y.projectForm.dataSource.properties.length?((0,o.wg)(),(0,o.j4)(H,{key:0,type:"text",size:"small",onClick:K.addDataSourceProperty},{default:(0,o.w5)((()=>[b])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1032,["label"])))),128)),0==Y.projectForm.dataSource.properties.length?((0,o.wg)(),(0,o.j4)(we,{key:0,label:"属性"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"text",size:"small",onClick:K.addDataSourceProperty},{default:(0,o.w5)((()=>[f])),_:1},8,["onClick"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(fe,{column:2,border:"",style:{"margin-bottom":"20px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(be,{label:"连接地址验证"},{default:(0,o.w5)((()=>[(0,o.Wm)(J,{content:"地址不包含属性配置，若地址不对请联系管理员修改对应数据库类型配置"},{default:(0,o.w5)((()=>[(0,o.Wm)(se,{underline:!1,type:"warning"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(K.sampleUrl()),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(we,null,{default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[Y.testConnectionState.isTest?((0,o.wg)(),(0,o.j4)(H,{key:0,plain:"",circle:"",type:Y.testConnectionState.buttonType,size:"small"},{default:(0,o.w5)((()=>[Y.testConnectionState.success?((0,o.wg)(),(0,o.j4)(ne,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(ye)])),_:1})):((0,o.wg)(),(0,o.j4)(ne,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(je)])),_:1}))])),_:1},8,["type"])):(0,o.kq)("",!0),(0,o.Wm)(H,{type:Y.testConnectionState.buttonType,plain:"",size:"small",onClick:t[13]||(t[13]=e=>K.onTestConnection("projectFormRulesRef")),loading:Y.loading.testConnection},{default:(0,o.w5)((()=>[y])),_:1},8,["type","loading"])])),_:1}),Y.testConnectionState.isTest&&!Y.testConnectionState.success?((0,o.wg)(),(0,o.j4)(X,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(se,{type:"danger",underline:!1},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(Y.testConnectionState.message),1)])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o.Wm)(Ce,{label:"高级配置"},{default:(0,o.w5)((()=>[j,(0,o.Wm)(we,{label:"定时同步"},{default:(0,o.w5)((()=>[(0,o.Wm)(We,{wrap:"",size:33},{default:(0,o.w5)((()=>[(0,o.Wm)(_e,{modelValue:Y.projectForm.projectSyncRule.isAutoSync,"onUpdate:modelValue":t[14]||(t[14]=e=>Y.projectForm.projectSyncRule.isAutoSync=e)},null,8,["modelValue"]),Y.projectForm.projectSyncRule.isAutoSync?((0,o.wg)(),(0,o.j4)(ee,{key:0,modelValue:Y.projectForm.projectSyncRule.autoSyncCron,"onUpdate:modelValue":t[15]||(t[15]=e=>Y.projectForm.projectSyncRule.autoSyncCron=e),placeholder:"CRON 表达式"},null,8,["modelValue"])):(0,o.kq)("",!0)])),_:1})])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Y.projectForm.projectSyncRule.ignoreTableNameRegexes,((e,t)=>((0,o.wg)(),(0,o.j4)(we,{label:t>0?"":"忽略表名称（支持正则表达式）",key:t},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{xs:24,sm:12,md:8,style:{"margin-right":"18px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.projectSyncRule.ignoreTableNameRegexes[t],"onUpdate:modelValue":e=>Y.projectForm.projectSyncRule.ignoreTableNameRegexes[t]=e,placeholder:"name regex"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,o.Wm)(X,{xs:24,sm:12,md:8},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"text",size:"small",onClick:e=>K.removeIgnoreTableName(t),style:{color:"#F56C6C"}},{default:(0,o.w5)((()=>[C])),_:2},1032,["onClick"]),t+1==Y.projectForm.projectSyncRule.ignoreTableNameRegexes.length?((0,o.wg)(),(0,o.j4)(H,{key:0,type:"text",size:"small",onClick:K.addIgnoreTableName},{default:(0,o.w5)((()=>[_])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1032,["label"])))),128)),0==Y.projectForm.projectSyncRule.ignoreTableNameRegexes.length?((0,o.wg)(),(0,o.j4)(we,{key:0,label:"忽略表名称（支持正则表达式）"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"text",size:"small",onClick:K.addIgnoreTableName},{default:(0,o.w5)((()=>[W])),_:1},8,["onClick"])])),_:1})):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Y.projectForm.projectSyncRule.ignoreColumnNameRegexes,((e,t)=>((0,o.wg)(),(0,o.j4)(we,{label:t>0?"":"忽略列名称（支持正则表达式）",key:t},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{xs:24,sm:12,md:8,style:{"margin-right":"18px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{modelValue:Y.projectForm.projectSyncRule.ignoreColumnNameRegexes[t],"onUpdate:modelValue":e=>Y.projectForm.projectSyncRule.ignoreColumnNameRegexes[t]=e,placeholder:"name regex"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,o.Wm)(X,{xs:24,sm:12,md:8},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"text",size:"small",onClick:e=>K.removeIgnoreColumnName(t),style:{color:"#F56C6C"}},{default:(0,o.w5)((()=>[k])),_:2},1032,["onClick"]),t+1==Y.projectForm.projectSyncRule.ignoreColumnNameRegexes.length?((0,o.wg)(),(0,o.j4)(H,{key:0,type:"text",size:"small",onClick:K.addIgnoreColumnName},{default:(0,o.w5)((()=>[P])),_:1},8,["onClick"])):(0,o.kq)("",!0)])),_:2},1024)])),_:2},1032,["label"])))),128)),0==Y.projectForm.projectSyncRule.ignoreColumnNameRegexes.length?((0,o.wg)(),(0,o.j4)(we,{key:1,label:"忽略列名称（支持正则表达式）"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"text",size:"small",onClick:K.addIgnoreColumnName},{default:(0,o.w5)((()=>[S])),_:1},8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1})])),_:1}),(0,o.Wm)(we,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Pe,{"content-position":"center"}),(0,o.Wm)(H,{type:"primary",onClick:t[16]||(t[16]=e=>K.onProjectFormSave("projectFormRulesRef"))},{default:(0,o.w5)((()=>[F])),_:1}),(0,o.Wm)(H,{onClick:K.onProjectFormCancel},{default:(0,o.w5)((()=>[R])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"]),(0,o.Wm)(Re,{modelValue:Y.isShowProjectOperationLogDrawer,"onUpdate:modelValue":t[18]||(t[18]=e=>Y.isShowProjectOperationLogDrawer=e),title:"项目日志",size:"50%"},{default:(0,o.w5)((()=>[(0,o.Wm)(ge,{data:Y.projectOperationLogPageData.data},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{prop:"id",label:"ID"}),(0,o.Wm)(re,{prop:"operatorNickname",label:"操作人"}),(0,o.Wm)(re,{prop:"operationName",label:"操作"}),(0,o.Wm)(re,{label:"状态"},{default:(0,o.w5)((e=>[e.row.isSuccess?((0,o.wg)(),(0,o.iD)("span",U,[(0,o.Wm)(ie,{type:"success"},{default:(0,o.w5)((()=>[D])),_:1})])):((0,o.wg)(),(0,o.iD)("span",z,[(0,o.Wm)(ie,{type:"danger"},{default:(0,o.w5)((()=>[x])),_:1})]))])),_:1}),(0,o.Wm)(re,{label:"错误信息"},{default:(0,o.w5)((e=>[e.row.isSuccess?((0,o.wg)(),(0,o.iD)("span",N)):((0,o.wg)(),(0,o.iD)("span",V,(0,r.zw)(e.row.operationResponse.errMessage),1))])),_:1}),(0,o.Wm)(re,{prop:"createAt",label:"记录时间"})])),_:1},8,["data"]),(0,o.Wm)(he,{layout:"prev, pager, next","hide-on-single-page":!1,currentPage:Y.projectOperationLogPageData.number,"page-size":Y.projectOperationLogPageData.size,"page-count":Y.projectOperationLogPageData.totalPages,onCurrentChange:K.onProjectOperationLogCurrentPageChange},null,8,["currentPage","page-size","page-count","onCurrentChange"])])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(Ce,{label:"分组成员"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe,{gutter:33},{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(X,{span:3},{default:(0,o.w5)((()=>[(0,o.Wm)(J,{content:"添加一个新组员",placement:"top"},{default:(0,o.w5)((()=>[(0,o.Wm)(H,{type:"primary",style:{width:"100%"},icon:"plus",onClick:t[19]||(t[19]=e=>K.onClickShowAddGroupMemberDrawer())},{default:(0,o.w5)((()=>[M])),_:1})])),_:1})])),_:1})),[[De,["SYS_OWNER","GROUP_OWNER?groupId="+Y.groupId]]]),(0,o.Wm)(X,{span:8},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{onChange:t[20]||(t[20]=e=>K.onGroupMemberQuery()),modelValue:Y.groupMemberFilter.nicknameOrUsernameOrEmailContains,"onUpdate:modelValue":t[21]||(t[21]=e=>Y.groupMemberFilter.nicknameOrUsernameOrEmailContains=e),placeholder:"成员昵称、用户名、邮箱搜索","prefix-icon":"search"},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ge,{data:Y.groupMemberPageData.data,border:"",width:"80%"},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{prop:"userId",label:"用户 ID","min-width":"60"}),(0,o.Wm)(re,{prop:"nickname",label:"昵称","min-width":"120",resizable:""}),(0,o.Wm)(re,{prop:"username",label:"用户名","min-width":"120",resizable:""}),(0,o.Wm)(re,{prop:"email",label:"邮箱",width:"200",resizable:""}),(0,o.Wm)(re,{label:Y.roleColumnLabel,resizable:"",align:"center"},{header:(0,o.w5)((()=>[(0,o.Wm)(ce,null,{dropdown:(0,o.w5)((()=>[(0,o.Wm)(de,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(Y.roleAndNameMap,((e,t)=>((0,o.wg)(),(0,o.j4)(pe,{key:t,onClick:t=>K.onGroupMemberRoleFilter(e),icon:e.icon},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.text),1)])),_:2},1032,["onClick","icon"])))),128))])),_:1})])),default:(0,o.w5)((()=>[(0,o._)("span",null,[(0,o.Uk)((0,r.zw)(Y.roleColumnLabel)+" ",1),(0,o.Wm)(ne,null,{default:(0,o.w5)((()=>[(0,o.Wm)(me)])),_:1})])])),_:1})])),default:(0,o.w5)((e=>["GROUP_OWNER"==e.row.role?((0,o.wg)(),(0,o.j4)(ie,{key:0,type:"danger",effect:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(K.formatRoleName(e.row.role)),1)])),_:2},1024)):((0,o.wg)(),(0,o.j4)(ie,{key:1,effect:"plain"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(K.formatRoleName(e.row.role)),1)])),_:2},1024))])),_:1},8,["label"]),(0,o.Wm)(re,{prop:"createAt",label:"入组时间","min-width":"160",resizable:""}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(re,{label:"操作","min-width":"120",resizable:""},{default:(0,o.w5)((e=>[(0,o.Wm)(H,{type:"danger",size:"small",onClick:t=>K.onGroupMemberRemove(e.row.nickname,e.row.userId),plain:""},{default:(0,o.w5)((()=>[O])),_:2},1032,["onClick"]),"GROUP_MEMBER"==e.row.role?((0,o.wg)(),(0,o.j4)(H,{key:0,plain:"",size:"small",onClick:t=>K.onGroupMemberRoleUpdate(e.row,"GROUP_OWNER")},{default:(0,o.w5)((()=>[v])),_:2},1032,["onClick"])):((0,o.wg)(),(0,o.j4)(H,{key:1,size:"small",onClick:t=>K.onGroupMemberRoleUpdate(e.row,"GROUP_MEMBER"),plain:""},{default:(0,o.w5)((()=>[T])),_:2},1032,["onClick"]))])),_:1})),[[De,["SYS_OWNER","GROUP_OWNER?groupId="+Y.groupId]]])])),_:1},8,["data"])])),_:1})])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(he,{layout:"prev, pager, next","hide-on-single-page":!1,currentPage:Y.groupMemberPageData.number,"page-size":Y.groupMemberPageData.size,"page-count":Y.groupMemberPageData.totalPages,onCurrentChange:K.onGroupMemberCurrentPageChange},null,8,["currentPage","page-size","page-count","onCurrentChange"])])),_:1})])),_:1}),(0,o.Wm)(Re,{modelValue:Y.isShowAddGroupMemberDrawer,"onUpdate:modelValue":t[23]||(t[23]=e=>Y.isShowAddGroupMemberDrawer=e),title:"添加成员",direction:"btt",size:"50%"},{default:(0,o.w5)((()=>[(0,o.Wm)(Ue,{offset:0,position:"top",target:".el-drawer__body"},{default:(0,o.w5)((()=>[(0,o.Wm)(oe,{gutter:33},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)(ee,{onChange:K.fetchUsers,modelValue:Y.userPageQuery.nicknameOrUsernameOrEmailContains,"onUpdate:modelValue":t[22]||(t[22]=e=>Y.userPageQuery.nicknameOrUsernameOrEmailContains=e),label:"用户名",placeholder:"输入昵称、用户名或邮箱搜索","prefix-icon":"search"},null,8,["onChange","modelValue"])])),_:1}),(0,o.Wm)(X,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)(he,{layout:"sizes, prev, pager, next","hide-on-single-page":!1,currentPage:Y.userPageQuery.number,"page-size":Y.userPageQuery.size,"page-sizes":[5,10,20,30],"page-count":Y.userPageData.totalPages,onSizeChange:K.onUserPageSizeChange,onCurrentChange:K.fetchUsers},null,8,["currentPage","page-size","page-count","onSizeChange","onCurrentChange"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(oe,null,{default:(0,o.w5)((()=>[(0,o.Wm)(X,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ge,{data:Y.userPageData.data,style:{width:"100%"},border:""},{default:(0,o.w5)((()=>[(0,o.Wm)(re,{prop:"id",label:"用户 ID",width:"80"}),(0,o.Wm)(re,{prop:"nickname",label:"昵称"}),(0,o.Wm)(re,{prop:"username",label:"用户名"}),(0,o.Wm)(re,{prop:"email",label:"邮箱"}),(0,o.Wm)(re,{label:"启用状态",width:"100"},{default:(0,o.w5)((e=>[e.row.enabled?((0,o.wg)(),(0,o.iD)("span",I,[(0,o.Wm)(ie,{type:"success"},{default:(0,o.w5)((()=>[E])),_:1})])):((0,o.wg)(),(0,o.iD)("span",G,[(0,o.Wm)(ie,{type:"danger"},{default:(0,o.w5)((()=>[Z])),_:1})]))])),_:1}),(0,o.Wm)(re,{label:"操作"},{default:(0,o.w5)((e=>[K.isInGroup(e.row)?((0,o.wg)(),(0,o.iD)("span",L,[(0,o.Wm)(H,{type:"danger",size:"small",onClick:t=>K.onGroupMemberRemove(e.row.nickname,e.row.id),plain:""},{default:(0,o.w5)((()=>[$])),_:2},1032,["onClick"])])):((0,o.wg)(),(0,o.iD)("span",A,[(0,o.Wm)(H,{type:"primary",plain:"",size:"small",onClick:t=>K.onGroupMemberAdd(e.row.id,"GROUP_MEMBER")},{default:(0,o.w5)((()=>[Q])),_:2},1032,["onClick"]),(0,o.Wm)(H,{type:"plain",plain:"",size:"small",onClick:t=>K.onGroupMemberAdd(e.row.id,"GROUP_OWNER")},{default:(0,o.w5)((()=>[q])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}var Y=a(9324),K=a(8337),H=a(3110),J=a(5430),X=a(610),ee=a(6299),te=a(9080),ae={data(){return{isShowProjectEditDialog:!1,isShowAddGroupMemberDrawer:!1,isShowProjectOperationLogDrawer:!1,projectPageData:{data:[],number:1,size:15,totalElements:0,totalPages:1},projectFilter:{page:0,size:15,groupId:null,databaseType:null,nameContains:null,databaseNameContains:null},groupMemberPageData:{data:[],number:1,size:10,totalElements:0,totalPages:1},groupMemberFilter:{page:0,size:10,role:null,nicknameOrUsernameOrEmailContains:null},userPageQuery:{page:0,size:10,nicknameOrUsernameOrEmailContains:null},userPageData:{data:[],number:1,size:8,totalElements:0,totalPages:1},projectForm:{id:null,name:null,description:null,groupId:null,dataSource:{username:null,databaseType:null,databaseName:null,password:null,url:null,properties:[]},projectSyncRule:{isAutoSync:!1,autoSyncCron:null,ignoreTableNameRegexes:[],ignoreColumnNameRegexes:[]}},projectFormRules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],dataSource:{username:[{required:!0,message:"数据库用户名不能为空",trigger:"blur"}],url:[{required:!0,message:"数据库连接地址不能为空",trigger:"blur"}],databaseName:[{required:!0,message:"数据库名称不能为空",trigger:"blur"}],schemaName:[{required:!0,message:"schema 名称不能为空",trigger:"blur"}],databaseType:[{required:!0,message:"请选择数据库类型",trigger:"change"}]}},testConnectionState:{buttonType:"primary",isTest:!1,success:!1,message:null},loading:{testConnection:!1},projectOperationLogPageData:{data:[],number:1,size:10,totalElements:0,totalPages:1},projectOperationLogPageQuery:{page:0,size:10,involveProjectId:null,module:"project"},groupId:null,databaseTypes:[],roleColumnLabel:"角色",roleAndNameMap:[{text:"全部",icon:"List"},{text:"组长",value:"GROUP_OWNER",icon:"UserFilled"},{text:"组员",value:"GROUP_MEMBER",icon:"User"}]}},mounted(){(0,ee.ns)().then((e=>{this.databaseTypes=e.data}))},created(){this.$route.params.groupId&&(this.projectFilter.groupId=this.$route.params.groupId,this.groupId=this.$route.params.groupId),this.$watch((()=>this.projectForm.dataSource),(()=>{this.testConnectionState.isTest=!1,this.testConnectionState.buttonType="primary"}),{deep:!0}),this.fetchGroupProjects(),this.fetchGroupMembers()},methods:{formatRoleName(e){return"GROUP_OWNER"==e?"组长":"GROUP_MEMBER"==e?"组员":"未知"},fetchGroupMembers(e){this.groupMemberFilter.page=e?e-1:0,(0,K.yF)(this.$route.params.groupId,this.groupMemberFilter).then((e=>{this.groupMemberPageData.data=e.data.content,this.groupMemberPageData.number=e.data.number+1,this.groupMemberPageData.size=e.data.size,this.groupMemberPageData.totalPages=e.data.totalPages,this.groupMemberPageData.totalElements=e.data.totalElements}))},onGroupRoleFilterClear(){this.groupMemberFilter.role=null},onGroupMemberQuery(){this.groupMemberFilter.page=0,this.fetchGroupMembers()},onGroupMemberRoleFilter(e){e.value?(this.roleColumnLabel=e.text,this.groupMemberFilter.role=e.value):(this.roleColumnLabel="角色",this.groupMemberFilter.role=null),this.onGroupMemberQuery()},onGroupMemberCurrentPageChange(e){e&&e-1!=this.groupMemberFilter.page&&(this.groupMemberFilter.page=e-1,this.fetchGroupMembers())},onGroupMemberRemove(e,t){const a=this.$route.params.groupId;this.$confirm("确认移除成员["+e+"]","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,K._j)(a,t).then((e=>{e.errCode||(this.$message.success("移除成功"),this.fetchGroupMembers(),this.isShowAddGroupMemberDrawer&&this.userPageData.data.filter((e=>e.id==t)).forEach((e=>{const t=e.inGroupIds.indexOf(this.groupId);e.inGroupIds.splice(t,1)})))}))}))},onGroupMemberRoleUpdate(e,t){const a=this.$route.params.groupId;(0,K.q9)(a,e.userId,t).then((a=>{if(!a.errCode){const a="GROUP_OWNER"==t?"组长":"组员";this.$message.success("成功设置为"+a),e.role=t}}))},isInGroup(e){return e.inGroupIds.some((e=>e==this.groupId))},fetchUsers(e){this.userPageQuery.page=e?e-1:null,(0,H.yw)(this.userPageQuery).then((e=>{e.errCode||(this.userPageData.data=e.data.content,this.userPageData.number=e.data.number+1,this.userPageData.size=e.data.size,this.userPageData.totalPages=e.data.totalPages,this.userPageData.totalElements=e.data.totalElements)}))},onClickShowAddGroupMemberDrawer(){this.isShowAddGroupMemberDrawer=!0,this.fetchUsers()},onGroupMemberAdd(e,t){const a={userId:e,role:t},o=this.$route.params.groupId;(0,K.E2)(o,a).then((t=>{t.errCode||(this.$message.success("添加成功"),this.userPageData.data.filter((t=>t.id==e)).forEach((e=>{e.inGroupIds.push(this.groupId)})),this.fetchGroupMembers())}))},onUserPageSizeChange(e){e&&(this.userPageQuery.size=e,this.fetchUsers())},fetchGroupProjects(){""==this.projectFilter.databaseType&&(this.projectFilter.databaseType=null),(0,Y.hW)(this.projectFilter).then((e=>{e.errCode||(this.projectPageData.data=e.data.content,this.projectPageData.number=e.data.number+1,this.projectPageData.size=e.data.size,this.projectPageData.totalPages=e.data.totalPages,this.projectPageData.totalElements=e.data.totalElements)}))},onProjectDatabaseTypeClear(){this.projectFilter.databaseType=null},onProjectQuery(){this.projectFilter.page=0,this.fetchGroupProjects()},onProjectListCurrentPageChange(e){e&&e-1!=this.projectFilter.page&&(this.projectFilter.page=e-1,this.fetchGroupProjects())},onProjectDelete(e){this.$confirm("确认删除该项目？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,Y.jI)(this.groupId,e).then((e=>{e.errCode||((0,X.z8)({showClose:!0,message:"删除成功",type:"success",duration:3e3}),this.onProjectQuery())}))}))},onAddProjectFavorite(e){(0,te.a3)(e.id).then((t=>{t.errCode||(this.$message.success("关注成功"),e.isFavorite=!0)}))},onRemoveProjectFavorite(e){(0,te.Ni)(e.id).then((t=>{t.errCode||(this.$message.success("取消成功"),e.isFavorite=!1)}))},toEditProject(e){(0,Y.Rp)(e.id).then((e=>{this.projectForm=e.data,this.isShowProjectEditDialog=!0}))},toCreateProject(){const e=this.$route.params.groupId;this.projectForm={id:null,name:null,description:null,groupId:e,dataSource:{username:null,databaseType:null,databaseName:null,password:null,url:null,properties:[]},projectSyncRule:{isAutoSync:!1,autoSyncCron:null,ignoreTableNameRegexes:[],ignoreColumnNameRegexes:[]}},this.isShowProjectEditDialog=!0},toDocumentPage(e){const t=this.$route.params.groupId,a=e.id;this.$router.push({path:"/groups/"+t+"/projects/"+a+"/documents",query:{projectName:e.name}})},databaseTypeIcon(e){const t=this.databaseTypes.find((t=>t.databaseType==e.databaseType));return t?t.icon:null},fetchProjectOperationLogs(e){this.projectOperationLogPageQuery.page=e?e-1:null,(0,J.v)(this.projectOperationLogPageQuery).then((e=>{e.errCode||(this.projectOperationLogPageData.data=e.data.content,this.projectOperationLogPageData.number=e.data.number+1,this.projectOperationLogPageData.size=e.data.size,this.projectOperationLogPageData.totalPages=e.data.totalPages,this.projectOperationLogPageData.totalElements=e.data.totalElements)}))},onProjectOperationLogCurrentPageChange(e){e&&this.fetchProjectOperationLogs(e)},toProjectOperationLogDrawer(e){this.projectOperationLogPageQuery.involveProjectId=e.id,this.onProjectOperationLogCurrentPageChange(1),this.isShowProjectOperationLogDrawer=!0},onProjectFormSave(){this.$refs.projectFormRulesRef.validate((e=>e?this.projectForm.id||this.projectForm.dataSource.password?void(0,Y.Iu)(this.projectForm).then((e=>(e.errCode||(this.$message.success("保存成功"),this.fetchGroupProjects(),this.isShowProjectEditDialog=!1),!0))):(this.$message.error("请填写数据库连接密码"),!1):(this.$message.error("请填写表单必填项"),!1)))},onProjectFormCancel(){this.isShowProjectEditDialog=!1},addDataSourceProperty(){this.projectForm.dataSource.properties.push({key:"",value:""})},removeDataSourceProperty(e){this.projectForm.dataSource.properties.splice(e,1)},addIgnoreTableName(){this.projectForm.projectSyncRule.ignoreTableNameRegexes.push("")},removeIgnoreTableName(e){this.projectForm.projectSyncRule.ignoreTableNameRegexes.splice(e,1)},addIgnoreColumnName(){this.projectForm.projectSyncRule.ignoreColumnNameRegexes.push("")},removeIgnoreColumnName(e){this.projectForm.projectSyncRule.ignoreColumnNameRegexes.splice(e,1)},sampleUrl(){const e=this.databaseTypes.find((e=>e.databaseType==this.projectForm.dataSource.databaseType));return e&&0!=e.length?e.urlPattern.replace("{{jdbc.protocol}}",e.jdbcProtocol).replace("{{db.name}}",this.projectForm.dataSource.databaseName).replace("{{db.schema}}",this.projectForm.dataSource.schemaName).replace("{{db.url}}",this.projectForm.dataSource.url):""},onTestConnection(){this.loading.testConnection=!0,this.$refs.projectFormRulesRef.validate((e=>{if(!e)return this.$message.error("请填写表单必填项"),this.loading.testConnection=!1,!1;if(!this.projectForm.id&&!this.projectForm.dataSource.password)return this.$message.error("请填写数据库连接密码"),this.loading.testConnection=!1,!1;const t={projectId:this.projectForm.id,databaseType:this.projectForm.dataSource.databaseType,databaseName:this.projectForm.dataSource.databaseName,schemaName:this.projectForm.dataSource.schemaName,username:this.projectForm.dataSource.username,password:this.projectForm.dataSource.password,url:this.projectForm.dataSource.url,properties:this.projectForm.dataSource.properties};(0,Y.M7)(t).then((e=>{e.errCode?(this.testConnectionState.success=!1,this.testConnectionState.buttonType="danger"):(this.testConnectionState.success=!0,this.testConnectionState.buttonType="success",this.$message.success("连接成功")),this.testConnectionState.isTest=!0,this.testConnectionState.message=e.errMessage})).catch((e=>{console.log(e),this.$message.error("连接超时请稍后再试"),this.testConnectionState.message="连接超时请稍后再试",this.testConnectionState.buttonType="danger",this.testConnectionState.success=!1})).finally((()=>this.loading.testConnection=!1))}))}}},oe=a(3744);const re=(0,oe.Z)(ae,[["render",B]]);var le=re}}]);
//# sourceMappingURL=63.713e0b46.js.map