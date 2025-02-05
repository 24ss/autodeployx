from flask import Flask
from prometheus_flask_exporter import PrometheusMetrics
from flask_cors import CORS
from .routes import main

def create_app():
    app = Flask(__name__)
    metrics = PrometheusMetrics(app)  # 👈 this line enables metrics
    app.register_blueprint(main)
    CORS(app)
    return app
