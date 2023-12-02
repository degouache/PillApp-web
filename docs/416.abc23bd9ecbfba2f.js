"use strict";(self.webpackChunkPillApp=self.webpackChunkPillApp||[]).push([[416],{1416:(J,m,r)=>{r.r(m),r.d(m,{PatientDetailModule:()=>x});var o=r(9808),l=r(1135),t=r(1223),p=r(5425),c=r(2340),g=r(520);let v=(()=>{class e{constructor(a){this.http=a}getUserData(){return this.http.get(`${c.N.API_URL}/`)}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=r(9192);let f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-remember-date-patient"]],inputs:{data:"data"},decls:12,vars:5,consts:[[1,"d-flex","card-no-chip","mt-2","mb-4","ms-2","me-2"],[1,"line-card-orange","me-3"],[1,"m-auto"],[1,"h6"],[1,"small-grey"],[1,"ms-5","dot-wrapper"],[1,"dot","d-block"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"div",2)(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"p",4),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"span",6)(10,"span",6)(11,"span",6),t.qZA()()),2&a&&(t.xp6(4),t.Oqu(null==i.data?null:i.data.description),t.xp6(2),t.Oqu(t.xi3(7,2,null==i.data?null:i.data.date,"dd-MM-yyyy HH:mma")))},pipes:[o.uU],styles:[""]}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-drug-patient"]],inputs:{data:"data"},decls:9,vars:1,consts:[[1,"d-flex","card-no-chip","mt-2","mb-4","ms-2","me-2"],[1,"line-card-purple","me-3"],[1,"m-auto"],[1,"h6"],[1,"ms-5","dot-wrapper","button-icon"],[1,"dot","d-block"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"div",2)(3,"p",3),t._uU(4),t.qZA()(),t.TgZ(5,"div",4),t._UZ(6,"span",5)(7,"span",5)(8,"span",5),t.qZA()()),2&a&&(t.xp6(4),t.Oqu(null==i.data?null:i.data.description))},styles:[""]}),e})(),T=(()=>{class e{constructor(){this.periodText=""}ngOnInit(){this.periodText="Cada 8 horas"}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-vital-patient"]],inputs:{data:"data"},decls:11,vars:2,consts:[[1,"d-flex","card-no-chip","mt-2","mb-4","ms-2","me-2"],[1,"line-card-blue","me-3"],[1,"m-auto"],[1,"h6"],[1,"small-grey"],[1,"ms-5","dot-wrapper","button-icon"],[1,"dot","d-block"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"div",2)(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"p",4),t._uU(6),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"span",6)(9,"span",6)(10,"span",6),t.qZA()()),2&a&&(t.xp6(4),t.Oqu(null==i.data?null:i.data.description),t.xp6(2),t.Oqu(i.periodText))},styles:[""]}),e})(),_=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-drug-take-patient"]],inputs:{data:"data"},decls:12,vars:5,consts:[[1,"d-flex","card-no-chip","mt-2","mb-","ms-2","me-2"],[1,"line-card-green","me-3"],[1,"m-auto"],[1,"h6"],[1,"small-grey"],[1,"ms-5","dot-wrapper","button-icon"],[1,"dot","d-block"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.TgZ(2,"div",2)(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"p",4),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"span",6)(10,"span",6)(11,"span",6),t.qZA()()),2&a&&(t.xp6(4),t.Oqu(null==i.data?null:i.data.description),t.xp6(2),t.Oqu(t.xi3(7,2,null==i.data?null:i.data.date,"dd-MM-yyyy HH:mma")))},pipes:[o.uU],styles:[""]}),e})();function C(e,s){1&e&&t._UZ(0,"img",10)}function U(e,s){1&e&&t._UZ(0,"img",11)}function A(e,s){1&e&&t._UZ(0,"img",12)}let P=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-vital-take-patient"]],inputs:{data:"data"},decls:15,vars:8,consts:[[1,"d-flex","card-chip","mt-2","mb-4","ms-2","me-2"],[1,"line-card-blue","me-3"],["class","me-2","src","../../../../assets/drawable/icon_termometro.svg","alt","termometro",4,"ngIf"],["class","me-2","src","../../../../assets/drawable/icon_corazon.svg","alt","corazon",4,"ngIf"],["class","me-2","src","../../../../assets/drawable/icon_pulso.svg","alt","pulso",4,"ngIf"],[1,"m-auto"],[1,"h6"],[1,"small-grey"],[1,"ms-5","dot-wrapper","button-icon"],[1,"dot","d-block"],["src","../../../../assets/drawable/icon_termometro.svg","alt","termometro",1,"me-2"],["src","../../../../assets/drawable/icon_corazon.svg","alt","corazon",1,"me-2"],["src","../../../../assets/drawable/icon_pulso.svg","alt","pulso",1,"me-2"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"span",1),t.YNc(2,C,1,0,"img",2),t.YNc(3,U,1,0,"img",3),t.YNc(4,A,1,0,"img",4),t.TgZ(5,"div",5)(6,"p",6),t._uU(7),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.TgZ(11,"div",8),t._UZ(12,"span",9)(13,"span",9)(14,"span",9),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("ngIf",1==(null==i.data?null:i.data.vitalId)),t.xp6(1),t.Q6J("ngIf",2==(null==i.data?null:i.data.vitalId)),t.xp6(1),t.Q6J("ngIf",3==(null==i.data?null:i.data.vitalId)),t.xp6(3),t.Oqu(null==i.data?null:i.data.description),t.xp6(2),t.Oqu(t.xi3(10,5,null==i.data?null:i.data.date,"dd-MM-yyyy HH:mma")))},directives:[o.O5],pipes:[o.uU],styles:[""]}),e})(),y=(()=>{class e{constructor(){}ngOnInit(){var a;this.firstLetter=this.getFirstLetter(null===(a=this.profile)||void 0===a?void 0:a.userName)}getFirstLetter(a){return null==a?"":a.charAt(0).toUpperCase()}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card-staff"]],inputs:{profile:"profile"},decls:7,vars:2,consts:[[1,"d-flex","flex-row","card-chip","mt-2","mb-4","ms-2","me-2"],[1,"capital-icon-disabled"],[1,"h4","pt-3","pb-0","ps-4","pe-2"]],template:function(a,i){1&a&&(t.TgZ(0,"div",0)(1,"div")(2,"p",1),t._uU(3),t.qZA()(),t.TgZ(4,"div")(5,"p",2),t._uU(6),t.qZA()()()),2&a&&(t.xp6(3),t.Oqu(i.firstLetter),t.xp6(3),t.Oqu(null==i.profile?null:i.profile.userName))},styles:[""]}),e})();function k(e,s){if(1&e&&(t.TgZ(0,"div",21)(1,"div",22)(2,"div",23),t._UZ(3,"span",24)(4,"span",24)(5,"span",24),t.qZA()(),t.TgZ(6,"p",25),t._uU(7),t.qZA(),t.TgZ(8,"p",26),t._uU(9),t.qZA(),t.TgZ(10,"p",27),t._uU(11),t.qZA(),t.TgZ(12,"textarea",28),t._uU(13),t.qZA()()),2&e){const a=s.$implicit;t.xp6(7),t.Oqu(a.firstLetter),t.xp6(2),t.Oqu(a.fullName),t.xp6(2),t.hij("",a.kg," Kg"),t.xp6(2),t.hij("",a.notes,"\n      ")}}function q(e,s){1&e&&t._UZ(0,"app-card-remember-date-patient",29),2&e&&t.Q6J("data",s.$implicit)}function D(e,s){1&e&&t._UZ(0,"app-card-drug-patient",29),2&e&&t.Q6J("data",s.$implicit)}function O(e,s){1&e&&t._UZ(0,"app-card-vital-patient",29),2&e&&t.Q6J("data",s.$implicit)}function V(e,s){1&e&&t._UZ(0,"app-card-drug-take-patient",29),2&e&&t.Q6J("data",s.$implicit)}function b(e,s){1&e&&t._UZ(0,"app-card-vital-take-patient",29),2&e&&t.Q6J("data",s.$implicit)}function I(e,s){1&e&&t._UZ(0,"app-card-staff",30),2&e&&t.Q6J("profile",s.$implicit)}let S=(()=>{class e{constructor(a,i,n){this.router=a,this.activatedRoute=i,this.cardService=n,this.itemsPatient=new l.X([]),this.valuesPatient=[],this.itemsMeeting=new l.X([]),this.valuesMeeting=[],this.itemsDrug=new l.X([]),this.valuesDrug=[],this.itemsVital=new l.X([]),this.valuesVital=[],this.itemsDrugTake=new l.X([]),this.valuesDrugTake=[],this.itemsVitalTake=new l.X([]),this.valuesVitalTake=[],this.itemsStaff=new l.X([]),this.valuesStaff=[],this.patientId=0}ngOnInit(){this.paramSub=this.activatedRoute.paramMap.subscribe(a=>{let i=a.get("id");null!=i&&(this.patientId=Number.parseInt(i),this.loadDataForPatient(this.patientId),this.loadFakeDataForPatient())})}ngOnDestroy(){this.paramSub.unsubscribe()}loadDataForPatient(a){this.cardService.getUserData().subscribe(i=>{for(const n of i.updates)"patient"==n.type&&n.data.id==a?(n.data.firstLetter=this.getFirstLetter(n.data.fullName),this.valuesPatient.push(n.data),this.itemsPatient.next(this.valuesPatient)):"meeting"==n.type&&n.data.patientId==a?(n.data.date=this.transformTime(n.data.appointmentTimestamp),n.data.fullName=this.getPatientName(n.data.patientId),this.valuesMeeting.push(n.data),this.itemsMeeting.next(this.valuesMeeting)):"drug"==n.type&&n.data.patientId==a?(n.data.date=this.transformTime(n.data.reminderTimestamp),n.data.fullName=this.getPatientName(n.data.patientId),this.valuesDrug.push(n.data),this.itemsDrug.next(this.valuesDrug)):"drugAction"==n.type&&n.data.patientId==a&&(n.data.date=this.transformTime(n.data.doneTimestamp),n.data.fullName=this.getPatientName(n.data.patientId),n.data.description=this.getDrugName(n.data.drugId),this.valuesDrugTake.push(n.data),this.itemsDrugTake.next(this.valuesDrugTake));this.itemsStaff.next(this.valuesPatient[0].userProfiles),console.log("itemStaff",this.itemsStaff)})}loadFakeDataForPatient(){const a=new Date;a.setHours(a.getHours()-8);const i=a.toISOString();a.setHours(a.getHours()-8);const n=a.toISOString();a.setHours(a.getHours()-8);const d=a.toISOString();a.setHours(a.getHours()-8);const u=a.toISOString();this.valuesVital.push(JSON.parse('{"vitalId": 1, "description": "Temperatura", "period": 28800}')),this.valuesVital.push(JSON.parse('{"vitalId": 2, "description": "Ritmo cardiaco", "period": 28800}')),this.valuesVital.push(JSON.parse('{"vitalId": 3, "description": "Tensi\xf3n arterial", "period": 28800}')),this.itemsVital.next(this.valuesVital),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37\xba", "date": "${i}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${i}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${i}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37\xba", "date": "${n}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${n}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${n}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37\xba", "date": "${d}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${d}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${d}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 1, "description": "37\xba", "date": "${u}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 2, "description": "90 ppm", "date": "${u}"}`)),this.valuesVitalTake.push(JSON.parse(`{"vitalId": 3, "description": "14/9", "date": "${u}"}`)),this.itemsVitalTake.next(this.valuesVitalTake),console.log("valuesVital",this.valuesVital),console.log("itemsVital",this.itemsVital),console.log("valuesVitalTake",this.valuesVitalTake),console.log("itemsVitalTake",this.itemsVitalTake)}getFirstLetter(a){return a.charAt(0).toUpperCase()}transformTime(a){var i=a,n=new Date(0);return n.setUTCSeconds(i),n}getPatientName(a){var i="";return this.valuesPatient.forEach(n=>{a==n.id&&(i=n.fullName)}),i}getDrugName(a){var i="";return this.valuesDrug.forEach(n=>{a==n.id&&(i=n.description)}),i}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-patient-detail"]],decls:91,vars:21,consts:[[1,"card","col-12","col-sm-12","col-md-11","col-lg-10","col-xl-8","m-auto","mt-5","patient-card"],["class","card col-11 col-sm-11 col-6 col-md-10 col-lg-8 col-xl-8 m-auto py-3 mt-5",4,"ngFor","ngForOf"],[1,"h4","ms-5","mt-5"],[1,"row","justify-content-between","mt-1","mb-2"],[1,"col-6","col-sm-7","col-md-7","col-lg-8","col-xl-8","align-self-center"],[1,"separation-line","ms-5"],[1,"col-3","col-sm-2","col-md-2","col-lg-2","col-xl-2","align-self-center","me-5"],[1,"small"],[1,"d-flex","scrolling-wrapper","ms-5","me-5","mb-5"],[3,"data",4,"ngFor","ngForOf"],[3,"profile",4,"ngFor","ngForOf"],[1,"dropup"],[1,"btn-add-small"],[1,"dropup-content"],["routerLink","remember-date"],[1,"drop-separator"],["routerLink","remember-do-it"],["routerLink","drug-prescription"],["routerLink","drug-take"],["routerLink","vital-lecture-prescription"],["routerLink","vital-lecture"],[1,"card","col-11","col-sm-11","col-6","col-md-10","col-lg-8","col-xl-8","m-auto","py-3","mt-5"],[1,"card-body","m-auto","mt-5"],[1,"dot-wrapper-big","mt-5"],[1,"dot","d-block"],[1,"capital-icon-big"],[1,"h4","mt-3","text-center"],[1,"mt-3","text-center","disabled-h4"],["readonly","",1,"p-5","mx-5","disabled-text-area"],[3,"data"],[3,"profile"]],template:function(a,i){1&a&&(t._UZ(0,"app-top-navigation"),t.TgZ(1,"div",0),t.YNc(2,k,14,4,"div",1),t.ALo(3,"async"),t.TgZ(4,"p",2),t._uU(5,"Citas m\xe9dicas"),t.qZA(),t.TgZ(6,"div",3)(7,"div",4),t._UZ(8,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"a",7),t._uU(11,"Ver todo"),t.qZA()()(),t.TgZ(12,"div",8),t.YNc(13,q,1,1,"app-card-remember-date-patient",9),t.ALo(14,"async"),t.qZA(),t.TgZ(15,"p",2),t._uU(16,"Prescripciones m\xe9dicas"),t.qZA(),t.TgZ(17,"div",3)(18,"div",4),t._UZ(19,"div",5),t.qZA(),t.TgZ(20,"div",6)(21,"a",7),t._uU(22,"Ver todo"),t.qZA()()(),t.TgZ(23,"div",8),t.YNc(24,D,1,1,"app-card-drug-patient",9),t.ALo(25,"async"),t.qZA(),t.TgZ(26,"p",2),t._uU(27,"Pautas de medici\xf3n"),t.qZA(),t.TgZ(28,"div",3)(29,"div",4),t._UZ(30,"div",5),t.qZA(),t.TgZ(31,"div",6)(32,"a",7),t._uU(33,"Ver todo"),t.qZA()()(),t.TgZ(34,"div",8),t.YNc(35,O,1,1,"app-card-vital-patient",9),t.ALo(36,"async"),t.qZA(),t.TgZ(37,"p",2),t._uU(38,"Tomas de medicamento"),t.qZA(),t.TgZ(39,"div",3)(40,"div",4),t._UZ(41,"div",5),t.qZA(),t.TgZ(42,"div",6)(43,"a",7),t._uU(44,"Ver todo"),t.qZA()()(),t.TgZ(45,"div",8),t.YNc(46,V,1,1,"app-card-drug-take-patient",9),t.ALo(47,"async"),t.qZA(),t.TgZ(48,"p",2),t._uU(49,"Mediciones realizadas"),t.qZA(),t.TgZ(50,"div",3)(51,"div",4),t._UZ(52,"div",5),t.qZA(),t.TgZ(53,"div",6)(54,"a",7),t._uU(55,"Ver todo"),t.qZA()()(),t.TgZ(56,"div",8),t.YNc(57,b,1,1,"app-card-vital-take-patient",9),t.ALo(58,"async"),t.qZA(),t.TgZ(59,"p",2),t._uU(60,"Encargados"),t.qZA(),t.TgZ(61,"div",3)(62,"div",4),t._UZ(63,"div",5),t.qZA(),t.TgZ(64,"div",6)(65,"a",7),t._uU(66,"Ver todo"),t.qZA()()(),t.TgZ(67,"div",8),t.YNc(68,I,1,1,"app-card-staff",10),t.ALo(69,"async"),t.qZA(),t.TgZ(70,"div",11)(71,"button",12),t._uU(72,"+"),t.qZA(),t.TgZ(73,"div",13)(74,"a",14),t._uU(75,"A\xf1adir cita m\xe9dica"),t.qZA(),t._UZ(76,"hr",15),t.TgZ(77,"a",16),t._uU(78,"A\xf1adir recordatorio"),t.qZA(),t._UZ(79,"hr",15),t.TgZ(80,"a",17),t._uU(81,"Nueva prescripcion de medicamento"),t.qZA(),t._UZ(82,"hr",15),t.TgZ(83,"a",18),t._uU(84,"A\xf1adir toma de medicamento"),t.qZA(),t._UZ(85,"hr",15),t.TgZ(86,"a",19),t._uU(87,"Nueva pauta de medici\xf3n de signo vital"),t.qZA(),t._UZ(88,"hr",15),t.TgZ(89,"a",20),t._uU(90,"A\xf1adir lectura de signo vital"),t.qZA()()()()),2&a&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,7,i.itemsPatient)),t.xp6(11),t.Q6J("ngForOf",t.lcZ(14,9,i.itemsMeeting)),t.xp6(11),t.Q6J("ngForOf",t.lcZ(25,11,i.itemsDrug)),t.xp6(11),t.Q6J("ngForOf",t.lcZ(36,13,i.itemsVital)),t.xp6(11),t.Q6J("ngForOf",t.lcZ(47,15,i.itemsDrugTake)),t.xp6(11),t.Q6J("ngForOf",t.lcZ(58,17,i.itemsVitalTake)),t.xp6(11),t.Q6J("ngForOf",t.lcZ(69,19,i.itemsStaff)))},directives:[Z.g,o.sg,f,h,T,_,P,y,p.yS],pipes:[o.Ov],styles:[""]}),e})();var N=r(3408);const F=[{path:"",component:S}];let x=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[o.ez,p.Bz.forChild(F),N.A]]}),e})()}}]);