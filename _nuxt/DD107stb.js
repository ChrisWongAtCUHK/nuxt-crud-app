import{_ as p,c as u,a as e,b as f,w as h,m as a,v as l,F as v,P as c,n as j,o as _,d as b}from"./B4Hk3bpW.js";import{u as g,S as n,g as S}from"./aRTlUYNS.js";const w={data(){return{project:{name:"",description:""},isSaving:!1}},created(){const r=(this._.provides[c]||this.$route).params.id;S(r).then(t=>{let i=t.data;return this.project.name=i.name,this.project.description=i.description,t}).catch(t=>(n.fire({icon:"error",title:"An Error Occured!",showConfirmButton:!1,timer:1500}),t))},methods:{handleSave(){this.isSaving=!0;const r=(this._.provides[c]||this.$route).params.id;g(r,this.project).then(t=>(n.fire({icon:"success",title:"Project updated successfully!",showConfirmButton:!1,timer:1500}),this.isSaving=!1,this.project.name="",this.project.description="",t)).catch(t=>(this.isSaving=!1,n.fire({icon:"error",title:"An Error Occured!",showConfirmButton:!1,timer:1500}),t))}}},x={class:"card"},P={class:"card-header"},y={class:"card-body"},B={class:"form-group"},C={class:"form-group"},V=["disabled"];function k(r,t,i,E,o,d){const m=j("router-link");return _(),u(v,null,[t[6]||(t[6]=e("h2",{class:"text-center mt-5 mb-3"},"Edit Project",-1)),e("div",x,[e("div",P,[f(m,{class:"btn btn-outline-info float-right",to:"/"},{default:h(()=>t[3]||(t[3]=[b("View All Projects ")])),_:1})]),e("div",y,[e("form",null,[e("div",B,[t[4]||(t[4]=e("label",{htmlFor:"name"},"Name",-1)),a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.project.name=s),type:"text",class:"form-control",id:"name",name:"name"},null,512),[[l,o.project.name]])]),e("div",C,[t[5]||(t[5]=e("label",{htmlFor:"description"},"Description",-1)),a(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.project.description=s),class:"form-control",id:"description",rows:"3",name:"description"},null,512),[[l,o.project.description]])]),e("button",{onClick:t[2]||(t[2]=s=>d.handleSave()),disabled:o.isSaving,type:"button",class:"btn btn-outline-primary mt-3"}," Save Project ",8,V)])])])],64)}const A=p(w,[["render",k]]);export{A as default};
