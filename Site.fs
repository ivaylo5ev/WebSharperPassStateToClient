namespace WebSharperPassStateToClient

open WebSharper
open WebSharper.Sitelets
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "/">] Home

module Templating =
    type MainTemplate = Templating.Template<"Main.html">

    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
             li [if endpoint = act then yield attr.``class`` "active"] [
                a [attr.href (ctx.Link act)] [text txt]
             ]
        [
            "Home" => EndPoint.Home
        ]

    let Main ctx action (title: string) (body: Doc list) =
        Content.Page(
            MainTemplate()
                .Title(title)
                .MenuBar(MenuBar ctx action)
                .Body(body)
                .Doc()
        )


[<JavaScript false>]
module Site =
    open WebSharper.UI.Html

    let mutable _map : array<string*ClientCode.A> = Array.empty

    let addMapping<'T> name (v : ClientCode.A) = 
        _map <- _map |> Array.append [|(name, v)|]
            //_map |> Map.add name v

    addMapping<ClientCode.C> "C" <| ClientCode.C()
    addMapping<ClientCode.D> "D" <| ClientCode.D()

    let HomePage map ctx =
        Templating.Main ctx EndPoint.Home "Home" [
            //div [attr.id "main"; on.afterRender (fun _ -> Client.initializeMapping(); Client.getDoc "C" |> Doc.RunReplaceById "main" )][]
            div [][ Doc.ClientSide <@ Client.getDoc2 map "C" @> ]
        ]

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx endpoint ->
            match endpoint with
            | EndPoint.Home -> HomePage _map ctx
        )
