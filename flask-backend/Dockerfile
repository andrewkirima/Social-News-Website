FROM python:latest

COPY . app/
WORKDIR /app

RUN ls -R
RUN pip install -r requirements.txt

ENV PORT 8080

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 main:app