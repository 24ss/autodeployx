FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app
COPY wsgi.py .

CMD ["gunicorn", "-b", "0.0.0.0:5000", "wsgi:app", "--timeout", "120", "--log-level", "debug"]


