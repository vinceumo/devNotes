---
type: post
showtableofcontents: true
title: Set up SignalR in a vue.js project
date: 2018-10-29T16:50:00.000+00:00
category: Dotnet
post_type: note
canonical: ""
---

SignalR is an ASP.NET library for real-time applications. It uses the WebSockets API:

> The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
> [The WebSocket API (WebSockets) - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

SignalR comes pre instal with ASP.NET Core 2.1. If you don't have .NET core SDK on your machine, you can instal this one from the [microsoft website](https://www.microsoft.com/net/download)

I build a small demo using SignalR with Vue.js:

[SignalR-Vuejs--Demo - Github](https://github.com/vinceumo/SignalR-Vuejs--Demo)

![demo]({{< static "images/signalR.gif" >}})

## Create a new .NET core MVC project

Create a new .NET core MVC project.

If you are using the terminal run:

```bash
dotnet new mvc
```

## Set up our hub

First, we need to create a hub. The hub is a class used for persistent connections between the client and the server.

At the root of our project lets create a `ChatHub.cs`:

```cs
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace signalrChatApp
{
  public class ChatHub : Hub
  {
    public async Task SendMessage(string user, string message)
    {
      await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
  }
}
```

In `Startup.cs`

```cs
//...
using signalrChatApp;

//...

namespace MyApp
{
  public class Startup
  {
    //...
    public void ConfigureServices(IServiceCollection services)
    {
      //...
      services.AddSignalR();
    }

    //...

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      //...
      app.UseSignalR(routes =>
      {
        routes.MapHub<ChatHub>("/chatHub");
      });
    }
  }
}
```

## Set up our front end with vue.js

We are going to use the `Views/Home/Index.cshtml` file to make our demo, I got rid of all the unused markup in this file and the `_lautout.cshtml` as well

## Add our dependencies

First, we need the `@aspnet/signalr` package. You can download it from npm

```bash
npm install @aspnet/signalr
```

Copy the file in `node_modules/@sapnet/signalr/dist/browser/signalr.js` into the `wwwroot` folder.

Now we need the reference this file in our view

```html
<script src="~/signalr.js"></script>
```

We are going to add vue.js with a CDN as well:

```html
<!-- (Developer version) -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## Front End

Now that our dependencies have been added, let's work on the Front End.

Above our script let's add our app markup:

```html
<div id="chatApp">
  <div class="form-group">
    <form>
      <div>
        <label for="userName">Your Name</label>
        <input type="text" name="Name" id="userName" v-model="userName" />
      </div>
      <div>
        <label for="userMessage">Message</label>
        <input
          type="text"
          name="Message"
          id="userMessage"
          v-model="userMessage"
        />
      </div>
      <button v-on:click="submitCard" type="button">Submit</button>
    </form>
    <ul v-for="(item, index) in messages" v-bind:key="index + 'itemMessage'">
      <li><b>Name: </b>{{item.user}}</li>
      <li><b>Message: </b>{{item.message}}</li>
    </ul>
  </div>
</div>
```

Now lets set up our script:

```js
document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: "#chatApp",
    data: {
      userName: "",
      userMessage: "",
      connection: "",
      messages: []
    },
    methods: {
      submitCard: function() {
        if (this.userName && this.userMessage) {
          // ---------
          //  Call hub methods from client
          // ---------
          this.connection
            .invoke("SendMessage", this.userName, this.userMessage)
            .catch(function(err) {
              return console.error(err.toSting());
            });

          this.userName = "";
          this.userMessage = "";
        }
      }
    },
    created: function() {
      // ---------
      // Connect to our hub
      // ---------
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub")
        .configureLogging(signalR.LogLevel.Information)
        .build();
      this.connection.start().catch(function(err) {
        return console.error(err.toSting());
      });
    },
    mounted: function() {
      // ---------
      // Call client methods from hub
      // ---------
      var thisVue = this;
      thisVue.connection.start();
      thisVue.connection.on("ReceiveMessage", function(user, message) {
        thisVue.messages.push({ user, message });
      });
    }
  });
});
```

## Resources

- [ASP.NET Core SignalR .NET Client](https://docs.microsoft.com/en-us/aspnet/core/signalr/dotnet-client?view=aspnetcore-2.1)
- [ASP.NET SignalR](http://signalr.net/)
- [What do Hub represents in SignalR](https://stackoverflow.com/questions/8929519/what-do-hub-represents-in-signalr#8929826)
- [ASP.NET Core SignalR JavaScript client](https://docs.microsoft.com/en-us/aspnet/core/signalr/javascript-client?view=aspnetcore-2.1)
