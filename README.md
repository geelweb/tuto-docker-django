# Django / Postgis / Docker

This repository is a 4 step guide to setup a Django project using a Postgis
database with Docker and Compose.

## Step 1: Create the project

This step is simply the result of the `django-admin startproject` command

    $ django-admin startproject plop

Get the result checkouting the step1 branch

    git checkout step1

## Step2: Configure the project

Here we add the databases settings and the postgis contrib

    git checkout step2

Use git diff to get the modifications

    git diff step1 step2

## Step3: Setup Docker

At this step we create the DOCKERFILE and the docker-compose.yml files to create
our containers. One for the app, and a second container for the database.

    git checkout step3

Use git diff to get the modifications

    git diff step2 step3

Now we can run our containers

    $ docker-compose up

Or sync the databases

    $ docker-compose run web python manage.py syncdb
    $ docker-compose run web python manage.py migrate

## Step4: A map

THe final step, we create an Django app to create a map. The app has been
created using the `startapp` command of the `manage.py`

    $ docker-compose run web python manage.py startapp map

Edit views, forms, templates, etc

Get the modifications of this step with

    git diff step3 step4

Get the result with

    git checkout step4

Run the containers with `docker-compose up` and browse the IP of your Docker
virtual machine.
