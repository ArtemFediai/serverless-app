import json
import os
import boto3

dynamodb = boto3.resource('dynamodb')
table_name = os.environ['TABLE_NAME']
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    body = json.loads(event['body'])
    a = body['a']
    b = body['b']
    c = a + b

    # Store in DynamoDB
    table.put_item(Item={'a': a, 'b': b, 'c': c})

    return {
        'statusCode': 200,
        'body': json.dumps({'c': c})
    }

