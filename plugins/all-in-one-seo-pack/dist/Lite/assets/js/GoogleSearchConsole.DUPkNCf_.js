import{g as s}from"./links.C2upUfsO.js";const n={data:{forceDisconnect:!1,showModal:!1,showAlert:!1,loading:!1,alertMessage:"",returnTo:"search-statistics"},methods:{connect(){this.loading=!0,s().getAuthUrl({returnTo:this.returnTo}).then(t=>{window.location=t})},reconnect(){this.loading=!0,s().getReauthUrl({returnTo:this.returnTo}).then(t=>{window.location=t})},disconnect(){this.loading=!0,s().deleteAuth({force:this.forceDisconnect}).then(t=>{this.showModal=!1,this.showAlert=!1,t.success||(this.forceDisconnect=!0,this.showAlert=!0,this.alertMessage=t.message)}).finally(()=>{this.loading=!1})}}};export{n as G};
