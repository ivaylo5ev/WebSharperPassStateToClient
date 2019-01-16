namespace WebSharperPassStateToClient

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html

module ClientCode =
    [<JavaScriptExport>]
    type [<AbstractClass>] A() = 
        abstract member Doc: Map<string, A> -> Doc

    [<JavaScriptExport>]
    type [<AbstractClass>] B() =
        inherit A()

    [<JavaScriptExport>]
    type C() =
        inherit B()
        override __.Doc map =
            div [] [
                hr [] []
                div [] [h1 [] [text "C"]]
                div [attr.``class`` "jumbotron"] [ map |> map.["D"].Doc ]
            ]
    [<JavaScriptExport>]
    type D() =
        inherit A()
        override __.Doc _ =
            span [attr.``class`` "alert alart-info"] [ text "D" ]

    [<JavaScriptExport>]
    let fixType v =
        //match box v with
        //| :? C -> C() :> A
        //| :? D -> D() :> A
        //| _    -> C() :> A
        v

    [<JavaScriptExport>]
    let fixMap (m:Map<string, A>) =
        m |> Seq.map (fun kvp -> kvp.Key, fixType kvp.Value) |> Map


[<JavaScript>]
module Client =

    //let _map : Var<Map<string, ClientCode.A>> = Var.Create <| Map.empty
    //
    //let initializeMapping() =
    //    // Here I am hard-coding the mappings of the concrete instances of `ClientCode.A`, entirely in the compiled javascript
    //    // I need to be able to do this mapping from the server-side.
    //    Map.empty
    //    |> Map.add "C" (upcast ClientCode.C() : ClientCode.A)
    //    |> Map.add "D" (upcast ClientCode.D() : ClientCode.A)
    //    |> _map.Set
    //
    //let getDoc (docName : string) =
    //    _map.View.Map(fun m -> m.[docName].Doc(m))
    //    |> Doc.EmbedView

    let getDoc2 (m:array<string*ClientCode.A>) (docName : string) =
        let m = ClientCode.fixMap (m |> Map.ofArray)
        m.[docName].Doc(m)

