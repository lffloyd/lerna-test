import { HttpResponse, ResponseCreator } from 'lffloyd-test-utils';
import { APIGatewayProxyEvent } from 'aws-lambda';

/** 
* Handles a lambda request and returns a mock response to the caller.
* @param {APIGatewayProxyEvent} _ - AWS ApiGateway Proxy Event passed through the lambda context
* @return {Promise<HttpResponse>} HttpResponse to the client
*/
async function handler(_: APIGatewayProxyEvent): Promise<HttpResponse> {
    try {
        const payload = {
            text: 'Take it'
        };
        console.info('Successfully invoked handler');
        return ResponseCreator.send(200, payload);
    } catch (err) {
        if (err instanceof Error) {
            console.error(`Error while invoking handler: ${err.message}`);
            return ResponseCreator.send(500, { error: err.message });
        }
        return ResponseCreator.send(500, { error: 'Internal Server Error' });
    }
}

export { handler };
