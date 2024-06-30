FROM public.ecr.aws/lambda/python:3.8

COPY app ${LAMBDA_TASK_ROOT}

RUN pip install -r ${LAMBDA_TASK_ROOT}/requirements.txt

CMD ["app.lambda_function.lambda_handler"]

