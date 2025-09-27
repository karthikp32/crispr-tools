FROM python:3.11-slim

WORKDIR /app

COPY ./crispr_sales_agent/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./crispr_sales_agent .

CMD ["tail", "-f", "/dev/null"]
