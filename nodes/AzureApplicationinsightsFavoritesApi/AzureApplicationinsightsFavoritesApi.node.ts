import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApplicationinsightsFavoritesApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Applicationinsights Favorites API',
                name: 'N8nDevAzureApplicationinsightsFavoritesApi',
                icon: { light: 'file:./azure-applicationinsights-favorites-api.png', dark: 'file:./azure-applicationinsights-favorites-api.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure App Insights favorites client.',
                defaults: { name: 'Azure Applicationinsights Favorites API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApplicationinsightsFavoritesApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
