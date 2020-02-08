# Welcome to Spacewar (the spacewar welcome service)
Created with CodeSandbox.io

The welcome server acts as the lobby inteface to the
servers hosting the spacewar game. The software is in
the early stages of development.  Consequently,
these instructions assume the reader is a developer
interesting in contributing to the project.

## Starting the development server

You can start the server from the command line
with

    $ npm run start
    
This may take half a minute to complete.  This start
both starts up a server and fires up a tab in your
browser to run the clint side js code in your browser.

When it complete you your terminal window will clear
and display a message like:

    Compiled successfully!
    
    You can now view welcome-to-spacewar in the browser.

    Local:            http://localhost:3000/
    On Your Network:  http://192.168.1.154:3000/

    Note that the development build is not optimized.
    To create a production build, use npm run build.

If you switch over to your browser you should see something
like this:

   ![](/assets/screenshot_welcome_to_spacewar.png)

If you click on the buttons they should be live and your
lobby inteface is ready to go.


## Building the docker image ##

You can use the Dockerfile in the root directory to build a Docker image.  I keep
images on my personal Docker Hub under markcornwell.  You can substitute your own
Docker Hum account or that of any other docker repository you like.

    $ docker build -t markcornwell/welcome-to-spacewar:1 .

After building, you should be able to see the image listed by the command

    $ docker images
  
    REPOSITORY                                      TAG                 IMAGE ID            CREATED             SIZE
    markcornwell/welcome-to-spacewar                1                   787382f8d20f        9 minutes ago       1.37GB 

## Running in a container ##

Having built the image, you can use it to fire off a container run.

    $ docker run -p 5000:5000 -d markcornwell/welcome-to-spacewar:1
    cc75bda78b46564197932e7afded4aeb575e77dcef034c8e939fed8da8e1f2dd
  
If all is well, you should see it running.

    $ docker ps
    CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS                    NAMES
    cc75bda78b46        markcornwell/welcome-to-spacewar:1   "docker-entrypoint.s…"   55 seconds ago      Up 54 seconds       0.0.0.0:5000->5000/tcp   mystifying_mendeleev

A quick sanity check with curl.

    $ curl -I "http://localhost:5000"
    HTTP/1.1 200 OK
    Content-Length: 2140
    Content-Disposition: inline; filename="index.html"
    Accept-Ranges: bytes
    ETag: "521cf4925dd63f8ab0610b45e00a76152f2ebc25"
    Content-Type: text/html; charset=utf-8
    Vary: Accept-Encoding
    Date: Sun, 02 Feb 2020 20:56:02 GMT
    Connection: keep-alive
  
Now if you type the URL "http://localhost:5000" into your browser, you should
arrive at the welcome screen.

## More Information ##

This service is a part of a larger project.

See the main Spacewar project at 
https://github.com/markcornwell/spacewar for addditional informtion.
