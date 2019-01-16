(function()
{
 "use strict";
 var Global,WebSharper,Obj,WebSharperPassStateToClient,ClientCode,A,B,C,D,Client,IntelliFactory,Runtime,UI,Doc,AttrProxy,Collections,FSharpMap,Seq,Map;
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
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpMap=Collections&&Collections.FSharpMap;
 Seq=WebSharper&&WebSharper.Seq;
 Map=Collections&&Collections.Map;
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
 ClientCode.fixMap=function(m)
 {
  return new FSharpMap.New(Seq.map(function(kvp)
  {
   return[kvp.K,ClientCode.fixType(kvp.V)];
  },m));
 };
 ClientCode.fixType=Global.id;
 Client.getDoc2=function(m,docName)
 {
  var m$1;
  m$1=ClientCode.fixMap(Map.OfArray(m));
  return m$1.get_Item(docName).Doc(m$1);
 };
}());
