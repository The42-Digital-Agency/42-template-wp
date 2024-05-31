import{f as W,j as K,i as Y,a as Q,u as X}from"./links.C2upUfsO.js";import{l as Z}from"./license.sYpqoxga.js";import{o as N,p as tt}from"./helpers.D2xRWOvn.js";import{e as et}from"./regex.C2CBDGQi.js";import{N as ot}from"./Network.C9BjovRF.js";import{S as st,a as rt}from"./Ellipse.DXUYYFQW.js";import{C as F,B as it,b as nt}from"./Caret.iRBf3wcH.js";import{B as lt}from"./Editor.BQoT8XVY.js";import{C as at}from"./Card.BF8YEwxA.js";import{C as dt}from"./Index.CI2PYaF7.js";import{C as ct,S as ut}from"./Upload.0UV8MXJx.js";import{C as ht}from"./SettingsRow.DQldd-1Z.js";import{S as bt,D as pt}from"./Drag.CPKggSCj.js";import{x as w,o as g,c as k,F as A,K as D,l as C,m as _,a as n,t as b,d as T,C as l,D as R,H as mt,N as P,O as L,G as $}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as B}from"./_plugin-vue_export-helper.BN1snXvA.js";import{S as _t}from"./Plus.DrDYrwHh.js";import{S as ft}from"./External.Bfg4674G.js";import{S as wt}from"./index.BQgiQQKQ.js";import"./default-i18n.Bd0Z306Z.js";import"./upperFirst.CP4N4hLd.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.XwB3Xa5p.js";import"./Tooltip.Jp05nfCy.js";import"./Slide.CRIn0kdn.js";import"./params.B3T1WKlC.js";import"./Row.CzuhYwfs.js";const gt=t=>{const e=[];return Object.keys(t).forEach(r=>{r&&(e.push(`User-agent: ${r}`),Object.keys(t[r]).forEach(i=>{const[o,s]=t[r][i].split(":").map(h=>h.trim());e.push(`${o.charAt(0).toUpperCase()+o.slice(1)}: ${s}`)}),e.push(""))}),e.join(`\r
`)},E=t=>{const e={};return t.forEach(r=>{const i=JSON.parse(r);if(!(!i.userAgent||!i.fieldValue)){if(!e[i.userAgent]){e[i.userAgent]=[`${i.directive}: ${i.fieldValue}`];return}e[i.userAgent].push(`${i.directive}: ${i.fieldValue}`)}}),e},xt=t=>{const e=[],r=/^\/.*$/,i=(a,p,c,f,d={})=>{const x=`${f.tableIndex}${f.userAgent}${f.directive}${f.fieldValue}`;return a.find(m=>c==="defaultRuleOverride"&&m.hash===x&&m.message===c)||(a.push({type:p,message:c,hash:x,isNetworkIndex:d.isNetworkIndex,previewIndex:d.previewIndex,sourcePreviewIndex:(d==null?void 0:d.sourcePreviewIndex)||null,conflictingIndex:(d==null?void 0:d.conflictingIndex)||null,duplicateIndex:(d==null?void 0:d.duplicateIndex)||null,equivalentIndex:(d==null?void 0:d.equivalentIndex)||null,overriddenIndex:(d==null?void 0:d.overriddenIndex)||null}),e.push((d==null?void 0:d.overriddenIndex)||null)),a},o=(a,p)=>a+p;let s=[],h=0;for(const a in t){h=o(h,2);for(const[p,c]of Object.entries(t[a])){const[f,d]=[c.directive,c.fieldValue];if(!f||!d)continue;let x=h;for(let m=parseInt(p)+1;m<t[a].length;m++){const[S,y]=[t[a][m].directive,t[a][m].fieldValue];if(!(!S||!y)){if(h=o(h,1),`${f}${d}`==`${S}${y}`&&(s=i(s,"red","duplicateRule",t[a][m],{previewIndex:h,sourcePreviewIndex:x,isNetworkIndex:c.networkLevel,duplicateIndex:c.tableIndex})),f.match(/disallow|allow/i)&&S.match(/disallow|allow/i)){f!==S&&d===y&&(c.default?(e.includes(c.tableIndex)||x--,s=i(s,"yellow","defaultRuleOverride",t[a][m],{previewIndex:h,isNetworkIndex:c.networkLevel,overriddenIndex:c.tableIndex})):s=i(s,c.networkLevel?"yellow":"red","conflictingPath",t[a][m],{previewIndex:h,sourcePreviewIndex:c.networkLevel?null:x,isNetworkIndex:c.networkLevel,conflictingIndex:c.tableIndex}));const O=new RegExp(`^${et(y.replace(/\*+$/g,""))}$`);y.indexOf("*")!==-1&&d.match(O)&&(s=i(s,"red","equivalentPath",t[a][m],{previewIndex:h,sourcePreviewIndex:x,isNetworkIndex:c.networkLevel,equivalentIndex:c.tableIndex}))}f==="crawl-delay"&&S==="crawl-delay"&&d!==y&&(s=i(s,"red","conflictingCrawlDelay",t[a][m],{previewIndex:h,sourcePreviewIndex:x,isNetworkIndex:c.networkLevel,conflictingIndex:c.tableIndex}))}}if(h=x,f.match(/^clean-param/i)){const[m,S]=d.split(/\s+/).map(y=>y.trim());(!m||m.match(r)||S&&!S.match(r))&&(s=i(s,"red","invalidCleanParam",c,{previewIndex:h}))}if(f.match(/^crawl-delay/i)){const m=Number(d);(isNaN(m)||1>m)&&(s=i(s,"red","invalidCrawlDelay",c,{previewIndex:h}))}h=o(h,1)}}if(s.length)throw s;return!0},Rt={components:{CoreAlert:F},computed:{errorsByType(){return this.errors.reduce((t,e)=>(t[e.type]||(t[e.type]=[]),t[e.type].push(e),t),{})}},methods:{getErrorMessage(t){return t.message==="duplicateRule"?this.$t.sprintf(this.$t.__("This rule is a duplicate of rule #%1$s%2$s.",this.$td),t.duplicateIndex,t.isNetworkIndex?` (${this.strings.fromTheNetwork})`:""):t.message==="equivalentPath"?this.$t.sprintf(this.$t.__("Equivalent to rule #%1$s%2$s. The trailing wildcard is ignored.",this.$td),t.equivalentIndex,t.isNetworkIndex?` (${this.strings.fromTheNetwork})`:""):t.message==="conflictingPath"?this.$t.sprintf(this.$t.__("This rule conflicts with rule #%1$s%2$s.%3$s",this.$td),t.conflictingIndex,t.isNetworkIndex?` (${this.strings.fromTheNetwork})`:"",t.isNetworkIndex?` ${this.strings.networkRuleTakesPrecedence}`:` ${this.strings.allowTakesPrecedence}`):t.message==="defaultRuleOverride"?this.$t.sprintf(this.$t.__("This rule overrides the default rule #%1$s%2$s.",this.$td),t.overriddenIndex,t.isNetworkIndex?` (${this.strings.fromTheNetwork})`:""):t.message==="conflictingCrawlDelay"?this.$t.sprintf(this.$t.__("This rule conflicts with rule #%1$s%2$s.%3$s",this.$td),t.conflictingIndex,t.isNetworkIndex?` (${this.strings.fromTheNetwork})`:"",` ${this.strings.conflictingCrawlDelay}`):this.strings[t.message]}},props:{errors:{type:Array,required:!0}},data(){return{strings:{allowTakesPrecedence:this.$t.__('The "Allow" rule takes precedence.',this.$td),fromTheNetwork:this.$t.__("from the network level",this.$td),invalidCleanParam:this.$t.__("Clean-param must start with at least one param which is optionally followed by one path.",this.$td),invalidCrawlDelay:this.$t.__("Crawl-delay must be a number starting from 1.",this.$td),conflictingCrawlDelay:this.$t.__('For some crawlers, encountering conflicting "Crawl-delay" might lead to unpredictable behavior.',this.$td),networkRuleTakesPrecedence:this.$t.__("The network rule takes precedence.",this.$td)}}}},vt={key:0,class:"robots-editor-rule-error-alert"};function kt(t,e,r,i,o,s){const h=w("core-alert");return r.errors.length?(g(),k("div",vt,[(g(!0),k(A,null,D(s.errorsByType,(a,p)=>(g(),C(h,{key:p+"-errors",type:p,size:"small"},{default:_(()=>[(g(!0),k(A,null,D(a,(c,f)=>(g(),k("div",{key:f},[n("b",null,b(s.getErrorMessage(c)),1)]))),128))]),_:2},1032,["type"]))),128))])):T("",!0)}const Tt=B(Rt,[["render",kt]]),St={setup(){return{licenseStore:W(),networkStore:K(),notificationsStore:Y(),optionsStore:Q(),rootStore:X()}},components:{SvgDrag:bt,BaseButton:it,BaseEditor:lt,CoreAlert:F,CoreCard:at,CoreLoader:nt,CoreModal:dt,CoreNetworkSiteSelector:ct,CoreSettingsRow:ht,Draggable:pt,RuleErrors:Tt,SvgCirclePlus:_t,SvgEllipse:st,SvgExternal:ft,SvgTrash:wt,SvgUpload:ut},mixins:[ot,rt],data(){var t;return{currentSite:{},defaultRules:((t=this.rootStore.aioseo.data.robots)==null?void 0:t.defaultRules)||{},directiveOptions:[{value:"allow",label:"Allow"},{value:"disallow",label:"Disallow"},{value:"clean-param",label:"Clean-param"},{value:"crawl-delay",label:"Crawl-delay"}],errors:{deleteRobotsTxt:null,importAndDeleteRobotsTxt:null,importRobotsTxt:null,importRobotsTxtFromUrl:null,pasteRobotsTxtText:null,tableRule:[]},forceRobotsDetectedAlert:!1,inputImportRobotsTxtFromUrl:"",inputPasteRobotsTxtText:"",license:Z,loading:{btnDeleteRobotsTxt:!1,btnImportAndDeleteRobotsTxt:!1,btnImportRobotsTxt:!1,cardOverlay:!1},showImportModal:!1,strings:{addRule:this.$t.__("Add Rule",this.$td),allow:this.$t.__("Allow",this.$td),customRobotsPreview:this.$t.__("Custom Robots.txt Preview",this.$td),deleteRule:this.$t.__("Delete Rule",this.$td),description:this.$t.sprintf(this.$t.__("The robots.txt editor in %1$s allows you to set up a robots.txt file for your site that will override the default robots.txt file that WordPress creates. By creating a robots.txt file with %2$s you have greater control over the instructions you give web crawlers about your site.",this.$td),"AIOSEO","AIOSEO"),description2:this.$t.sprintf(this.$t.__("Just like WordPress, %1$s generates a dynamic file so there is no static file to be found on your server.  The content of the robots.txt file is stored in your WordPress database.",this.$td),"All in One SEO"),directive:this.$t.__("Directive",this.$td),disallow:this.$t.__("Disallow",this.$td),enableCustomRobots:this.$t.__("Enable Custom Robots.txt",this.$td),importAndDelete:this.$t.__("Import and Delete",this.$td),importFromUrl:this.$t.__("Import from URL",this.$td),importRobots:this.$t.__("Import Robots.txt",this.$td),networkAlert:this.$t.__("These custom robots.txt rules will apply globally to your entire network. To adjust the robots.txt rules for an individual site, please choose it in the list above.",this.$td),networkAlertLite:this.$t.__("These custom robots.txt rules will apply globally to your entire network. To adjust the robots.txt rules for an individual site, please visit the dashboard for that site directly and update the settings there.",this.$td),invalidRobotsTxtUrl:this.$t.__("Invalid robots.txt URL.",this.$td),openRobotsTxt:this.$t.__("Open Robots.txt",this.$td),pasteRobotsText:this.$t.__("Paste Robots.txt text",this.$td),userAgentNotFound:this.$t.__("No User-agent found in the content beginning.",this.$td),pasteUrl:this.$t.__("https://any-domain.com/robots.txt",this.$td),physicalRobotsFound:this.$t.sprintf(this.$t.__("%1$s has detected a physical robots.txt file in the root folder of your WordPress installation. We recommend removing this file as it could cause conflicts with WordPress' dynamically generated one. %2$s can import this file and delete it, or you can simply delete it.",this.$td),"AIOSEO","AIOSEO"),robotsEditor:this.$t.__("Robots.txt Editor",this.$td),selectSite:this.$t.__("Select Site",this.$td),userAgent:this.$t.__("User Agent",this.$td)}}},watch:{"networkStore.networkRobots":{deep:!0,handler(){var t;((t=this.currentSite)==null?void 0:t.blog_id)==="network"?this.optionsStore.networkOptions.tools.robots.rules=this.networkStore.networkRobots.rules:this.optionsStore.options.tools.robots.rules=this.networkStore.networkRobots.rules,this.$nextTick(()=>{this.validateRules()})}},currentSite(t,e){e.blog_id&&this.processFetchSiteRobots()},"getOptions.enable"(){this.validateRules(),this.maybeForceRobotsDetectedAlert()}},computed:{btnImportRobotsTxtDisabled(){return!this.inputImportRobotsTxtFromUrl&&!this.inputPasteRobotsTxtText?!0:this.errors.importRobotsTxtFromUrl||this.errors.pasteRobotsTxtText},getOptions(){var t;return((t=this.currentSite)==null?void 0:t.blog_id)==="network"?this.networkStore.getNetworkRobots:this.optionsStore.options.tools.robots},inputCustomRobotsTxtPreview(){const t=this.isNetworkSite&&this.optionsStore.networkOptions.tools.robots.enable?E(this.networkStore.getNetworkRobots.rules):{},e=E(this.networkStore.networkRobots.rules),r=`\r
`+this.rootStore.aioseo.data.robots.sitemapUrls.filter(o=>0<o.length).join(`\r
`);let i=this.getOptions.enable?this.mergeRuleset(this.defaultRules,this.mergeRuleset(t,e),!0):this.mergeRuleset(this.defaultRules,t);return i=gt(i)+r,i.replace(/<[^>]*>/g,"")},isNetworkSite(){var t;return this.rootStore.aioseo.data.isMultisite&&((t=this.currentSite)==null?void 0:t.blog_id)!=="network"},isValidRobotsSite(){var e;return new URL(this.robotsTxtUrl).pathname.match(/^\/robots.txt\/?/)?this.rootStore.aioseo.data.subdomain||((e=this.currentSite)==null?void 0:e.blog_id)==="network"||this.isMainSite(this.currentSite.domain,this.currentSite.path)||!this.rootStore.aioseo.data.isNetworkAdmin&&this.rootStore.aioseo.data.mainSite:!1},missingRewriteRules(){const t=this.$t.__("It looks like you are missing the proper rewrite rules for the robots.txt file.",this.$td);let e="";if(this.rootStore.aioseo.data.server.match(/apache|litespeed/)){const r=this.rootStore.aioseo.data.server==="apache"?"Apache":"LiteSpeed";e=this.$t.sprintf(this.$t.__("It appears that your server is running on %1$s, so the fix should be as simple as checking the %2$scorrect .htaccess implementation on wordpress.org%3$s.",this.$td),r,'<a href="https://wordpress.org/support/article/htaccess/" target="_blank">',"</a>")}else this.rootStore.aioseo.data.server==="nginx"&&(e=this.$t.sprintf(this.$t.__("It appears that your server is running on nginx, so the fix will most likely require adding the correct rewrite rules to our nginx configuration. %1$sCheck our documentation for more information%2$s.",this.$td),'<a href="'+this.$links.getDocUrl("robotsRewrite")+'" target="_blank">',"</a>"));return t+" "+e},parsedCustomRules(){const t=[];for(const e of this.networkStore.networkRobots.rules.values()){const r=JSON.parse(e);t.push({userAgent:r.userAgent,directive:r.directive,fieldValue:r.fieldValue,default:!1,networkLevel:!1})}return t},parsedDefaultRules(){const t=[];return Object.keys(this.defaultRules).forEach(e=>{for(const r of this.defaultRules[e].values()){const[i,o]=r.split(":").map(s=>s.trim());t.push({userAgent:e,directive:i,fieldValue:o,default:!0,networkLevel:!1})}}),t},parsedNetworkRules(){const t=this.isNetworkSite&&this.optionsStore.networkOptions.tools.robots.enable?this.networkStore.getNetworkRobots.rules:{},e=[];if(Object.keys(t).length)for(const r of t.values()){const i=JSON.parse(r);e.push({userAgent:i.userAgent,directive:i.directive,fieldValue:i.fieldValue,default:!1,networkLevel:!0})}return e},robotsPreviewErrorLabel(){const t=this.errors.tableRule.length?this.errors.tableRule.filter(i=>i.type==="red"):[];if(!t.length)return"";const e=N(t,"previewIndex"),r=tt(e).length;return this.$t.sprintf(this.$t._n("%1$s Error","%1$s Errors",r,this.$td),r)},robotsTxtUrl(){var t,e;return((t=this.currentSite)==null?void 0:t.blog_id)!=="network"&&((e=this.currentSite)!=null&&e.domain)?`${this.rootStore.aioseo.data.isSsl?"https://":"http://"}${this.currentSite.domain}${this.currentSite.path}robots.txt`:this.rootStore.aioseo.urls.robotsTxtUrl},subdirectoryAlert(){return this.isNetworkSite?this.$t.sprintf(this.$t.__("This site is running in a sub-directory of your main site located at %1$s. Your robots.txt file should only appear in the root directory of that site.",this.$td),'<a href="'+this.rootStore.aioseo.urls.mainSiteUrl+'" target="_blank"><strong>'+this.rootStore.aioseo.urls.mainSiteUrl+"</strong></a>"):this.$t.__("This site runs in a sub-directory. The robots.txt file must be located at the root of the website host to which it applies.",this.$td)},showRobotsDetectedAlert(){return this.getOptions.robotsDetected||this.forceRobotsDetectedAlert},tableRules:{get(){return this.networkStore.networkRobots.rules.map(t=>JSON.parse(t))},set(t){const e=[];t.forEach(r=>{e.push(JSON.stringify({userAgent:r.userAgent,directive:r.directive,fieldValue:r.fieldValue}))}),this.networkStore.networkRobots.rules=e}}},methods:{addRow(){this.networkStore.networkRobots.rules.push(JSON.stringify({userAgent:null,directive:"allow",fieldValue:null})),this.$nextTick(()=>{document.querySelector(".robots-editor-table__body .robots-editor-table__row:last-child input").focus()})},deleteRow(t){this.networkStore.networkRobots.rules.splice(t,1)},getTableIndexedRuleset(){const t=[],e=[],r=[...this.parsedDefaultRules,...this.parsedNetworkRules,...this.parsedCustomRules];let i=this.parsedDefaultRules.length,o=0;return r.forEach(s=>{s.tableIndex=s.networkLevel?++i:++o,e.push(s)}),e.forEach(s=>{if(!t[s.userAgent]){t[s.userAgent]=[s];return}t[s.userAgent].push(s)}),t},getTableRuleErrors(t,e){return this.errors.tableRule.length?this.errors.tableRule.filter(r=>r.hash===`${t}${e.userAgent}${e.directive}${e.fieldValue}`):[]},hasTableRuleError(t,e){return this.errors.tableRule.find(r=>{const i=t===(r.duplicateIndex||r.equivalentIndex||r.conflictingIndex)&&!r.isNetworkIndex,o=r.hash===`${t}${e.userAgent}${e.directive}${e.fieldValue}`;return i||o})||!1},hideRobotsDetected(){this.getOptions.robotsDetected=!1,this.optionsStore.saveChanges()},maybeForceRobotsDetectedAlert(){this.getOptions.enable||(this.forceRobotsDetectedAlert=!1),this.getOptions.enable&&this.rootStore.aioseo.data.robots.hasPhysicalRobots&&(this.forceRobotsDetectedAlert=!0)},mergeRuleset(t,e,r=!1){const i={...t};return Object.keys(e).forEach(o=>{if(!(o in i)){i[o]=e[o];return}for(const s of e[o].values()){const[h,a]=s.split(":").map(p=>p.trim());if(h.match(/disallow|allow/i)){const p=h==="disallow"?"allow":"disallow",c=i[o].indexOf(`${p}: ${a}`);c!==-1&&(r?i[o]=i[o].filter((f,d)=>d!==c):e[o]=e[o].filter(f=>f!==`${h}: ${a}`))}}i[o]=[...i[o],...e[o]]}),i},onChangeInputImportRobotsTxtFromUrl(t){this.inputImportRobotsTxtFromUrl=t,this.errors.importRobotsTxtFromUrl=null,t&&!t.match(/^https?:\/\/.{2,}\..{2,}\/robots\.txt$/)&&(this.errors.importRobotsTxtFromUrl=this.strings.invalidRobotsTxtUrl)},onChangeInputPasteRobotsTxtText(t){this.inputPasteRobotsTxtText=t.replace(/#[^\n\r]*/g,""),this.errors.pasteRobotsTxtText=null,this.inputPasteRobotsTxtText&&!this.inputPasteRobotsTxtText.match(/^\s*user-agent:\s*./gi)&&(this.errors.pasteRobotsTxtText=this.strings.userAgentNotFound)},onClickBtnDeleteRobotsTxt(){this.loading.btnDeleteRobotsTxt=!0,this.notificationsStore.processButtonAction("tools/delete-robots-txt").then(()=>window.location.reload()).catch(t=>{var e,r;this.loading.btnDeleteRobotsTxt=!1,this.errors.deleteRobotsTxt=((r=(e=t==null?void 0:t.response)==null?void 0:e.body)==null?void 0:r.message)||null})},onClickBtnImportAndDeleteRobotsTxt(){this.loading.btnImportAndDeleteRobotsTxt=!0,this.processImportRobotsTxt("static").then(()=>{window.location.reload()}).catch(t=>{var e,r;this.loading.btnImportAndDeleteRobotsTxt=!1,this.errors.importAndDeleteRobotsTxt=((r=(e=t==null?void 0:t.response)==null?void 0:e.body)==null?void 0:r.message)||null})},onClickBtnImportRobotsTxt(t){this.loading.btnImportRobotsTxt=!0,this.processImportRobotsTxt(t).then(()=>window.location.reload()).catch(e=>{var r,i;this.loading.btnImportRobotsTxt=!1,this.errors.importRobotsTxt=((i=(r=e==null?void 0:e.response)==null?void 0:r.body)==null?void 0:i.message)||null})},processFetchSiteRobots(){this.loading.cardOverlay=!0,this.networkStore.fetchSiteRobots(this.currentSite.blog_id).then(()=>this.loading.cardOverlay=!1)},processImportRobotsTxt(t){var e;return this.networkStore.importRobotsTxt({source:t,url:this.inputImportRobotsTxtFromUrl,text:this.inputPasteRobotsTxtText,networkLevel:this.rootStore.aioseo.data.isNetworkAdmin,blogId:((e=this.currentSite)==null?void 0:e.blog_id)||null})},sanitizeDirectiveValue(t,e,r){return r=decodeURIComponent(r.trim()),r&&(r=r.replace(/[><]/,""),e==="userAgent"&&(r=r.replace(/([^a-z0-9\-_*,.\s])/gi,""),r=r.replace(/\s+/g," ")),e==="fieldValue"&&t.directive.match(/allow|disallow/)&&(r=r.indexOf("*")===0&&1<r.length?r:"/"+r.replace(/(^\/+)/,"")),r)},async updateRule(t,e,r,i){this.networkStore.networkRobots.rules.splice(i,1,JSON.stringify(t)),await this.$nextTick(),t[e]=this.sanitizeDirectiveValue(t,e,r),this.networkStore.networkRobots.rules.splice(i,1,JSON.stringify(t))},validateRules(){if(!this.getOptions.enable)return this.errors.tableRule=[],!1;try{xt(this.getTableIndexedRuleset()),this.errors.tableRule=[]}catch(t){this.errors.tableRule=t,this.$nextTick(()=>{var a;const e=this.errors.tableRule.length?this.errors.tableRule.filter(p=>p.type==="red"):[],r=((a=this.$refs["input-custom-robots-txt-preview"])==null?void 0:a.$el.querySelector(".ql-editor"))||null;if(!r)return!1;const i=r.querySelectorAll("p"),o=N(e,"previewIndex"),s=N(e,"sourcePreviewIndex"),h=[...new Set([...o,...s])];for(const p of h)i[p-1]&&i[p-1].classList.add("has-error")})}}},mounted(){var t;this.networkStore.networkRobots.rules=((t=this.currentSite)==null?void 0:t.blog_id)==="network"?this.networkStore.getNetworkRobots.rules:this.optionsStore.options.tools.robots.rules,this.validateRules(),this.maybeForceRobotsDetectedAlert()}},yt={class:"aioseo-tools-robots-editor"},It={key:0,class:"aioseo-settings-row"},$t={class:"settings-name"},Ct={class:"name small-margin"},At={class:"settings-content"},Ot={class:"aioseo-settings-row"},Nt={class:"description"},Dt={class:"description"},Vt=["innerHTML"],Ut={key:1,class:"aioseo-settings-row"},Pt={class:"description"},Lt={class:"buttons description"},Et={key:2,class:"aioseo-settings-row"},Ft={class:"aioseo-settings-row"},Bt={class:"settings-content"},zt={class:"robots-editor-table"},Mt={class:"robots-editor-table__header"},Gt={class:"robots-editor-table__row"},qt=n("div",{class:"robots-editor-table__column"},"#",-1),jt={class:"robots-editor-table__column"},Jt={class:"robots-editor-table__column"},Ht={class:"robots-editor-table__column"},Wt=n("div",{class:"robots-editor-table__column"},null,-1),Kt={class:"robots-editor-table__body"},Yt={class:"robots-editor-table__column"},Qt={class:"robots-editor-table__column"},Xt={class:"robots-editor-table__column"},Zt={class:"robots-editor-table__column"},te=n("div",{class:"robots-editor-table__column"},null,-1),ee={class:"robots-editor-table__column robots-editor-table__column--truncate"},oe={class:"robots-editor-table__column"},se={class:"robots-editor-table__column"},re={class:"robots-editor-table__column"},ie={class:"robots-editor-table__column robots-editor-table__column--actions"},ne=["onClick","title"],le={class:"robots-editor-table__footer"},ae={class:"buttons"},de={class:"aioseo-settings-row aioseo-settings-row--preview-robots no-margin"},ce={class:"settings-name"},ue={class:"name"},he={key:0,class:"aioseo-error"},be={class:"settings-content"},pe={key:0,class:"aioseo-settings-row no-margin no-border"},me=["data-or"],_e={class:"settings-name"},fe={class:"name small-margin"},we={class:"settings-content settings-content--gap"},ge={class:"aioseo-settings-row"},xe={class:"settings-name"},Re={class:"name small-margin"},ve={class:"settings-content settings-content--gap"},ke={class:"buttons"},Te={key:5,class:"loader-overlay"};function Se(t,e,r,i,o,s){const h=w("core-network-site-selector"),a=w("core-alert"),p=w("base-button"),c=w("svg-external"),f=w("core-settings-row"),d=w("base-toggle"),x=w("base-input"),m=w("base-select"),S=w("svg-trash"),y=w("svg-drag"),O=w("rule-errors"),z=w("draggable"),M=w("svg-circle-plus"),G=w("svg-upload"),q=w("svg-ellipse"),V=w("base-editor"),j=w("core-modal"),J=w("core-loader"),H=w("core-card");return g(),k("div",yt,[l(H,{slug:"robotsEditor","header-text":o.strings.robotsEditor},{default:_(()=>{var U;return[i.rootStore.aioseo.data.isNetworkAdmin&&!i.licenseStore.isUnlicensed&&o.license.hasCoreFeature("tools","network-tools-robots")?(g(),k("div",It,[n("div",$t,[n("div",Ct,b(o.strings.selectSite),1)]),n("div",At,[l(h,{onSelectedSite:e[0]||(e[0]=u=>o.currentSite=u),"follow-selected-site":"","show-network":""})])])):T("",!0),n("div",Ot,[((U=this.currentSite)==null?void 0:U.blog_id)==="network"?(g(),C(a,{key:0},{default:_(()=>[R(b(i.licenseStore.isUnlicensed||!o.license.hasCoreFeature("tools","network-tools-robots")?o.strings.networkAlertLite:o.strings.networkAlert),1)]),_:1})):T("",!0),n("p",Nt,b(o.strings.description),1),n("p",Dt,[R(b(o.strings.description2)+" ",1),n("span",{innerHTML:t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"robotsEditor",!0)},null,8,Vt)])]),i.rootStore.aioseo.data.robots.hasPhysicalRobots&&s.showRobotsDetectedAlert?(g(),k("div",Ut,[o.errors.importAndDeleteRobotsTxt||o.errors.deleteRobotsTxt?(g(),C(a,{key:0,type:"red"},{default:_(()=>[R(b(o.errors.importAndDeleteRobotsTxt||o.errors.deleteRobotsTxt),1)]),_:1})):T("",!0),l(a,{type:"red","show-close":!s.getOptions.enable,onCloseAlert:s.hideRobotsDetected},{default:_(()=>[n("p",Pt,b(o.strings.physicalRobotsFound),1),n("p",Lt,[l(p,{type:"blue",size:"medium",onClick:s.onClickBtnImportAndDeleteRobotsTxt,loading:o.loading.btnImportAndDeleteRobotsTxt},{default:_(()=>[R(b(o.strings.importAndDelete),1)]),_:1},8,["onClick","loading"]),l(p,{type:"blue",size:"medium",onClick:s.onClickBtnDeleteRobotsTxt,loading:o.loading.btnDeleteRobotsTxt},{default:_(()=>[R(b(t.$constants.GLOBAL_STRINGS.delete),1)]),_:1},8,["onClick","loading"])])]),_:1},8,["show-close","onCloseAlert"])])):T("",!0),i.rootStore.aioseo.data.robots.rewriteExists?T("",!0):(g(),k("div",Et,[l(a,{type:"red",innerHTML:s.missingRewriteRules},null,8,["innerHTML"])])),s.isValidRobotsSite?(g(),k(A,{key:3},[l(f,{name:t.$constants.GLOBAL_STRINGS.preview},{content:_(()=>[l(p,{size:"medium",type:"blue",tag:"a",href:s.robotsTxtUrl,target:"_blank"},{default:_(()=>[l(c,{width:"14"}),R(" "+b(o.strings.openRobotsTxt),1)]),_:1},8,["href"])]),_:1},8,["name"]),l(f,{name:o.strings.enableCustomRobots,class:"no-border no-margin"},{content:_(()=>[l(d,{modelValue:s.getOptions.enable,"onUpdate:modelValue":e[1]||(e[1]=u=>s.getOptions.enable=u)},null,8,["modelValue"])]),_:1},8,["name"]),n("div",Ft,[n("div",Bt,[n("div",zt,[n("div",Mt,[n("div",Gt,[qt,n("div",jt,b(o.strings.userAgent),1),n("div",Jt,b(o.strings.directive),1),n("div",Ht,b(t.$constants.GLOBAL_STRINGS.value),1),Wt])]),n("div",Kt,[(g(!0),k(A,null,D(s.parsedDefaultRules,(u,I)=>(g(),k("div",{key:I,class:"robots-editor-table__row robots-editor-table__row--stripe"},[n("div",Yt,b(I+1),1),n("div",Qt,[l(x,{modelValue:u.userAgent,disabled:!0,size:"medium"},null,8,["modelValue"])]),n("div",Xt,[l(m,{modelValue:o.directiveOptions.find(v=>v.value===u.directive),options:[],disabled:!0,size:"medium"},null,8,["modelValue"])]),n("div",Zt,[l(x,{modelValue:u.fieldValue,disabled:!0,size:"medium"},null,8,["modelValue"])]),te]))),128)),l(z,{handle:".aioseo-drag-wrapper",modelValue:s.tableRules,"onUpdate:modelValue":e[3]||(e[3]=u=>s.tableRules=u),"item-key":t._uid.toString(),class:"draggable-rules"},{item:_(({element:u,index:I})=>[n("div",{class:mt(["robots-editor-table__row robots-editor-table__row--stripe",{"aioseo-error":s.hasTableRuleError(I+s.parsedDefaultRules.length+1,u)}])},[n("div",ee,b(I+s.parsedDefaultRules.length+1),1),n("div",oe,[l(x,{modelValue:u.userAgent,"onUpdate:modelValue":v=>u.userAgent=v,spellcheck:!1,disabled:!s.getOptions.enable,onChange:v=>s.updateRule(u,"userAgent",v,I),size:"medium"},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),n("div",se,[l(m,{modelValue:o.directiveOptions.find(v=>v.value===u.directive),options:o.directiveOptions,disabled:!s.getOptions.enable,"onUpdate:modelValue":v=>s.updateRule(u,"directive",v.value,I),size:"medium"},null,8,["modelValue","options","disabled","onUpdate:modelValue"])]),n("div",re,[l(x,{modelValue:u.fieldValue,"onUpdate:modelValue":v=>u.fieldValue=v,spellcheck:!1,disabled:!s.getOptions.enable,onChange:v=>s.updateRule(u,"fieldValue",v,I),size:"medium"},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),n("div",ie,[P(n("a",{onClick:$(v=>s.deleteRow(I),["prevent"]),href:"#",role:"button",class:"btn-delete-rule aioseo-outline",title:o.strings.deleteRule},[l(S,{width:"20"})],8,ne),[[L,s.getOptions.enable]]),P(n("a",{onClick:e[2]||(e[2]=$(()=>{},["prevent"])),href:"#",role:"button",class:"aioseo-drag-wrapper aioseo-outline"},[l(y,{width:"20"})],512),[[L,s.getOptions.enable]])]),l(O,{errors:s.getTableRuleErrors(I+s.parsedDefaultRules.length+1,u),class:"robots-editor-table__column robots-editor-table__column--rule-error"},null,8,["errors"])],2)]),_:1},8,["modelValue","item-key"])]),n("div",le,[n("div",ae,[l(p,{onClick:$(s.addRow,["exact"]),disabled:!s.getOptions.enable,class:"btn-add-rule",type:"black",size:"small"},{default:_(()=>[l(M,{width:"14"}),R(" "+b(o.strings.addRule),1)]),_:1},8,["onClick","disabled"]),l(p,{onClick:e[4]||(e[4]=$(u=>o.showImportModal=!0,["prevent"])),disabled:!s.getOptions.enable,type:"black",size:"small"},{default:_(()=>[l(G,{width:"14"}),R(" "+b(t.$constants.GLOBAL_STRINGS.import),1)]),_:1},8,["disabled"])])])])])]),n("div",de,[n("div",ce,[n("div",ue,[R(b(o.strings.customRobotsPreview)+" ",1),s.robotsPreviewErrorLabel?(g(),k("div",he,[l(q,{width:"8"}),n("span",null,b(s.robotsPreviewErrorLabel),1)])):T("",!0)])]),n("div",be,[l(V,{modelValue:s.inputCustomRobotsTxtPreview,"line-numbers":!0,disabled:"","force-updates":"",monospace:"",ref:"input-custom-robots-txt-preview"},null,8,["modelValue"])])])],64)):(g(),C(a,{key:4,innerHTML:s.subdirectoryAlert},null,8,["innerHTML"])),l(j,{show:o.showImportModal,onClose:e[10]||(e[10]=u=>o.showImportModal=!1),classes:["aioseo-robots-import-modal"]},{headerTitle:_(()=>[R(b(o.strings.importRobots),1)]),body:_(()=>[o.errors.importRobotsTxt?(g(),k("div",pe,[l(a,{type:"red","show-close":"",onCloseAlert:e[5]||(e[5]=u=>o.errors.importRobotsTxt=null)},{default:_(()=>[R(b(o.errors.importRobotsTxt),1)]),_:1})])):T("",!0),n("div",{class:"aioseo-settings-row aioseo-settings-row--or","data-or":t.$constants.GLOBAL_STRINGS.or},[n("div",_e,[n("div",fe,b(o.strings.importFromUrl),1)]),n("div",we,[l(x,{modelValue:o.inputImportRobotsTxtFromUrl,"onUpdate:modelValue":e[6]||(e[6]=u=>s.onChangeInputImportRobotsTxtFromUrl(u)),placeholder:o.strings.pasteUrl,disabled:!!o.inputPasteRobotsTxtText,type:"url",size:"medium"},null,8,["modelValue","placeholder","disabled"]),o.errors.importRobotsTxtFromUrl?(g(),C(a,{key:0,type:"red",size:"small"},{default:_(()=>[R(b(o.errors.importRobotsTxtFromUrl),1)]),_:1})):T("",!0)])],8,me),n("div",ge,[n("div",xe,[n("div",Re,b(o.strings.pasteRobotsText),1)]),n("div",ve,[l(V,{modelValue:o.inputPasteRobotsTxtText,"onUpdate:modelValue":e[7]||(e[7]=u=>s.onChangeInputPasteRobotsTxtText(u)),"line-numbers":!0,"minimum-line-numbers":10,disabled:!!o.inputImportRobotsTxtFromUrl,spellcheck:!1,monospace:""},null,8,["modelValue","disabled"]),o.errors.pasteRobotsTxtText?(g(),C(a,{key:0,type:"red",size:"small"},{default:_(()=>[R(b(o.errors.pasteRobotsTxtText),1)]),_:1})):T("",!0)])])]),footer:_(()=>[n("div",ke,[l(p,{onClick:e[8]||(e[8]=$(u=>o.showImportModal=!1,["exact"])),type:"gray",size:"medium"},{default:_(()=>[R(b(t.$constants.GLOBAL_STRINGS.cancel),1)]),_:1}),l(p,{onClick:e[9]||(e[9]=$(u=>s.onClickBtnImportRobotsTxt(o.inputImportRobotsTxtFromUrl?"url":"text"),["exact"])),loading:o.loading.btnImportRobotsTxt,disabled:!!s.btnImportRobotsTxtDisabled,type:"blue",size:"medium"},{default:_(()=>[R(b(t.$constants.GLOBAL_STRINGS.import),1)]),_:1},8,["loading","disabled"])])]),_:1},8,["show"]),o.loading.cardOverlay?(g(),k("div",Te,[l(J)])):T("",!0)]}),_:1},8,["header-text"])])}const Xe=B(St,[["render",Se]]);export{Xe as default};
