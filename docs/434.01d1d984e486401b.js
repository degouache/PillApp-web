"use strict";(self.webpackChunkPillApp=self.webpackChunkPillApp||[]).push([[434],{9434:(A,r,a)=>{a.r(r),a.d(r,{PatientsAllModule:()=>g});var s=a(9808),l=a(5425),p=a(1135),t=a(1223),c=a(7532),d=a(9192);const u=function(e){return["/patient",e]};let m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-cared-person-list"]],inputs:{patient:"patient"},decls:7,vars:5,consts:[[1,"d-flex","flex-row","card-chip","mx-auto","mt-3","pe-5",3,"routerLink"],[1,"capital-icon"],[1,"h4","pt-3","pb-0","ps-4","pe-2"]],template:function(n,o){1&n&&(t.TgZ(0,"a",0)(1,"div")(2,"p",1),t._uU(3),t.qZA()(),t.TgZ(4,"div")(5,"p",2),t._uU(6),t.qZA()()()),2&n&&(t.Q6J("routerLink",t.VKq(3,u,o.patient.id)),t.xp6(3),t.Oqu(null==o.patient?null:o.patient.firstLetter),t.xp6(3),t.Oqu(null==o.patient?null:o.patient.fullName))},directives:[l.yS],styles:[""]}),e})();function v(e,i){1&e&&t._UZ(0,"app-card-cared-person-list",6),2&e&&t.Q6J("patient",i.$implicit)}let f=(()=>{class e{constructor(n,o){this.router=n,this.homeCardService=o,this.items=new p.X([]),this.values=[]}ngOnInit(){this.homeCardService.getUserData().subscribe(n=>{console.log(n);for(const o of n.updates)"patient"==o.type&&(o.data.firstLetter=this.getFirstLetter(o.data.fullName),this.values.push(o.data),this.items.next(this.values))})}add(){this.router.navigate(["/patients-creation"])}getFirstLetter(n){return n.charAt(0).toUpperCase()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.F0),t.Y36(c.w))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-patients-all"]],decls:9,vars:3,consts:[[1,"card","col-xs-12","col-sm-12","col-md-12","col-lg-10","col-xl-10","mx-auto","mt-5","mb-5"],[1,"card-body"],[1,"mt-5"],[3,"patient",4,"ngFor","ngForOf"],[1,"text-center","mt-5","mb-5"],[1,"btn-add",3,"click"],[3,"patient"]],template:function(n,o){1&n&&(t._UZ(0,"app-top-navigation"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t.YNc(4,v,1,1,"app-card-cared-person-list",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return o.add()}),t._uU(8,"+"),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",t.lcZ(5,1,o.items)))},directives:[d.g,s.sg,m],pipes:[s.Ov],styles:[""]}),e})();var C=a(3408);const h=[{path:"",component:f}];let g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,l.Bz.forChild(h),C.A]]}),e})()}}]);