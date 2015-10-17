FROM python:2.7

# Force stdin, stdout and stderr to be totally unbuffered.
ENV PYTHONUNBUFFERED 1

# Install some tools not in the requirements
RUN apt-get update -y
RUN apt-get install -y binutils libproj-dev gdal-bin

# Add requirements files
RUN mkdir /app
WORKDIR /app

# Install dev requirements
ADD requirements.txt /app/
RUN pip install -r requirements.txt

# Add the code
ADD . /app/
