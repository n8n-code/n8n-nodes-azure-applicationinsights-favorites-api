import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApplicationinsightsFavoritesApiApi implements ICredentialType {
        name = 'N8nDevAzureApplicationinsightsFavoritesApiApi';

        displayName = 'Azure Applicationinsights Favorites API';

        icon: Icon = { light: 'file:../nodes/AzureApplicationinsightsFavoritesApi/azure-applicationinsights-favorites-api.png', dark: 'file:../nodes/AzureApplicationinsightsFavoritesApi/azure-applicationinsights-favorites-api.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Applicationinsights Favorites API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
