FROM python:3.8-alpine

WORKDIR /code

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

COPY ./requirements.txt .

# Build Postgres-binary from source required dependencies
RUN apk add --virtual .build-deps --no-cache postgresql-dev gcc python3-dev musl-dev && \
    pip install  -r requirements.txt

COPY . .

#CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]