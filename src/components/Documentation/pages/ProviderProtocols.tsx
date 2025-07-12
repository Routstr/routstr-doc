import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Badge} from '../../ui/badge';
import {Alert, AlertDescription} from '../../ui/alert';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '../../ui/collapsible';
import {Button} from '../../ui/button';
import {Server, ChevronDown, ChevronRight} from 'lucide-react';

export function ProviderProtocols() {
  const [isFieldDescriptionsOpen, setIsFieldDescriptionsOpen] = useState(false);
  const [isInfosFieldDescriptionsOpen, setIsInfosFieldDescriptionsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Provider Protocol</h1>
        <p className="text-xl text-muted-foreground">
          Implementation guidelines, API extensions, and operational best practices for X-Cashu payment providers.
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5" />
            Provider Implementation Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section outlines the specific requirements and best practices for implementing X-Cashu payment
            protocols on the provider side. It covers server setup, API extensions, security considerations, and
            operational guidelines for maintaining a reliable payment gateway.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integration Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Existing API Integration:</h4>
            <p className="text-sm text-muted-foreground mb-3">
              For providers with existing OpenAI-compatible APIs, X-Cashu support can be added as middleware:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Add X-Cashu header processing before existing authentication</li>
              <li>Integrate payment verification into request pipeline</li>
              <li>Modify response handling to include change notes</li>
              <li>Update documentation to reflect new payment options</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <code className="bg-muted px-2 py-1 rounded">X-Cashu</code> header is used in all protocols for both
              requests (payment) and responses (returning change).
            </li>
            <li>
              Providers are required to implement the <code className="bg-muted px-2 py-1 rounded">/v1/models</code>{' '}
              endpoint for pricing and model discovery.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Provider Information Discovery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Provider Information Discovery
            <Badge variant="destructive">REQUIRED</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Providers MUST implement an information endpoint that exposes essential operational details including
            supported mints, payment configurations, and provider capabilities.
          </p>

          <div className="space-y-2">
            <p>
              <strong>Endpoint:</strong> <code className="bg-muted px-2 py-1 rounded">GET /infos</code>
            </p>
            <p>
              <strong>Description:</strong> Returns provider operational information including supported Cashu mints,
              payment configurations, contact details, and service capabilities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Example Response:</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`{
   "name": "THUDM AI Provider",
   "description": "High-performance AI inference provider",
   "version": "1.2.0",
   "website": "https://thudm-ai.com",
   "payment_info": {
     "supported_mints": [
       {
         "mint_url": "https://mecash.routstr.com",
         "unit": "msat"
       },
       {
         "mint_url": "https://ecash.routstr.com",
         "unit": "sat"
       }
     ],
     "payment_methods": [
       "x-cashu",
       "prepaid"
     ]
   }
 }`}
              </pre>
            </div>
          </div>

          <Collapsible open={isInfosFieldDescriptionsOpen} onOpenChange={setIsInfosFieldDescriptionsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="font-semibold">Field Descriptions</span>
                {isInfosFieldDescriptionsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="space-y-4">
                {/* Basic Information */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Basic Information</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>name</code>
                      <span>string</span>
                      <span>Provider service name</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>description</code>
                      <span>string</span>
                      <span>Brief description of the provider service</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>version</code>
                      <span>string</span>
                      <span>API version identifier</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>website</code>
                      <span>string</span>
                      <span>Provider website URL</span>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Payment Information</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>supported_mints</code>
                      <span>array</span>
                      <span>List of supported Cashu mint configurations</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>supported_mints[].mint_url</code>
                      <span>string</span>
                      <span>URL of the supported Cashu mint</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>supported_mints[].unit</code>
                      <span>string</span>
                      <span>Unit denomination (e.g., "sat", "msat")</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>payment_methods</code>
                      <span>array</span>
                      <span>List of supported payment method types</span>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div>
            <h4 className="font-semibold mb-2">Key Information Categories:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">Provider Details</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Provider name and description</li>
                  <li>API version information</li>
                  <li>Provider website URL</li>
                </ul>
              </Card>
              <Card className="p-4 bg-muted/50">
                <h5 className="text-sm font-medium mb-2">Payment Configuration</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Supported Cashu mint URLs</li>
                  <li>Currency unit denominations</li>
                  <li>Available payment methods</li>
                </ul>
              </Card>
            </div>
          </div>

          <Alert>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1">
                <li>Clients should fetch this endpoint before establishing payment flows.</li>
                <li>Verify mint availability and unit compatibility before payment attempts.</li>
                <li>Use appropriate payment method based on provider support.</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Enables mint selection based on provider support and unit preferences</li>
              <li>Provides essential service discovery for payment integration</li>
              <li>Supports payment method negotiation between client and provider</li>
              <li>Facilitates proper currency unit handling and conversion</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* X-Cashu Header Specification */}
      <Card>
        <CardHeader>
          <CardTitle>X-Cashu Header Specification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Request Headers:</h4>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p>
                <code className="text-sm">X-Cashu: &lt;cashu_token&gt;</code>
              </p>
              <p className="text-xs text-muted-foreground">
                Contains the Cashu note(s) for payment. Format depends on the chosen protocol.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Response Headers:</h4>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p>
                <code className="text-sm">X-Cashu: &lt;change_token&gt;</code>
              </p>
              <p className="text-xs text-muted-foreground">
                Contains change notes when payment exceeds actual usage cost.
              </p>
            </div>
          </div>

          <Alert>
            <AlertDescription>
              <strong>Note:</strong> The X-Cashu header must be handled securely to prevent replay attacks and ensure
              proper note redemption.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Model & Pricing Discovery */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Model & Pricing Discovery
            <Badge variant="destructive">REQUIRED</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            To enable wallet-aware clients to estimate and optimize payment, every provider MUST implement a discovery
            endpoint:
          </p>

          <div className="space-y-2">
            <p>
              <strong>Endpoint:</strong> <code className="bg-muted px-2 py-1 rounded">GET /v1/models</code>
            </p>
            <p>
              <strong>Description:</strong> Returns a list of supported models with detailed pricing information,
              architecture specifications, and provider capabilities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Example Response:</h4>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`{
   "models": [
     {
       "id": "thudm/glm-4.1v-9b-thinking",
       "canonical_slug": "thudm/glm-4.1v-9b-thinking",
       "hugging_face_id": "THUDM/GLM-4.1V-9B-Thinking",
       "name": "THUDM: GLM 4.1V 9B Thinking",
       "created": 1752244385,
       "description": "GLM-4.1V-9B-Thinking is a 9B parameter vision-language model developed by THUDM",
       "context_length": 65536,
       "architecture": {
         "modality": "text+image-&gt;text",
         "input_modalities": [
           "image",
           "text"
         ],
         "output_modalities": [
           "text"
         ],
         "tokenizer": "Other",
         "instruct_type": null
       },
       "pricing": {
         "prompt": "0.000000035",
         "completion": "0.000000138",
         "request": "0",
         "image": "0",
         "web_search": "0",
         "internal_reasoning": "0"
       },
       "pricing_sats": {
         "prompt": "1",
         "completion": "1",
         "request": "0",
         "image": "0",
         "web_search": "0",
         "internal_reasoning": "0",
         "max_cost": "7",
       },
       "top_provider": {
         "context_length": 65536,
         "max_completion_tokens": 8000,
         "is_moderated": false
       },
       "per_request_limits": null,
       "supported_parameters": [
         "max_tokens",
         "temperature",
         "top_p",
         "reasoning",
         "include_reasoning",
         "stop",
         "frequency_penalty",
         "presence_penalty",
         "seed",
         "top_k",
         "min_p",
         "repetition_penalty",
         "logit_bias"
       ]
     }
   ]
 }`}
              </pre>
            </div>
          </div>

          <Collapsible open={isFieldDescriptionsOpen} onOpenChange={setIsFieldDescriptionsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="font-semibold">Field Descriptions</span>
                {isFieldDescriptionsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="space-y-4">
                {/* Basic Information */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Basic Information</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>id</code>
                      <span>string</span>
                      <span>Unique identifier for the model</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>canonical_slug</code>
                      <span>string</span>
                      <span>Canonical URL-friendly model identifier</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>hugging_face_id</code>
                      <span>string</span>
                      <span>Hugging Face model repository identifier</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>name</code>
                      <span>string</span>
                      <span>Human-readable model name</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>created</code>
                      <span>integer</span>
                      <span>Unix timestamp of model creation</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>description</code>
                      <span>string</span>
                      <span>Detailed model description and capabilities</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>context_length</code>
                      <span>integer</span>
                      <span>Maximum context window size in tokens</span>
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Architecture</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>modality</code>
                      <span>string</span>
                      <span>Input/output modality format (e.g., "text+image-&gt;text")</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>input_modalities</code>
                      <span>array</span>
                      <span>List of supported input types (text, image, audio, etc.)</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>output_modalities</code>
                      <span>array</span>
                      <span>List of supported output types</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>tokenizer</code>
                      <span>string</span>
                      <span>Tokenization method used by the model</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>instruct_type</code>
                      <span>string | null</span>
                      <span>Instruction tuning type, if applicable</span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Pricing (per token in USD)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>prompt</code>
                      <span>string</span>
                      <span>Cost per input token</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>completion</code>
                      <span>string</span>
                      <span>Cost per output token</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>request</code>
                      <span>string</span>
                      <span>Fixed cost per request</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>image</code>
                      <span>string</span>
                      <span>Cost per image processed</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>web_search</code>
                      <span>string</span>
                      <span>Cost per web search operation</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>internal_reasoning</code>
                      <span>string</span>
                      <span>Cost for internal reasoning tokens</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-sm mb-2">Pricing (per token in sats)</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>prompt</code>
                      <span>string</span>
                      <span>Cost per input token</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>completion</code>
                      <span>string</span>
                      <span>Cost per output token</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>request</code>
                      <span>string</span>
                      <span>Fixed cost per request</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>image</code>
                      <span>string</span>
                      <span>Cost per image processed</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>web_search</code>
                      <span>string</span>
                      <span>Cost per web search operation</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>internal_reasoning</code>
                      <span>string</span>
                      <span>Cost for internal reasoning tokens</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>min_cost</code>
                      <span>string</span>
                      <span>Min Cost per request</span>
                    </div>
                  </div>
                </div>

                {/* Provider Configuration */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Provider Configuration</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/50 rounded">
                      <span className="font-medium">Field</span>
                      <span className="font-medium">Type</span>
                      <span className="font-medium">Description</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>top_provider.context_length</code>
                      <span>integer</span>
                      <span>Provider-specific context limit</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>top_provider.max_completion_tokens</code>
                      <span>integer</span>
                      <span>Maximum tokens in completion</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>top_provider.is_moderated</code>
                      <span>boolean</span>
                      <span>Whether content moderation is enabled</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2 bg-muted/30">
                      <code>per_request_limits</code>
                      <span>object | null</span>
                      <span>Rate limiting configuration</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-2">
                      <code>supported_parameters</code>
                      <span>array</span>
                      <span>List of supported API parameters</span>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Alert>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1">
                <li>Clients MUST fetch this endpoint frequently to select models/calculate notes.</li>
                <li>If unsupported, clients should warn the user and fail gracefully.</li>
                <li>All pricing fields use string format for precise decimal handling.</li>
                <li>Architecture information enables clients to validate input compatibility.</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div>
            <h4 className="font-semibold mb-2">Benefits:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Clients can create notes with the exact amount based on detailed pricing</li>
              <li>Architecture information enables input validation and compatibility checking</li>
              <li>Comprehensive model metadata supports intelligent model selection</li>
              <li>Supports dynamic pricing and model availability changes</li>
              <li>Provider-specific configurations enable optimized client behavior</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
