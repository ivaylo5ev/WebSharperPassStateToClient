(function()
{
 "use strict";
 var Global,WebSharper,Obj,WebSharperPassStateToClient,ClientCode,A,B,C,D,Client,SC$1,Site,IntelliFactory,Runtime,UI,Doc,AttrProxy,View,Collections,FSharpMap,Var$1,Client$1,Templates;
 Global=self;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 WebSharperPassStateToClient=Global.WebSharperPassStateToClient=Global.WebSharperPassStateToClient||{};
 ClientCode=WebSharperPassStateToClient.ClientCode=WebSharperPassStateToClient.ClientCode||{};
 A=ClientCode.A=ClientCode.A||{};
 B=ClientCode.B=ClientCode.B||{};
 C=ClientCode.C=ClientCode.C||{};
 D=ClientCode.D=ClientCode.D||{};
 Client=WebSharperPassStateToClient.Client=WebSharperPassStateToClient.Client||{};
 SC$1=Global.StartupCode$WebSharperPassStateToClient$Client=Global.StartupCode$WebSharperPassStateToClient$Client||{};
 Site=WebSharperPassStateToClient.Site=WebSharperPassStateToClient.Site||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 View=UI&&UI.View;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 Var$1=UI&&UI.Var$1;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 A=ClientCode.A=Runtime.Class({},Obj,A);
 A.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },A);
 B=ClientCode.B=Runtime.Class({},A,B);
 B.New=Runtime.Ctor(function()
 {
  A.New.call(this);
 },B);
 C=ClientCode.C=Runtime.Class({
  Doc:function(map)
  {
   return Doc.Element("div",[],[Doc.Element("hr",[],[]),Doc.Element("div",[],[Doc.Element("h1",[],[Doc.TextNode("C")])]),Doc.Element("div",[AttrProxy.Create("class","jumbotron")],[map.get_Item("D").Doc(map)])]);
  }
 },B,C);
 C.New=Runtime.Ctor(function()
 {
  B.New.call(this);
 },C);
 D=ClientCode.D=Runtime.Class({
  Doc:function(a)
  {
   return Doc.Element("span",[AttrProxy.Create("class","alert alart-info")],[Doc.TextNode("D")]);
  }
 },A,D);
 D.New=Runtime.Ctor(function()
 {
  A.New.call(this);
 },D);
 Client.getDoc=function(docName)
 {
  return Doc.EmbedView(View.Map(function(m)
  {
   return m.get_Item(docName).Doc(m);
  },Client._map().get_View()));
 };
 Client.initializeMapping=function()
 {
  var a;
  a=(new FSharpMap.New([])).Add("C",new C.New()).Add("D",new D.New());
  Client._map().Set(a);
 };
 Client._map=function()
 {
  SC$1.$cctor();
  return SC$1._map;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1._map=Var$1.Create$1(new FSharpMap.New([]));
 };
 Site.HomePage$41$49=function()
 {
  return function()
  {
   var a;
   Client.initializeMapping();
   a=Client.getDoc("C");
   Templates.LoadLocalTemplates("");
   Doc.RunReplaceById("main",a);
  };
 };
}());
