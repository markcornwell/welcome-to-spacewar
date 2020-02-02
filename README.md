# Welcome to Spacewar (the spacewar welcome service)
Created with CodeSandbox.io

This code supports a landing and welcome page for a multiplayer spacewar game. 
It was originally composed with CodeSandbox.io and we strive to maintain compatibility
with that development platform.

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



